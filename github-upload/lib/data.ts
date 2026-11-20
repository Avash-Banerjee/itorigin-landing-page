/**
 * All page content lives here. Regulatory facts were checked against public sources (Nov 2026):
 * DPDP Act 2023 / DPDP Rules 2025, CERT-In Directions (28 Apr 2022), ISO/IEC 27001:2022, AICPA SOC 2,
 * PCI DSS v4.0.1, GDPR, NIST CSF 2.0. Always confirm against the primary text before relying on it.
 */

export type Framework = {
  id: string;
  name: string;
  short: string;
  applies: string;
  asks: string[];
  figures: string;
  help: string;
};

export const frameworks: Framework[] = [
  {
    id: "dpdpa",
    name: "DPDPA 2023 and DPDP Rules 2025",
    short: "DPDPA",
    applies:
      "Anyone who processes digital personal data in India, and organisations abroad that offer goods or services to people in India.",
    asks: [
      "Itemised notice and specific, informed consent before processing",
      "Withdrawal of consent as easy as giving it; rights to access, correction, erasure and grievance redress",
      "Reasonable security safeguards and breach intimation to the Data Protection Board and affected people",
      "Verifiable parental consent for children's data",
      "Extra duties for Significant Data Fiduciaries: an India-based DPO, independent audit and impact assessments",
    ],
    figures:
      "Rules notified Nov 2025. Consent Manager registration from Nov 2026; the main duties apply from May 2027. Penalties reach ₹250 crore.",
    help: "Data mapping and gap assessment, consent and notice design, a rights-request workflow, a breach runbook, and audit readiness for Significant Data Fiduciaries.",
  },
  {
    id: "certin",
    name: "CERT-In Directions, 2022",
    short: "CERT-In",
    applies:
      "Service providers, intermediaries, data centres, body corporates and government organisations operating in India.",
    asks: [
      "Report listed cyber incidents to CERT-In within 6 hours of noticing them",
      "Keep ICT system logs for 180 days, within Indian jurisdiction",
      "Synchronise system clocks to the NIC or NPL time servers",
      "Name a point of contact for CERT-In",
    ],
    figures: "6-hour reporting window. 180-day log retention. Issued 28 April 2022 under section 70B(6) of the IT Act.",
    help: "An incident-reporting runbook with drills, an in-region log pipeline, and 24x7 detection so the six hours are spent responding, not searching.",
  },
  {
    id: "iso27001",
    name: "ISO/IEC 27001:2022",
    short: "ISO 27001",
    applies: "Any organisation that wants an independently certified information security management system (ISMS).",
    asks: [
      "Define scope and run a documented risk assessment",
      "Choose and justify controls in a Statement of Applicability",
      "Operate the controls, then internal audit and management review",
      "Pass the certification audit by an accredited body",
    ],
    figures: "93 Annex A controls in four themes: organisational, people, physical and technological.",
    help: "Scoping, risk register, policy set, control implementation and internal audit. The certificate itself is issued by an accredited certification body; we get you ready and stand beside you at the audit.",
  },
  {
    id: "soc2",
    name: "SOC 2",
    short: "SOC 2",
    applies: "Technology and service companies whose customers ask for assurance over how their data is protected.",
    asks: [
      "Security is required; availability, confidentiality, processing integrity and privacy are optional",
      "Type I tests control design at a point in time",
      "Type II tests operating effectiveness over a period, usually months",
      "An independent CPA firm issues the report",
    ],
    figures: "Based on the AICPA Trust Services Criteria.",
    help: "Readiness assessment, control mapping, evidence automation and a clean hand-off to your auditor.",
  },
  {
    id: "pcidss",
    name: "PCI DSS v4.0.1",
    short: "PCI DSS",
    applies: "Organisations that store, process or transmit payment card data, and the service providers around them.",
    asks: [
      "Twelve principal requirements: network security, secure configuration, data protection, vulnerability management, access control, monitoring and testing, and policy",
      "Scoping that shrinks the cardholder data environment",
      "Regular scans, penetration tests and log review",
    ],
    figures: "The future-dated requirements introduced in v4.0 became mandatory on 31 March 2025.",
    help: "Scope reduction, gap assessment, remediation support and the testing evidence your assessor will ask for.",
  },
  {
    id: "gdpr",
    name: "GDPR",
    short: "GDPR",
    applies: "Organisations that offer goods or services to people in the EU or monitor their behaviour, wherever the organisation is based.",
    asks: [
      "A lawful basis for every processing activity",
      "Records of processing and data protection impact assessments for high-risk processing",
      "Notify the supervisory authority of a personal data breach within 72 hours where required",
      "Data subject rights and appropriate transfer mechanisms",
    ],
    figures: "72-hour breach notification. Fines up to €20 million or 4% of worldwide annual turnover, whichever is higher.",
    help: "Records of processing, impact assessments, transfer reviews and breach-response readiness that also serves DPDPA.",
  },
  {
    id: "nist",
    name: "NIST CSF 2.0 and CIS Controls",
    short: "NIST and CIS",
    applies: "Any organisation that wants a clear, outcome-based way to describe and improve its cybersecurity posture.",
    asks: [
      "NIST CSF 2.0: six functions, Govern, Identify, Protect, Detect, Respond and Recover",
      "A current profile, a target profile and a prioritised plan to close the gap",
      "CIS Critical Security Controls: a practical, prioritised list of safeguards to put in place first",
    ],
    figures: "CSF 2.0 was published in February 2024 and added Govern as a sixth function. CIS Controls v8 has 18 controls.",
    help: "A board-readable maturity assessment and a roadmap tied to budget and risk.",
  },
  {
    id: "iec62443",
    name: "IEC 62443",
    short: "IEC 62443",
    applies: "Owners, integrators and product makers for industrial automation and control systems: plants, grids, pipelines and utilities.",
    asks: [
      "A risk assessment that divides the plant into zones joined by controlled conduits",
      "Target security levels for each zone, with controls to match",
      "Secure development and support practices for suppliers of control-system products",
      "IT and OT segmentation, commonly described with the Purdue model",
    ],
    figures: "A series of standards for industrial control system security, developed by ISA and published by IEC.",
    help: "OT assessment against the standard, segmentation design, monitoring for OT networks and a path to the security levels you need.",
  },
  {
    id: "nciipc",
    name: "NCIIPC and protected systems",
    short: "NCIIPC and CII",
    applies:
      "Operators of systems that the government has notified as a protected system or critical information infrastructure: typically power, telecom, banking, transport and strategic public enterprises.",
    asks: [
      "Section 70 of the IT Act lets the government declare a computer resource a protected system; NCIIPC is the nodal agency for protecting critical information infrastructure",
      "The 2018 protected-system rules expect a documented information security management system and a named CISO",
      "Follow NCIIPC's published guidelines and report incidents to it",
      "Operational technology and control systems are in scope, not just office IT",
    ],
    figures: "NCIIPC was set up in January 2014 under section 70A of the IT Act. Once a system is notified, an attack on it can fall under the cyber terrorism provision, section 66F.",
    help: "CII identification support, gap assessment against NCIIPC's guidelines, OT and ICS security testing, and an ISMS that the regulator will recognise.",
  },
  {
    id: "iso27701",
    name: "ISO/IEC 27701:2025",
    short: "ISO 27701",
    applies: "Organisations that want a certifiable privacy information management system, as an operating backbone for DPDPA and GDPR.",
    asks: [
      "Roles, records and controls for handling personal data, as controller or processor",
      "Privacy risk assessment tied to specific processing activities",
      "Management-system discipline: internal audit, review and continual improvement",
    ],
    figures: "The 2025 edition, published in October 2025, is a standalone standard: it no longer has to be bolted onto ISO 27001.",
    help: "Mapping your DPDPA and GDPR duties onto one privacy management system, then readiness for certification.",
  },
];

