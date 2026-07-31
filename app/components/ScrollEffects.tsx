// app/components/ScrollEffects.tsx
"use client"; // This is a Client Component

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // =========================================
    // PERFECT CINEMATIC SCROLL ENGINE
    // =========================================

    // Track scroll direction
    let lastScrollY = 0;
    let scrollDirection = "down";

    // --- SCROLL DIRECTION DETECTION ---
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;

      handleScrollEffects();
    };

    // --- HANDLE ALL SCROLL EFFECTS ---
    const handleScrollEffects = () => {
      const approachSection = document.getElementById("approach");
      const servicesSection = document.getElementById("services");
      const workflowSection = document.getElementById("workflow");

      if (!approachSection || !servicesSection || !workflowSection) return;

      const windowHeight = window.innerHeight;
      const approachRect = approachSection.getBoundingClientRect();
      const servicesRect = servicesSection.getBoundingClientRect();
      const workflowRect = workflowSection.getBoundingClientRect();

      // APPROACH SECTION - Immediate background change when crossing
      if (approachRect.top <= 0 && approachRect.bottom >= 0) {
        approachSection.classList.add("active-section");
      } else {
        approachSection.classList.remove("active-section");
      }

      // SERVICES SECTION - Transition to dark as we scroll through it
      if (servicesRect.top <= windowHeight && servicesRect.bottom >= 0) {
        const progress = Math.min(1, Math.max(0, -servicesRect.top / servicesRect.height));
        if (progress > 0.1) {
          servicesSection.classList.add("scrolled-dark");
        } else {
          servicesSection.classList.remove("scrolled-dark");
        }
      } else {
        servicesSection.classList.remove("scrolled-dark");
      }

      // WORKFLOW SECTION - Transition based on scroll direction
      if (workflowRect.top <= windowHeight && workflowRect.bottom >= 0) {
        if (scrollDirection === "up") {
          const progress = Math.min(1, Math.max(0, -workflowRect.top / workflowRect.height));
          if (progress > 0.3) {
            workflowSection.classList.add("light-mode");
            workflowSection.classList.remove("dark");
          } else {
            workflowSection.classList.remove("light-mode");
            workflowSection.classList.add("dark");
          }
        } else {
          workflowSection.classList.remove("light-mode");
          workflowSection.classList.add("dark");
        }
      } else {
        workflowSection.classList.remove("light-mode");
        workflowSection.classList.add("dark");
      }
    };

    // --- TEXT ILLUMINATION OBSERVER ---
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      }
    );

    // Observe all text spans in cinematic sections
    document.querySelectorAll("#services .cinematic-text span, #workflow .cinematic-text span").forEach((span) => {
      textObserver.observe(span);
    });

    // --- PRESERVE EXISTING FADE-IN ANIMATIONS ---
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      fadeObserver.observe(el);
    });

    // --- NAVBAR SCROLL EFFECT ---
    const nav = document.getElementById("nav");
    const handleNavScroll = () => {
      if (window.scrollY > 8) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleNavScroll);

    // Initial check
    handleScrollEffects();
    handleNavScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleNavScroll);
      textObserver.disconnect();
      fadeObserver.disconnect();
    };
  }, [pathname]); // Re-run when pathname changes

  return null; // This component doesn't render anything
}