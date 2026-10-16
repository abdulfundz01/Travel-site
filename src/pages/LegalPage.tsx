import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ShieldCheck, Lock, FileText, AlertCircle } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const { setCookieModalOpen } = useNavigation();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-12">
      {/* Title */}
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Governance & Legal Covenant
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F4ED] tracking-tight">
          Client Privacy & Terms
        </h1>
        <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
          The principles governing our client relationships, confidentiality standards, and contractual engagement terms.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-hairline pb-2">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`pb-2 text-xs uppercase tracking-widest font-semibold transition-colors relative ${
            activeTab === 'privacy'
              ? 'text-[#F7F4ED] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C6A66B]'
              : 'text-[#736E65] hover:text-[#B8B1A5]'
          }`}
        >
          Privacy & Data Protection Notice
        </button>
        <button
          onClick={() => setActiveTab('terms')}
          className={`pb-2 text-xs uppercase tracking-widest font-semibold transition-colors relative ${
            activeTab === 'terms'
              ? 'text-[#F7F4ED] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C6A66B]'
              : 'text-[#736E65] hover:text-[#B8B1A5]'
          }`}
        >
          Terms of Engagement & Booking
        </button>
      </div>

      {/* Draft Disclaimer Notice */}
      <div className="p-4 bg-[#161814] border border-hairline text-xs text-[#B8B1A5] space-y-1">
        <div className="flex items-center gap-2 text-[#C6A66B] font-semibold uppercase tracking-wider text-[10px]">
          <AlertCircle className="w-4 h-4" />
          <span>Professional Legal Review Notice</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          The covenants below represent bespoke draft terms established for the Aurelle Travel digital platform. Commercial deployment across specific sovereign jurisdictions (including Swiss Federal FADP, UK GDPR, and EU GDPR) requires jurisdiction-specific legal confirmation.
        </p>
      </div>

      {/* Content */}
      {activeTab === 'privacy' ? (
        <div className="space-y-8 text-sm text-[#B8B1A5] leading-relaxed bg-[#161814] border border-hairline p-8 sm:p-10">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">1. Commitment to Client Discretion</h2>
            <p>
              Aurelle Travel Ltd. (“Aurelle”, “we”, “our”) operates as a private travel atelier serving high-net-worth individuals, families, and executive travelers worldwide. We hold client confidentiality as an inviolable tenet of our practice. We never sell, monetize, or commercialize our client registers or travel dossiers to third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">2. Information Collected</h2>
            <p>
              We collect information strictly necessary to curate, orchestrate, and safeguard your journey:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Identity and contact credentials (full legal names, verified private contact channels).</li>
              <li>Immigration and transit information required by aviation authorities (passport numbers, entry permits).</li>
              <li>Bespoke itinerary preferences, dietary nuances, emergency medical contacts, and health declarations.</li>
              <li>Encrypted transaction logs and financial settlement verifications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">3. Security & Secure Storage</h2>
            <p>
              All client itineraries and passport records are stored in access-controlled, encrypted data enclaves adhering to ISO 27001 standards. Access is limited solely to the assigned Senior Curator and designated flight operations coordinators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">4. Cookie Preferences & Telemetry</h2>
            <p>
              We utilize essential technical tokens to maintain session integrity, and optional privacy-first metrics to evaluate editorial readership. You may inspect or modify your active permissions at any time.
            </p>
            <button
              onClick={() => setCookieModalOpen(true)}
              className="mt-2 px-4 py-2 bg-[#111310] border border-hairline hover:border-[#C6A66B] text-[#C6A66B] text-xs uppercase tracking-wider font-medium transition-colors"
            >
              Open Cookie Management Console
            </button>
          </section>
        </div>
      ) : (
        <div className="space-y-8 text-sm text-[#B8B1A5] leading-relaxed bg-[#161814] border border-hairline p-8 sm:p-10">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">1. Nature of Curation Services</h2>
            <p>
              Aurelle Travel designs bespoke private itineraries as an independent luxury travel designer and booking agent. Initial consultations and digital proposals do not constitute a confirmed reservation or guarantee of rate or availability until an Engagement Agreement is signed and required deposits are settled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">2. Deposit & Payment Schedules</h2>
            <p>
              Unless otherwise agreed in your bespoke Master Services Covenant:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>A non-refundable design initiation retainer may be requested for complex multi-jurisdictional itineraries.</li>
              <li>A deposit (typically 25% to 50%) is required upon contract execution to secure private estates and chartered aircraft.</li>
              <li>The balance of the journey is payable 60 to 90 days prior to departure.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">3. Amendments, Disruptions & Cancellations</h2>
            <p>
              Because our itineraries involve bespoke single-residence buyouts, private jet charters, and conservation permits, individual cancellation schedules reflect the rigid commitments of local providers. We strongly recommend that all clients maintain comprehensive cancellation and trip interruption insurance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F7F4ED]">4. Governing Law</h2>
            <p>
              All engagements are governed in accordance with the substantive laws of the Canton of Geneva, Switzerland, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      )}
    </div>
  );
};
