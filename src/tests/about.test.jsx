/**
 * Unit tests for About component
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {
  /**
   * 12.4: Resume download anchor has correct href="/resume.pdf" and download attribute
   */
  it('resume download anchor has correct href and download attribute', () => {
    render(<About />);
    const downloadLink = screen.getByRole('link', { name: /download.*resume/i });
    expect(downloadLink).toHaveAttribute('href', '/resume.pdf');
    expect(downloadLink).toHaveAttribute('download');
  });
});
