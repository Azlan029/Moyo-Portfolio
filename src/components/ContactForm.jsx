import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const EMPTY_FIELDS = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }
    // Mock successful submit
    setStatus('success');
    setFields(EMPTY_FIELDS);
    setErrors({});
  }

  const inputBase =
    'w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 ' +
    'placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ' +
    'focus:border-transparent transition-colors duration-200';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={fields.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputBase}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputBase}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          rows={5}
          className={`${inputBase} resize-none`}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Success message */}
      {status === 'success' && (
        <p className="text-green-400 text-sm font-medium" role="status">
          Message sent! I&apos;ll get back to you soon.
        </p>
      )}

      <button
        type="submit"
        className="self-start cursor-pointer bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      >
        Send Message
      </button>
    </form>
  );
}
