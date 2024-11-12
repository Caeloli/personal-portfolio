import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// impotrt { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './core/navbar/Navbar';
import { useAnimate } from 'framer-motion';
import { range } from './utils/utils';
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function App() {

  const [isDarkMode, setDarkMode] = useState(false);


  //const particlesLoaded = async (container?: Container): Promise<void> => {};


  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }





  /*
  flex items-center relative overflow-hidden px-10 uppercase transition-all duration-300 
              hover:text-[#16a6b6]        
  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#16a6b6] 
  after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-300
  hover:after:scale-x-100
  before:absolute before:left-0 before:h-full before:w-0.5 before:bg-[#16a6b6] 
  */


  return (
    <div className={(isDarkMode ? 'dark' : '') + '  w-full h-[200vh] relative transition-all duration-300 '}>
      <div className='w-full h-full bg-white dark:bg-black'>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <div className='h-screen'></div>
        <AboutSection />
      </div>
    </div>
  );

}

function AboutSection(): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [childRefNumElements, setChildRefNumElements] = useState(1)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center']
  })

  useEffect(() => {
    if (!ref)
      return
    const childRefElements: number = ref.current?.childElementCount ?? 0;
    setChildRefNumElements(childRefElements);
  }, [ref])

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log("scrollProgress::", value);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Parallax effect with scale and opacity using scroll progress
  const generalSectionsThreshold = 1 / childRefNumElements;

  /*****************************
   *******Section Curtain*******
  ******************************/

  // Curtain effects based on scroll progress
  const firstSectionAnimationThreshold = generalSectionsThreshold * 1;
  console.log(firstSectionAnimationThreshold);
  /**
   * Divide curtainScaleAnimation into 5
   * {
   * 1: curtain open
   * 2: curtain animation
   * 3: curtain closed
   * 4: curtain animation
   * 5: curtain open
   * }
  */
  const curtainScaleSteps = 5;
  const topCurtainScaleY = useTransform(scrollYProgress, range(curtainScaleSteps, 1).map(number => (firstSectionAnimationThreshold / curtainScaleSteps) * number),
    [0, 1, 1, 1, 0]);
  const bottomCurtainScaleY = useTransform(scrollYProgress, range(curtainScaleSteps, 1).map(number => (firstSectionAnimationThreshold / curtainScaleSteps) * number),
    [0, 1, 1, 1, 0]);

  // Title effects: scale and opacity fade-out
  const titleEffectSteps = 4;
  const titleScale = useTransform(scrollYProgress, range(titleEffectSteps, 0).map(number => (firstSectionAnimationThreshold / titleEffectSteps) * number), [0.8, 1, 1, 0.0]);


  // Dynamic zIndex and opacity for About Section and Next Section
  const aboutSectionZIndex = useTransform(scrollYProgress, [firstSectionAnimationThreshold, firstSectionAnimationThreshold + 0.01], [2, 1]);
  const nextSectionOpacity = useTransform(scrollYProgress, [firstSectionAnimationThreshold], [1]);

  /*****************************
  ***** Section About Info *****
  ******************************/

  const secondSectionAnimationThreshold:number = generalSectionsThreshold * 2;
  const imageAnimationSteps: number = 4;
  const imageAnimation: any = {
    imageScale: useTransform(scrollYProgress, range(imageAnimationSteps, 0).map(number => (firstSectionAnimationThreshold + (generalSectionsThreshold/imageAnimationSteps)*number)), [0,1,1,0]),
    imageRounded: useTransform(scrollYProgress, range(imageAnimationSteps, 0).map(number => (  firstSectionAnimationThreshold + (generalSectionsThreshold/imageAnimationSteps)*number )), [0, 100, 100, 0])
  };

  return (
    <motion.div ref={ref} className='relative h-[500vh]'>
      <motion.section
        style={
          {
            zIndex: aboutSectionZIndex,
          }
        }

        className='w-screen h-screen sticky flex flex-col top-0'>
        <motion.div className='absolute inset-0 flex items-center justify-center'>

          <motion.h1
            className="font-rubik uppercase text-white font-bold mix-blend-difference"
            style={{
              scale: titleScale
            }}
          >About Me</motion.h1>

          {/* Top Curtain */}
        </motion.div>
        <motion.div
          style={{ scaleY: topCurtainScaleY }}

          className="bg-black w-full h-1/2 origin-top">

          {/* Bottom Curtain */}
        </motion.div>
        <motion.div
          style={{ scaleY: bottomCurtainScaleY }}
          className="bg-black w-full h-1/2 origin-bottom"
        >

        </motion.div>
      </motion.section >
      <motion.section
        style={
          {
            opacity: nextSectionOpacity,

          }
        }
        className='w-screen h-screen sticky top-0'>
        <motion.div className='h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800'>
          <motion.div className='container h-full mx-auto flex flex-col lg:flex-row items-center gap-28'>
            <motion.div className='relative overflow-hidden w-96 h-96
              after:absolute after:bg-black after:bg-opacity-40 after:inset-0 after:w-full after:h-full'
              style={{
                borderRadius: imageAnimation.imageRounded,
                scale: imageAnimation.imageScale
              }}
              >
              <motion.img className='object-contain  w-96 h-96' 
              
              src='/assets/Street-at-night-black-and-white-photo.jpg'></motion.img>
            </motion.div>
            <motion.div className='flex flex-col gap-8 px-3'>
              <motion.div>
                <motion.h2 className='hidden text-white lg:flex'>
                  César González
                </motion.h2>
                <motion.h3 className='flex lg:hidden text-white'>
                  César González
                </motion.h3>
                <motion.h5 className='text-white'>
                  Systems Engineer
                </motion.h5>
              </motion.div>
              <motion.p className='text-white text-justify'>
                Computational Systems Engineering Degree at IPN, with solid knowledge in programming, full-stack web software, automation, CI/CD deployment and a thriving ambition for financial area. Accomplished to apply problem-solving and teamwork, to
                drive technological solutions using agile methodologies.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div >
  );
}


export default App;
