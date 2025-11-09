$(document).ready(function () {
    if (document.getElementById("speakers-container")){
        fillSpeakers(speakers);
    }

    if (document.getElementById("aliados-container") || document.getElementById("sponsors-container")){
        fillAliados(aliados_sponsors);
    }

    if (document.getElementById("agenda-container")) {
        const agenda = formatearActividades(speakers)
        fillAgenda(agenda);
    }

    if (document.getElementById("talleres-container")) {
        fillEventos(speakers, "talleres");        
    }

    if (document.getElementById("charlas-container")) {
        fillEventos(speakers, "charlas");        
    }

    if (document.getElementById("calendar")) {
        const agenda = formatearActividades(speakers)
        calendar(agenda);
    }



    const sections = document.querySelectorAll("section"); // Asume que tus secciones son <section>
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        let sectionsCurrent = [];

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3 && !section.classList.contains("d-none")) {
                currentSection = section.getAttribute("id");
            } 
        });
        navLinks.forEach((link) => {
            $(link).removeClass('link-active')
            if ((link.getAttribute("href")) === "#"+currentSection) {
                $(link).addClass("link-active");
            }
        });
    });

    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvasLinks = document.querySelectorAll('.offcanvas-body .nav-link');

    offcanvasLinks.forEach(link => {
        if (link.getAttribute("id") !== "actividades-link") {
            link.addEventListener('click', function () {
                const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
                offcanvas.hide();
            });
        }
    });
});

