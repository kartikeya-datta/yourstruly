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
      className="flex flex-col items-center justify-center relative mx-auto mb-64 py-30 pt-16 md:pt-30 md:pb-30"
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
                <h4 className="text-2xl lg:text-3xl font-medium leading-tight tracking-wide w-44 text-content">Software Engineer</h4>
                <h5 className="text-lg font-normal tracking-wide mt-2.5 text-secondary">DXC Technology</h5>
              </div>
              <h3 className="text-3xl lg:text-5xl font-medium leading-10 text-content">2021</h3>
            </div>
            <p className="w-full sm:w-[45%] lg:w-[40%] text-base lg:text-lg font-light pl-[5%] sm:pl-0 mt-2.5 sm:mt-0 text-content/80">
              I gained hands-on experience with AWS and Azure, supporting cloud migrations, big data storage, and backend management for insurance systems while collaborating in Agile environments and enhancing production support workflows.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row justify-between mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: isVisible ? '500ms' : '0ms'}}>
            <div className="flex justify-between w-full sm:w-[45%] lg:w-[40%] pl-[5%] sm:pl-0 gap-0 sm:gap-5 lg:gap-12">
              <div>
                <h4 className="text-2xl lg:text-3xl font-medium leading-tight tracking-wide w-44 text-content">Associate Software Engineer</h4>
                <h5 className="text-lg font-normal tracking-wide mt-2.5 text-secondary">DXC Technology</h5>
              </div>
              <h3 className="text-3xl lg:text-5xl font-medium leading-10 text-content">2023</h3>
            </div>
            <p className="w-full sm:w-[45%] lg:w-[40%] text-base lg:text-lg font-light pl-[5%] sm:pl-0 mt-2.5 sm:mt-0 text-content/80">
              I enhanced system reliability on IBM iSeries through debugging, SQL optimization, and scripting, while designing secure APIs and microservices, automating cloud deployments with AWS and Azure, deploying Dockerized microservices on Kubernetes, and enhancing API security, which earned me the DXC Champ Award for contributions to system reliability and automation.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row justify-between mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: isVisible ? '700ms' : '0ms'}}>
            <div className="flex justify-between w-full sm:w-[45%] lg:w-[40%] pl-[5%] sm:pl-0 gap-0 sm:gap-5 lg:gap-12">
              <div>
                <h4 className="text-2xl lg:text-3xl font-medium leading-tight tracking-wide w-44 text-content">Full Stack Developer</h4>
                <h5 className="text-lg font-normal tracking-wide mt-2.5 text-tertiary">Citizens Bank</h5>
              </div>
              <h3 className="text-3xl lg:text-5xl font-medium leading-10 text-primary">NOW</h3>
            </div>
            <p className="w-full sm:w-[45%] lg:w-[40%] text-base lg:text-lg font-light pl-[5%] sm:pl-0 mt-2.5 sm:mt-0 text-content/80">
              Collaborated with cross-functional teams to develop a frontend using React and advanced state management, designed secure data architectures with PostgreSQL and AWS, built the backend with FastAPI, implemented CI/CD pipelines, and deployed the application on AWS, ensuring high performance and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;