import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle, 
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Set submitted state for frontend preview
    setSubmitted(true);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hello Aftab,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-beige border border-portfolio-sand text-portfolio-primary text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portfolio-dark tracking-tight">
            Let's Connect & <span className="text-portfolio-primary">Collaborate</span>
          </h2>
          <p className="mt-3 text-portfolio-muted text-sm sm:text-base">
            Feel free to reach out for software projects, internship opportunities, or academic discussions.
          </p>
          <div className="w-16 h-1 bg-portfolio-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-portfolio-sand shadow-sm space-y-6">
              <h3 className="text-xl font-heading font-bold text-portfolio-dark">
                Contact Information
              </h3>
              <p className="text-portfolio-muted text-xs sm:text-sm">
                Have an inquiry or project opportunity? Reach me directly via email or mobile:
              </p>

              <div className="space-y-4">
                
                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-portfolio-surface border border-portfolio-sand flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-portfolio-beige text-portfolio-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-portfolio-secondary block">
                        Phone / WhatsApp
                      </span>
                      <a 
                        href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`} 
                        className="text-sm font-bold text-portfolio-dark hover:text-portfolio-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-white hover:bg-portfolio-beige text-portfolio-dark border border-portfolio-sand text-xs transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-portfolio-surface border border-portfolio-sand flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-portfolio-beige text-portfolio-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] uppercase font-bold text-portfolio-secondary block">
                        Email Address
                      </span>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-xs sm:text-sm font-bold text-portfolio-dark hover:text-portfolio-primary transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-white hover:bg-portfolio-beige text-portfolio-dark border border-portfolio-sand text-xs transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-portfolio-surface border border-portfolio-sand flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-portfolio-beige text-portfolio-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-portfolio-secondary block">
                      Residential Location
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-portfolio-dark">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-portfolio-sand">
                <div className="text-xs font-bold uppercase tracking-wider text-portfolio-secondary mb-3">
                  Developer Profiles
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-portfolio-surface border border-portfolio-sand hover:bg-portfolio-beige text-portfolio-dark text-xs font-bold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-portfolio-surface border border-portfolio-sand hover:bg-portfolio-beige text-portfolio-dark text-xs font-bold transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <div className="text-[10px] text-portfolio-muted mt-2 text-center">
                  Official developer profiles on GitHub & LinkedIn
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form with Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-portfolio-sand shadow-sm relative">
              
              <h3 className="text-2xl font-heading font-bold text-portfolio-dark mb-2">
                Send a Message
              </h3>
              <p className="text-portfolio-muted text-xs sm:text-sm mb-6">
                Fill in the form below with your project details or inquiries.
              </p>

              {submitted ? (
                /* Honest Success State with Action */
                <div className="p-6 sm:p-8 rounded-2xl bg-portfolio-beige border-2 border-portfolio-sand text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-heading font-bold text-portfolio-dark">
                    Message Preview Staged!
                  </h4>

                  <p className="text-portfolio-dark/80 text-sm leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>! Your message has been validated. Since this is a client-side frontend portfolio without a live server, click below to send it directly through your email app to <strong>{personalInfo.email}</strong>.
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={openEmailClient}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-portfolio-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-portfolio-dark shadow-warm transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-3 rounded-xl bg-white border border-portfolio-sand text-xs font-bold text-portfolio-dark hover:bg-portfolio-surface transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-portfolio-dark mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ali Ahmed"
                        className={`w-full px-4 py-3 rounded-xl bg-portfolio-surface border text-sm text-portfolio-dark focus:outline-none focus:ring-2 transition-all ${
                          errors.name 
                            ? 'border-red-400 focus:ring-red-200' 
                            : 'border-portfolio-sand focus:border-portfolio-primary focus:ring-portfolio-primary/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-portfolio-dark mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ali@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-portfolio-surface border text-sm text-portfolio-dark focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-red-400 focus:ring-red-200' 
                            : 'border-portfolio-sand focus:border-portfolio-primary focus:ring-portfolio-primary/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-portfolio-dark mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Internship Opportunity / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-portfolio-surface border text-sm text-portfolio-dark focus:outline-none focus:ring-2 transition-all ${
                        errors.subject 
                          ? 'border-red-400 focus:ring-red-200' 
                          : 'border-portfolio-sand focus:border-portfolio-primary focus:ring-portfolio-primary/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-portfolio-dark mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Aftab, I reviewed your CV and portfolio and would like to connect regarding..."
                      className={`w-full px-4 py-3 rounded-xl bg-portfolio-surface border text-sm text-portfolio-dark focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message 
                          ? 'border-red-400 focus:ring-red-200' 
                          : 'border-portfolio-sand focus:border-portfolio-primary focus:ring-portfolio-primary/20'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-portfolio-primary text-white hover:bg-portfolio-dark shadow-warm hover:shadow-warm-lg transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                    <span className="block sm:inline-block sm:ml-4 mt-2 sm:mt-0 text-[11px] text-portfolio-muted">
                      Validated on client-side before sending.
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
