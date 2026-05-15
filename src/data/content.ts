/* ══════════════════════════════════════════════════════════════════════
   TRIANGLE BLACK — CONTENT DATA WITH FULL i18n SUPPORT
   Original structure preserved, all content translatable
══════════════════════════════════════════════════════════════════════ */

export type Lang = 'en' | 'ar' | 'fr';

// ══════════════════════════════════════════════════════════════════════
// SERVICE ITEM (Translated)
// ══════════════════════════════════════════════════════════════════════
export interface ServiceItem {
  id: string;
  category: 'supplies' | 'procurement' | 'maintenance' | 'renovations';
  iconName: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  systems: Record<Lang, string[]>;
  features: Record<Lang, string[]>;
}

// ══════════════════════════════════════════════════════════════════════
// PROJECT ITEM (Translated)
// ══════════════════════════════════════════════════════════════════════
export interface ProjectItem {
  id: string;
  category: string;
  imageUrl: string;
  year?: string;
  title: Record<Lang, string>;
  client: Record<Lang, string>;
  location: Record<Lang, string>;
  scope: Record<Lang, string>;
  timeline: Record<Lang, string>;
  tags: Record<Lang, string[]>;
  kpis: Array<{ label: Record<Lang, string>; value: string }>;
}

// ══════════════════════════════════════════════════════════════════════
// TRANSLATION INTERFACE
// ══════════════════════════════════════════════════════════════════════
export interface Translation {
  title: string;
  subtitle: string;
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    deploy: string;
    quote: string;
  };
  hero: {
    badge: string;
    headline: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    kpi1: string;
    kpi1Sub: string;
    kpi2: string;
    kpi2Sub: string;
    kpi3: string;
    kpi3Sub: string;
    kpi4: string;
    kpi4Sub: string;
    scrollLabel: string;
    activeScene: string;
    sceneDelivery: string;
    sceneQuality: string;
    sceneTrusted: string;
  };
  highlight: {
    badge: string;
    heading: string;
    desc: string;
    timeline: Array<{ year: string; title: string; description: string }>;
    quote: string;
    quoteAuthor: string;
  };
  about: {
    badge: string;
    heading: string;
    subheading: string;
    p1: string;
    p2: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    valuesDesc: string;
    principlesTitle: string;
    whyChooseTitle: string;
    whyChooseSub: string;
    whyChooseDesc: string;
    whyChooseItems: string[];
    statsOem: string;
    statsEmergency: string;
    statsQuality: string;
    clientsTitle: string;
    operationalSecurity: string;
    operationalSecuritySub: string;
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    filterAll: string;
    filterSupplies: string;
    filterProcurement: string;
    filterMaintenance: string;
    filterRenovation: string;
    requestBtn: string;
    subsystemsLabel: string;
    customNoteTitle: string;
    customNoteDesc: string;
  };
  projects: {
    badge: string;
    heading: string;
    subheading: string;
    viewSpecs: string;
    clientLabel: string;
    durationLabel: string;
    scopeLabel: string;
    closeBtn: string;
    filterAll: string;
    filterRenovations: string;
    filterMaintenance: string;
    filterProcurement: string;
    operationsClass: string;
    enterpriseSla: string;
    deliverableLogs: string;
    oemNote: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    brandsBadge: string;
    items: Array<{ quote: string; author: string; role: string }>;
  };
  contact: {
    badge: string;
    heading: string;
    desc: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formPhone: string;
    formService: string;
    formMsg: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    directContact: string;
    headquarters: string;
    headquartersSub: string;
    emailLabel: string;
    emailSub: string;
    phoneLabel: string;
    phoneSub: string;
  };
  footer: {
    ctaHeading: string;
    ctaDesc: string;
    ctaButton: string;
    brandDesc: string;
    oemBadge: string;
    navTitle: string;
    servicesTitle: string;
    resourcesTitle: string;
    copyright: string;
    engineered: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  whatsapp: {
    headerTitle: string;
    headerSub: string;
    welcomeMsg: string;
    actionLabel: string;
    launchBtn: string;
    dispatchTime: string;
    tooltip: string;
  };
}

