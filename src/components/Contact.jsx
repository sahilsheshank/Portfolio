import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from "../constants"
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const contactRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_wjtcn29',
            'template_st8532q',
            formData,
            '1mCAewSVsefRDvqxT'
        ).then(() => {
            setSent(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSent(false), 4000);
        }).catch((error) => {
            console.error('Error sending feedback:', error);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div ref={contactRef} id="contact" className='border-b border-neutral-900 pb-20'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>
                Get in <span className="text-neutral-500">Touch</span>
            </motion.h1>

            <div className='flex flex-col lg:flex-row justify-center items-start gap-12 max-w-4xl mx-auto px-4'>

                {/* Contact info */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-5/12 space-y-4"
                >
                    <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>

                    <div className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                        <div className="w-9 h-9 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MdLocationOn className="text-purple-400 text-lg" />
                        </div>
                        <div>
                            <p className="text-neutral-500 text-xs mb-1">Location</p>
                            <p className="text-neutral-200 text-sm">{CONTACT.address}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                        <div className="w-9 h-9 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MdPhone className="text-purple-400 text-lg" />
                        </div>
                        <div>
                            <p className="text-neutral-500 text-xs mb-1">Phone</p>
                            <p className="text-neutral-200 text-sm">{CONTACT.phoneNo}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                        <div className="w-9 h-9 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MdEmail className="text-purple-400 text-lg" />
                        </div>
                        <div>
                            <p className="text-neutral-500 text-xs mb-1">Email</p>
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                            >
                                {CONTACT.email}
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-7/12"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-neutral-400 text-xs mb-1.5">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Sahil Sheshank"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-neutral-900 border border-neutral-700 text-neutral-200 placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/60 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-neutral-400 text-xs mb-1.5">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-neutral-900 border border-neutral-700 text-neutral-200 placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/60 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-neutral-400 text-xs mb-1.5">Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project or opportunity..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full bg-neutral-900 border border-neutral-700 text-neutral-200 placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/60 transition-colors resize-none"
                            />
                        </div>

                        {sent && (
                            <p className="text-green-400 text-sm text-center bg-green-500/10 border border-green-500/20 rounded-xl py-2">
                                ✓ Message sent successfully!
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
