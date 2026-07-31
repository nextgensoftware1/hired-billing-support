import { SolutionData } from '../solutionTypes';
import { startupPractices } from './start-ups';
import { smallMedicalPractices } from './small-medical-practices';
import { mediumLargeMedicalPractices } from './medium-large-medical-practices';
import { memberCentricCare } from './member-centric-care';
import { enterpriseMedicaloperation } from './enterprise-medical-operation';
import { fqhc } from './fqhc';
import { payers } from './payers';
import { medicalOrderTransmission } from './medical-order-transmission';
import { marketplacePartners } from './marketplace-partners';
import { developerPortal } from './developer-portal';
import { psychiatry } from './psychiatry';
import { orthopedic } from './orthopedic';
import { cardiology } from './cardiology';
import { obgyn } from './obgyn';
import { endocrinology } from './endocrinology';
import { neurology } from './neurology';


export const siteBaseUrl = 'https://www.hiredbillingsupport.com';

export function getWhoWeServeUrl(slug: string): string {
  return `${siteBaseUrl}/who-we-serve/${slug}`;
}

export const allWhoWeServe: Record<string, SolutionData> = {
  'start-ups': startupPractices,
  'small-medical-practices': smallMedicalPractices,
  'medium-large-medical-practices': mediumLargeMedicalPractices,
  'member-centric-care': memberCentricCare,
  'enterprise-medical-operation': enterpriseMedicaloperation,
  'fqhc': fqhc,
  'payers': payers,
  'medical-order-transmission': medicalOrderTransmission,
  'hbs-marketing': marketplacePartners,
  'developer-portal': developerPortal,
  'psychiatry': psychiatry,
  'orthopedic': orthopedic,
  'cardiology': cardiology,
  'obgyn': obgyn,
  'endocrinology': endocrinology,
  'neurology': neurology
};

export function getSolution(slug: string): SolutionData | null {
  return allWhoWeServe[slug] || null;
}

export function getSolutionSlugs(): string[] {
  return Object.keys(allWhoWeServe);
}
