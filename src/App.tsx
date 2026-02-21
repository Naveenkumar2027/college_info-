/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

const PAGES: PageData[] = [
  {
    id: 'cover',
    title: '',
    subtitle: '',
    content: '',
    image: '', // Cover is custom rendered
  },
  {
    id: 'intro',
    title: 'Sai Vidya Institute of Technology',
    subtitle: 'Institution Overview',
    content: 'Established in 2008 in Rajanukunte, Bengaluru, SVIT is a NAAC Grade A accredited institution. Founded by the Sri Sai Vidya Vikas Shikshana Samithi, our 12-acre campus is a hub for "Learning to Lead" in the heart of Karnataka.',
    image: 'https://picsum.photos/seed/svit-overview/1200/800',
  },
  {
    id: 'vision',
    title: 'Sai Vidya Institute of Technology',
    subtitle: 'Vision & Mission',
    content: 'Our vision is to contribute dedicated, skilled, and intelligent engineers to architect a strong India. We provide quality skill-based training and promote research, innovation, and ethical practices in a supportive environment.',
    image: 'https://picsum.photos/seed/svit-vision/1200/800',
  },
  {
    id: 'leadership',
    title: 'Sai Vidya Institute of Technology',
    subtitle: 'Visionary Leadership',
    content: 'Led by Founder Prof. M. R. Holla, a distinguished academician with 50+ years of experience, and Principal Dr. HS Ramesh Babu, our leadership team ensures academic excellence and administrative integrity at every level.',
    image: 'https://picsum.photos/seed/svit-leader/1200/800',
  },
  {
    id: 'academics',
    title: 'Sai Vidya Institute of Technology',
    subtitle: 'Engineering Programs',
    content: 'We offer specialized B.E. programs in CSE (AI & ML, Data Science), Information Science, Electronics & Communication, Civil, and Mechanical Engineering, all affiliated with VTU and approved by AICTE.',
    image: 'https://picsum.photos/seed/svit-engineers/1200/800',
  },
  {
    id: 'infrastructure',
    title: 'Sai Vidya Institute of Technology',
    subtitle: 'Campus Infrastructure',
    content: 'Our modern infrastructure includes advanced laboratories, a Makers Space Lab for prototyping, state-of-the-art computer centers, and extensive library resources designed for the engineers of tomorrow.',
    image: 'https://picsum.photos/seed/svit-infra/1200/800',
  },
  {
    id: 'placements',
    title: 'Sai Vidya Institute of Technology',
    subtitle: 'Placement & Support',
    content: 'With a philosophy that "to reap the benefits tomorrow, we must sow the seeds today," we provide 100% placement assistance and rigorous training in aptitude, soft skills, and technical knowledge.',
    image: 'https://picsum.photos/seed/svit-jobs/1200/800',
  },
  {
    id: 'conclusion',
    title: 'Sai Vidya Institute of Technology',
    subtitle: 'Join the Legacy',
    content: 'Empowering engineers of tomorrow with industry-driven curriculum and top placements. Join Sai Vidya Institute of Technology and start your journey toward professional excellence and social responsibility.',
    image: 'https://picsum.photos/seed/svit-join/1200/800',
  },
];

const SpiralBinding = () => {
  const rings = Array.from({ length: 24 });
  return (
    <div className="fixed left-0 top-0 h-full w-[10%] z-[100] flex flex-col items-center justify-around py-4 pointer-events-none">
      {rings.map((_, i) => (
        <div key={i} className="relative w-12 h-4">
          {/* Realistic Steel Ring */}
          <div className="absolute left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-gray-400 via-gray-100 to-gray-600 rounded-full shadow-md border border-gray-300/50" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-black/40 blur-sm rounded-full" />
        </div>
      ))}
    </div>
  );
};

