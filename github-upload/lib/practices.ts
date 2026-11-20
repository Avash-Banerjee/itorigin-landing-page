/**
 * Content from the "Nexshield Cybersecurity Portfolio" deck (twelve practices, four engagement models,
 * cyber resilience). Practice names, groupings and capabilities follow the deck.
 */
export type Practice = {
  id: string;
  name: string;
  line: string;
  groups: { title: string; items: string[] }[];
  model: string;
};

export const practices: Practice[] = [
  {
    id: "grc",
    name: "Cyber Strategy, Risk and GRC",
    line: "The advisory layer: strategy, risk and compliance, backed by GRC technology.",
    groups: [
      { title: "Strategy", items: ["Strategy and roadmap", "Maturity assessment", "Operating model", "Architecture advisory"] },
      { title: "Risk", items: ["Cyber risk assessment", "Risk quantification", "Risk register and treatment", "Third-party and supply-chain risk"] },
      { title: "Compliance", items: ["ISO 27001", "NIST and CIS Controls", "SOC 2 and PCI DSS", "Regulatory and sector compliance", "Cybersecurity audits"] },
      { title: "GRC technology", items: ["GRC implementation", "Policy and control management", "Audit management", "Continuous control monitoring"] },
    ],
    model: "Consulting, implementation and recurring GRC managed services.",
  },
  {
    id: "network",
    name: "Network and Infrastructure Security",
    line: "Traditional infrastructure protection, with the visibility to run it.",
    groups: [
      { title: "Network security", items: ["Next-gen firewall and UTM", "WAF and secure web gateway", "DNS security", "NAC, VPN and remote access", "Network and micro-segmentation"] },
      { title: "Network visibility", items: ["NIDS and NDR", "Network traffic analysis", "Network behaviour analytics", "Network monitoring"] },
      { title: "Infrastructure", items: ["Server security and OS hardening", "Configuration compliance", "Infrastructure assessment", "Data-centre security", "Security architecture"] },
    ],
    model: "Product, deployment, integration, annual maintenance and managed service.",
  },
  {
    id: "endpoint",
    name: "Endpoint and Workplace Security",
    line: "Protecting devices, email and the modern workplace.",
    groups: [
      { title: "Endpoint protection", items: ["Antivirus and NGAV", "EPP", "EDR", "XDR", "MDR"] },
      { title: "Endpoint management", items: ["UEM and MDM", "Patch and configuration management", "Application control", "Device and USB control"] },
      { title: "Workplace", items: ["Email security", "Microsoft 365 and collaboration security", "Browser security", "Remote workforce security"] },
    ],
    model: "Licensing, deployment and managed endpoint security.",
  },
  {
    id: "identity",
    name: "Identity and Access Security",
    line: "A standalone practice, from identity lifecycle to Zero Trust.",
    groups: [
      { title: "IAM", items: ["Identity management", "SSO and MFA", "Federation", "Identity lifecycle"] },
      { title: "IGA", items: ["Identity governance", "Access certification", "Role management", "Joiner, mover, leaver"] },
      { title: "PAM", items: ["Privileged accounts", "Session management", "Password vaulting", "Just-in-time access", "Service accounts"] },
      { title: "Zero Trust", items: ["Assessment and architecture", "ZTNA", "Adaptive access", "Continuous authentication"] },
    ],
    model: "Assessment, architecture, implementation, then managed IAM and PAM.",
  },
  {
    id: "soc",
    name: "Security Operations and MDR",
    line: "From SOC design to managed detection and response.",
    groups: [
      { title: "SOC", items: ["Consulting and design", "Implementation", "Transformation", "Managed and co-managed", "SOC-as-a-Service"] },
      { title: "SIEM", items: ["Implementation", "Migration", "Log management", "Use-case development", "Detection engineering"] },
      { title: "SOAR", items: ["Security automation", "Playbooks", "Incident orchestration", "Automated response"] },
      { title: "XDR and MDR", items: ["EDR monitoring", "XDR", "Managed threat detection", "Managed response"] },
    ],
    model: "SOC engineering covers log onboarding, detection rules, MITRE ATT&CK mapping, tuning, and SLA and KPI reporting.",
  },
  {
    id: "ir",
    name: "Threat Intel and Incident Response",
    line: "A distinct capability that sits alongside the SOC.",
    groups: [
      { title: "Threat intelligence", items: ["Strategic, tactical and technical intelligence", "IOC management", "Threat actor intelligence", "Dark-web monitoring", "Brand monitoring"] },
      { title: "Threat hunting", items: ["Proactive hunting", "Hypothesis-driven hunting", "MITRE ATT&CK hunting", "Threat discovery"] },
      { title: "Incident response", items: ["IR planning", "IR retainer", "Ransomware response", "Malware investigation", "Account compromise and BEC"] },
      { title: "Digital forensics", items: ["Disk forensics", "Memory forensics", "Network forensics", "Email forensics", "Cloud forensics"] },
    ],
    model: "Retainer, on-demand response and proactive hunting.",
  },
  {
    id: "testing",
    name: "Vulnerability and Security Testing",
    line: "Security testing and exposure management, beyond VA and PT.",
    groups: [
      { title: "Vulnerability management", items: ["Infrastructure VA", "Server and database VA", "Cloud and endpoint VA", "Continuous vulnerability management"] },
      { title: "Penetration testing", items: ["Network and wireless", "Web application and API", "Mobile", "Cloud", "Internal and external"] },
      { title: "Advanced testing", items: ["Red team", "Purple team", "Adversary simulation", "Breach and attack simulation"] },
      { title: "Exposure management", items: ["Attack surface management", "External surface discovery", "Shadow IT discovery", "Digital risk monitoring"] },
    ],
    model: "Assurance (test, audit, validate) and managed vulnerability management.",
  },
  {
    id: "appsec",
    name: "Application and DevSecOps Security",
    line: "Securing software from code to container.",
    groups: [
      { title: "App security", items: ["Web application security", "API security", "Mobile app security", "Architecture review", "Secure coding assessment"] },
      { title: "DevSecOps", items: ["Secure SDLC", "CI/CD security", "SAST, DAST and IAST", "RASP", "Secrets management"] },
      { title: "Supply chain", items: ["SCA", "SBOM", "Open-source security", "Dependency security", "Repository security"] },
      { title: "Containers", items: ["Container security", "Kubernetes security", "Image security", "Infrastructure-as-code security"] },
    ],
    model: "Assessment, pipeline integration and ongoing assurance.",
  },
  {
    id: "cloud",
    name: "Cloud and Data Security",
    line: "Protecting workloads, SaaS and data wherever they live.",
    groups: [
      { title: "Cloud security", items: ["Cloud security assessment", "Cloud architecture", "Cloud migration security", "CSPM", "CWPP", "CNAPP", "CIEM", "SaaS security"] },
      { title: "Data security", items: ["Data discovery", "Data classification", "Data security assessment", "DLP", "Database security", "Encryption", "Key management", "Tokenization", "Data masking"] },
    ],
    model: "Assessment, architecture and platform implementation.",
  },
  {
    id: "privacy",
    name: "Privacy and Data Governance",
    line: "Distinct from technical data security: governance, regulation and consent.",
    groups: [
      { title: "Privacy", items: ["Privacy assessment", "Governance and framework", "PIA and DPIA", "Data mapping and RoPA", "Data-subject rights"] },
      { title: "Regulations", items: ["DPDP", "GDPR", "Sector-specific privacy requirements", "Cross-border data requirements"] },
      { title: "Privacy technology", items: ["Privacy management platforms", "Consent management", "Data discovery and classification", "Privacy automation"] },
    ],
    model: "Advisory, platform implementation and managed privacy operations.",
  },
  {
    id: "ot",
    name: "OT, IoT and Critical Infrastructure",
    line: "A differentiated practice for industrial and critical environments.",
    groups: [
      { title: "OT and ICS", items: ["OT assessment", "Risk and maturity", "Purdue model", "IEC 62443", "IT and OT segmentation"] },
      { title: "OT monitoring", items: ["OT IDS and NDR", "Asset discovery", "Network monitoring", "OT SOC"] },
      { title: "OT protection", items: ["Industrial firewall", "Secure remote access", "OT endpoint", "Application allowlisting", "Backup and recovery"] },
      { title: "IoT", items: ["IoT and IIoT security", "Device security", "Firmware security", "IoT penetration testing", "IoT identity"] },
    ],
    model: "Power, oil and gas, manufacturing, transportation, telecom, smart cities and utilities.",
  },
  {
    id: "ai",
    name: "AI and Emerging Technology Security",
    line: "A growth practice for governing and securing AI.",
    groups: [
      { title: "AI governance", items: ["Governance framework", "AI policy", "AI risk assessment", "Responsible AI", "AI compliance and inventory"] },
      { title: "AI security", items: ["AI security assessment", "GenAI and LLM security", "Prompt injection assessment", "Model security", "AI red teaming"] },
      { title: "AI-enabled security", items: ["AI SOC", "AI security analyst", "AI-assisted threat hunting", "AI-assisted incident response", "AI threat intelligence"] },
      { title: "Emerging technology", items: ["5G and edge security", "Quantum-safe security", "Blockchain security", "Digital twin security", "Autonomous systems"] },
    ],
    model: "Advisory first, then assessment and tooling.",
  },
];

