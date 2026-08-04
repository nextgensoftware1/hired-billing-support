// app/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { House, ChevronDown, Search } from "lucide-react";

const phoneRingingStyles = `
  @keyframes phoneRinging {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-15deg);
    }
    20% {
      transform: rotate(15deg);
    }
    30% {
      transform: rotate(-15deg);
    }
    40% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  .phone-icon-ringing {
    transform-origin: center;
  }
  
  .contact-item:hover .phone-icon-ringing {
    animation: phoneRinging 0.6s ease-in-out infinite;
  }
`;

type TrustBadgesSectionProps = {
  onClick: () => void;
};

function TrustBadgesSection({ onClick }: TrustBadgesSectionProps) {
  return (
    <div className="dropdown-trust-badges" aria-label="Trust badges">
      <button
        type="button"
        className="dropdown-trust-badge"
        aria-label="HIPAA Compliant"
        onClick={onClick}
      >
        <span className="dropdown-trust-badge-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3 5 6v5c0 4.2 2.7 7.8 7 10 4.3-2.2 7-5.8 7-10V6l-7-3Z" />
            <path d="m9.5 12 1.7 1.7 3.3-3.4" />
          </svg>
        </span>
        <span className="dropdown-trust-badge-label">HIPAA Compliant</span>
      </button>
      <button
        type="button"
        className="dropdown-trust-badge"
        aria-label="SOC 2 Certified"
        onClick={onClick}
      >
        <span className="dropdown-trust-badge-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3 5 6v5c0 4.2 2.7 7.8 7 10 4.3-2.2 7-5.8 7-10V6l-7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </span>
        <span className="dropdown-trust-badge-label">SOC 2 Certified</span>
      </button>
    </div>
  );
}

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const [mobileOpenSubsection, setMobileOpenSubsection] = useState<string | null>(null);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  // MOBILE-ONLY: add a simple search toggle state for the mobile header.
  const [searchOpen, setSearchOpen] = useState(false);
  // MOBILE-ONLY: track viewport width so the mega-menu content can stay fully mounted on desktop but only render on mobile when explicitly active.
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  // Inject phone ringing animation styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = phoneRingingStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // MOBILE-ONLY: detect the mobile breakpoint so desktop hover behavior stays untouched.
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);

    return () => {
      mediaQuery.removeEventListener('change', updateViewport);
    };
  }, []);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setExpandedIndex(null);
    setMobileOpenSection(null);
    setMobileOpenSubsection(null);
    setMobileSearchQuery('');
    setSearchOpen(false);
  }, [pathname]);

  const menuItems = [
    {
      title: 'SELLING YOUR PRACTICE',
      subpages: [
        { name: 'Why Heartland', href: '/why-heartland' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Path to Long-Term Wealth', href: '/path-to-wealth' },
      ],
    },
    {
      title: 'SUPPORT MODEL',
      subpages: [
        { name: 'Support Services', href: '/support-services' },
        { name: 'Trusted Partners', href: '/trusted-partners' },
      ],
    },
    {
      title: 'ABOUT',
      subpages: [
        { name: 'About Us', href: '/about' },
        { name: 'Giving Back', href: '/giving-back' },
      ],
    },
    {
      title: 'RESOURCES',
      subpages: [
        { name: 'Masters & Mentors', href: '/masters-mentors' },
        { name: 'Continuing Education', href: '/ce' },
      ],
    },
    {
      title: 'CAREERS',
      href: '/careers',
      subpages: [],
    },
  ];

  // MOBILE-ONLY: keep the mobile accordion and mega-menu sections in a single shared open state.
  const toggleAccordion = (index: number) => {
    console.log('toggleAccordion', { index, expandedIndex });
    setActiveDropdown(null);
    setExpandedIndex((current) => (current === index ? null : index));
    if (mobileMenuOpen) {
      setSearchOpen(false);
    }
  };

  // Handle scroll effect (client-side only)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mobileNavigationSections = [
    {
      key: 'solutions',
      label: 'Solutions',
      groups: [
        {
          id: 'billing-services',
          title: 'Billing Services',
          links: [
            { label: 'Revenue Cycle Management', href: '/solutions/rcm-management' },
            { label: 'Medical Billing & RCM', href: '/solutions/medical-billing-rcm' },
            { label: 'AR Management', href: '/solutions/ar-management' },
            { label: 'Denial Management & Fixation', href: '/solutions/ar-denial-fixation' },
            { label: 'Old & Aging AR Recovery', href: '/solutions/old-aging-ar' },
          ],
        },
        {
          id: 'coding-compliance',
          title: 'Coding & Compliance',
          links: [
            { label: 'Medical Coding', href: '/solutions/medical-coding' },
            { label: 'Medical Auditing', href: '/solutions/medical-auditing' },
            { label: 'Compliance & Reporting', href: '/solutions/compliance-reporting' },
            { label: 'Quality Assurance', href: '/solutions/quality-assurance' },
          ],
        },
        {
          id: 'practice-management',
          title: 'Practice Management',
          links: [
            { label: 'Provider Credential', href: '/solutions/provider-credential' },
            { label: 'Payer & Insurer Enrollment', href: '/solutions/payer-insurer-enrollment' },
            { label: 'Practice Launch', href: '/solutions/practice-launch' },
            { label: 'Operations Management', href: '/solutions/operations-management' },
          ],
        },
        {
          id: 'advanced-solutions',
          title: 'Advanced Solutions',
          links: [
            { label: 'Marketing & Patient Engagement', href: '/solutions/marketing-patient-engagement' },
            { label: 'Virtual Healthcare Solutions', href: '/solutions/virtual-healthcare-solutions' },
            { label: 'Analytics & Reporting', href: '/solutions/analytics-reporting' },
          ],
        },
      ],
    },
    {
      key: 'who-we-serve',
      label: 'Who We Serve',
      groups: [
        {
          id: 'provider-organizations',
          title: 'Provider Organizations',
          links: [
            { label: 'Startups Practices', href: '/who-we-serve/start-ups' },
            { label: 'Small Medical Practices', href: '/who-we-serve/small-medical-practices' },
            { label: 'Medium & Large Medical Groups', href: '/who-we-serve/medium-large-medical-practices' },
            { label: 'Enterprise Medical Operation', href: '/who-we-serve/enterprise-medical-operation' },
            { label: 'Federally Qualified Health Centers', href: '/who-we-serve/fqhc' },
            { label: 'Member Centric Care', href: '/who-we-serve/member-centric-care' },
          ],
        },
        {
          id: 'medical-specialties',
          title: 'Medical Specialties',
          links: [
            { label: 'Psychiatry', href: '/who-we-serve/psychiatry' },
            { label: 'Orthopedic', href: '/who-we-serve/orthopedic' },
            { label: 'Cardiology', href: '/who-we-serve/cardiology' },
            { label: 'Obgyn', href: '/who-we-serve/obgyn' },
            { label: 'Endocrinology', href: '/who-we-serve/endocrinology' },
            { label: 'Neurology', href: '/who-we-serve/neurology' },
          ],
        },
        {
          id: 'organizations-partners',
          title: 'Organizations & Partners',
          links: [
            { label: 'Medical Payers', href: '/who-we-serve/payers' },
            { label: 'Medical Order Transmission', href: '/who-we-serve/medical-order-transmission' },
            { label: 'Marketing Partners', href: '/who-we-serve/hbs-marketing' },
            { label: 'Developer', href: '/who-we-serve/developer-portal' },
            { label: 'MSO / Payer Partners', href: '/who-we-serve/mso' },
          ],
        },
      ],
    },
    {
      key: 'resources',
      label: 'Resources',
      groups: [
        {
          id: 'calculator-and-cases',
          title: 'Resources',
          links: [
            { label: 'Cost & ROI Calculator', href: '/CostROIcalculator' },
            { label: 'Case Studies', href: '/case-study' },
            { label: 'Blog', href: '/blog' },
          ],
        },
      ],
    },
    {
      key: 'company',
      label: 'Company',
      groups: [
        {
          id: 'about-company',
          title: 'About',
          links: [
            { label: 'About Us', href: '/about' },
            { label: 'Article 28 Facilities', href: '/article-28-facilities' },
          ],
        },
        {
          id: 'consultation-company',
          title: 'Consultation',
          links: [
            { label: 'Explore Partnership', href: '/explore-partnership' },
            { label: 'Find Service', href: '/find-service' },
            { label: 'Contact', href: '/contact' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
          ],
        },
      ],
    },
  ];

  const mobileSearchResults = useMemo(() => {
    const normalizedQuery = mobileSearchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    const directPages = [
      { label: 'Dental', href: '/dental' },
      { label: 'Medical', href: '/medical' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Contact', href: '/contact' },
      { label: 'About Us', href: '/about' },
    ];

    const fromSections = mobileNavigationSections.flatMap((section) =>
      section.groups.flatMap((group) =>
        group.links.map((link) => ({
          label: link.label,
          href: link.href,
        }))
      )
    );

    return [...directPages, ...fromSections].filter((item) =>
      item.label.toLowerCase().includes(normalizedQuery)
    );
  }, [mobileNavigationSections, mobileSearchQuery]);

  const handleMobileSearchChange = (value: string) => {
    setMobileSearchQuery(value);
  };

  // Handle dropdown toggle
  const toggleDropdown = (dropdownName: string) => {
    const nextOpen = activeDropdown === dropdownName ? null : dropdownName;

    if (mobileMenuOpen) {
      setExpandedIndex(null);
      setSearchOpen(false);
      setMobileOpenSection(nextOpen);
      setMobileOpenSubsection(null);
      setActiveDropdown(nextOpen);
      return;
    }

    setActiveDropdown(nextOpen);
  };

  const toggleMobileSubsection = (sectionKey: string, subsectionId: string) => {
    const nextKey = `${sectionKey}-${subsectionId}`;
    setMobileOpenSubsection((current) => (current === nextKey ? null : nextKey));
  };

  // MOBILE-ONLY: keep hover-driven dropdown behavior off touch/mobile devices.
  const isDesktopHoverEnabled = () => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  };

  // Close dropdown on mouse leave
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when a link is clicked
  const handleLinkClick = () => {
    console.log('handleLinkClick', { mobileMenuOpen, expandedIndex });
    closeMobileMenu();
  };

  // Handle mouse enter for dropdown
  const handleMouseEnter = (dropdownName: string) => {
    if (!isDesktopHoverEnabled() || mobileMenuOpen) {
      return;
    }

    setActiveDropdown(dropdownName);
  };

  // Handle mouse leave for dropdown
  const handleMouseLeaveDropdown = () => {
    if (!isDesktopHoverEnabled() || mobileMenuOpen) {
      return;
    }

    setActiveDropdown(null);
  };

  // MOBILE-ONLY: add a simple mobile search toggle that sits beside the hamburger.
  const toggleSearch = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();

    setSearchOpen((current) => {
      const nextOpen = !current;

      if (!nextOpen) {
        setMobileSearchQuery('');
      }

      return nextOpen;
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => {
      const next = !current;
      console.log('toggleMobileMenu', { current, next, expandedIndex });
      if (!next) {
        setExpandedIndex(null);
        setMobileOpenSection(null);
        setMobileOpenSubsection(null);
        setActiveDropdown(null);
        setSearchOpen(false);
      }
      return next;
    });
  };

  useEffect(() => {
    console.log('mobile menu state', { mobileMenuOpen, expandedIndex, activeDropdown });
  }, [mobileMenuOpen, expandedIndex, activeDropdown]);

  const closeMobileMenu = () => {
    console.log('closeMobileMenu', { mobileMenuOpen, expandedIndex });
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedIndex(null);
    setMobileOpenSection(null);
    setMobileOpenSubsection(null);
    setMobileSearchQuery('');
    setSearchOpen(false);
  };

  // Close dropdowns and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest('.mobile-search-toggle') || target.closest('.mobile-search-field')) {
        return;
      }

      if (!target.closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }

      if (mobileMenuOpen && navRef.current && !navRef.current.contains(target)) {
        closeMobileMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalHeight = document.body.style.height;
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.height = originalHeight;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    console.log('nav state change', { mobileMenuOpen, expandedIndex, activeDropdown });
    if (!mobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMobileMenu();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements || focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.requestAnimationFrame(() => {
      const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    });

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`top ${scrolled ? 'scrolled' : ''}`} id="nav" ref={navRef}>
      {/* Contact Info Section */}
      <div className="nav-contact-top" style={{ justifyContent: 'space-between' }}>
        <a href="tel:+13213211740" className="contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="phone-icon-ringing">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>+1 321 321-1740</span>
        </a>
        <a href="/contact" rel="noopener noreferrer" className="contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span style={{ fontWeight: 'bold' }}>hello@hiredbillingsupport.com</span>
        </a>
      </div>
      
      
      <div className={`nav-inner${mobileMenuOpen ? ' mobile-open' : ''}`}>
        <div className="nav-left">
          <button
            ref={mobileToggleRef}
            type="button"
            className={`mobile-menu-toggle${mobileMenuOpen ? ' open' : ''}`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </button>
          <Link href="/" className="logo">
            <img src="/logo.png" alt="Hired Billing Support" style={{ height: '90px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
          </Link>
          {/* MOBILE-ONLY: add the new search trigger beside the hamburger in the mobile header. */}
          {isMobileViewport && (
            <button
              type="button"
              className="mobile-search-toggle"
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              aria-expanded={searchOpen}
              onClick={(event) => toggleSearch(event)}
            >
              <Search size={18} />
            </button>
          )}
        </div>

        {/* MOBILE-ONLY: render the lightweight search input below the mobile header when opened. */}
        {isMobileViewport && searchOpen && (
          <div
            className="mobile-search-field"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              type="search"
              className="mobile-search-input"
              placeholder="Search pages..."
              aria-label="Search"
              value={mobileSearchQuery}
              onChange={(event) => handleMobileSearchChange(event.target.value)}
              onClick={(event) => event.stopPropagation()}
              onMouseDown={(event) => event.stopPropagation()}
            />
            <div
              className="mobile-search-results"
              onClick={(event) => event.stopPropagation()}
            >
              {mobileSearchQuery.trim() ? (
                mobileSearchResults.length > 0 ? (
                  mobileSearchResults.map((item) => (
                    <Link key={item.href} href={item.href} onClick={handleLinkClick}>
                      {item.label}
                    </Link>
                  ))
                ) : (
                  <span className="mobile-search-empty">No matching pages found.</span>
                )
              ) : (
                <span className="mobile-search-empty">Type to search Dental, Medical, Solutions, Company, and more.</span>
              )}
            </div>
          </div>
        )}

          <div className="nav-center">
          <div className={`nav-items${mobileMenuOpen ? ' open' : ''}`} id="mobile-navigation" ref={mobileMenuRef}>
              {/* REMOVED (mobile-only): legacy menuItems mapping produced a pill-button list
                 that duplicates navigation. Deleted to keep only the canonical links.
                 The `menuItems` array remains in the file but is no longer rendered
                 inside the mobile menu. */}
              <Link href="/dental" className="nav-plain-link nav-link" onClick={handleLinkClick}>Dental</Link>
              <Link href="/medical" className="nav-plain-link nav-link" onClick={handleLinkClick}>Medical</Link>
            {/* Solutions Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'solutions' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('solutions')}>
                Solutions <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              {(isMobileViewport ? (mobileMenuOpen && activeDropdown === 'solutions') : true) && (
                <div className={`dropdown-menu dropdown-grid-4 ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                  {isMobileViewport ? (
                    <div className="mobile-accordion">
                      {mobileNavigationSections.find((section) => section.key === 'solutions')?.groups.map((group) => {
                        const subsectionKey = `solutions-${group.id}`;
                        const isGroupOpen = mobileOpenSection === 'solutions' && mobileOpenSubsection === subsectionKey;

                        return (
                          <div key={group.id} className="mobile-accordion-group">
                            <button
                              type="button"
                              className="mobile-accordion-trigger"
                              onClick={() => toggleMobileSubsection('solutions', group.id)}
                              aria-expanded={isGroupOpen}
                            >
                              <span>{group.title}</span>
                              <ChevronDown size={16} />
                            </button>
                            <div className={`mobile-accordion-content${isGroupOpen ? ' open' : ''}`}>
                              {group.links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <div className="dropdown-column">
                        <div className="column-header">BILLING SERVICES</div>
                        <Link href="/solutions/rcm-management" onClick={handleLinkClick}>Revenue Cycle Management</Link>
                        <Link href="/solutions/medical-billing-rcm" onClick={handleLinkClick}>Medical Billing & RCM</Link>
                        <Link href="/solutions/ar-management" onClick={handleLinkClick}>AR Management</Link>
                        <Link href="/solutions/ar-denial-fixation" onClick={handleLinkClick}>Denial Management & Fixation</Link>
                        <Link href="/solutions/old-aging-ar" onClick={handleLinkClick}>Old & Aging AR Recovery</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="column-header">CODING & COMPLIANCE</div>
                        <Link href="/solutions/medical-coding" onClick={handleLinkClick}>Medical Coding</Link>
                        <Link href="/solutions/medical-auditing" onClick={handleLinkClick}>Medical Auditing</Link>
                        <Link href="/solutions/compliance-reporting" onClick={handleLinkClick}>Compliance & Reporting</Link>
                        <Link href="/solutions/quality-assurance" onClick={handleLinkClick}>Quality Assurance</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="column-header">PRACTICE MANAGEMENT</div>
                        <Link href="/solutions/provider-credential" onClick={handleLinkClick}>Provider Credential</Link>
                        <Link href="/solutions/payer-insurer-enrollment" onClick={handleLinkClick}>Payer & Insurer Enrollment</Link>
                        <Link href="/solutions/practice-launch" onClick={handleLinkClick}>Practice Launch</Link>
                        <Link href="/solutions/operations-management" onClick={handleLinkClick}>Operations Management</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="column-header">ADVANCED SOLUTIONS</div>
                        <Link href="/solutions/marketing-patient-engagement" onClick={handleLinkClick}>Marketing & Patient Engagement</Link>
                        <Link href="/solutions/virtual-healthcare-solutions" onClick={handleLinkClick}>Virtual Healthcare Solutions</Link>
                        <Link href="/solutions/analytics-reporting" onClick={handleLinkClick}>Analytics & Reporting</Link>
                      </div>
                    </>
                  )}
                  <TrustBadgesSection onClick={handleLinkClick} />
                </div>
              )}
            </div>

            {/* Who We Serve Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'who-we-serve' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('who-we-serve')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('who-we-serve')}>
                Who We Serve <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              {(isMobileViewport ? (mobileMenuOpen && activeDropdown === 'who-we-serve') : true) && (
                <div className={`dropdown-menu dropdown-grid-3 ${activeDropdown === 'who-we-serve' ? 'active' : ''}`}>
                  {isMobileViewport ? (
                    <div className="mobile-accordion">
                      {mobileNavigationSections.find((section) => section.key === 'who-we-serve')?.groups.map((group) => {
                        const subsectionKey = `who-we-serve-${group.id}`;
                        const isGroupOpen = mobileOpenSection === 'who-we-serve' && mobileOpenSubsection === subsectionKey;

                        return (
                          <div key={group.id} className="mobile-accordion-group">
                            <button
                              type="button"
                              className="mobile-accordion-trigger"
                              onClick={() => toggleMobileSubsection('who-we-serve', group.id)}
                              aria-expanded={isGroupOpen}
                            >
                              <span>{group.title}</span>
                              <ChevronDown size={16} />
                            </button>
                            <div className={`mobile-accordion-content${isGroupOpen ? ' open' : ''}`}>
                              {group.links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <div className="dropdown-column">
                        <div className="column-header">Provider Organizations</div>
                        <Link href="/who-we-serve/start-ups" onClick={handleLinkClick}>Startups Practices</Link>
                        <Link href="/who-we-serve/small-medical-practices" onClick={handleLinkClick}>Small Medical Practices</Link>
                        <Link href="/who-we-serve/medium-large-medical-practices" onClick={handleLinkClick}>Medium & Large Medical Groups</Link>
                        <Link href="/who-we-serve/enterprise-medical-operation" onClick={handleLinkClick}>Enterprise Medical Operation</Link>
                        <Link href="/who-we-serve/fqhc" onClick={handleLinkClick}>Federally Qualified Health Centers</Link>
                        <Link href="/who-we-serve/member-centric-care" onClick={handleLinkClick}>Member Centric Care</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="column-header">Medical Specialties</div>
                        <Link href="/who-we-serve/psychiatry" onClick={handleLinkClick}>Psychiatry</Link>
                        <Link href="/who-we-serve/orthopedic" onClick={handleLinkClick}>Orthopedic</Link>
                        <Link href="/who-we-serve/cardiology" onClick={handleLinkClick}>Cardiology</Link>
                        <Link href="/who-we-serve/obgyn" onClick={handleLinkClick}>Obgyn</Link>
                        <Link href="/who-we-serve/endocrinology" onClick={handleLinkClick}>Endocrinology</Link>
                        <Link href="/who-we-serve/neurology" onClick={handleLinkClick}>Neurology</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="column-header">Organizations & Partners</div>
                        <Link href="/who-we-serve/payers" onClick={handleLinkClick}>Medical Payers</Link>
                        <Link href="/who-we-serve/medical-order-transmission" onClick={handleLinkClick}>
                          Medical Order Transmission
                        </Link>
                        <Link href="/who-we-serve/hbs-marketing" onClick={handleLinkClick}>Marketing Partners</Link>
                        <Link href="/who-we-serve/developer-portal" onClick={handleLinkClick}>Developer</Link>
                        <Link href="/who-we-serve/mso" onClick={handleLinkClick}>MSO / Payer Partners</Link>
                      </div>
                    </>
                  )}
                  <TrustBadgesSection onClick={handleLinkClick} />
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'resources' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('resources')}>
                Resources <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              {(isMobileViewport ? (mobileMenuOpen && activeDropdown === 'resources') : true) && (
                <div className={`dropdown-menu dropdown-grid-2 ${activeDropdown === 'resources' ? 'active' : ''}`}>
                  {isMobileViewport ? (
                    <div className="mobile-direct-links">
                      {mobileNavigationSections
                        .find((section) => section.key === 'resources')
                        ?.groups.flatMap((group) => group.links)
                        .map((link) => (
                          <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                            {link.label}
                          </Link>
                        ))}
                    </div>
                  ) : (
                    <>
                      <div className="dropdown-column">
                        <div className="column-header">Case Studies</div>
                        <Link href="/case-study" onClick={handleLinkClick}>Case Studies</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="column-header">Blog</div>
                        <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                      </div>
                    </>
                  )}
                  <TrustBadgesSection onClick={handleLinkClick} />
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'company' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('company')}>
                Company <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              {(isMobileViewport ? (mobileMenuOpen && activeDropdown === 'company') : true) && (
                <div className={`dropdown-menu dropdown-grid-2 ${activeDropdown === 'company' ? 'active' : ''}`}>
                  {isMobileViewport ? (
                    <div className="mobile-direct-links">
                      {mobileNavigationSections
                        .find((section) => section.key === 'company')
                        ?.groups.flatMap((group) => group.links)
                        .map((link) => (
                          <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                            {link.label}
                          </Link>
                        ))}
                    </div>
                  ) : (
                    <>
                      <div className="dropdown-column">
                        <div className="column-header">ABOUT</div>
                        <Link href="/about" onClick={handleLinkClick}>About Us</Link>
                        <Link href="/article-28-facilities" onClick={handleLinkClick}>Article 28 Facilities</Link>
                      </div>
                      <div className="dropdown-column">
                        <div className="column-header">Consultation</div>
                        <Link href="/explore-partnership" onClick={handleLinkClick}>Explore Partnership</Link>
                        <Link href="/find-service" onClick={handleLinkClick}>Find Service</Link>
                      </div>
                    </>
                  )}
                  <TrustBadgesSection onClick={handleLinkClick} />
                </div>
              )}
            </div>

            {isMobileViewport && (
              <Link
                href="/contact"
                className="btn btn-primary mobile-menu-consultation"
                onClick={handleLinkClick}
              >
                Consultation
                <svg
                  className="arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>

        <div className="nav-right">
          <Link
            href="/enterprise"
            className="nav-enterprise-link"
            onClick={handleLinkClick}
          >
            <House size={16} strokeWidth={1.8} />
            <span>Enterprise</span>
          </Link>
          <div className="nav-menu-footer">
            <div className="nav-cta">
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={closeMobileMenu}
              >
                Consultation
                <svg
                  className="arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