const Page = ({ page, direction, index }: { page: PageData, direction: number, index: number, key?: any }) => {
  const isCover = index === 0;

  if (isCover) {
    return (
      <motion.div
        key={page.id}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={{
          enter: (direction: number) => ({
            rotateY: direction > 0 ? 0 : -180,
            opacity: direction > 0 ? 1 : 0,
            zIndex: direction > 0 ? 0 : 1,
            transformOrigin: "left center",
          }),
          center: {
            zIndex: 1,
            rotateY: 0,
            opacity: 1,
            transition: {
              rotateY: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
              opacity: { duration: 0.4 }
            }
          },
          exit: (direction: number) => ({
            zIndex: direction > 0 ? 2 : 0,
            rotateY: direction > 0 ? -180 : 0,
            opacity: direction > 0 ? 1 : 0,
            transformOrigin: "left center",
            transition: {
              rotateY: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
              opacity: { duration: 0.4 }
            }
          })
        }}
        className="absolute inset-0 flex bg-[#121212] overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.3)] border-l border-black/10 rounded-r-[3rem]"
        style={{ 
          perspective: "3000px",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transformStyle: "preserve-3d"
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full relative">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 flex items-center justify-center">
                <img 
                  src="https://saividya.ac.in/images/logo.png" 
                  alt="SVIT Logo" 
                  className="w-full h-full object-contain brightness-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/svitlogo/200/200";
                  }}
                />
              </div>
            </div>

            <div className="h-48 w-[1px] bg-white/30" />

            <div className="flex flex-col text-white">
              <h1 className="text-8xl font-bold tracking-tight leading-none">SAI VIDYA</h1>
              <h2 className="text-3xl font-medium tracking-[0.1em] mt-2 opacity-90">INSTITUTE OF TECHNOLOGY</h2>
              <div className="h-[1px] w-full bg-white/40 mt-6 mb-6" />
              <p className="text-2xl font-light tracking-widest opacity-80">Learn to lead</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={page.id}
      custom={direction}
      initial="enter"
      animate="center"
      exit="exit"
      variants={{
        enter: (direction: number) => ({
          rotateY: direction > 0 ? 0 : -180,
          opacity: direction > 0 ? 1 : 0,
          zIndex: direction > 0 ? 0 : 1,
          transformOrigin: "left center",
        }),
        center: {
          zIndex: 1,
          rotateY: 0,
          opacity: 1,
          transition: {
            rotateY: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
            opacity: { duration: 0.4 }
          }
        },
        exit: (direction: number) => ({
          zIndex: direction > 0 ? 2 : 0,
          rotateY: direction > 0 ? -180 : 0,
          opacity: direction > 0 ? 1 : 0,
          transformOrigin: "left center",
          transition: {
            rotateY: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
            opacity: { duration: 0.4 }
          }
        })
      }}
      className="absolute inset-0 flex bg-[#f4ecd8] overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.3)] border-l border-black/10 rounded-r-[3rem]"
      style={{ 
        perspective: "3000px",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Dynamic Shadow during flip */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Aged Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] mix-blend-multiply" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] mix-blend-multiply" />
      
      {/* Page Content */}
      <div className="flex w-full h-full">
        {/* Left Content Section */}
        <div className="w-[50%] h-full flex flex-col justify-center px-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.0 }}
          >
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-[#5d4037] mb-2 opacity-60 font-sans">
              {page.title}
            </h1>
            <h2 className="text-4xl font-sans font-bold text-[#3e2723] mb-8 leading-tight tracking-tight">
              {page.subtitle}
            </h2>
            <div className="w-12 h-1 bg-[#5d4037] mb-8 opacity-20" />
            <p className="text-lg text-[#4e342e] leading-relaxed font-sans font-normal max-w-md opacity-90">
              {page.content}
            </p>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="w-[50%] h-full relative overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.0 }}
          >
            <img
              src={page.image}
              alt={page.subtitle}
              className="w-full h-full object-cover sepia-[0.2] contrast-[1.05] brightness-[0.95]"
              referrerPolicy="no-referrer"
            />
            {/* Vintage Vignette Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4ecd8] via-[#f4ecd8] via-[#f4ecd8]/95 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#f4ecd8]/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(62,39,35,0.2)] pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Page Shadow (Right edge) */}
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const nextIndex = page + newDirection;
    if (nextIndex >= 0 && nextIndex < PAGES.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1b110d] flex relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />

      {/* Fixed Spiral Binding */}
      <SpiralBinding />

      {/* Main Content Area */}
      <div className="ml-[10%] w-[90%] h-full relative" style={{ perspective: "3000px" }}>
        <AnimatePresence initial={false} custom={direction}>
          <Page key={page} page={PAGES[page]} direction={direction} index={page} />
        </AnimatePresence>

        {/* Navigation Click Zones */}
        <div className="absolute inset-0 flex z-50 pointer-events-none">
          {/* Previous Zone */}
          <div 
            className="w-[20%] h-full cursor-pointer pointer-events-auto group flex items-center justify-start pl-8"
            onClick={() => paginate(-1)}
          >
            {page > 0 && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="bg-[#3e2723]/80 p-4 rounded-full shadow-2xl backdrop-blur-sm text-[#f4ecd8] border border-[#f4ecd8]/20"
              >
                <ChevronLeft size={32} />
              </motion.div>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Next Zone */}
          <div 
            className="w-[50%] h-full cursor-pointer pointer-events-auto group flex items-center justify-end pr-12"
            onClick={() => paginate(1)}
          >
            {page < PAGES.length - 1 && (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="bg-[#3e2723]/80 p-4 rounded-full shadow-2xl backdrop-blur-sm text-[#f4ecd8] border border-[#f4ecd8]/20"
              >
                <ChevronRight size={32} />
              </motion.div>
            )}
          </div>
        </div>

        {/* Page Counter Indicator */}
        <div className="absolute bottom-8 right-12 z-[60] flex items-center gap-4">
          <div className="text-sm font-serif italic text-[#8d6e63] tracking-widest uppercase opacity-60">
            Folio {page + 1} / {PAGES.length}
          </div>
          <div className="flex gap-1.5">
            {PAGES.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 w-3 rounded-full transition-all duration-500 ${i === page ? 'bg-[#8d6e63] w-6' : 'bg-[#3e2723]'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Global Vignette for realism */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.6)] z-[110]" />
    </div>
  );
}