export const layers = [
  { name: "Advisory services", items: ["Cyber strategy", "Cyber risk", "GRC", "Security architecture", "Compliance", "OT advisory", "Privacy", "AI governance"] },
  { name: "Technology services", items: ["Network security", "Endpoint security", "IAM and PAM", "Cloud security", "Data security", "App security", "OT security", "Security platforms"] },
  { name: "Managed services", items: ["SOC", "MDR", "SIEM", "XDR", "Managed IAM", "Managed security", "Managed firewall", "Vulnerability management"] },
];

export const engage = [
  { name: "Advisory", flow: "Assess, advise, architect", items: ["Maturity assessment", "Cloud assessment", "IAM assessment", "OT assessment"] },
  { name: "Implementation", flow: "Design, integrate, deploy", items: ["Firewall", "SIEM", "IAM and PAM", "Cloud security"] },
  { name: "Assurance", flow: "Test, audit, validate", items: ["VA and PT", "Security audit", "Compliance assessment", "Configuration audit"] },
  { name: "Managed services", flow: "Monitor, operate, detect, respond, optimise", items: ["SOC and MDR", "Managed firewall", "Managed IAM", "Vulnerability management"] },
];

export const resilience = [
  { name: "Prepare", items: ["Cyber risk", "Business continuity", "Incident response planning"] },
  { name: "Protect", items: ["Security controls", "Resilience architecture", "Backup"] },
  { name: "Respond", items: ["Incident response", "Crisis management", "Forensics"] },
  { name: "Recover", items: ["Disaster recovery", "Cyber recovery", "Ransomware recovery", "Business restoration"] },
];