function fillSpeakers(speakers) {
    let cont = 0;

    speakers.forEach(function (speaker) {
        const events = [...speaker.talleres, ...speaker.charlas];
        const today = new Date();
        let visible = false;

        // Verifica si ya debe mostrarse (por fecha)
        for (let i = 0; i < events.length; i++) {
            const date = new Date(events[i].publicacion);
            if (date <= today) {
                visible = true;
                break;
            }
        }

        if (visible) {
            cont++;

            // 🔄 alternar animación: impar -> left, par -> right
            const animationClass = cont % 2 === 1 ? "fade-in-left" : "fade-in-right";

            $("#speakers-container").append(`
                <div class="col-sm-12 col-md-6 p-3 p-md-5 ${animationClass}">
                    <div class="p-2 h-100 d-flex flex-column">
                        <img src="./img/speakers/${formatSpeakerName(speaker.nombres, speaker.apellidos)}" 
                             width="100dvw" alt="user" 
                             class="m-auto">
                        <h5 style="font-size: 25px;" 
                            class="my-3 text-main fw-bold d-flex align-items-center justify-content-center gap-2">
                            ${speaker.nombres} ${speaker.apellidos}
                            <img width="30" height="30" 
                                 src="https://img.icons8.com/color/48/${speaker.pais}.png" 
                                 alt="${speaker.pais}-emoji"/>
                        </h5>
                        <p style="font-size: 18px;" 
                           class="text-negro text-center my-3 flex-grow-1">
                           ${speaker.perfil}
                        </p>
                        <div class="d-flex justify-content-center align-items-center gap-1">
                            ${Object.keys(speaker.social_media).map(social => {
                                return `
                                    <a class="text-decoration-none" target="_blank" href="${speaker.social_media[social]}">
                                        <div class="social-media media-speaker bg-main text-white fs-6">
                                            <i class="fa-brands fa-${social}"></i>
                                        </div>
                                    </a>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `);
        }
    });

    // Mostrar / ocultar sección de speakers
    if (cont === 0) {
        $('#speakers, .speakers-link').addClass('d-none');
    } else {
        $('#speakers, .speakers-link').removeClass('d-none');
    }

    // === 👇 IntersectionObserver para animaciones continuas ===
    const elements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right, .pop-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");   // entra → aparece
          } else {
            entry.target.classList.remove("visible"); // sale → desaparece
          }
        });
      },
      { threshold: 0.3 } // 30% visible para activar
    );

    elements.forEach((el) => observer.observe(el));
}



function fillAliados(aliados_sponsors) {
    let contA = 0;
    let contS = 0;
    let total = 0; // contador total para alternar

    aliados_sponsors.forEach(element => {
        if (element.visible) {
            total++; // se incrementa por cada visible (aliado o sponsor)

            // 🔄 alternar animación: impar -> left, par -> right
            const animationClass = total % 2 === 1 ? "pop-in" : "pop-in";

            $(`#${element.type}s-container`).append(`
                <div class="col-sm-12 col-md-6 col-lg-4 p-2 py-md-5 px-md-2 ${animationClass}">
                    <a class="text-center px-2 py-4 bg-white h-100 d-flex flex-column"
                       style="text-decoration: none;"
                       href="${element.link}" target="_blank">
                        <h5 class="text-white d-flex justify-content-center align-items-center gap-2 fs-4 fw-bold text-nowrap flex-grow-1">
                            <img src="./img/${element.type}s/${sneakString(element.nombre.toLowerCase())}.png" height="250"/>
                        </h5>
                        <p class="text-negro py-2 mx-1 mx-lg-5 text-center" style="font-size: 18px;">
                            ${element.slogan}
                        </p>
                    </a>
                </div>
            `);

            if (element.type === 'aliado') contA++;
            else contS++;
        }
    });

    // === Mostrar / ocultar secciones ===
    if (contA + contS === 0) {
        $('#aliados, .aliados-link').addClass('d-none');
    } else {
        $('#aliados, .aliados-link').removeClass('d-none');
        $('#aliados-cont').toggleClass('d-none', contA === 0);
        $('#sponsors-cont').toggleClass('d-none', contS === 0);
    }

    // === 👇 IntersectionObserver para animaciones continuas ===
    const elements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right, .pop-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");   // entra → aparece
          } else {
            entry.target.classList.remove("visible"); // sale → desaparece
          }
        });
      },
      { threshold: 0.3 } // 30% visible para activar
    );

    elements.forEach((el) => observer.observe(el));
}


function fillAgenda(agenda) {
    agenda.forEach((element, index) => {
        // alternar animación por bloque
        const animationClass = index % 2 === 0 ? "fade-in-left" : "fade-in-right";

        $("#agenda-container").append(`
            <div class="container-fluid agenda p-3 ${animationClass}">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-3 p-2">
                        <div class="text-center h-100 day-agenda d-flex flex-column justify-content-center align-items-center">
                            <p class="fw-bold" style="font-size: 60px;">${element.dia}</p>
                            <p class="bg-main text-white fw-bold px-3" style="font-size: 30px;">Nov</p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-9 p-2 px-xl-3 container-fluid">
                        ${element.actividades.map((actividad, i) => {
                            return `
                                <div class="row">
                                    <div class="col-sm-12 col-xl-3 gap-2 py-1 fw-bold fs-5 position-relative" style="font-size: 20px;">
                                        ${i == 1 ? `<div class="position-absolute top-0 bg-main" style="width: 40px; height: 10px; transform: translateY(-100%);"></div>` : ''}
                                        <i class="fa-solid fa-clock"></i>
                                        ${actividad.inicio} - ${actividad.fin}
                                    </div>
                                    <div class="col-sm-12 col-xl-9" style="font-size: 20px;">
                                        <p class="fw-bold">
                                            ${actividad.nombre} por 
                                            <span class="text-orange">${actividad.exp.nombres} ${actividad.exp.apellidos}</span>
                                        </p>
                                        <p class="text-negro">${actividad.detalles}</p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `);

        // Agregar separador entre días
        if (index != agenda.length - 1) {
            $("#agenda-container").append(`
                <div class="container-fluid">
                    <div class="square bg-main m-auto" style="width: 40px; height: 40px;"></div>
                </div>
            `);
        }
    });

    // === 👇 IntersectionObserver para animaciones continuas ===
    const elements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right, .pop-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");   // entra → aparece
          } else {
            entry.target.classList.remove("visible"); // sale → desaparece
          }
        });
      },
      { threshold: 0.3 } // 30% visible para activar
    );

    elements.forEach((el) => observer.observe(el));
}


