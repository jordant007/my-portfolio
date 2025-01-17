'use client';

import Image from 'next/image';
import { Github, ExternalLink, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  const projects = [
    {
      title: 'Forex Tools Hub',
      description: 'A full-stack web application built with javascript and html and css. Features include pips calculator, position size calculator, and currency convertor.',
      image: '/screenshots/forex-tools-hub.png.png',
      tags: ['Html', 'css', 'Javascript'],
      github: 'https://github.com/jordant007/Forex-Tools-Hub',
      live: 'https://jordant007.github.io/Forex-Tools-Hub/',
      highlights: [
        'Implemented user authentication using firebase',
        'Built responsive UI with html ,css',
      ],
    },
    {
      title: 'Clozzet',
      description: 'An online clothing store platform.',
      image: '/screenshots/clozzet.png.png',
      tags: ['React', 'Tailwind css', 'Firebase'],
      github: 'https://github.com/jordant007/clozzet',
      live: 'https://clozzet.vercel.app/',
      highlights: [
        'Implemented authentication using firebase',
        'Implemented UI using react and tailwindcss',
        'Used Cloudinary as a database',
      ],
    },
    {
      title: 'Eventify',
      description: 'An event budget calculator',
      image: '/screenshots/eventify.png.png',
      tags: ['React', 'Tailwind css', 'Firebase'],
      github: 'https://github.com/jordant007/eventify',
      live: 'https://eventify-omega-lyart.vercel.app/',
      highlights: [
        'Built the UI with React and Tailwind CSS',
        'Implemented authentication with Firebase',
        'Used Firebase as a database',
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Navigation */}
      <motion.nav 
        className="mb-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <Link 
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group w-fit"
        >
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.nav>

      {/* Header */}
      <motion.div 
        className="mb-12 space-y-4"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <p className="text-gray-300 max-w-2xl">
          A showcase of my web development projects, featuring various technologies and solutions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="space-y-12"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
            variants={fadeInUp}
          >
            <div className="w-full h-64 mb-6">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Key Highlights</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  View Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}