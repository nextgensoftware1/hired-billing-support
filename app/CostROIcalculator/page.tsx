'use client';

import { useState, useEffect } from 'react';
import styles from './calculator.module.css';

const HBS_MONTHLY = 1040;
const HBS_ADMIN_FACTOR = 0.25;
const HBS_DENIAL_TARGET = 0.02;
const WORK_DAYS = 22;

interface CalculatorState {
  patients: number;
  adminPP: number;
  docTime: number;
  rate: number;
  denial: number;
  visitVal: number;
}

interface CalculatedValues {
  totalAdminMinDay: number;
  staffCostMo: number;
  denialLoss: number;
  extraPtsLost: number;
  hbsAdminMinDay: number;
  hbsAdminSaved: number;
  staffSaved: number;
  revenueProtected: number;
  extraCapacity: number;
  monthlySave: number;
  annualSave: number;
}

export default function CostROICalculator() {
  const [values, setValues] = useState<CalculatorState>({
    patients: 30,
    adminPP: 10,
    docTime: 15,
    rate: 36,
    denial: 8,
    visitVal: 180,
  });

  const [calculated, setCalculated] = useState<CalculatedValues | null>(null);
  const [animatingFields, setAnimatingFields] = useState<Set<string>>(new Set());
  const [saveSuccess, setSaveSuccess] = useState(false);

  const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));

  const fmt = (n: number) => Math.round(n).toLocaleString();

  const calculate = () => {
    const { patients, adminPP, docTime, rate, denial, visitVal } = values;
    const denialRate = denial / 100;

    // BEFORE
    const totalAdminMinDay = patients * adminPP + docTime;
    const totalAdminMinMo = totalAdminMinDay * WORK_DAYS;
    const staffCostMo = (totalAdminMinMo / 60) * rate;
    const monthlyRevenue = patients * visitVal * WORK_DAYS;
    const denialLoss = monthlyRevenue * denialRate;
    const extraPtsLost = Math.round(docTime / adminPP);

    // AFTER
    const hbsAdminMinDay = Math.round(totalAdminMinDay * HBS_ADMIN_FACTOR);
    const hbsAdminSaved = totalAdminMinDay - hbsAdminMinDay;
    const staffSaved = staffCostMo - HBS_MONTHLY;
    const hbsDenialLoss = monthlyRevenue * HBS_DENIAL_TARGET;
    const revenueProtected = denialLoss - hbsDenialLoss;
    const extraCapacity = Math.round(hbsAdminSaved / adminPP);

    const monthlySave = staffSaved + revenueProtected;
    const annualSave = monthlySave * 12;

    setCalculated({
      totalAdminMinDay,
      staffCostMo,
      denialLoss,
      extraPtsLost,
      hbsAdminMinDay,
      hbsAdminSaved,
      staffSaved,
      revenueProtected,
      extraCapacity,
      monthlySave,
      annualSave,
    });
  };

  useEffect(() => {
    calculate();
  }, [values]);

  const handleValueChange = (key: keyof CalculatorState, val: number) => {
    setValues(prev => ({ ...prev, [key]: val }));
    setAnimatingFields(new Set([...animatingFields, key]));
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const getBarWidth = (value: number, max: number) => {
    return Math.min(100, (value / max) * 100);
  };

  if (!calculated) return null;

  const sliderConfig = [
    {
      key: 'patients' as const,
      label: 'Patients per day',
      min: 5,
      max: 120,
      step: 1,
      suffix: '',
    },
    {
      key: 'adminPP' as const,
      label: 'Admin time per patient',
      min: 3,
      max: 30,
      step: 1,
      suffix: 'min',
    },
    {
      key: 'docTime' as const,
      label: 'Doctor admin time',
      min: 5,
      max: 120,
      step: 5,
      suffix: 'min/day',
    },
    {
      key: 'rate' as const,
      label: 'Staff hourly rate',
      min: 15,
      max: 75,
      step: 1,
      prefix: '$',
    },
    {
      key: 'denial' as const,
      label: 'Denial rate (est.)',
      min: 2,
      max: 25,
      step: 1,
      suffix: '%',
    },
    {
      key: 'visitVal' as const,
      label: 'Avg visit value',
      min: 50,
      max: 600,
      step: 10,
      prefix: '$',
    },
  ];

  const AdminTimeIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const CostIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );

  const DenialIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );

  const CapacityIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );

  const SaveIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14">
      {saveSuccess ? (
        <polyline points="20 6 9 17 4 12" stroke="currentColor" fill="none" strokeWidth="2" />
      ) : (
        <>
          <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="currentColor" fill="none" strokeWidth="2" />
          <polyline points="17 21 17 13 7 13 7 21" stroke="currentColor" fill="none" strokeWidth="2" />
          <polyline points="7 3 7 8 15 8" stroke="currentColor" fill="none" strokeWidth="2" />
        </>
      )}
    </svg>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'var(--paper)' }}>
    <div className={styles.calcShell}>
      {/* HEADER */}
      <div className={styles.calcHeader}>
        <div className={styles.calcHeaderLeft}>
          <div className={styles.calcEyebrow}>Cost & ROI Calculator</div>
          <h1 className={styles.calcTitle}>
            See the real cost of your<br />
            <em>current admin workflow.</em>
          </h1>
          <p className={styles.calcSubtitle}>
            Adjust your practice inputs. The numbers update in real time.
          </p>
        </div>
        <div className={styles.calcHeaderBadge}>Live calculation</div>
      </div>

      {/* BODY */}
      <div className={styles.calcBody}>
        {/* INPUT PANEL */}
        <div className={`${styles.panel} ${styles.inputPanel}`}>
          <div className={styles.panelLabel}>Practice Information</div>

          {sliderConfig.map(config => (
            <div key={config.key} className={styles.sliderGroup}>
              <div className={styles.sliderTop}>
                <span className={styles.sliderName}>{config.label}</span>
                <label className={styles.sliderValWrap}>
                  <input
                    type="number"
                    className={styles.sliderVal}
                    min={config.min}
                    max={config.max}
                    value={values[config.key]}
                    onChange={e =>
                      handleValueChange(config.key, clamp(+e.target.value, config.min, config.max))
                    }
                  />
                  {config.prefix && <span className={styles.sliderValPrefix}>{config.prefix}</span>}
                  {config.suffix && <span className={styles.sliderValSuffix}>{config.suffix}</span>}
                </label>
              </div>
              <input
                type="range"
                className={styles.rangeSlider}
                min={config.min}
                max={config.max}
                step={config.step}
                value={values[config.key]}
                onChange={e =>
                  handleValueChange(config.key, +e.target.value)
                }
              />
            </div>
          ))}

          <button className={styles.saveBtn} onClick={handleSave}>
            <SaveIcon />
            {saveSuccess ? ' Saved' : ' Save Values'}
          </button>
        </div>

        {/* BEFORE PANEL */}
        <div className={`${styles.panel} ${styles.beforePanel}`}>
          <div className={styles.panelLabel}>Before HBS</div>

          <div className={`${styles.metricCard} ${styles.danger}`}>
            <div className={styles.mcLabel}>Admin Time Burden</div>
            <div
              className={`${styles.mcValue} ${
                animatingFields.has('patients') || animatingFields.has('adminPP') || animatingFields.has('docTime')
                  ? styles.animating
                  : ''
              }`}
            >
              {fmt(calculated.totalAdminMinDay)} min/day
            </div>
            <div className={styles.mcSub}>
              <AdminTimeIcon />
              staff + doctor time combined
            </div>
            <div className={`${styles.progressWrap} ${styles.beforeProgress}`}>
              <div
                className={styles.progressFill}
                style={{ width: `${getBarWidth(calculated.totalAdminMinDay, 600)}%` }}
              />
            </div>
          </div>

          <div className={`${styles.metricCard} ${styles.danger}`}>
            <div className={styles.mcLabel}>Monthly Staff Cost</div>
            <div
              className={`${styles.mcValue} ${
                animatingFields.has('adminPP') || animatingFields.has('rate') ? styles.animating : ''
              }`}
            >
              ${fmt(calculated.staffCostMo)}
            </div>
            <div className={styles.mcSub}>
              <CostIcon />
              admin salary overhead
            </div>
            <div className={`${styles.progressWrap} ${styles.beforeProgress}`}>
              <div
                className={styles.progressFill}
                style={{ width: `${getBarWidth(calculated.staffCostMo, 7500)}%` }}
              />
            </div>
          </div>

          <div className={`${styles.metricCard} ${styles.danger}`}>
            <div className={styles.mcLabel}>Revenue at Risk from Denials</div>
            <div
              className={`${styles.mcValue} ${
                animatingFields.has('denial') || animatingFields.has('visitVal') ? styles.animating : ''
              }`}
            >
              ${fmt(calculated.denialLoss)}/mo
            </div>
            <div className={styles.mcSub}>
              <DenialIcon />
              est. monthly revenue denied
            </div>
            <div className={`${styles.progressWrap} ${styles.beforeProgress}`}>
              <div
                className={styles.progressFill}
                style={{ width: `${getBarWidth(values.denial, 25) * 2}%` }}
              />
            </div>
          </div>

          <div className={`${styles.metricCard} ${styles.danger}`}>
            <div className={styles.mcLabel}>Clinical Capacity Lost</div>
            <div className={styles.mcValue}>
              {calculated.extraPtsLost > 5
                ? 'Severely Limited'
                : calculated.extraPtsLost > 2
                  ? 'Limited'
                  : 'Partially Limited'}
            </div>
            <div className={styles.mcSub}>
              <CapacityIcon />
              {calculated.extraPtsLost} patients/day doctor capacity absorbed
            </div>
          </div>
        </div>

        {/* WITH HBS PANEL */}
        <div className={`${styles.panel} ${styles.afterPanel}`}>
          <div className={styles.panelLabel}>With HBS</div>

          <div className={`${styles.metricCardDark} ${styles.good}`}>
            <div className={styles.mcLabelDark}>Admin Time Reduced To</div>
            <div
              className={`${styles.mcValueDark} ${
                animatingFields.has('patients') || animatingFields.has('adminPP') || animatingFields.has('docTime')
                  ? styles.animating
                  : ''
              }`}
            >
              {fmt(calculated.hbsAdminMinDay)} min/day
            </div>
            <span className={styles.mcSave}>Save {fmt(calculated.hbsAdminSaved)} min/day</span>
            <div className={styles.progressWrap} style={{ marginTop: '12px' }}>
              <div
                className={styles.progressFill}
                style={{ width: `${getBarWidth(calculated.hbsAdminMinDay, 600)}%` }}
              />
            </div>
          </div>

          <div className={`${styles.metricCardDark} ${styles.good}`}>
            <div className={styles.mcLabelDark}>Monthly Support Cost</div>
            <div className={`${styles.mcValueDark} ${styles.animating}`}>
              ${fmt(HBS_MONTHLY)}/mo
            </div>
            <span className={styles.mcSave}>Save ${fmt(calculated.staffSaved)} monthly</span>
            <div className={styles.progressWrap} style={{ marginTop: '12px' }}>
              <div
                className={styles.progressFill}
                style={{ width: `${getBarWidth(HBS_MONTHLY, 7500)}%` }}
              />
            </div>
          </div>

          <div className={`${styles.metricCardDark} ${styles.good}`}>
            <div className={styles.mcLabelDark}>Revenue Protected</div>
            <div
              className={`${styles.mcValueDark} ${
                animatingFields.has('denial') || animatingFields.has('visitVal') ? styles.animating : ''
              }`}
            >
              ~${fmt(calculated.revenueProtected)}/mo
            </div>
            <span className={styles.mcSave}>Denial rate reduced to ~2%</span>
            <div className={styles.progressWrap} style={{ marginTop: '12px' }}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${Math.min(
                    100,
                    ((1 - HBS_DENIAL_TARGET / (values.denial / 100)) * 100) / 100 * 100
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className={`${styles.metricCardDark} ${styles.good}`}>
            <div className={styles.mcLabelDark}>Expanded Care Capacity</div>
            <div className={styles.mcValueDark}>Enhanced</div>
            <span className={styles.mcSave}>+{calculated.extraCapacity} more patients/day possible</span>
          </div>
        </div>
      </div>

      {/* FOOTER SUMMARY */}
      <div className={styles.calcFooter}>
        <div className={styles.cfItem}>
          <div
            className={`${styles.cfNum} ${
              animatingFields.size > 0 ? styles.animating : ''
            }`}
          >
            ${fmt(calculated.monthlySave)}
          </div>
          <div className={styles.cfLabel}>Monthly savings</div>
        </div>
        <div className={styles.cfItem}>
          <div
            className={`${styles.cfNum} ${
              animatingFields.size > 0 ? styles.animating : ''
            }`}
          >
            ${fmt(calculated.annualSave)}
          </div>
          <div className={styles.cfLabel}>Annual savings</div>
        </div>
        <div className={styles.cfItem}>
          <div
            className={`${styles.cfNum} ${
              animatingFields.has('adminPP') || animatingFields.has('docTime')
                ? styles.animating
                : ''
            }`}
          >
            +{calculated.extraCapacity} patients
          </div>
          <div className={styles.cfLabel}>Additional capacity</div>
        </div>
      </div>
    </div>
    </div>
  );
}
