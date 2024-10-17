import { render, screen } from '@testing-library/react';
import Page from '@/2023/activities/progra/page';
import data from '@/data/activities/progra.json';

describe("Progra page", () => {

  it("renders hero section correctly", () => {
    render(<Page />);
    const heroTitles = screen.getAllByText(data.hero.title, { exact: false });
    expect(heroTitles.length).toBeGreaterThan(0);
    const heroParagraphs = screen.getAllByText(data.hero.paragraph, { exact: false });
    expect(heroParagraphs.length).toBeGreaterThan(0);
    const heroButtons = screen.getAllByText(data.hero.buttonText, { exact: false });
    expect(heroButtons.length).toBeGreaterThan(0);
  });

  it("renders info cards correctly", () => {
    render(<Page />);
    data.infoCards.forEach(card => {
      const paragraphs = screen.getAllByText(card.paragraph, { exact: false });
      expect(paragraphs.length).toBeGreaterThan(0);
    });

    const infoCardIcons = screen.getAllByAltText(/icon/i).slice(0, data.infoCards.length);
    infoCardIcons.forEach((icon, index) => {
      expect(icon).toHaveAttribute('src', data.infoCards[index].icon);
    });
  });

  it("renders requirements correctly", () => {
    render(<Page />);
    data.requirements.forEach(requirement => {
      const paragraphs = screen.getAllByText(requirement.paragraph, { exact: false });
      expect(paragraphs.length).toBeGreaterThan(0);
    });

    const requirementIcons = screen.getAllByAltText(/icon/i).slice(data.infoCards.length);
    requirementIcons.forEach((icon, index) => {
      expect(icon).toHaveAttribute('src', data.requirements[index].icon);
    });
  });

  it("renders awards correctly", () => {
    render(<Page />);
    data.awards.forEach(award => {
      const leagues = screen.getAllByText(award.league, { exact: false });
      expect(leagues.length).toBeGreaterThan(0);
      const prizes = screen.getAllByText(award.prize, { exact: false });
      expect(prizes.length).toBeGreaterThan(0);
    });
  });

  it("renders quote correctly", () => {
    render(<Page />);
    const quotes = screen.getAllByText(data.quote.quote, { exact: false });
    expect(quotes.length).toBeGreaterThan(0);
    const authors = screen.getAllByText(data.quote.author, { exact: false });
    expect(authors.length).toBeGreaterThan(0);
  });
});
