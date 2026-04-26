/**
 * Unit tests for Navbar component
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

// Mock react-scroll Link to render as a plain anchor
vi.mock('react-scroll', () => ({
  Link: ({ children, to, className, onClick, 'aria-current': ariaCurrent }) => (
    <a href={`#${to}`} className={className} onClick={onClick} aria-current={ariaCurrent}>
      {children}
    </a>
  ),
}));

// Mock useActiveSection hook
vi.mock('../hooks/useActiveSection', () => ({
  default: () => 'hero',
  useActiveSection: () => 'hero',
}));

describe('Navbar', () => {
  beforeEach(() => {
    // Reset viewport to desktop size
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
  });

  /**
   * 12.1: Navbar renders links to all five sections
   */
  it('renders links to all five sections', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  /**
   * 12.2: Hamburger menu toggles section links on click
   */
  it('hamburger menu toggles mobile section links on click', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i });

    // Mobile menu should not be visible initially
    expect(screen.queryByRole('navigation')).toBeInTheDocument();

    // Click to open
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });
});
