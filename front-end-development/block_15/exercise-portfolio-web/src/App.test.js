import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from './App';
// import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react';

describe('Testing Portfolio Web App', () => {
  it('Renders the Header with h1 and logo', () => {
    const { getByText, getByAltText, getByRole } = renderWithRouter(<App />)
    const header = getByRole('banner');
    expect(header).toHaveClass('App-header');
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
    const logo = getByAltText('rocket');
    expect(logo).toHaveClass('App-logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
    const title = getByText('My Personal Web Portfolio with React');
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
  });

  it("Renders a Nav with links to Home, Projects, About, Contact", () => {
    const { getByRole } = renderWithRouter(<App />);
    const navigator = getByRole('navigation');
    expect(navigator).toHaveClass('App-nav');
    expect(navigator).toBeInTheDocument();
    expect(navigator).toBeVisible();
    const homeLink = getByRole('link', { name: /home/i });
    expect(homeLink.href.endsWith('/')).toBeTruthy();
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toBeVisible();
    const projectsLink = getByRole('link', { name: /projects/i });
    expect(projectsLink.href.endsWith('/projects')).toBeTruthy();
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toBeVisible();
    const aboutLink = getByRole('link', { name: /about/i });
    expect(aboutLink.href.endsWith('/about')).toBeTruthy();
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toBeVisible();
    const contactLink = getByRole('link', { name: /contact/i });
    expect(contactLink.href.endsWith('/contact')).toBeTruthy();
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toBeVisible();
  });

  it('Renders the Home page when the page is loaded', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeSection = getByText('Home section');
    expect(homeSection).toHaveClass('App-home');
    expect(homeSection).toContainHTML('Home section');
    expect(homeSection).toBeInTheDocument();
    expect(homeSection).toBeVisible();
  });
  
  it('Renders the Projects section when clicked on link Projects', () => {
    const { getByText, getByRole, history } = renderWithRouter(<App />);
    const projectsLink = getByRole('link', { name: /projects/i });
    fireEvent.click(projectsLink);
    const projectsPathname = history.location.pathname;
    expect(projectsPathname).toBe('/projects');
    const projectsSection = getByText('Projects section');
    expect(projectsSection).toHaveClass('App-projects');
    expect(projectsSection).toBeInTheDocument();
    expect(projectsSection).toBeVisible();
  });

  it('Renders the About section when clicked on link About', () => {
    const { getByText, getByRole, history } = renderWithRouter(<App />);
    const aboutLink = getByRole('link', { name: /about/i });
    fireEvent.click(aboutLink);
    const aboutPathname = history.location.pathname;
    expect(aboutPathname).toBe('/about');
    const abouttSection = getByText('About section');
    expect(abouttSection).toHaveClass('App-about');
    expect(abouttSection).toBeInTheDocument();
    expect(abouttSection).toBeVisible();
  });

  it('Renders the Contact section when clicked on link Contact', () => {
    const { getByText, getByRole, history } = renderWithRouter(<App />);
    const contactLink = getByRole('link', { name: /contact/i });
    fireEvent.click(contactLink);
    const contactPathname = history.location.pathname;
    expect(contactPathname).toBe('/contact');
    const contacttSection = getByText('Contact section');
    expect(contacttSection).toHaveClass('App-contact');
    expect(contacttSection).toBeInTheDocument();
    expect(contacttSection).toBeVisible();
  });
});