// ══════════════════════════════════════════════════════════════════════
// SERVICES DATA - YOUR ORIGINAL DATA WITH TRANSLATIONS
// ══════════════════════════════════════════════════════════════════════
export const servicesData: ServiceItem[] = [
  {
    id: 'serv-1',
    category: 'supplies',
    iconName: 'Wrench',
    title: {
      en: 'Hotel Engineering Supplies',
      ar: 'مستلزمات الهندسة الفندقية',
      fr: 'Fournitures d\'Ingénierie Hôtelière',
    },
    desc: {
      en: 'HVAC, heavy electrical equipment, automated plumbing controls, circulating pumps, premium OEM spare parts, and durable mechanical installation materials.',
      ar: 'أنظمة التكييف والتبريد، المعدات الكهربائية الثقيلة، أنظمة السباكة الآلية، مضخات التدوير، قطع غيار OEM الأصلية، ومواد التركيب الميكانيكية المتينة.',
      fr: 'CVC, équipements électriques lourds, contrôles de plomberie automatisés, pompes de circulation, pièces de rechange OEM premium et matériaux d\'installation mécanique durables.',
    },
    systems: {
      en: ['Air Cooled Chillers', 'Variable Frequency Drives (VFDs)', 'Boiler Elements', 'Sanitary Cartridges'],
      ar: ['مبردات هوائية التبريد', 'محركات التردد المتغير (VFDs)', 'عناصر الغلايات', 'خراطيش صحية'],
      fr: ['Refroidisseurs à air', 'Variateurs de fréquence (VFD)', 'Éléments de chaudière', 'Cartouches sanitaires'],
    },
    features: {
      en: ['Authorized Brand Sourcing', 'Original Guarantee Certificates', 'Emergency Stock Reserves'],
      ar: ['توريد العلامات التجارية المعتمدة', 'شهادات الضمان الأصلية', 'احتياطي مخزون الطوارئ'],
      fr: ['Approvisionnement de marques autorisées', 'Certificats de garantie originaux', 'Réserves de stock d\'urgence'],
    },
  },
  {
    id: 'serv-2',
    category: 'procurement',
    iconName: 'Truck',
    title: {
      en: 'Procurement & Supply Chain',
      ar: 'المشتريات وسلسلة التوريد',
      fr: 'Approvisionnement et Chaîne Logistique',
    },
    desc: {
      en: 'Strategic global sourcing, direct vendor coordination, lifecycle inventory optimization, cost efficiency audits, and operational logistics management.',
      ar: 'التوريد العالمي الاستراتيجي، التنسيق المباشر مع الموردين، تحسين المخزون خلال دورة الحياة، تدقيق كفاءة التكلفة، وإدارة اللوجستيات التشغيلية.',
      fr: 'Approvisionnement stratégique mondial, coordination directe des fournisseurs, optimisation des stocks du cycle de vie, audits d\'efficacité des coûts et gestion logistique opérationnelle.',
    },
    systems: {
      en: ['ERP Procurement Integration', 'Consolidated Freight Solutions', 'Customs Clearance Assurance'],
      ar: ['تكامل مشتريات ERP', 'حلول الشحن الموحدة', 'ضمان التخليص الجمركي'],
      fr: ['Intégration ERP des achats', 'Solutions de fret consolidé', 'Assurance dédouanement'],
    },
    features: {
      en: ['Cost-Plus Pricing Models', 'Strict SLA Deadlines', 'Multi-Vendor Consolidation'],
      ar: ['نماذج تسعير التكلفة الإضافية', 'مواعيد SLA صارمة', 'توحيد الموردين المتعددين'],
      fr: ['Modèles de prix coût-plus', 'Délais SLA stricts', 'Consolidation multi-fournisseurs'],
    },
  },
  {
    id: 'serv-3',
    category: 'maintenance',
    iconName: 'ShieldCheck',
    title: {
      en: 'Advanced Maintenance Solutions',
      ar: 'حلول الصيانة المتقدمة',
      fr: 'Solutions de Maintenance Avancées',
    },
    desc: {
      en: 'Preventive automated maintenance calendars, structural technical inspections, live troubleshooting, thermal mapping, and emergency immediate deployments.',
      ar: 'جداول الصيانة الوقائية الآلية، الفحوصات الفنية الهيكلية، استكشاف الأخطاء المباشر، الخرائط الحرارية، والانتشار الفوري للطوارئ.',
      fr: 'Calendriers de maintenance préventive automatisés, inspections techniques structurelles, dépannage en direct, cartographie thermique et déploiements d\'urgence immédiats.',
    },
    systems: {
      en: ['Vibration Analysis on Pumps', 'Thermal Electrical Scans', 'Water Treatment Quality Audits'],
      ar: ['تحليل الاهتزازات على المضخات', 'المسح الحراري الكهربائي', 'تدقيق جودة معالجة المياه'],
      fr: ['Analyse vibratoire des pompes', 'Scans électriques thermiques', 'Audits qualité traitement eau'],
    },
    features: {
      en: ['24/7 Hotline Support', 'Certified OEM Technicians', 'Zero Down-time Guarantees'],
      ar: ['دعم الخط الساخن 24/7', 'فنيون OEM معتمدون', 'ضمانات عدم التوقف'],
      fr: ['Support hotline 24h/24', 'Techniciens OEM certifiés', 'Garanties zéro temps d\'arrêt'],
    },
  },
  {
    id: 'serv-4',
    category: 'renovations',
    iconName: 'Cpu',
    title: {
      en: 'Projects & Back-Of-House Renovations',
      ar: 'المشاريع وتجديدات المرافق الخلفية',
      fr: 'Projets et Rénovations Arrière-Scène',
    },
    desc: {
      en: 'Hotel mechanical room renovation support, meticulous MEP contractor coordination, green building technical upgrades, and high-fidelity site supervision.',
      ar: 'دعم تجديد غرف الميكانيكا الفندقية، التنسيق الدقيق مع مقاولي MEP، الترقيات التقنية للمباني الخضراء، والإشراف عالي الدقة على الموقع.',
      fr: 'Support de rénovation des salles mécaniques d\'hôtel, coordination méticuleuse des entrepreneurs MEP, mises à niveau techniques de bâtiments verts et supervision de site haute fidélité.',
    },
    systems: {
      en: ['Chilled Water Pipe Retrofits', 'Energy Efficient LED Automation', 'Smart BMS Controls Upgrade'],
      ar: ['تحديث أنابيب المياه المبردة', 'أتمتة LED الموفرة للطاقة', 'ترقية أنظمة BMS الذكية'],
      fr: ['Rénovation tuyauterie eau glacée', 'Automatisation LED éco-énergétique', 'Mise à niveau contrôles BMS'],
    },
    features: {
      en: ['Phased Installation Plans', 'Full Commissioning Sign-offs', 'Energy Payback Calculations'],
      ar: ['خطط التركيب المرحلية', 'موافقات التشغيل الكاملة', 'حسابات استرداد الطاقة'],
      fr: ['Plans d\'installation phasés', 'Approbations mise en service', 'Calculs retour énergétique'],
    },
  },
  {
    id: 'serv-5',
    category: 'supplies',
    iconName: 'Layers',
    title: {
      en: 'Kitchen & Laundry Technical Spares',
      ar: 'قطع الغيار التقنية للمطبخ والمغسلة',
      fr: 'Pièces Techniques Cuisine et Blanchisserie',
    },
    desc: {
      en: 'Thermostats, commercial custom seals, heavy heating rods, professional drainage components, and motorized exhaust ventilation elements.',
      ar: 'منظمات الحرارة، الأختام التجارية المخصصة، قضبان التسخين الثقيلة، مكونات الصرف المهنية، وعناصر تهوية العادم الآلية.',
      fr: 'Thermostats, joints personnalisés commerciaux, résistances chauffantes lourdes, composants de drainage professionnels et éléments de ventilation d\'échappement motorisés.',
    },
    systems: {
      en: ['Combi Oven Microcontrollers', 'Rotary Steam Valves', 'High Capacity Bearings Sets'],
      ar: ['متحكمات أفران الكومبي الدقيقة', 'صمامات البخار الدوارة', 'مجموعات المحامل عالية السعة'],
      fr: ['Microcontrôleurs fours combi', 'Vannes vapeur rotatives', 'Ensembles roulements haute capacité'],
    },
    features: {
      en: ['Instant Part Verification', 'Food-Grade Components', 'Same-day Courier Service'],
      ar: ['التحقق الفوري من القطع', 'مكونات بدرجة غذائية', 'خدمة البريد السريع في نفس اليوم'],
      fr: ['Vérification instantanée pièces', 'Composants qualité alimentaire', 'Service coursier même jour'],
    },
  },
  {
    id: 'serv-6',
    category: 'maintenance',
    iconName: 'Sliders',
    title: {
      en: 'Acoustic & Environmental Diagnostics',
      ar: 'التشخيصات الصوتية والبيئية',
      fr: 'Diagnostics Acoustiques et Environnementaux',
    },
    desc: {
      en: 'Ensuring ultra-quiet room ambient performance, dynamic water flow pressure equilibrium, and air purity testing suitable for premium luxury guest wings.',
      ar: 'ضمان أداء هادئ للغاية للغرف، توازن ضغط تدفق المياه الديناميكي، واختبار نقاء الهواء المناسب لأجنحة الضيوف الفاخرة.',
      fr: 'Garantir une performance ambiante ultra-silencieuse, un équilibre de pression de débit d\'eau dynamique et des tests de pureté de l\'air adaptés aux ailes de luxe premium.',
    },
    systems: {
      en: ['Air Duct Noise Attenuators', 'Pressure Booster Balancing', 'HEPA Filtration Assays'],
      ar: ['مخمدات ضوضاء مجاري الهواء', 'موازنة معززات الضغط', 'فحوصات فلترة HEPA'],
      fr: ['Atténuateurs de bruit conduits', 'Équilibrage surpresseurs', 'Analyses filtration HEPA'],
    },
    features: {
      en: ['Acoustic Decibel Reports', 'Microbial Swab Testing', 'ISO 14001 Compliant Guidelines'],
      ar: ['تقارير الديسيبل الصوتية', 'اختبار المسحة الميكروبية', 'إرشادات متوافقة مع ISO 14001'],
      fr: ['Rapports décibels acoustiques', 'Tests écouvillons microbiens', 'Directives conformes ISO 14001'],
    },
  },
];

