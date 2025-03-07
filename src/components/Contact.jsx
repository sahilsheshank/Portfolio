import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from "../constants"
import { motion } from 'framer-motion';
import { useRef } from 'react';
const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const contactRef=useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_wjtcn29',  // Replace with your EmailJS Service ID
            'template_st8532q',  // Replace with your EmailJS Template ID
            formData,
            '1mCAewSVsefRDvqxT'    // Replace with your EmailJS Public Key
        ).then(() => {
            alert('Feedback sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }).catch((error) => {
            console.error('Error sending feedback:', error);
        });
        setLoading(false);
    };

    return (
        <div  ref={contactRef} id="contact" className='border-b border-neutral-900 pb-20'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
            <div className='flex flex-col justify-center items-center my-10'>
                <div className='text-center w-1/2 tracking-tighter'>
                    <motion.p whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }} className='my-4'>{CONTACT.address}</motion.p>
                    <motion.p whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }} className='my-4'>{CONTACT.phoneNo}</motion.p>
                    <a href='mailto:sahil.sheshank@gmail.com' className='my-4 border-b'>{CONTACT.email}</a>
                </div>

                {/* Feedback Form */}
                <form className='mt-8 w-1/2 max-w-md mx-auto' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        rows="4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        {loading ? "Sending..." : "Send Mail"}

                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
