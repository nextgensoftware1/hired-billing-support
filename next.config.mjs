/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  trailingSlash: false,

  images: {
    unoptimized: true
  },

  async redirects() {
  return [
    // ==========================================
    // Legacy Solution URLs
    // ==========================================
    {
      source: '/rcm-management',
      destination: '/solutions/rcm-management',
      permanent: true,
    },
    {
      source: '/medical-billing-rcm',
      destination: '/solutions/medical-billing-rcm',
      permanent: true,
    },
    {
      source: '/medical-billing&rcm',
      destination: '/solutions/medical-billing-rcm',
      permanent: true,
    },
    {
      source: '/ar-management',
      destination: '/solutions/ar-management',
      permanent: true,
    },
    {
      source: '/ar-denial-fixation',
      destination: '/solutions/ar-denial-fixation',
      permanent: true,
    },
    {
      source: '/old-aging-ar',
      destination: '/solutions/old-aging-ar',
      permanent: true,
    },
    {
      source: '/medical-coding',
      destination: '/solutions/medical-coding',
      permanent: true,
    },
    {
      source: '/medical-auditing',
      destination: '/solutions/medical-auditing',
      permanent: true,
    },
    {
      source: '/compliance-reporting',
      destination: '/solutions/compliance-reporting',
      permanent: true,
    },
    {
      source: '/quality-assurance',
      destination: '/solutions/quality-assurance',
      permanent: true,
    },
    {
      source: '/provider-credential',
      destination: '/solutions/provider-credential',
      permanent: true,
    },
    {
      source: '/payer-insurer-enrollment',
      destination: '/solutions/payer-insurer-enrollment',
      permanent: true,
    },
    {
      source: '/practice-launch',
      destination: '/solutions/practice-launch',
      permanent: true,
    },
    {
      source: '/operations-management',
      destination: '/solutions/operations-management',
      permanent: true,
    },
    {
      source: '/marketing-patient-engagement',
      destination: '/solutions/marketing-patient-engagement',
      permanent: true,
    },
    {
      source: '/virtual-healthcare-solutions',
      destination: '/solutions/virtual-healthcare-solutions',
      permanent: true,
    },
    {
      source: '/analytics-reporting',
      destination: '/solutions/analytics-reporting',
      permanent: true,
    },

    // ==========================================
    // Legacy Who We Serve URLs
    // ==========================================
    {
      source: '/start-ups',
      destination: '/who-we-serve/start-ups',
      permanent: true,
    },
    {
      source: '/small-medical-practices',
      destination: '/who-we-serve/small-medical-practices',
      permanent: true,
    },
    {
      source: '/medium-large-medical-practices',
      destination: '/who-we-serve/medium-large-medical-practices',
      permanent: true,
    },
    {
      source: '/member-centric-care',
      destination: '/who-we-serve/member-centric-care',
      permanent: true,
    },
    {
      source: '/enterprise-medical-operation',
      destination: '/who-we-serve/enterprise-medical-operation',
      permanent: true,
    },
    {
      source: '/fqhc',
      destination: '/who-we-serve/fqhc',
      permanent: true,
    },
    {
      source: '/psychiatry',
      destination: '/who-we-serve/psychiatry',
      permanent: true,
    },
    {
      source: '/orthopedic',
      destination: '/who-we-serve/orthopedic',
      permanent: true,
    },
    {
      source: '/cardiology',
      destination: '/who-we-serve/cardiology',
      permanent: true,
    },
    {
      source: '/obgyn',
      destination: '/who-we-serve/obgyn',
      permanent: true,
    },
    {
      source: '/endocrinology',
      destination: '/who-we-serve/endocrinology',
      permanent: true,
    },
    {
      source: '/neurology',
      destination: '/who-we-serve/neurology',
      permanent: true,
    },
    {
      source: '/payers',
      destination: '/who-we-serve/payers',
      permanent: true,
    },
    {
      source: '/medical-order-transmission',
      destination: '/who-we-serve/medical-order-transmission',
      permanent: true,
    },
    {
      source: '/hbs-marketing',
      destination: '/who-we-serve/hbs-marketing',
      permanent: true,
    },
    {
      source: '/developer-portal',
      destination: '/who-we-serve/developer-portal',
      permanent: true,
    },
    {
      source: '/provider-portal',
      destination: '/who-we-serve/developer-portal',
      permanent: true,
    },

    // ==========================================
    // Legacy Calculator URL
    // ==========================================
    {
      source: '/cost-roi',
      destination: '/CostROIcalculator',
      permanent: true,
    },

    // ==========================================
    // Legacy Blog URLs
    // ==========================================
    {
      source: '/blog/revenue-cycle-management',
      destination: '/blog/revenue-cycle-management-services',
      permanent: true,
    },
  ];
},

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/(api|_next|private|tmp)/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },

  experimental: {
    cpus: 1,
    workerThreads: false,
  }
};

export default nextConfig;