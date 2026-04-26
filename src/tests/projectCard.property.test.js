/**
 * Feature: personal-portfolio
 * Property-based tests for ProjectCard component
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import ProjectCard from '../components/ProjectCard';

const nonEmptyString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);
const nonEmptyArray = fc.array(nonEmptyString, { minLength: 1, maxLength: 5 });

const validProjectArb = fc.record({
  title: nonEmptyString,
  description: nonEmptyString,
  stack: nonEmptyArray,
  thumbnail: fc.constant('https://placehold.co/600x400'),
  repoUrl: fc.constant('https://github.com/test/repo'),
});

/**
 * Property 4: For any project without liveUrl, ProjectCard renders no live link.
 * Validates: Requirements 5.6
 */
describe('ProjectCard — Property 4', () => {
  it('renders no live link when liveUrl is absent', () => {
    fc.assert(
      fc.property(validProjectArb, (project) => {
        const { unmount } = render(<ProjectCard {...project} />);
        const liveLinks = screen.queryAllByRole('link', { name: /live demo/i });
        expect(liveLinks).toHaveLength(0);
        unmount();
      }),
      { numRuns: 100 }
    );
  });
});

/**
 * Property 5: For any valid project, ProjectCard renders title, description, and all stack items.
 * Validates: Requirements 5.2
 */
describe('ProjectCard — Property 5', () => {
  it('renders title, description, and all stack items for any valid project', () => {
    fc.assert(
      fc.property(validProjectArb, (project) => {
        const { unmount } = render(<ProjectCard {...project} />);
        expect(screen.getByText(project.title)).toBeInTheDocument();
        expect(screen.getByText(project.description)).toBeInTheDocument();
        for (const tech of project.stack) {
          expect(screen.getByText(tech)).toBeInTheDocument();
        }
        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
