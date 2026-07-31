import { SolutionData } from '../solutionTypes';
import { analyticsReporting } from './analytics-reporting';
import { arDenialFixation } from './ar-denial-fixation';
import { arManagement } from './ar-management';
import { complianceReporting } from './compliance-reporting';
import { marketingPatientEngagement } from './marketing-patient-engagement';
import { medicalAuditing } from './medical-auditing';
import { medicalBillingRcm } from './medical-billing-rcm';
import { medicalCoding } from './medical-coding';
import { oldAgingAr } from './old-aging-ar';
import { operationsManagement } from './operations-management';
import { payerInsurerEnrollment } from './payer-insurer-enrollment';
import { practiceLaunch } from './practice-launch';
import { providerCredential } from './provider-credential';
import { qualityAssurance } from './quality-assurance';
import { rcmManagement } from './rcm-management';
import { virtualHealthcareSolutions } from './virtual-healthcare-solutions';

export const siteBaseUrl = 'https://www.hiredbillingsupport.com';

export function getSolutionUrl(slug: string): string {
  return `${siteBaseUrl}/solutions/${slug}`;
}

export const allSolutions: Record<string, SolutionData> = {
  'analytics-reporting': analyticsReporting,
  'ar-denial-fixation': arDenialFixation,
  'ar-management': arManagement,
  'compliance-reporting': complianceReporting,
  'marketing-patient-engagement': marketingPatientEngagement,
  'medical-auditing': medicalAuditing,
  'medical-billing-rcm': medicalBillingRcm,
  'medical-coding': medicalCoding,
  'old-aging-ar': oldAgingAr,
  'operations-management': operationsManagement,
  'payer-insurer-enrollment': payerInsurerEnrollment,
  'practice-launch': practiceLaunch,
  'provider-credential': providerCredential,
  'quality-assurance': qualityAssurance,
  'rcm-management': rcmManagement,
  'virtual-healthcare-solutions': virtualHealthcareSolutions,
};

export const solutions = Object.values(allSolutions);
export const solutionPages = Object.keys(allSolutions);
export const solutionsData = solutions;

export function getSolution(slug: string): SolutionData | null {
  return allSolutions[slug] || null;
}

export function getSolutionSlugs(): string[] {
  return Object.keys(allSolutions);
}

export default allSolutions;