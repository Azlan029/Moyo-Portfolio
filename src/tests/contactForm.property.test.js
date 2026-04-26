/**
 * Feature: personal-portfolio
 * Property-based tests for contact form validation
 */
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { validateContactForm } from '../utils/validateContactForm';

// Arbitrary for whitespace-only strings (empty or spaces/tabs/newlines)
const whitespaceOnly = fc.stringOf(fc.constantFrom(' ', '\t', '\n', '\r'));

describe('Contact Form Validation — Property Tests', () => {
  /**
   * Property 1: For any combo where name/email/message is empty or whitespace-only,
   * validateContactForm returns errors for those fields.
   * Validates: Requirements 6.3
   */
  it('Property 1: returns errors for any empty/whitespace required fields', () => {
    fc.assert(
      fc.property(
        whitespaceOnly,
        whitespaceOnly,
        whitespaceOnly,
        (name, email, message) => {
          const errors = validateContactForm({ name, email, message });
          expect(errors.name).toBeDefined();
          expect(errors.email).toBeDefined();
          expect(errors.message).toBeDefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 2: For any non-email string (no @, missing domain, etc.),
   * email validator returns error.
   * Validates: Requirements 6.4
   */
  it('Property 2: returns email error for any non-email string', () => {
    // Strings that don't contain '@' are definitely not valid emails
    const nonEmailArb = fc.string({ minLength: 1 }).filter(
      (s) => !s.includes('@') && s.trim().length > 0
    );
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        nonEmailArb,
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (name, email, message) => {
          const errors = validateContactForm({ name, email, message });
          expect(errors.email).toBeDefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 3: For any fully valid input (non-empty name, valid email, non-empty message),
   * validateContactForm returns no errors.
   * Validates: Requirements 6.2, 6.3, 6.4
   */
  it('Property 3: returns no errors for any fully valid input', () => {
    const nonEmptyString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0);
    fc.assert(
      fc.property(
        nonEmptyString,
        fc.emailAddress(),
        nonEmptyString,
        (name, email, message) => {
          const errors = validateContactForm({ name, email, message });
          expect(Object.keys(errors)).toHaveLength(0);
        }
      ),
      { numRuns: 100 }
    );
  });
});
