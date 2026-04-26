# Tasks

## Task List

- [ ] 1. Project setup and data layer
  - [ ] 1.1 Install fast-check as a dev dependency for property-based testing
  - [ ] 1.2 Create `src/data/projects.js` with at least 2 sample Project objects matching the Project interface
  - [ ] 1.3 Create `src/data/skills.js` with at least 2 SkillCategory objects, each with a minimum of 3 skills
  - [ ] 1.4 Add `public/resume.pdf` placeholder file

- [ ] 2. Utility and hook layer
  - [ ] 2.1 Create `src/hooks/useActiveSection.js` using IntersectionObserver to return the id of the currently visible section
  - [ ] 2.2 Create `src/hooks/useContactForm.js` with field state, validation logic, EmailJS submission, and status management
  - [ ] 2.3 Extract and export a pure `validateContactForm(fields)` function from `useContactForm.js` for isolated testing

- [x] 3. Navbar component
  - [x] 3.1 Rewrite `src/components/nav.jsx` (rename to `Navbar.jsx`) with links to all five sections using `react-scroll`
  - [x] 3.2 Apply active-section highlight using `useActiveSection` hook
  - [x] 3.3 Implement hamburger menu toggle for viewports narrower than 768px

- [x] 4. Hero section
  - [x] 4.1 Create `src/components/Hero.jsx` displaying owner name, title, tagline, and profile image
  - [x] 4.2 Add CTA button that scrolls to the Projects section using `react-scroll`
  - [x] 4.3 Apply `min-h-screen` so the section occupies the full initial viewport height

- [x] 5. About section
  - [x] 5.1 Create `src/components/About.jsx` with professional summary and career highlights
  - [x] 5.2 Add resume download anchor pointing to `/resume.pdf` with the `download` attribute

- [x] 6. Skills section
  - [x] 6.1 Create `src/components/SkillCard.jsx` rendering a skill name and icon
  - [x] 6.2 Create `src/components/Skills.jsx` that reads from `src/data/skills.js` and renders grouped SkillCards

- [x] 7. Projects section
  - [x] 7.1 Create `src/components/ProjectCard.jsx` rendering title, description, stack, thumbnail, and conditional links
  - [x] 7.2 Ensure live project link is hidden when `liveUrl` is absent
  - [x] 7.3 Ensure both live and repo links open in a new tab (`target="_blank" rel="noopener noreferrer"`)
  - [x] 7.4 Create `src/components/Projects.jsx` that reads from `src/data/projects.js` and renders a grid of ProjectCards

- [x] 8. Contact section
  - [x] 8.1 Create `src/components/ContactForm.jsx` with name, email, and message fields wired to `useContactForm`
  - [x] 8.2 Display per-field validation error messages for empty fields and invalid email
  - [x] 8.3 Show success confirmation and reset form fields after successful EmailJS send
  - [x] 8.4 Create `src/components/Contact.jsx` composing ContactForm and social media links

- [-] 9. App layout and responsive design
  - [x] 9.1 Update `src/App.jsx` to render Navbar and all five section components in order
  - [ ] 9.2 Apply Tailwind responsive classes so multi-column layouts collapse to single-column below 768px
  - [ ] 9.3 Ensure no horizontal overflow at any supported viewport width

- [-] 10. Accessibility
  - [ ] 10.1 Add descriptive `alt` text to all `<img>` elements
  - [ ] 10.2 Ensure all interactive elements (buttons, links, form fields) are keyboard-focusable and have visible focus styles

- [-] 11. Property-based tests
  - [ ] 11.1 Write property test for Property 1: validateContactForm returns errors for any empty/whitespace required fields
  - [ ] 11.2 Write property test for Property 2: email validator returns an error for any non-email string
  - [ ] 11.3 Write property test for Property 3: validateContactForm returns no errors for any fully valid input
  - [ ] 11.4 Write property test for Property 4: ProjectCard renders no live link for any project without liveUrl
  - [ ] 11.5 Write property test for Property 5: ProjectCard renders title, description, and all stack items for any valid project
  - [ ] 11.6 Write property test for Property 6: Skills section renders all category headings and skill names for any skills data
  - [ ] 11.7 Write property test for Property 7: all data-driven img elements have non-empty alt text

- [-] 12. Unit and example tests
  - [ ] 12.1 Write example test: Navbar renders links to all five sections
  - [ ] 12.2 Write example test: hamburger menu toggles section links on click
  - [ ] 12.3 Write example test: ContactForm shows success message and resets fields after successful send (mocked EmailJS)
  - [ ] 12.4 Write example test: resume download anchor has correct href and download attribute
