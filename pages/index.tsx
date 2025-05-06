
'use client';
import Head from 'next/head';
import { Link, Element } from 'react-scroll';
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>MarieIQ – AI for Greener Oceans</title>
        <meta name="description" content="Smart AI systems for sustainable ocean logistics." />
      </Head>

      <header className="bg-green-900 text-white p-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold">MarieIQ</div>
        <nav className="space-x-4">
          <Link to="about" smooth duration={500} className="cursor-pointer hover:underline">About</Link>
          <Link to="product" smooth duration={500} className="cursor-pointer hover:underline">Product</Link>
          <Link to="events" smooth duration={500} className="cursor-pointer hover:underline">Events</Link>
          <Link to="social" smooth duration={500} className="cursor-pointer hover:underline">Social</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="text-gray-800">
        <section className="bg-gradient-to-br from-green-100 to-white text-center py-24 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl font-extrabold text-green-800 mb-4">AI for Greener Oceans & Ports</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Empowering maritime operations with predictive intelligence and real-time sustainability insights.
            </p>
            <a href="#contact" className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 shadow-lg transition">
              📩 Contact Us
            </a>
          </motion.div>
        </section>

        <Element name="about">
          <motion.section
            {...{
              className: "py-20 px-6 bg-white text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6 },
              viewport: { once: true }
            } as any}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">About MarieIQ</h2>
            <p className="max-w-3xl mx-auto text-gray-700">Founded by a sustainability-driven technologist, MarieIQ merges AI with ocean science to power the future of green logistics. We’re on a mission to make shipping smarter and the planet cleaner.</p>
          </motion.section>
        </Element>

        <Element name="product">
          <motion.section
            {...{
              className: "py-20 px-6 bg-white text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6 },
              viewport: { once: true }
            } as any}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="font-bold text-xl text-green-700 mb-2">🔍 Predictive Congestion</h3>
                <p className="text-gray-600">AI forecasts port congestion and optimizes docking times with live traffic data.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="font-bold text-xl text-green-700 mb-2">🌱 Emissions Tracker</h3>
                <p className="text-gray-600">Calculate, monitor, and report vessel emissions with our intelligent green dashboard.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="font-bold text-xl text-green-700 mb-2">📊 Route Optimizer</h3>
                <p className="text-gray-600">Suggests optimal, eco-efficient shipping routes based on real-time ocean and weather data.</p>
              </div>
            </div>
          </motion.section>
        </Element>

        <Element name="events">
          <motion.section
            {...{
              className: "py-20 px-6 bg-white text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6 },
              viewport: { once: true }
            } as any}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Upcoming Events</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Join us at ocean tech summits, sustainability expos, and industry hackathons where we demo our tools and connect with change-makers.</p>
          </motion.section>
        </Element>

        <Element name="social">
          <motion.section
            {...{
              className: "py-20 px-6 bg-white text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6 },
              viewport: { once: true }
            } as any}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Follow Us</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Stay in the loop via <a href="https://www.linkedin.com/company/106857787" target="_blank" className="text-blue-700 underline">LinkedIn</a> and our YouTube channel. We share behind-the-scenes innovation, insights, and partner stories.</p>
          </motion.section>
        </Element>

        <Element name="contact">
          <motion.section
            {...{
              className: "py-20 px-6 bg-white text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6 },
              viewport: { once: true }
            } as any}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Get In Touch</h2>
            <p className="text-gray-700 max-w-xl mx-auto">Let's work together toward a sustainable maritime future. Email us at <a href="mailto:info@marieiq.ai" className="text-blue-700 underline">info@marieiq.ai</a></p>
          </motion.section>
        </Element>
      </main>
    </>
  );
}
