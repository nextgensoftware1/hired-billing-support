// app/utils/getHeroComponent.ts

import { HeroArDenialFixation, HeroArManagement, HeroComplianceReporting, HeroMedicalAuditing, HeroMedicalCoding, HeroQualityAssurance, HeroRcmManagement, HeroMedicalBillingRcm, HeroOldAgingAr, HeroProviderCredential, HeroPayerInsurerEnrollment, HeroPracticeLaunch, HeroOperationsManagement, HeroMarketingPatientEngagement, HeroVirtualHealthcareSolutions, HeroAnalyticsReporting, HeroDeveloperPortal, HeroPsychiatry, HeroOrthopedic, HeroCardiology, HeroObgyn, HeroEndocrinology, HeroNeurology } from '@/app/components/heroes';
import type { ComponentType } from 'react';
import type { SolutionData } from '@/app/data/solutionTypes';

interface HeroComponentProps {
  solution: SolutionData;
}

// Map each solution slug to its hero component
const heroComponentMap: Record<string, ComponentType<any>> = {
  'ar-denial-fixation': HeroArDenialFixation,
  'ar-management': HeroArManagement,
  'compliance-reporting': HeroComplianceReporting,
  'medical-auditing': HeroMedicalAuditing,
  'medical-coding': HeroMedicalCoding,
  'quality-assurance': HeroQualityAssurance,
  'rcm-management': HeroRcmManagement,
  'medical-billing-rcm': HeroMedicalBillingRcm,
  'old-aging-ar': HeroOldAgingAr,
  'provider-credential': HeroProviderCredential,
  'payer-insurer-enrollment': HeroPayerInsurerEnrollment,
  'practice-launch': HeroPracticeLaunch,
  'operations-management': HeroOperationsManagement,
  'marketing-patient-engagement': HeroMarketingPatientEngagement,
  'virtual-healthcare-solutions': HeroVirtualHealthcareSolutions,
  'analytics-reporting': HeroAnalyticsReporting,
  'developer-portal': HeroDeveloperPortal,
  'psychiatry': HeroPsychiatry,
  'orthopedic': HeroOrthopedic,
  'cardiology': HeroCardiology,
  'obgyn': HeroObgyn,
  'endocrinology': HeroEndocrinology,
  'neurology': HeroNeurology,
  // Add more solutions as they're created:
  // 'rcm-management': HeroRcmManagement,
  // 'medical-billing-rcm': HeroMedicalBilling,
};

export function getHeroComponent(slug: string): ComponentType<any> {
  return heroComponentMap[slug] || HeroArDenialFixation; // fallback to ar-denial-fixation
}
