import { useState, useEffect } from 'react';

/**
 * Uses IntersectionObserver to track which section is currently most visible
 * in the viewport and returns its id.
 *
 * @param {string[]} sectionIds - Array of section element ids to observe
 * @param {object}  options     - IntersectionObserver options (optional)
 * @returns {string} id of the currently active section
 */
export function useActiveSection(
  sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'],
  options = { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
}

export default useActiveSection;