// ══════════════════════════════════════════════════════════════════════
// PROJECTS DATA - YOUR ORIGINAL DATA WITH TRANSLATIONS
// ══════════════════════════════════════════════════════════════════════
export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    category: 'renovations',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    title: {
      en: 'Premium 5-Star Resort Technical Upgrade',
      ar: 'ترقية تقنية لمنتجع 5 نجوم فاخر',
      fr: 'Mise à Niveau Technique Resort 5 Étoiles Premium',
    },
    client: {
      en: 'Luxury Riviera Hotel Group',
      ar: 'مجموعة فنادق ريفييرا الفاخرة',
      fr: 'Groupe Hôtelier Luxury Riviera',
    },
    location: {
      en: 'Red Sea Coast, Egypt',
      ar: 'ساحل البحر الأحمر، مصر',
      fr: 'Côte de la Mer Rouge, Égypte',
    },
    scope: {
      en: 'Complete overhaul of HVAC chiller loops, replacement of aged secondary circulation pumps, and supply of smart automated flow balancers.',
      ar: 'إعادة تأهيل كاملة لدوائر مبردات HVAC، واستبدال مضخات التدوير الثانوية القديمة، وتوريد موازنات التدفق الآلية الذكية.',
      fr: 'Révision complète des boucles de refroidisseurs CVC, remplacement des pompes de circulation secondaires vieillissantes et fourniture d\'équilibreurs de débit automatisés intelligents.',
    },
    timeline: {
      en: '3 Months (Phased during operation)',
      ar: '3 أشهر (مراحل أثناء التشغيل)',
      fr: '3 Mois (Phasé pendant l\'exploitation)',
    },
    tags: {
      en: ['HVAC Overhaul', 'Pumps Installation', 'Energy Efficiency'],
      ar: ['إعادة تأهيل HVAC', 'تركيب المضخات', 'كفاءة الطاقة'],
      fr: ['Révision CVC', 'Installation pompes', 'Efficacité énergétique'],
    },
    kpis: [
      { label: { en: 'Energy Savings', ar: 'توفير الطاقة', fr: 'Économies d\'énergie' }, value: '24.5%' },
      { label: { en: 'Chillers Replaced', ar: 'المبردات المستبدلة', fr: 'Refroidisseurs remplacés' }, value: '3 Units' },
    ],
  },
  {
    id: 'proj-2',
    category: 'maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    year: '2023',
    title: {
      en: 'Continuous Facility Maintenance Agreement',
      ar: 'اتفاقية صيانة المرافق المستمرة',
      fr: 'Accord de Maintenance Continue des Installations',
    },
    client: {
      en: 'Nile Grand Plaza & Suites',
      ar: 'نايل جراند بلازا وأجنحة',
      fr: 'Nile Grand Plaza & Suites',
    },
    location: {
      en: 'Cairo Downtown',
      ar: 'وسط القاهرة',
      fr: 'Centre-ville du Caire',
    },
    scope: {
      en: 'Implementation of round-the-clock predictive monitoring for high-rise water pressure stations and critical guest room ventilation.',
      ar: 'تنفيذ المراقبة التنبؤية على مدار الساعة لمحطات ضغط المياه في المباني العالية وتهوية غرف الضيوف الحرجة.',
      fr: 'Mise en œuvre d\'une surveillance prédictive 24h/24 pour les stations de pression d\'eau des gratte-ciel et la ventilation critique des chambres.',
    },
    timeline: {
      en: 'Annual SLA Contract',
      ar: 'عقد SLA سنوي',
      fr: 'Contrat SLA Annuel',
    },
    tags: {
      en: ['Predictive Maintenance', 'Water Systems', '24/7 SLA'],
      ar: ['الصيانة التنبؤية', 'أنظمة المياه', 'SLA على مدار الساعة'],
      fr: ['Maintenance prédictive', 'Systèmes eau', 'SLA 24h/24'],
    },
    kpis: [
      { label: { en: 'Uptime Achieved', ar: 'وقت التشغيل المحقق', fr: 'Disponibilité atteinte' }, value: '99.8%' },
      { label: { en: 'Response Time', ar: 'وقت الاستجابة', fr: 'Temps de réponse' }, value: '<2 Hrs' },
    ],
  },
  {
    id: 'proj-3',
    category: 'procurement',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    title: {
      en: 'Strategic Parts Supply Framework',
      ar: 'إطار توريد القطع الاستراتيجي',
      fr: 'Cadre d\'Approvisionnement Stratégique en Pièces',
    },
    client: {
      en: 'Meridian Hospitality International',
      ar: 'ميريديان للضيافة الدولية',
      fr: 'Meridian Hospitality International',
    },
    location: {
      en: 'Alexandria, Egypt',
      ar: 'الإسكندرية، مصر',
      fr: 'Alexandrie, Égypte',
    },
    scope: {
      en: 'Establishing multi-year procurement contracts for OEM spare parts across 12 hotel properties with consolidated logistics.',
      ar: 'إنشاء عقود مشتريات متعددة السنوات لقطع غيار OEM عبر 12 فندقاً مع لوجستيات موحدة.',
      fr: 'Établissement de contrats d\'approvisionnement pluriannuels pour les pièces OEM sur 12 propriétés hôtelières avec logistique consolidée.',
    },
    timeline: {
      en: '5-Year Framework Agreement',
      ar: 'اتفاقية إطارية لمدة 5 سنوات',
      fr: 'Accord-cadre de 5 ans',
    },
    tags: {
      en: ['OEM Parts', 'Multi-Property', 'Cost Optimization'],
      ar: ['قطع OEM', 'عقارات متعددة', 'تحسين التكلفة'],
      fr: ['Pièces OEM', 'Multi-propriétés', 'Optimisation coûts'],
    },
    kpis: [
      { label: { en: 'Cost Reduction', ar: 'تخفيض التكلفة', fr: 'Réduction des coûts' }, value: '32%' },
      { label: { en: 'Properties Covered', ar: 'العقارات المغطاة', fr: 'Propriétés couvertes' }, value: '12' },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════
// STATIC DATA
// ══════════════════════════════════════════════════════════════════════
export const hospitalityClients = [
  'Marriott International',
  'Hilton Hotels',
  'Four Seasons',
  'Hyatt Hotels',
  'Accor Group',
  'IHG Hotels',
  'Kempinski',
  'Rotana Hotels',
];

export const trustedBrands = ['Marriott', 'Hilton', 'Four Seasons', 'Hyatt', 'Accor', 'IHG'];

export const resourceLinks = {
  en: ['Documentation', 'Technical Specs', 'Case Studies', 'FAQ'],
  ar: ['الوثائق', 'المواصفات التقنية', 'دراسات الحالة', 'الأسئلة الشائعة'],
  fr: ['Documentation', 'Spécifications techniques', 'Études de cas', 'FAQ'],
};

// ══════════════════════════════════════════════════════════════════════
// TRANSLATIONS
// ══════════════════════════════════════════════════════════════════════
export const translations: Record<Lang, Translation> = {
  // ════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ════════════════════════════════════════════════════════════════════
  en: {
    title: 'TRIANGLE BLACK',
    subtitle: 'Engineering Excellence for Hospitality',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      deploy: 'Deploy',
      quote: 'Quote',
    },
    hero: {
      badge: 'Premium Engineering Solutions',
      headline: 'Engineering Built for Hospitality',
      desc: 'Triangle Black delivers engineering procurement, technical execution, and operational infrastructure support designed exclusively for hotels, resorts, and hospitality assets Built from real field experience inside hospitality operations — not from corporate theory.',
      ctaPrimary: 'Request Quotation',
      ctaSecondary: 'View Projects',
      kpi1: '20M+ EGP',
      kpi1Sub: 'Engineering Volume Managed',
      kpi2: '100%',
      kpi2Sub: 'OEM Certified',
      kpi3: '24/7',
      kpi3Sub: 'Operational Support',
      kpi4: '15+',
      kpi4Sub: 'Major National Projects',
      scrollLabel: 'Scroll to explore',
      activeScene: 'Active Scene',
      sceneDelivery: 'DELIVERY EXCELLENCE',
      sceneQuality: 'PREMIUM QUALITY',
      sceneTrusted: 'TRUSTED BY LEADING BRANDS',
    },
    highlight: {
      badge: 'OUR EVOLUTION',
      heading: 'A Legacy of Integrity. A Future of Operational Intelligence.',
      desc: 'Triangle Black was not built in a boardroom. It was forged in the field, tested by national-scale infrastructure, and refined by a commitment to professional ethics that remains our North Star.',
      timeline: [
        { year: '2014', title: 'Foundation', description: 'Our journey began at the heart of Egypt urban transformation. Operating as Mecca Supplies, we contributed to the nation most ambitious projects—including the New Administrative Capital. We did not just supply materials; we managed an annual volume exceeding EGP 10M, learning the complexities of high-demand engineering environments.' },
        { year: '2019', title: 'Engineering Expansion', description: 'Growth led to the founding of United Brothers General Supplies. We expanded our scope to MEP materials, technical finishes, and infrastructure support. With an annual volume surpassing EGP 20M, we became a trusted partner for 11+ landmark projects, including Cairo Festival City and Mostakbal City. We learned that at this scale, precision is the only path to success.' },
        { year: '2023', title: 'The Integrity Stress Test', description: 'The mark of a true partner is not how they act during a boom, but how they respond to a crisis. During a period of severe regional economic instability, many chose to retreat. We chose to stand firm. To honor every commitment and every supplier obligation, we made the difficult decision to liquidate company assets. We prioritized our reputation and our ethics over convenience.' },
        { year: '2025', title: 'The Evolution', description: 'Triangle Black is the culmination of this decade-long journey. We have taken our experience in national-scale infrastructure and our unbreakable ethical code to create a specialized firm. Today, we focus exclusively on engineering procurement and technical execution for the hospitality sector.' },
      ],
      quote: 'We do not aspire to be yet another supplier in the chain. We are an operational partner built from the field to ensure that your infrastructure never compromises your guest experience.',
      quoteAuthor: 'Founding Philosophy, Triangle Black',
    },
    about: {
      badge: 'Who We Are',
      heading: '',
      subheading: '',
      p1: 'We support hotels and hospitality assets with precision-driven MEP coordination, intelligent procurement systems, and operational engineering strategies designed to ensure reliability, efficiency, and uninterrupted performance. Our team of factory-trained technicians and procurement specialists operates with a deep understanding of the unique demands of hospitality infrastructure.',
      p2: 'Every solution is approached with a hospitality-first mindset — combining certified supply networks, technical expertise, rapid operational response, and long-term infrastructure thinking to support the demanding standards of modern hotel operations.',
      missionTitle: 'Our Mission',
      missionDesc: 'To bridge the gap between technical engineering execution and hospitality operational excellence. We provide the procurement intelligence and infrastructure support necessary to ensure that hotels and resorts never face operational failure.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the definitive engineering infrastructure partner for the Middle East and Africa hospitality sector—recognized not for our size, but for our operational intelligence, our integrity under pressure, and our deep understanding for technical excellence and operational reliability.',
      valuesTitle: 'Our Values',
      valuesDesc: 'We believe a partnership is defined when things get difficult. We honor our commitments regardless of market volatility.',
      principlesTitle: 'Principles That Define Us',
      whyChooseTitle: 'Why Choose Us',
      whyChooseSub: 'Engineered for Hospitality Excellence',
      whyChooseDesc: 'Hospitality infrastructure leaves no room for generic supply delays. Triangle Black implements targeted industrial inventory buffers tailored specifically for high-occupancy cycles.',
      whyChooseItems: [
        'Direct OEM manufacturer relationships',
        'ISO 9001 certified processes',
        '24/7 emergency dispatch capability',
        'Multi-property portfolio management',
        'Predictive maintenance technology',
        'Dedicated account managers',
      ],
      statsOem: 'OEM Certification',
      statsEmergency: 'Emergency Dispatch',
      statsQuality: 'Quality Compliant',
      clientsTitle: 'Supported Engineering Infrastructures & Client Sectors',
      operationalSecurity: 'Operational Security',
      operationalSecuritySub: 'Zero Mechanical Blindspots',
    },
    services: {
      badge: 'What We Offer',
      heading: 'Our Core Services',
      subheading: 'From absolute part accuracy to automated thermal diagnostics, Triangle Black deploys specialized tiers of engineering assurance.',
      filterAll: 'All Services',
      filterSupplies: 'Supplies',
      filterProcurement: 'Procurement',
      filterMaintenance: 'Maintenance',
      filterRenovation: 'Renovations',
      requestBtn: 'Request Service',
      subsystemsLabel: 'Core Supported Sub-Systems:',
      customNoteTitle: 'Need custom material configuration?',
      customNoteDesc: 'We import heavy-duty replacement materials matching original MEP documentation protocols.',
    },
    projects: {
      badge: 'Our Portfolio',
      heading: 'Featured Operations',
      subheading: 'Review certified mechanical intervention models executed natively within operational luxury real estate.',
      viewSpecs: 'View Specifications',
      clientLabel: 'Client',
      durationLabel: 'Duration',
      scopeLabel: 'Scope of Execution',
      closeBtn: 'Close',
      filterAll: 'All Operations',
      filterRenovations: 'Upgrades & MEP',
      filterMaintenance: 'SLA Maintenance',
      filterProcurement: 'Strategic Supply',
      operationsClass: 'Operations Class',
      enterpriseSla: 'Enterprise SLA',
      deliverableLogs: 'Authenticated Deliverable Logs',
      oemNote: 'OEM parts sourced through direct European logistics channels with full test certificates.',
    },
    testimonials: {
      badge: 'Client Feedback',
      heading: 'Trusted Partnerships',
      brandsBadge: 'Trusted by Industry Leaders',
      items: [
        { quote: 'Triangle Black transformed our mechanical infrastructure. Their attention to detail and commitment to quality is unmatched in the industry.', author: 'Ahmed Hassan', role: 'Director of Engineering, Luxury Resort Group' },
        { quote: 'The 24/7 maintenance support has been invaluable. Response times are exceptional and their technicians are truly experts.', author: 'Sarah Mitchell', role: 'Operations Manager, International Hotel Chain' },
        { quote: 'Their procurement expertise saved us significant costs while improving part quality. A true strategic partner.', author: 'Mohamed El-Sayed', role: 'Chief Engineer, Premium Hospitality Holdings' },
      ],
    },
    contact: {
      badge: 'Get In Touch',
      heading: 'Start Your Project',
      desc: 'Ready to elevate your hospitality engineering standards? Our team is prepared to discuss your requirements.',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formCompany: 'Company / Property Name',
      formPhone: 'Phone Number',
      formService: 'Select Service',
      formMsg: 'Project Details',
      submitBtn: 'Submit Inquiry',
      successTitle: 'Inquiry Submitted!',
      successDesc: 'Our engineering team will respond within 2 hours during business days.',
      directContact: 'Direct Contact',
      headquarters: 'Headquarters Hub',
      headquartersSub: 'Luxury Hospitality Engineering Solutions',
      emailLabel: 'Engineering Inquiries',
      emailSub: 'SLA Response target: < 2 hours',
      phoneLabel: 'Direct Switchboard',
      phoneSub: '24/7 Operations Duty Dispatch',
    },
    footer: {
      ctaHeading: 'Ready to Start Your Project?',
      ctaDesc: 'Let\'s discuss how Triangle Black can engineer the perfect foundation for your next hospitality development.',
      ctaButton: 'Request Consultation',
      brandDesc: 'Premium mechanical supplies, lifecycle inventory optimization, and round-the-clock maintenance protocols crafted exclusively for 5-star operations.',
      oemBadge: 'Authorized Original Equipment Sourcing Hub',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      resourcesTitle: 'Resources',
      copyright: '© 2026 TRIANGLE BLACK CORP. All rights reserved.',
      engineered: 'Engineered for luxury operations',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
    whatsapp: {
      headerTitle: 'Triangle Black Secure Routing',
      headerSub: 'Live Operational Support',
      welcomeMsg: 'Welcome to Triangle Black Engineering. How can we support your facility critical parts logistics or SLA maintenance today?',
      actionLabel: 'Select direct action:',
      launchBtn: 'Launch Premium Secure Chat',
      dispatchTime: 'Average Dispatch Link: < 5 minutes',
      tooltip: 'Live OEM Sourcing Desk',
    },
  },

  // ════════════════════════════════════════════════════════════════════
  // ARABIC
  // ════════════════════════════════════════════════════════════════════
  ar: {
    title: 'تراينجل بلاك',
    subtitle: 'التميز الهندسي للضيافة',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      projects: 'المشاريع',
      contact: 'اتصل بنا',
      deploy: 'النشر',
      quote: 'عرض سعر',
    },
    hero: {
      badge: 'حلول هندسية متميزة',
      headline: 'الشريك الهندسي الذي تعتمد عليه الفنادق الفاخرة  ',
      desc: 'تقدم تراينجل بلاك خدمات الهندسة والمشتريات والتنفيذ الفني والدعم التشغيلي المصمم حصريًا للفنادق والمنتجعات وأصول الضيافة. مبني من خبرة ميدانية حقيقية داخل قطاع الضيافة — نفهم التشغيل قبل التوريد.',
      ctaPrimary: 'طلب عرض سعر',
      ctaSecondary: 'عرض المشاريع',
      kpi1: '+20 مليون',
      kpi1Sub: 'حجم أعمال هندسية',
      kpi2: '100%',
      kpi2Sub: 'شبكة موردين OEM معتمدين',
      kpi3: '24/7',
      kpi3Sub: 'دعم وتشغيل',
      kpi4: '+15',
      kpi4Sub: 'مشروع قومي واستراتيجي',
      scrollLabel: 'مرر للاستكشاف',
      activeScene: 'المشهد النشط',
      sceneDelivery: 'تميز التسليم',
      sceneQuality: 'جودة فائقة',
      sceneTrusted: 'موثوق من العلامات الرائدة',
    },
    highlight: {
      badge: 'تطورنا',
      heading: 'إرثٌ من النزاهة.. ومستقبلٌ من الذكاء التشغيلي',
      desc: 'تراينجل بلاك لم تُولد خلف المكاتب، بل صُقلت في الميادين. اختبرتها مشاريع البنية التحتية القومية وهذّبها التزامٌ أخلاقيات المهنه مما انشاء بوصلتنا الدائمة.',
      timeline: [
        { year: '2014', title: 'التأسيس', description: 'بدأت رحلتنا من قلب النهضة العمرانية في مصر. من خلال "مكة للتوريدات"، ساهمنا في أضخم المشاريع القومية، بما في ذلك العاصمة الإدارية الجديدة. لم نكن مجرد موردين، بل أدرنا تدفقات هندسية تجاوزت 10 ملايين جنيه سنوياً، مما منحنا فهماً عميقاً لتعقيدات البيئات الهندسية عالية الكثافة.' },
        { year: '2019 ', title: 'التوسع الهندسي', description: 'قادنا النمو إلى تأسيس "الإخوة المتحدون للتوريدات العمومية"، حيث توسع نطاق عملنا ليشمل الأنظمة الميكانيكية والكهربائية (MEP)، والتشطيبات الفنية، ودعم البنية التحتية. بحجم أعمال تخطى 20 مليون جنيه سنوياً، أصبحنا شريكاً موثوقاً في أكثر من 11 مشروعاً عملاقاً، مثل "كايرو فيستيفال سيتي" و"مستقبل سيتي"، حيث تعلمت فرقنا أن الدقة هي السبيل الوحيد للنجاح في هذا النطاق.' },
        { year: '2023', title: 'اختبار النزاهة الحقيقي ', description: 'قيمة الشريك الحقيقي تظهر في الأزمات لا في أوقات الرخاء. خلال فترة من عدم الاستقرار الاقتصادي الإقليمي، وبينما اختار الكثيرون الانسحاب، اخترنا نحن الثبات. وفاءً بكل التزاماتنا تجاه موردينا، اتخذنا قراراً صعباً بتسييل أصول الشركة للوفاء بالعهود. لقد انحزنا لسمعتنا وأخلاقياتنا المهنية على حساب المصلحة المؤقتة.' },
        { year: '2025', title: 'التطور', description: 'تمثل "ترايانجل بلاك" ذروة هذه الرحلة الممتدة لعقد من الزمان. لقد دمجنا خبرتنا في المشاريع القومية الكبرى مع ميثاقنا الأخلاقي الراسخ لنخلق كياناً متخصصاً. اليوم، نكرس جهودنا حصرياً لخدمة قطاع الضيافة والفنادق، من خلال توريدات هندسية ذكية وتنفيذ فني يدرك قيمة التفاصيل.' },
      ],
      quote: 'لا نطمح لأن نكون مجرد حلقة أخرى في سلسلة التوريد؛ نحن شريك تشغيلي وُلد من قلب الميدان، لضمان استمرارية بنية تحتية لا تخذل ضيوفكم',
      quoteAuthor: 'فلسفة التأسيس، تراينجل بلاك',
    },
    about: {
      badge: 'من نحن',
      heading: 'التميز الهندسي',
      subheading: 'بناء العمود الفقري للتجارب الاستثنائية',
      p1: 'تقف تراينجل بلاك كمزود رائد لحلول الهندسة الفندقية في المنطقة، حيث تقدم أنظمة MEP عالية الدقة وبروتوكولات صيانة للفنادق الفاخرة عبر الشرق الأوسط وأفريقيا.',
      p2: 'التزامنا بالتميز التشغيلي يضمن عدم وجود نقاط عمياء ميكانيكية، مع الحصول على كل مكون من شركاء OEM معتمدين وتركيبه بواسطة فنيين مدربين في المصنع.',
      missionTitle: 'مهمتنا',
      missionDesc: 'تقديم حلول هندسية لا هوادة فيها تضمن أن كل عقار ضيافة يعمل بأقصى أداء، كل يوم.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'أن نكون الاسم الأكثر ثقة في هندسة MEP للضيافة، ونضع المعيار العالمي للتميز التقني والموثوقية التشغيلية.',
      valuesTitle: 'قيمنا',
      valuesDesc: 'الدقة والنزاهة والسعي الدؤوب نحو التميز في كل مشروع نقوم به، بغض النظر عن حجمه.',
      principlesTitle: 'المبادئ التي تحددنا',
      whyChooseTitle: 'لماذا تختارنا',
      whyChooseSub: 'مصمم للتميز في الضيافة',
      whyChooseDesc: 'البنية التحتية للضيافة لا تترك مجالاً لتأخيرات التوريد العامة. تنفذ تراينجل بلاك احتياطيات مخزون صناعية مستهدفة مصممة خصيصاً لدورات الإشغال العالي.',
      whyChooseItems: [
        'علاقات مباشرة مع مصنعي OEM',
        'عمليات معتمدة من ISO 9001',
        'قدرة إرسال الطوارئ على مدار الساعة',
        'إدارة محفظة متعددة العقارات',
        'تقنية الصيانة التنبؤية',
        'مديرو حسابات مخصصون',
      ],
      statsOem: 'شهادة OEM',
      statsEmergency: 'إرسال الطوارئ',
      statsQuality: 'متوافق مع الجودة',
      clientsTitle: 'البنى التحتية الهندسية المدعومة وقطاعات العملاء',
      operationalSecurity: 'الأمان التشغيلي',
      operationalSecuritySub: 'بدون نقاط عمياء ميكانيكية',
    },
    services: {
      badge: 'ما نقدمه',
      heading: 'خدماتنا الأساسية',
      subheading: 'من الدقة المطلقة في القطع إلى التشخيص الحراري الآلي، تنشر تراينجل بلاك مستويات متخصصة من الضمان الهندسي.',
      filterAll: 'جميع الخدمات',
      filterSupplies: 'المستلزمات',
      filterProcurement: 'المشتريات',
      filterMaintenance: 'الصيانة',
      filterRenovation: 'التجديدات',
      requestBtn: 'طلب الخدمة',
      subsystemsLabel: 'الأنظمة الفرعية المدعومة:',
      customNoteTitle: 'تحتاج تكوين مواد مخصصة؟',
      customNoteDesc: 'نستورد مواد بديلة للخدمة الشاقة تتوافق مع بروتوكولات توثيق MEP الأصلية.',
    },
    projects: {
      badge: 'محفظة أعمالنا',
      heading: 'العمليات المميزة',
      subheading: 'راجع نماذج التدخل الميكانيكي المعتمدة المنفذة محلياً ضمن العقارات الفاخرة التشغيلية.',
      viewSpecs: 'عرض المواصفات',
      clientLabel: 'العميل',
      durationLabel: 'المدة',
      scopeLabel: 'نطاق التنفيذ',
      closeBtn: 'إغلاق',
      filterAll: 'جميع العمليات',
      filterRenovations: 'الترقيات و MEP',
      filterMaintenance: 'صيانة SLA',
      filterProcurement: 'التوريد الاستراتيجي',
      operationsClass: 'فئة العمليات',
      enterpriseSla: 'SLA المؤسسي',
      deliverableLogs: 'سجلات التسليم المصادقة',
      oemNote: 'قطع OEM مصدرها قنوات لوجستية أوروبية مباشرة مع شهادات اختبار كاملة.',
    },
    testimonials: {
      badge: 'آراء العملاء',
      heading: 'شراكات موثوقة',
      brandsBadge: 'موثوق من قادة الصناعة',
      items: [
        { quote: 'قامت تراينجل بلاك بتحويل بنيتنا التحتية الميكانيكية. اهتمامهم بالتفاصيل والتزامهم بالجودة لا مثيل له في الصناعة.', author: 'أحمد حسن', role: 'مدير الهندسة، مجموعة المنتجعات الفاخرة' },
        { quote: 'كان دعم الصيانة على مدار الساعة لا يقدر بثمن. أوقات الاستجابة استثنائية وفنيوهم خبراء حقيقيون.', author: 'سارة ميتشل', role: 'مديرة العمليات، سلسلة فنادق دولية' },
        { quote: 'خبرتهم في المشتريات وفرت لنا تكاليف كبيرة مع تحسين جودة القطع. شريك استراتيجي حقيقي.', author: 'محمد السيد', role: 'كبير المهندسين، القابضة للضيافة الفاخرة' },
      ],
    },
    contact: {
      badge: 'تواصل معنا',
      heading: 'ابدأ مشروعك',
      desc: 'هل أنت مستعد لرفع معايير الهندسة الفندقية لديك؟ فريقنا مستعد لمناقشة متطلباتك.',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formCompany: 'اسم الشركة / العقار',
      formPhone: 'رقم الهاتف',
      formService: 'اختر الخدمة',
      formMsg: 'تفاصيل المشروع',
      submitBtn: 'إرسال الاستفسار',
      successTitle: 'تم إرسال الاستفسار!',
      successDesc: 'سيرد فريقنا الهندسي خلال ساعتين في أيام العمل.',
      directContact: 'الاتصال المباشر',
      headquarters: 'المقر الرئيسي',
      headquartersSub: 'حلول هندسة الضيافة الفاخرة',
      emailLabel: 'استفسارات الهندسة',
      emailSub: 'هدف استجابة SLA: أقل من ساعتين',
      phoneLabel: 'لوحة التحويل المباشرة',
      phoneSub: 'إرسال عمليات الواجب على مدار الساعة',
    },
    footer: {
      ctaHeading: 'هل أنت مستعد لبدء مشروعك؟',
      ctaDesc: 'دعنا نناقش كيف يمكن لتراينجل بلاك هندسة الأساس المثالي لمشروع الضيافة القادم.',
      ctaButton: 'طلب استشارة',
      brandDesc: 'مستلزمات ميكانيكية فاخرة، وتحسين مخزون دورة الحياة، وبروتوكولات صيانة على مدار الساعة مصممة حصرياً لعمليات 5 نجوم.',
      oemBadge: 'مركز توريد المعدات الأصلية المعتمد',
      navTitle: 'التنقل',
      servicesTitle: 'الخدمات',
      resourcesTitle: 'الموارد',
      copyright: '© 2026 تراينجل بلاك. جميع الحقوق محفوظة.',
      engineered: 'مصمم لعمليات الفخامة',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
    },
    whatsapp: {
      headerTitle: 'توجيه تراينجل بلاك الآمن',
      headerSub: 'دعم تشغيلي مباشر',
      welcomeMsg: 'مرحباً بك في هندسة تراينجل بلاك. كيف يمكننا دعم لوجستيات قطع الغيار الحرجة أو صيانة SLA اليوم؟',
      actionLabel: 'اختر إجراءً مباشراً:',
      launchBtn: 'إطلاق المحادثة الآمنة',
      dispatchTime: 'متوسط رابط الإرسال: أقل من 5 دقائق',
      tooltip: 'مكتب توريد OEM المباشر',
    },
  },

  // ════════════════════════════════════════════════════════════════════
  // FRENCH
  // ════════════════════════════════════════════════════════════════════
  fr: {
    title: 'TRIANGLE BLACK',
    subtitle: 'Excellence en Ingénierie Hôtelière',
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      projects: 'Projets',
      contact: 'Contact',
      deploy: 'Déployer',
      quote: 'Devis',
    },
    hero: {
      badge: 'Hub d\'Ingénierie Premium',
      headline: 'Ingénierie MEP Pour Hôtels',
      desc: 'Fournitures mécaniques certifiées, approvisionnement du cycle de vie et protocoles de maintenance 24h/24 conçus exclusivement pour les opérations hôtelières 5 étoiles.',
      ctaPrimary: 'Demander un devis',
      ctaSecondary: 'Voir les Projets',
      kpi1: '500+',
      kpi1Sub: 'Projets Livrés',
      kpi2: '100%',
      kpi2Sub: 'Certifié OEM',
      kpi3: '<4 Hrs',
      kpi3Sub: 'Réponse d\'Urgence',
      kpi4: '15+',
      kpi4Sub: 'Ans d\'Expérience',
      scrollLabel: 'Défiler pour explorer',
      activeScene: 'Scène Active',
      sceneDelivery: 'EXCELLENCE DE LIVRAISON',
      sceneQuality: 'QUALITÉ PREMIUM',
      sceneTrusted: 'RECONNU PAR LES GRANDES MARQUES',
    },
    highlight: {
      badge: 'Notre Parcours',
      heading: 'Construire un Héritage d\'Excellence',
      desc: 'De débuts modestes à devenir le partenaire d\'ingénierie hôtelière le plus fiable de la région.',
      timeline: [
        { year: '2008', title: 'Fondation', description: 'Triangle Black a été créé avec la vision de révolutionner l\'ingénierie hôtelière dans la région MENA.' },
        { year: '2012', title: 'Expansion Régionale', description: 'Expansion des opérations à travers l\'Égypte, les EAU et l\'Arabie Saoudite avec des équipes techniques dédiées.' },
        { year: '2018', title: 'Partenariats OEM', description: 'Obtention de partenariats exclusifs avec les principaux fabricants d\'équipements européens et américains.' },
        { year: '2024', title: 'Leader de l\'Industrie', description: 'Reconnu comme le premier fournisseur de solutions MEP hôtelières avec plus de 500 projets réalisés.' },
      ],
      quote: 'L\'excellence en ingénierie ne se résume pas à la précision technique — c\'est comprendre que chaque système hôtelier impacte l\'expérience des clients.',
      quoteAuthor: 'Philosophie Fondatrice, Triangle Black',
    },
    about: {
      badge: 'Qui Nous Sommes',
      heading: 'Excellence en Ingénierie',
      subheading: 'Construire la Colonne Vertébrale d\'Expériences Extraordinaires',
      p1: 'Triangle Black se positionne comme le premier fournisseur de solutions d\'ingénierie hôtelière de la région, livrant des systèmes MEP de précision et des protocoles de maintenance aux hôtels de luxe au Moyen-Orient et en Afrique.',
      p2: 'Notre engagement envers l\'excellence opérationnelle garantit zéro angle mort mécanique, chaque composant étant sourcé auprès de partenaires OEM certifiés et installé par des techniciens formés en usine.',
      missionTitle: 'Notre Mission',
      missionDesc: 'Fournir des solutions d\'ingénierie sans compromis qui garantissent que chaque propriété hôtelière fonctionne à performance maximale, chaque jour.',
      visionTitle: 'Notre Vision',
      visionDesc: 'Être le nom le plus fiable en ingénierie MEP hôtelière, établissant la norme mondiale d\'excellence technique et de fiabilité opérationnelle.',
      valuesTitle: 'Nos Valeurs',
      valuesDesc: 'Précision, intégrité et poursuite incessante de l\'excellence dans chaque projet que nous entreprenons, quelle que soit l\'échelle.',
      principlesTitle: 'Principes Qui Nous Définissent',
      whyChooseTitle: 'Pourquoi Nous Choisir',
      whyChooseSub: 'Conçu pour l\'Excellence Hôtelière',
      whyChooseDesc: 'L\'infrastructure hôtelière ne laisse pas de place aux retards d\'approvisionnement génériques. Triangle Black met en œuvre des tampons d\'inventaire industriels ciblés adaptés spécifiquement aux cycles de haute occupation.',
      whyChooseItems: [
        'Relations directes avec les fabricants OEM',
        'Processus certifiés ISO 9001',
        'Capacité de dispatch d\'urgence 24h/24',
        'Gestion de portefeuille multi-propriétés',
        'Technologie de maintenance prédictive',
        'Gestionnaires de compte dédiés',
      ],
      statsOem: 'Certification OEM',
      statsEmergency: 'Dispatch d\'Urgence',
      statsQuality: 'Conforme Qualité',
      clientsTitle: 'Infrastructures d\'Ingénierie Supportées et Secteurs Clients',
      operationalSecurity: 'Sécurité Opérationnelle',
      operationalSecuritySub: 'Zéro Angle Mort Mécanique',
    },
    services: {
      badge: 'Ce Que Nous Offrons',
      heading: 'Nos Services Principaux',
      subheading: 'De la précision absolue des pièces aux diagnostics thermiques automatisés, Triangle Black déploie des niveaux spécialisés d\'assurance ingénierie.',
      filterAll: 'Tous les Services',
      filterSupplies: 'Fournitures',
      filterProcurement: 'Approvisionnement',
      filterMaintenance: 'Maintenance',
      filterRenovation: 'Rénovations',
      requestBtn: 'Demander le Service',
      subsystemsLabel: 'Sous-systèmes Supportés:',
      customNoteTitle: 'Besoin d\'une configuration matérielle personnalisée?',
      customNoteDesc: 'Nous importons des matériaux de remplacement robustes conformes aux protocoles de documentation MEP originaux.',
    },
    projects: {
      badge: 'Notre Portfolio',
      heading: 'Opérations en Vedette',
      subheading: 'Examinez les modèles d\'intervention mécanique certifiés exécutés nativement dans l\'immobilier de luxe opérationnel.',
      viewSpecs: 'Voir les Spécifications',
      clientLabel: 'Client',
      durationLabel: 'Durée',
      scopeLabel: 'Portée d\'Exécution',
      closeBtn: 'Fermer',
      filterAll: 'Toutes les Opérations',
      filterRenovations: 'Mises à Niveau & MEP',
      filterMaintenance: 'Maintenance SLA',
      filterProcurement: 'Approvisionnement Stratégique',
      operationsClass: 'Classe d\'Opérations',
      enterpriseSla: 'SLA Entreprise',
      deliverableLogs: 'Journaux de Livrables Authentifiés',
      oemNote: 'Pièces OEM sourcées via des canaux logistiques européens directs avec certificats de test complets.',
    },
    testimonials: {
      badge: 'Retours Clients',
      heading: 'Partenariats de Confiance',
      brandsBadge: 'Reconnu par les Leaders de l\'Industrie',
      items: [
        { quote: 'Triangle Black a transformé notre infrastructure mécanique. Leur attention aux détails et leur engagement envers la qualité sont inégalés dans l\'industrie.', author: 'Ahmed Hassan', role: 'Directeur de l\'Ingénierie, Groupe Resort de Luxe' },
        { quote: 'Le support de maintenance 24h/24 a été inestimable. Les temps de réponse sont exceptionnels et leurs techniciens sont de vrais experts.', author: 'Sarah Mitchell', role: 'Directrice des Opérations, Chaîne Hôtelière Internationale' },
        { quote: 'Leur expertise en approvisionnement nous a fait économiser des coûts significatifs tout en améliorant la qualité des pièces. Un vrai partenaire stratégique.', author: 'Mohamed El-Sayed', role: 'Ingénieur en Chef, Premium Hospitality Holdings' },
      ],
    },
    contact: {
      badge: 'Contactez-Nous',
      heading: 'Démarrez Votre Projet',
      desc: 'Prêt à élever vos standards d\'ingénierie hôtelière? Notre équipe est préparée pour discuter de vos exigences.',
      formName: 'Nom Complet',
      formEmail: 'Adresse Email',
      formCompany: 'Nom de l\'Entreprise / Propriété',
      formPhone: 'Numéro de Téléphone',
      formService: 'Sélectionner un Service',
      formMsg: 'Détails du Projet',
      submitBtn: 'Soumettre la Demande',
      successTitle: 'Demande Soumise!',
      successDesc: 'Notre équipe d\'ingénierie répondra dans les 2 heures pendant les jours ouvrables.',
      directContact: 'Contact Direct',
      headquarters: 'Siège Social',
      headquartersSub: 'Solutions d\'Ingénierie Hôtelière de Luxe',
      emailLabel: 'Demandes d\'Ingénierie',
      emailSub: 'Objectif de réponse SLA: < 2 heures',
      phoneLabel: 'Standard Direct',
      phoneSub: 'Dispatch des Opérations 24h/24',
    },
    footer: {
      ctaHeading: 'Prêt à Démarrer Votre Projet?',
      ctaDesc: 'Discutons de la façon dont Triangle Black peut concevoir la fondation parfaite pour votre prochain développement hôtelier.',
      ctaButton: 'Demander une Consultation',
      brandDesc: 'Fournitures mécaniques premium, optimisation des stocks du cycle de vie et protocoles de maintenance 24h/24 conçus exclusivement pour les opérations 5 étoiles.',
      oemBadge: 'Hub d\'Approvisionnement en Équipements Originaux Autorisé',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      resourcesTitle: 'Ressources',
      copyright: '© 2026 TRIANGLE BLACK CORP. Tous droits réservés.',
      engineered: 'Conçu pour les opérations de luxe',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d\'Utilisation',
    },
    whatsapp: {
      headerTitle: 'Routage Sécurisé Triangle Black',
      headerSub: 'Support Opérationnel en Direct',
      welcomeMsg: 'Bienvenue chez Triangle Black Engineering. Comment pouvons-nous vous aider avec la logistique de pièces critiques ou la maintenance SLA aujourd\'hui?',
      actionLabel: 'Sélectionnez une action directe:',
      launchBtn: 'Lancer le Chat Sécurisé Premium',
      dispatchTime: 'Lien de dispatch moyen: < 5 minutes',
      tooltip: 'Bureau de Sourcing OEM en Direct',
    },
  },
};