/** Who we work with, and the regulator or buyer each sector answers to. */
export const sectors = [
  { name: "Power and utilities", answers: "Protected-system rules, NCIIPC guidelines, IEC 62443", work: "OT and control-system assessments, segmentation reviews, OT monitoring and an ISMS built for critical infrastructure." },
  { name: "Oil and gas", answers: "NCIIPC guidelines, IEC 62443", work: "OT and IoT security for plants and pipelines, secure remote access, and monitoring that understands industrial networks." },
  { name: "Manufacturing", answers: "IEC 62443, ISO 27001, customer security audits", work: "Plant-floor visibility, IT and OT segmentation, backup and recovery, and supplier-audit readiness." },
  { name: "Transportation and telecom", answers: "CERT-In, NCIIPC guidelines", work: "Detection and response for networks that cannot go down, plus incident planning and drills." },
  { name: "Smart cities", answers: "CERT-In, DPDPA, IEC 62443", work: "IoT and IIoT device security, firmware and identity, and privacy review for citizen data." },
];

/** Short reads. Written for the site; replace with your own team's notes. */
export const notes = [
  {
    title: "The first six hours after a breach",
    read: "3 min read",
    body: [
      "CERT-In's clock starts when you notice an incident of a listed type, not when you finish investigating it. So the first job is not root cause. It is a short, factual report: what you saw, which systems, and what you have done so far.",
      "Pre-agree three things: who can declare an incident, who files the report, and who can pull a system offline without asking. Then rehearse it once. Teams that have rehearsed spend hours three to six containing the problem. Teams that have not spend them finding the form.",
    ],
  },
  {
    title: "DPDPA on one page, for a product team",
    read: "4 min read",
    body: [
      "If your product handles personal data of people in India, five things reach your roadmap: a clear notice, consent for each purpose, easy withdrawal, working access, correction and erasure, and a breach process that reaches both the Board and affected people.",
      "Start by mapping where personal data lives. Almost every other duty, including deletion when a purpose ends, depends on knowing that. Then check the dates against the Rules, because different duties start at different times.",
    ],
  },
  {
    title: "Why one evidence set beats five audits",
    read: "3 min read",
    body: [
      "ISO 27001, SOC 2, PCI DSS and DPDPA ask overlapping questions about access, logging, change control, vendors and incidents. Collecting the evidence once and mapping it to each framework removes most of the repeat work.",
      "The catch is ownership. Every control needs a named person and a place the proof lands automatically. Without that, evidence gets rebuilt by hand every audit season.",
    ],
  },
  {
    title: "What a good penetration test report contains",
    read: "3 min read",
    body: [
      "A list of scanner output is not a report. A useful one states the scope and dates, shows each finding with steps to reproduce it, explains the business impact in plain words, and ranks the fix order.",
      "It also includes a retest. A finding is closed when someone has tried the exploit again and failed, not when a ticket is marked done.",
    ],
  },
];

export const questions = [
  { q: "Do you know every system that stores personal data of people in India?", gap: "Start with a data map: systems, owners, purpose and retention. Every other DPDPA duty depends on it." },
  { q: "Do you show a clear notice and take specific, informed consent before processing?", gap: "Redesign notices and consent capture so each purpose is stated plainly and consent is recorded." },
  { q: "Can a person withdraw consent as easily as they gave it, and see, correct or erase their data?", gap: "Build a rights-request workflow with an owner, a deadline and an audit trail." },
  { q: "Could you detect a breach and report it to the Board and to affected people?", gap: "Write and rehearse a breach runbook, and put detection and logging in place to trigger it." },
  { q: "Do you verify parental consent before processing a child's data?", gap: "Add age gating and verifiable parental consent, or confirm in writing that you do not process children's data." },
  { q: "Do you keep security logs and delete personal data when its purpose ends?", gap: "Set retention schedules, automate deletion, and keep logs for the period regulation requires." },
];

export const frameworkTape = ["DPDPA", "CERT-In", "ISO 27001", "SOC 2", "PCI DSS", "GDPR", "NIST CSF 2.0", "CIS Controls", "IEC 62443", "NCIIPC", "ISO 27701"];
