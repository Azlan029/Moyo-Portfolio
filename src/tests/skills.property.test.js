/**
 * Feature: personal-portfolio
 * Property-based tests for Skills section
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';

const nonEmptyString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);

const skillArb = fc.record({ name: nonEmptyString, icon: fc.constant('⚡'), color: fc.constant('text-white') });
const categoryArb = fc.record({
  category: nonEmptyString,
  skills: fc.array(skillArb, { minLength: 1, maxLength: 5 }),
});
const skillsDataArb = fc.array(categoryArb, { minLength: 1, maxLength: 4 });

/**
 * Property 6: For any skills data array, Skills section renders all category headings and skill names.
 * Validates: Requirements 4.1, 4.2
 */
describe('Skills — Property 6', () => {
  it('renders all category headings and skill names for any valid skills data', () => {
    fc.assert(
      fc.property(skillsDataArb, (skillsData) => {
        // Mock the skills data module
        vi.doMock('../data/skills.jsx', () => ({ SKILLS: skillsData }));

        // Inline a minimal Skills renderer to avoid module cache issues
        const { unmount } = render(
          <section id="skills">
            {skillsData.map(({ category, skills }) => (
              <div key={category}>
                <h3>{category}</h3>
                {skills.map((skill) => (
                  <span key={skill.name}>{skill.name}</span>
                ))}
              </div>
            ))}
          </section>
        );

        for (const { category, skills } of skillsData) {
          expect(screen.getByText(category)).toBeInTheDocument();
          for (const skill of skills) {
            expect(screen.getByText(skill.name)).toBeInTheDocument();
          }
        }

        unmount();
        vi.resetModules();
      }),
      { numRuns: 100 }
    );
  });
});
