"use client";

import React, { useEffect, useRef, useState } from "react";

const Career = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle intersection observations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    // Create the observer with options
    const observer = new IntersectionObserver(observerCallback, {
      root: null, // viewport
      threshold: 0.2, // trigger when 20% of element is visible
      rootMargin: "-100px 0px" // trigger slightly before element enters viewport
    });

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Effect for timeline animation when section becomes visible
  useEffect(() => {
    if (isVisible && timelineRef.current) {
      timelineRef.current.style.maxHeight = "100%";
    }
  }, [isVisible]);

  return (
    <section
      id="Career"
      ref={sectionRef}
      className="flex flex-col items-center justify-center relative mx-auto mb-64 py-30 pt-16 md:pt-30 md:pb-30 "
    >
      <div className="w-full max-w-6xl px-4">
        <h2 className={`text-5xl md:text-7xl font-normal text-center mb-20 mt-12 bg-career-heading bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My career <span className="font-light">&</span>
          <br /> experience
        </h2>
        
        <div className="relative flex flex-col mx-auto">
          {/* Timeline */}
          <div 
            ref={timelineRef}
            className={`absolute top-[-50px] left-0 sm:left-1/2 w-[3px] h-full sm:transform sm:-translate-x-1/2 timeline-gradient max-h-0 transition-[max-height] duration-1500 ease-in-out ${isVisible ? '' : ''}`}
          >
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-secondary ${isVisible ? 'animate-timeline-pulse' : 'opacity-0'}`}></div>
          </div>
          
          {/* Experience boxes with staggered animation */}
          <div className={`flex flex-col sm:flex-row justify-between mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: isVisible ? '300ms' : '0ms'}}>
            <div className="flex justify-between w-full sm:w-[45%] lg:w-[40%] pl-[5%] sm:pl-0 gap-0 sm:gap-5 lg:gap-12">
              <div>
                <h4 className="text-2xl lg:text-3xl font-medium leading-tight tracking-wide w-44 text-content">Full Stack Developer</h4>
                <h5 className="text-lg font-normal tracking-wide mt-2.5 text-secondary">Zelle</h5>
              </div>
              <h5 className="text-2xl font-medium leading-10 text-content">Sep 2024 – Present</h5>
            </div>
            <p className="w-full sm:w-[45%] lg:w-[40%] text-base lg:text-lg font-light pl-[5%] sm:pl-0 mt-2.5 sm:mt-0 text-content/80">
            Worked on the Instant Payment Request System, reducing delivery time by 30% through collaboration with cross-functional teams. Developed React frontends with Redux for real-time status tracking, increasing user interaction by 25%.
            Optimized PostgreSQL databases on AWS, improving query performance by 40% and cutting unauthorized access by 50%. Built secure Spring Boot APIs with AWS AppSync and SNS for real-time sync, reducing transaction time by 20%.
            Achieved 95% test coverage, integrated into AWS CodePipeline, and sped up development cycles by 35%. Deployed on AWS with auto-scaling and load balancing, ensuring 99.9% uptime and reducing deployment time by 50%.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row justify-between mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: isVisible ? '500ms' : '0ms'}}>
            <div className="flex justify-between w-full sm:w-[45%] lg:w-[40%] pl-[5%] sm:pl-0 gap-0 sm:gap-5 lg:gap-12">
              <div>
                <h4 className="text-2xl lg:text-3xl font-medium leading-tight tracking-wide w-44 text-content">Full Stack Developer</h4>
                <h5 className="text-lg font-normal tracking-wide mt-2.5 text-secondary">CRISIL</h5>
              </div>
              <h5 className="text-2xl font-medium leading-10 text-content">Aug 2020 – Jul 2023</h5>
            </div>
            <p className="w-full sm:w-[45%] lg:w-[40%] text-base lg:text-lg font-light pl-[5%] sm:pl-0 mt-2.5 sm:mt-0 text-content/80">
            Built a real-time Client Portfolio Management System from the ground up. Worked on React + Redux frontends with live updates via WebSockets, increasing user engagement by 40%. Developed Django REST APIs with async processing to cut response times by 35%. Designed and optimized PostgreSQL on Azure to handle millions of transactions, reducing query time by 45%. Secured the app with JWT, AES encryption, and role-based access. Achieved 95% test coverage and automated CI/CD with Azure DevOps, cutting manual QA by 60% and ensuring 99.9% uptime. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
