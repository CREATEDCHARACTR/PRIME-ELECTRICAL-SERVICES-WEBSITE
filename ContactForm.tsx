import React, { useState } from 'react';
import { SERVICES } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setStatus('submitting');

    try {
      // In a real application, you would fetch your backend API endpoint.
      // e.g., const response = await fetch('/api/contact', { ... });
      // We are simulating the network request with a Promise and setTimeout.
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful response from the server
          console.log('Simulating successful API call with data:', formData);
          
          // To test the error state, you could uncomment the following line:
          // reject(new Error('Failed to send message.'));

          resolve({ ok: true });
        }, 1500); // Simulate 1.5 seconds of network latency
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full bg-prime-dark border-gray-600 rounded-md shadow-sm focus:ring-prime-gold focus:border-prime-gold sm:text-sm p-3"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full bg-prime-dark border-gray-600 rounded-md shadow-sm focus:ring-prime-gold focus:border-prime-gold sm:text-sm p-3"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full bg-prime-dark border-gray-600 rounded-md shadow-sm focus:ring-prime-gold focus:border-prime-gold sm:text-sm p-3"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300">Service of Interest</label>
          <select
            name="service"
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full bg-prime-dark border-gray-600 rounded-md shadow-sm focus:ring-prime-gold focus:border-prime-gold sm:text-sm p-3"
            required
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>Select a service...</option>
            {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            <option value="Other">Other/Not Sure</option>
          </select>
          {errors.service && <p id="service-error" className="mt-1 text-sm text-red-500">{errors.service}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full bg-prime-dark border-gray-600 rounded-md shadow-sm focus:ring-prime-gold focus:border-prime-gold sm:text-sm p-3"
            placeholder="Please describe your project and preferred appointment time."
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          ></textarea>
          {errors.message && <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-prime-gold text-prime-dark font-bold py-3 px-6 rounded-md text-lg hover:bg-yellow-300 transition-all duration-300 shadow-md disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {status === 'success' && (
          <p role="alert" className="text-center text-green-400">Thank you! Your message has been sent successfully.</p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-center text-red-500">Something went wrong. Please try again later.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;