function fillEventos(speakers, event) {
    const fechas = formatearActividades(speakers, event);
    fechas.forEach((fecha) => {
        fecha.actividades.forEach((evento, index)=>{
            $(`#${event}-container`).append(`
                <div class="row agenda p-3 py-md-4 mb-3 mb-md-5" id="${sneakString(evento.nombre)}">
                    <div class="col-sm-12 col-md-6 py-3 py-md-0 px-md-4 day-agenda">
                        <img src="./img/speakers/${formatSpeakerName(evento.exp.nombres, evento.exp.apellidos)}" width=150 alt="user" class="img-fluid rounded-circle d-block m-auto">                            
                        <h5 class="my-3 text-main fw-bold d-flex align-items-center justify-content-center gap-2">
                            ${evento.exp.nombres} ${evento.exp.apellidos}
                            <img width="30" height="30" src="https://img.icons8.com/color/48/${evento.exp.pais}.png" alt="${evento.exp.pais}-emoji"/>
                        </h5>
                        <p class="text-negro text-center my-3">${evento.exp.perfil}</p>
                        <div class="d-flex justify-content-center align-items-center gap-1">
                            ${Object.keys(evento.exp.social_media).map(social => {
                                return `<a class="text-decoration-none" target="_blank" href="${evento.exp.social_media[social]}">
                                    <div class="social-media media-speaker bg-main text-white fs-6">
                                        <i class="fa-brands fa-${social}"></i>
                                    </div>
                                </a>`
                            }).toString().replace(/,/g, '')}
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 py-3 py-md-0 px-md-4 d-flex flex-column align-items-start">
                        <h5 class="text-main fw-bold mb-4">${evento.nombre}</h5>
                        <p class="mb-4 text-negro">${evento.detalles}</p>
                        <div class="text-main flex-grow-1">
                            <div class="d-flex gap-2 align-items-center">
                                <i class="fa-solid fa-calendar"></i>
                                ${fecha.dia}/11
                            </div>
                            <div class="d-flex gap-2 align-items-center">
                                <i class="fa-solid fa-clock"></i>
                                ${evento.inicio} - ${evento.fin}
                            </div>
                            <div class="d-flex gap-2 align-items-center">
                                <i class="fa-solid fa-location-dot"></i>
                                ${evento.lugar}
                            </div>
                        </div>
                    </div>
                </div>    
            `);
        })
    })

}

function formatSpeakerName(name, surname) {
    return name.toLowerCase().replaceAll(' ', '_') + "_" + surname.replaceAll(' ', '_').toLowerCase() + ".png"
}

function sneakString(str) {
    return str.toLowerCase().replaceAll(' ', '_')
}

const formatearActividades = (expositores, evento=null) => {
    const actividadesPorDia = {};
    var cont = 0;

    // Recorremos todos los expositores
    expositores.forEach((expositor) => {
        // Recorremos las actividades (talleres y charlas)
        let actividades;
        if (!evento) {
            actividades = [...expositor.talleres, ...expositor.charlas];
            cont++;
        } else {
            actividades = [...expositor[evento]];
            if (expositor[evento].length !== 0) {
                cont++;
            }
        }

        actividades.forEach((actividad) => {
            if (new Date(actividad.publicacion) <= new Date()) {
                const { dia, inicio, fin, nombre, detalles, lugar, link } = actividad;
                const tipo = expositor.talleres.includes(actividad) ? "workshops" : "keynotes";
    
                // Si el día no existe en el objeto, lo creamos
                if (!actividadesPorDia[dia]) {
                    actividadesPorDia[dia] = [];
                }
                const exp = {
                    nombres: expositor.nombres,
                    apellidos: expositor.apellidos,
                    perfil: expositor.perfil,
                    social_media: expositor.social_media,
                    pais: expositor.pais,
                }
                // Añadimos la actividad al día correspondiente
                actividadesPorDia[dia].push({ inicio, fin, nombre, detalles, lugar, link, tipo, exp });
            }
        });
        
    });
    if (cont === 0 && evento==null) {
        $("#agenda, .agenda-link").addClass("d-none");
        return [];
    } else {
        if (cont==0) {
            $(`#${evento}-cont`).addClass("d-none")
        } else {
            $(`#${evento}-cont`).removeClass("d-none")
        }
    }
    $("#agenda").removeClass("d-none");

    // Creamos el arreglo final
    const resultado = Object.keys(actividadesPorDia)
        .sort() // Ordenamos los días
        .map((dia) => {
            // Ordenamos las actividades por hora de inicio
            const actividadesOrdenadas = actividadesPorDia[dia].sort(
                (a, b) => a.inicio.localeCompare(b.inicio)
            );

            return {
                dia,
                actividades: actividadesOrdenadas,
            };
        });
    return resultado;
};

