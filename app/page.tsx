'use client';
import Image from 'next/image';

import React from 'react';
import { ArrowRight, Code, Briefcase, User, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const technologies = [
  {
    name: 'HTML',
    icon: (
      <div className="w-12 h-12 text-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      </div>
    )
  },
  {
    name: 'CSS',
    icon: (
      <div className="w-12 h-12 text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      </div>
    )
  },
  // Add other technology icons similarly
  {
    name: 'JavaScript',
    icon: (
      <div className="w-12 h-12 text-yellow-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm11.173 14.004c0-.759.364-1.286 1.8-1.286h1.265v-1.2h-2.4c-1.997 0-3.157 1.033-3.157 3.091 0 1.9 1.155 2.77 2.761 2.77.794 0 1.509-.223 2.024-.671v-1.502c-.528.36-1.1.531-1.648.531-.897 0-1.365-.432-1.365-1.243zm-3.876.156c-.045-.843.361-1.39 1.019-1.72.63-.309 1.302-.482 1.977-.67v-.876h-3.79v1.323h1.253c-.115.09-.23.216-.342.355-.162.234-.246.448-.246.627-.003.712.625.831 1.151.948.9.201 1.733.362 2.56.552l.27-.825c-.849-.12-1.692-.266-2.493-.493-.672-.182-1.13-.429-1.349-.763z" />
        </svg>
      </div>
    )
  },
  {
    name: 'React',
    icon: (
      <div className="w-12 h-12 text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.6c-5.301 0-9.6-4.299-9.6-9.6s4.299-9.6 9.6-9.6 9.6 4.299 9.6 9.6-4.299 9.6-9.6 9.6z" />
        </svg>
      </div>
    )
  },
  {
    name: 'Next.js',
    icon: (
      <div className="w-12 h-12 text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 12C0 5.373 5.373 0 12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12c-6.627 0-12-5.373-12-12zm16.027 2.834l2.6-6.333-7.373 11.5-7.027-11.5 2.6 6.333h9.2z" />
        </svg>
      </div>
    )
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <div className="w-12 h-12 text-teal-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.627-5.372-12-12-12zm7.5 9.333c-.667 3.5-3.333 4.833-5.5 4.833-.667 0-1.5-.166-2.5-.667 1-1.333 2.166-2 3.5-2 1.167 0 1.833.5 2 1.5.5-2.333-.167-3.833-2-3.833-1 0-2 .5-3 2 .667.5 1.667.833 3.167.833 3.167 0 5.5-2 5.5-5zm-5.833 5.167c-.667 3.5-3.333 4.833-5.5 4.833-.667 0-1.5-.166-2.5-.667 1-1.333 2.167-2 3.5-2 1.167 0 1.833.5 2 1.5.5-2.333-.167-3.833-2-3.833-1 0-2 .5-3 2 .667.5 1.667.833 3.167.833 3.167 0 5.5-2 5.5-5z" />
        </svg>
      </div>
    )
  },
  {
    name: 'React Native',
    icon: (
      <div className="w-12 h-12 text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.627-5.372-12-12-12zm0 21.6c-5.301 0-9.6-4.299-9.6-9.6s4.299-9.6 9.6-9.6 9.6 4.299 9.6 9.6-4.299 9.6-9.6 9.6z" />
        </svg>
      </div>
    )
  },
  {
    name: 'WordPress',
    icon: (
      <div className="w-12 h-12 text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.627-5.372-12-12-12zm-4.5 18l-1.8-7.2h-3l-.5 1.5h-3L6 18h3l-.5-1.5h2L9.5 18zm9-6l-3 6h-1.5L12 10.5 10.5 18h-1.5l-3-6h2L12 7.5l2.5 6h2z" />
        </svg>
      </div>
    )
  },
  {
    name: 'Node.js',
    icon: (
      <div className="w-12 h-12 text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 10.533c0-1.067-.827-1.827-2.2-1.827h-2.6c-1.2 0-2 .6-2 1.8 0 .733.6 1.233 1.667 1.4l2.067.333c1.267.2 2 .833 2 2 0 1.067-.8 1.8-2.2 1.8h-3c-1.173 0-2.2-.6-2.667-1.733v1.333h-2.4V9.733h2.4v1.133c.467-1.133 1.6-1.866 3.267-1.866h2.4c2.067 0 3.733 1.2 3.733 3.533z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <div className="w-12 h-12 text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C9.863 0 8.573 2.39 8.573 2.39 6.037 6.446 3.688 10.252 4.19 14.77 4.697 19.445 8.738 24 12 24s7.303-4.555 7.81-9.23c.502-4.518-1.846-8.324-4.382-12.38 0 0-1.29-2.39-3.428-2.39zm0 22.146c-3.273 0-6.657-3.3-6.168-7.796.473-4.358 2.787-7.946 4.164-10.594 0 0 .494-.858 1.004-1.498 0 .6.084 1.27.166 1.865.523 4.53 2.255 8.91 4.134 12.178-.756-.735-1.457-1.536-1.845-2.395-.52-.777-.713-1.656-.713-2.52 0-.455.17-1.106.527-1.455.454-.445.986-.607 1.643-.67.21-.017.423-.015.636-.015-.006.01.473 3.3.755 4.33.347 1.323 1.59 2.897 2.174 3.407-.525 1.165-1.845 2.797-3.866 3.693z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <div className="w-12 h-12 text-yellow-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.89 15.672L11.96.616a.798.798 0 011.404 0l3.656 7.316-2.897 3.285-.683-.856-2.835 3.211 4.115 5.172c.144.188.18.435.09.652-.089.217-.287.366-.51.392L1.572 20.173c-.248.029-.496-.07-.676-.266a.806.806 0 01-.18-.695l3.176-9.54zm12.797-4.878l.011.012.05-.055.034.043-3.675 3.2.25-.33-.312.369.002.003 3.64-3.197zm2.144 2.456l.155-.128.084-.072-.084.072-4.16 5.267.242-.3-.21.31 4.034-5.149zM17.69 1.42c.206-.145.473-.168.695-.06s.366.366.37.62L20.797 15.84l.003.007-.148-.02-6.13-7.704-2.41-3.04 5.579-3.664z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'React Native',
    icon: (
      <div className="w-12 h-12 text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C6.478 0 2 4.477 2 10c0 3.531 1.835 6.627 4.598 8.402C6.3 19.44 6 20.185 6 21c0 1.105.895 2 2 2s2-.895 2-2c0-.766-.318-1.46-.82-1.86C10.54 20.548 11.27 21 12 21s1.46-.452 1.82-1.14C13.68 19.54 14 20.235 14 21c0 1.105.895 2 2 2s2-.895 2-2c0-.816-.299-1.56-.598-2.402C20.165 16.627 22 13.531 22 10c0-5.523-4.478-10-10-10zm0 18.586c-1.452 0-2.637-.895-3.032-2.15C8.387 15.165 9.64 14 12 14c2.36 0 3.613 1.165 3.032 2.436C14.637 17.691 13.452 18.586 12 18.586zm0-6.986c-1.778 0-3.126-1.343-3.126-3.126 0-1.784 1.343-3.126 3.126-3.126s3.126 1.342 3.126 3.126c0 1.783-1.342 3.126-3.126 3.126z" />
        </svg>
      </div>
    ),
  },
  
];

export default function Page() {
  const featuredProjects = [
    {
      title: 'Forex tools hub',
      description: 'A calcultor tool built with HTML,CSS and Javascript',
      tags: ['HTML', 'CSS', 'Javascript']
    },
    {
      title: 'Eventify',
      description: 'A budget calculator tool built with react,tailwind css and firebase',
      tags: ['React', 'Tailwind css', 'Firebase']
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="space-y-24 py-12"
    >{/* Hero Section */}
    <motion.section className="text-center space-y-8" variants={fadeInUp}>
      {/* Profile Image */}
      <motion.div 
        className="mx-auto w-48 h-48 rounded-full overflow-hidden mb-8"
        variants={fadeInUp}
      >
        <img
          src="/my pic.jpg" // Correct path for the public folder
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    
      <motion.h1 
        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        animate={{ scale: [0.9, 1], opacity: [0, 1] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Jordan Ooko
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        variants={fadeInUp}
      >
        Full Stack Developer specializing in building exceptional digital experiences
      </motion.p>
      <motion.div 
        className="flex justify-center gap-4"
        variants={fadeInUp}
      >
        <Link 
          href="/projects"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
        >
          View Projects <ArrowRight className="h-4 w-4" />
        </Link>
        <Link 
          href="/contact"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
        >
          Contact Me <Mail className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.section>
    

      {/* About Section */}
      <motion.section className="space-y-8" variants={fadeInUp}>
        <motion.div 
          className="flex items-center gap-2 text-2xl font-bold text-white"
          variants={fadeInUp}
        >
          <User className="h-6 w-6" />
          <h2>About Me</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-4"
            variants={fadeInUp}
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate developer with experience in building web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, I'm focused on building accessible, human-centered products that make
              a real difference in people's lives.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      {/* Technologies Section */}
<motion.section className="space-y-8" variants={fadeInUp}>
  <motion.div 
    className="flex items-center gap-2 text-2xl font-bold text-white"
    variants={fadeInUp}
  >
    <Code className="h-6 w-6" />
    <h2>Technologies</h2>
  </motion.div>
  <motion.div 
    className="grid grid-cols-3 md:grid-cols-5 gap-8"
    variants={staggerContainer}
  >
    {technologies.map((tech, index) => (
      <motion.div
        key={`${tech.name}-${index}`} // Combine name and index for unique keys
        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
        variants={fadeInUp}
        whileHover={{ y: -5 }}
      >
        {tech.icon}
        <span className="text-sm text-gray-300">{tech.name}</span>
      </motion.div>
    ))}
  </motion.div>
</motion.section>


      {/* Featured Projects Section */}
      <motion.section className="space-y-8" variants={fadeInUp}>
        <motion.div 
          className="flex items-center gap-2 text-2xl font-bold text-white"
          variants={fadeInUp}
        >
          <Briefcase className="h-6 w-6" />
          <h2>Featured Projects</h2>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg space-y-4 hover:bg-gray-700 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}