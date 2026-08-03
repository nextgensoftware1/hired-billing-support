// app/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { House } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Inject phone ringing animation styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = phoneRingingStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

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

  // Handle dropdown toggle
  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdown on mouse leave
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when a link is clicked
  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  // Handle mouse enter for dropdown
  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  // Handle mouse leave for dropdown
  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`top ${scrolled ? 'scrolled' : ''}`} id="nav">
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
      
      
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/" className="logo">
            <img src="/logo.png" alt="Hired Billing Support" style={{ height: '90px', width: 'auto' }} />
          </Link>
          <button
            type="button"
            className={`mobile-menu-toggle${mobileMenuOpen ? ' open' : ''}`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="nav-center">
          <div className={`nav-items${mobileMenuOpen ? ' open' : ''}`}>
<Link href="/dental" className="nav-plain-link nav-link" onClick={handleLinkClick}>Dental</Link>
          <Link href="/medical" className="nav-plain-link nav-link" onClick={handleLinkClick}>Medical</Link>

            {/* Solutions Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'solutions' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('solutions')}>
                Solutions <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className={`dropdown-menu dropdown-grid-4 ${activeDropdown === 'solutions' ? 'active' : ''}`}>
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
                <TrustBadgesSection onClick={handleLinkClick} />
              </div>
            </div>

            {/* Who We Serve Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'who-we-serve' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('who-we-serve')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('who-we-serve')}>
                Who We Serve <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className={`dropdown-menu dropdown-grid-3 ${activeDropdown === 'who-we-serve' ? 'active' : ''}`}>
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
                  {/* <Link href="/hire/enterprise" onClick={handleLinkClick}>Enterprise & Billing Specialists</Link> */}
                  <Link href="/who-we-serve/mso" onClick={handleLinkClick}>MSO / Payer Partners</Link>
                </div>
                <TrustBadgesSection onClick={handleLinkClick} />
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'resources' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('resources')}>
                Resources <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className={`dropdown-menu dropdown-grid-2 ${activeDropdown === 'resources' ? 'active' : ''}`}>
                <div className="dropdown-column">
                  <div className="column-header">Case Studies</div>
                  <Link href="/case-study" onClick={handleLinkClick}>Case Studies</Link>
                </div>
                <div className="dropdown-column">
                  <div className="column-header">Blog</div>
                  <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                </div>
                <TrustBadgesSection onClick={handleLinkClick} />
              </div>
            </div>

            {/* Company Dropdown */}
            <div className={`nav-dropdown${activeDropdown === 'company' ? ' active' : ''}`} onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown('company')}>
                Company <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className={`dropdown-menu dropdown-grid-2 ${activeDropdown === 'company' ? 'active' : ''}`}>
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
                <TrustBadgesSection onClick={handleLinkClick} />
              </div>
            </div>
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