const formatearEventos = (actividadesPorDia, anio='2025', mes='11') => {
    // para el calendario
    const eventos = [...eventos_programados]

    actividadesPorDia.forEach((diaObj) => {
        const dia = diaObj.dia;
        diaObj.actividades.forEach((actividad) => {
            const { nombre, inicio, fin, exp, tipo } = actividad;            

            eventos.push({
                title: nombre,
                start: `${anio}-${mes}-${dia}T${inicio}:00`,
                end: `${anio}-${mes}-${dia}T${fin}:00`,
                extendedProps: {
                    description: `<a class="link-horario" href="/${tipo}"><b>${nombre}<b> por <b>${exp.nombres} ${exp.apellidos}<b>. </br> ${inicio} - ${fin}</a>`,
                },
            });
        });
    });


    return eventos;
};

function calendar(eventos) {
  var elementCalendar = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(elementCalendar, {
    locale: 'es',
    initialView: 'timeGridWeek',
    initialDate: '2025-11-10',
    slotDuration: '00:30:00',
    headerToolbar: {
      left: '',
      center: 'title',
      right: ''
    },
    validRange: {
      start: '2025-11-09',
      end: '2025-11-23'
    },
    slotMinTime: '08:00:00',
    slotMaxTime: '23:59:59',
    allDaySlot: false,
    dayHeaderFormat: { 
      weekday: 'long',
      day: '2-digit'
    },
    titleFormat: { 
      year: 'numeric',
      month: 'long'
    },
    eventContent: function(info) {
      return { 
        html: `<div class="text-ellipsis">${info.event.extendedProps.description}</div>`
      };
    },
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    events: formatearEventos(eventos),

    // 👇 ESTA LÍNEA ES LA CLAVE
    datesSet: function() {
      coloresCalendar(); // vuelve a aplicar tus colores después de cambiar de semana
    }
  });

  calendar.render();
  coloresCalendar();

  // 👇 Botones de navegación
  document.getElementById('btnNext').addEventListener('click', function() {
    calendar.next();
  });

  document.getElementById('btnPrev').addEventListener('click', function() {
    calendar.prev();
  });
}



function coloresCalendar() {
    $(".fc-v-event").each(function (index) {
        var nieto = $(this).children().children().children('.link-horario'); // Hijo de hijo con clase 'x'

        if (nieto.length > 0) {  // Verificamos que el nieto exista
            // Obtenemos el valor del atributo que te interesa (por ejemplo, 'data-valor')
            var valor = nieto.attr('href');
            
            // Dependiendo del valor del atributo, agregamos una clase al abuelo
            if (valor.includes("keynotes")) {
                $(this).addClass('bg-yellow'); // Agrega clase al abuelo
            } else if (valor.includes("workshops")) {
                $(this).addClass('bg-orange'); // Agrega clase al abuelo
            } else if (valor.includes("hackathon")) {
                $(this).addClass('bg-main'); // Agrega clase al abuelo
            } else if (valor.includes("programacion-competitiva")) {
                $(this).addClass('bg-sky'); // Agrega clase al abuelo
            }
        }
    })
}