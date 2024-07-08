import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import SliderSection from '@/components/Carrousel/organism/SliderSection';
import getData from '@/data/home/carrousel';


jest.mock('@/components/Carrousel/organism/SliderSection', () => jest.fn(() => <div data-testid="slider-section" />));
jest.mock('@/components/About/organism/AboutCardSection', () => jest.fn(() => <div data-testid="about-card-section" />));
jest.mock('@/components/About/organism/DottedLineSection', () => jest.fn(() => <div data-testid="dotted-line-section" />));
jest.mock('@/data/home/carrousel', () => jest.fn(() => [{ id: 1, title: "Slide 1" }]));

describe('HomePage', () => {
  it('renders home page with all sections', () => {
    render(<HomePage />);

    expect(screen.getByTestId('slider-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-card-section')).toBeInTheDocument();
    expect(screen.getByTestId('dotted-line-section')).toBeInTheDocument();
  });

  it('passes correct data to SliderSection', () => {
    const sliderData = getData();
    render(<HomePage />);
    expect(SliderSection).toHaveBeenCalledWith({ slides: sliderData }, {});
  });
});
