'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll function with custom offsets
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      let offsetTop;
      
      // Custom offsets for different sections
      if (elementId === '#about-me') {
        // About me should show the hero section properly
        offsetTop = element.offsetTop - 120; // Reduced offset to show more of hero
      } else if (elementId === '#skills') {
        // Skills should show the title and description properly
        offsetTop = element.offsetTop - 150; // More offset to show title area
      } else {
        // Default offset for other sections
        offsetTop = element.offsetTop - 80;
      }
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center m-auto px-[10px]">
        {/* Logo + Name */}
        <div className="flex items-center flex-1">
          <button
            onClick={() => smoothScrollTo('about-me')}
            className="flex items-center group"
          >
            <Image
              src="/logo.png"
              alt="Syahbandi Logo"
              width={70}
              height={70}
              draggable={false}
              className="cursor-pointer w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            />
            <div className="hidden md:flex md:self font-bold ml-[10px] text-gray-300 relative">
              <span className="nav-glitch-hover" data-text="Syahbandi – AI-Powered Systems Builder">
                Syahbandi – AI-Powered Systems Builder
              </span>
            </div>
          </button>
        </div>

        {/* Web Navbar - Perfectly Centered */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center justify-center gap-8 h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[30px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => smoothScrollTo(link.link)}
                className={`cursor-pointer transition relative nav-link-glitch ${
                  activeSection === link.link ? 'text-purple-400' : ''
                }`}
                title={`Navigate to ${link.title}`}
                data-text={link.title}
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) - Only GitHub */}
        <div className="hidden md:flex flex-row gap-5 flex-1 justify-end">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link ?? ''}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              title={`Visit ${name}`}
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className={`md:hidden text-white focus:outline-none text-3xl hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden mobile-menu-enter`}>
          {/* Links */}
          <div className="flex flex-col items-center w-full">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => smoothScrollTo(link.link)}
                className={`cursor-pointer hover:text-[rgb(112,66,248)] transition text-center w-full mobile-nav-link ${
                  activeSection === link.link ? 'text-purple-400' : ''
                }`}
              >
                {link.title}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mobile-social-icons">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link ?? ''}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                title={`Visit ${name}`}
              >
                <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};