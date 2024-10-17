// jest.setup.ts (o el archivo donde configures Jest)

import '@testing-library/jest-dom';

// Mock IntersectionObserver
class IntersectionObserverMock {
  observe() {
    // Implementación mínima para evitar errores
  }

  unobserve() {
    // Implementación mínima para evitar errores
  }

  disconnect() {
    // Implementación mínima para evitar errores
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverMock,
});
