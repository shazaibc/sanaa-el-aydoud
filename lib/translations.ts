export type Language = 'fr' | 'ar' | 'en';

export interface TranslationData {
  nav: {
    about: string;
    services: string;
    practiceAreas: string;
    approach: string;
    contact: string;
    bookConsultation: string;
    callNow: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credentialsTag: string;
  };
  credentials: {
    barTitle: string;
    barDesc: string;
    jurisdictionTitle: string;
    jurisdictionDesc: string;
    ethicsTitle: string;
    ethicsDesc: string;
    availabilityTitle: string;
    availabilityDesc: string;
  };
  about: {
    badge: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    quote: string;
    quoteAuthor: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      points: string[];
      cta: string;
    }[];
  };
  practiceAreas: {
    badge: string;
    title: string;
    subtitle: string;
    allTab: string;
    corporateTab: string;
    personalTab: string;
    litigationTab: string;
    items: {
      id: string;
      category: 'corporate' | 'personal' | 'litigation';
      title: string;
      summary: string;
      details: string[];
    }[];
  };
  consultation: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
    feeNoticeTitle: string;
    feeNoticeDesc: string;
  };
  bookingModal: {
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    serviceType: string;
    practiceArea: string;
    consultationMode: string;
    modeCabinet: string;
    modePhone: string;
    modeWritten: string;
    modeUrgent: string;
    briefSummary: string;
    briefSummaryPlaceholder: string;
    submitWhatsApp: string;
    directCall: string;
    confidentialityNotice: string;
    close: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    officeAddress: string;
    officeAddressValue: string;
    phoneLabel: string;
    phoneValue: string;
    whatsappLabel: string;
    whatsappValue: string;
    emailLabel: string;
    emailValue: string;
    hoursLabel: string;
    hoursValue: string;
    appointmentOnly: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    sendViaWhatsApp: string;
  };
  footer: {
    disclaimer: string;
    allRightsReserved: string;
    barAssociation: string;
    ethicsNotice: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  fr: {
    nav: {
      about: "Le Cabinet",
      services: "Missions & Services",
      practiceAreas: "Domaines d'Intervention",
      approach: "Méthode & Honoraires",
      contact: "Contact & Accès",
      bookConsultation: "Prendre Rendez-vous",
      callNow: "Appel Direct",
    },
    hero: {
      badge: "Ordre des Avocats au Barreau de Casablanca",
      headline: "Maître Sanaa El Aydoud",
      subheadline: "Avocate au Barreau de Casablanca",
      description: "Conseil juridique stratégique, contentieux rigoureux et défense de vos intérêts devant l'ensemble des juridictions et administrations du Royaume du Maroc.",
      ctaPrimary: "Consulter via WhatsApp",
      ctaSecondary: "Découvrir les expertises",
      credentialsTag: "Inscrite au tableau de l'Ordre des Avocats de Casablanca • Conforme à la déontologie",
    },
    credentials: {
      barTitle: "Barreau de Casablanca",
      barDesc: "Inscrite au tableau de l'Ordre, habilitée à plaider devant toutes les cours du Maroc",
      jurisdictionTitle: "Compétence Nationale",
      jurisdictionDesc: "Tribunaux de Première Instance, Cours d'Appel et Cour de Cassation",
      ethicsTitle: "Secret Professionnel Absolu",
      ethicsDesc: "Rigueur déontologique, confidentialité intégrale et indépendance d'exercice",
      availabilityTitle: "Disponibilité & Réactivité",
      availabilityDesc: "Prise en charge diligente des urgences et suivi transparent des dossiers",
    },
    about: {
      badge: "À Propos",
      title: "Rigueur, discrétion et excellence juridique au service de vos droits",
      paragraph1: "Inscrite au Barreau de Casablanca, Maître Sanaa El Aydoud met son expertise juridique au service des entreprises, des dirigeants et des particuliers confrontés à des enjeux contentieux ou contractuels majeurs.",
      paragraph2: "Notre pratique repose sur une maîtrise approfondie du droit positif marocain, de la jurisprudence des cours d'appel et de la Cour de Cassation. Chaque dossier fait l'objet d'une analyse doctrinale et stratégique méticuleuse avant toute action amiable ou judiciaire.",
      paragraph3: "Privilégiant la clarté et la transparence, le cabinet accompagne ses mandants avec une exigence absolue de loyauté, d'indépendance et d'efficacité pratique.",
      quote: "La vocation de l'avocat est d'éclairer le justiciable, d'anticiper le risque et de porter la voix du droit avec fermeté et équité.",
      quoteAuthor: "Maître Sanaa El Aydoud",
      pillars: [
        {
          title: "Approche sur-mesure",
          desc: "Chaque situation présente des particularités uniques exigeant une stratégie adaptée et proportionnée.",
        },
        {
          title: "Transparence totale",
          desc: "Information continue sur les étapes de la procédure et prévisibilité claire des honoraires.",
        },
        {
          title: "Pratique pluridisciplinaire",
          desc: "Capacité d'intervention combinant droit des affaires, contentieux civil, pénal et fiscal.",
        },
      ],
    },
    services: {
      badge: "Nos Prestations",
      title: "Un accompagnement juridique complet",
      subtitle: "Trois axes d'intervention pour sécuriser vos démarches et assurer votre défense.",
      items: [
        {
          id: "consultations",
          title: "Consultations Juridiques",
          description: "Avis consultatifs oraux ou écrits, audit préalable des risques légaux, et conseil stratégique pour particuliers et personnes morales.",
          points: [
            "Consultations au cabinet sur rendez-vous à Casablanca",
            "Consultations juridiques écrites approfondies avec visa des textes de loi",
            "Analyse précontentieuse et évaluation des chances de succès",
            "Sécurisation contractuelle et validation d'engagements",
          ],
          cta: "Demander une consultation",
        },
        {
          id: "review",
          title: "Étude & Suivi des Dossiers",
          description: "Audit complet de vos pièces, examen de la légalité des actes et suivi rigoureux de l'état d'avancement des procédures en cours.",
          points: [
            "Revue exhaustive des pièces justificatives et pièces adverses",
            "Élaboration de mémoires et conclusions circonstanciées",
            "Suivi régulier du calendrier des audiences et des jugements avant-dire-droit",
            "Rapports périodiques d'avancement transmis au mandant",
          ],
          cta: "Faire examiner un dossier",
        },
        {
          id: "representation",
          title: "Représentation Judiciaire & Administrative",
          description: "Plaidoirie et défense devant l'ensemble des tribunaux marocains, commissions administratives et organes de conciliation.",
          points: [
            "Tribunaux de Première Instance et de Commerce",
            "Cours d'Appel Civiles, Commerciales et Administratives",
            "Représentation devant les administrations publiques et commissions fiscales",
            "Exécution forcée des décisions de justice et recouvrement",
          ],
          cta: "Mandater le cabinet",
        },
      ],
    },
    practiceAreas: {
      badge: "Expertises",
      title: "Domaines d'Intervention",
      subtitle: "Compétences reconnues dans les principaux domaines du droit marocain des affaires et des personnes.",
      allTab: "Tous les Domaines",
      corporateTab: "Affaires & Entreprises",
      personalTab: "Particuliers & Famille",
      litigationTab: "Contentieux Spécifiques",
      items: [
        {
          id: "written-consultations",
          category: "corporate",
          title: "Consultations Juridiques Écrites",
          summary: "Rédaction d'avis juridiques motivés et d'études doctrinales pour sécuriser vos décisions d'investissement et contractuelles.",
          details: [
            "Consultations formelles visées par l'avocat",
            "Interprétation des lois et règlements marocains",
            "Audit des clauses contractuelles sensibles",
            "Notes d'orientation stratégique préventive",
          ],
        },
        {
          id: "family-law",
          category: "personal",
          title: "Droit de la Famille & Statut Personnel",
          summary: "Accompagnement humain et discret dans les procédures régies par la Moudawana (Code de la Famille marocain).",
          details: [
            "Procédures de divorce (chiqaq, accord mutuel, judiciaires)",
            "Pension alimentaire (nafaqa) et garde des enfants (hadana)",
            "Successions, partage d'héritage et liquidation d'indivision",
            "Reconnaissance et exequatur de jugements rendus à l'étranger",
          ],
        },
        {
          id: "labor-law",
          category: "corporate",
          title: "Droit du Travail & Contentieux Social",
          summary: "Conseil aux employeurs et salariés dans les relations individuelles et collectives de travail.",
          details: [
            "Rédaction et révision de contrats de travail",
            "Licenciements individuels ou économiques et conciliation",
            "Contentieux pour licenciement abusif et indemnités légales",
            "Audit de conformité sociale au Code du Travail marocain",
          ],
        },
        {
          id: "civil-commercial",
          category: "corporate",
          title: "Affaires Civiles & Commerciales",
          summary: "Défense dans les litiges d'obligations, de contrats, de responsabilité civile et de baux commerciaux.",
          details: [
            "Inexécution et résiliation de contrats commerciaux",
            "Baux commerciaux (loi 49-16) et loyers impayés",
            "Responsabilité contractuelle et délictuelle",
            "Recouvrement de créances commerciales et mesures conservatoires",
          ],
        },
        {
          id: "criminal-law",
          category: "litigation",
          title: "Droit Pénal & Affaires Correctionnelles",
          summary: "Assistance et défense pénale à tous les stades de la procédure répressive (garde à vue, instruction, jugement).",
          details: [
            "Délits financiers, abus de confiance, escroquerie, faux et usage de faux",
            "Droit pénal des affaires et responsabilité des dirigeants",
            "Défense des victimes et constitution de partie civile",
            "Représentation devant les chambres correctionnelles et criminelles",
          ],
        },
        {
          id: "administrative-tax",
          category: "litigation",
          title: "Affaires Administratives & Réglementaires",
          summary: "Recours contre les décisions des autorités publiques et gestion des relations avec l'administration.",
          details: [
            "Recours pour excès de pouvoir devant les tribunaux administratifs",
            "Marchés publics et exécution des contrats administratifs",
            "Urbanisme, permis de construire et expropriation pour cause d'utilité publique",
            "Responsabilité de la puissance publique",
          ],
        },
        {
          id: "tax-litigation",
          category: "litigation",
          title: "Contentieux Fiscal & Réclamations",
          summary: "Défense du contribuable lors des contrôles fiscaux, réclamations préalables et procédures judiciaires.",
          details: [
            "Assistance lors des vérifications de comptabilité de la DGI",
            "Réclamations contentieuses auprès de l'Administration fiscale",
            "Recours devant la Commission Locale de Taxation et la CNRF",
            "Contentieux fiscal devant les tribunaux administratifs",
          ],
        },
        {
          id: "banking-finance",
          category: "corporate",
          title: "Contentieux Bancaire & Financier",
          summary: "Assistance dans les litiges opposant emprunteurs, cautions et établissements bancaires.",
          details: [
            "Contestation de créances bancaires et taux d'intérêt",
            "Garanties, hypothèques et cautionnements bancaires",
            "Saisie-exécution immobilière et arrêt des voies d'exécution",
            "Litiges relatifs aux instruments financiers et chèques impayés",
          ],
        },
        {
          id: "corporate-disputes",
          category: "corporate",
          title: "Conflits de Sociétés & Gouvernance",
          summary: "Résolution des litiges entre associés, révocation de mandataires et opérations sur capital.",
          details: [
            "Litiges entre associés minoritaires et majoritaires",
            "Responsabilité civile des gérants et administrateurs",
            "Annulation d'assemblées générales irrégulières",
            "Dissolution, liquidation judiciaire et redressement d'entreprises",
          ],
        },
        {
          id: "arbitration-mediation",
          category: "litigation",
          title: "Arbitrage & Médiation",
          summary: "Mise en œuvre des modes alternatifs de règlement des différends (MARD) nationaux et internationaux.",
          details: [
            "Rédaction de clauses compromissoires et conventions de médiation",
            "Représentation des parties dans les instances arbitrales",
            "Procédures d'exequatur de sentences arbitrales au Maroc",
            "Négociation confidentielle et transaction amiable",
          ],
        },
      ],
    },
    consultation: {
      badge: "Méthode",
      title: "Modalités de Consultation & Honoraires",
      subtitle: "Un cadre de travail clair, prévisible et conforme aux règles de la profession d'avocat au Maroc.",
      steps: [
        {
          step: "01",
          title: "Prise de Contact Initiale",
          desc: "Exposez brièvement la nature de votre demande par WhatsApp ou par téléphone. Un créneau de consultation vous est proposé sous 24 à 48 heures.",
        },
        {
          step: "02",
          title: "Consultation & Diagnostic",
          desc: "Séance d'entretien approfondi au cabinet à Casablanca ou à distance. Analyse des pièces justificatives, qualification juridique et stratégie recommandée.",
        },
        {
          step: "03",
          title: "Convention d'Honoraires",
          desc: "Proposition écrite fixant le mode de rémunération (forfaitaire, temps passé ou honoraire de résultat conforme à l'article 51 de la loi 28-08 régissant la profession).",
        },
        {
          step: "04",
          title: "Déploiement de la Stratégie",
          desc: "Engagement diligent des actions convenues, rédaction des actes et compte-rendu transparent à chaque étape de la procédure.",
        },
      ],
      feeNoticeTitle: "Transparence Déontologique sur les Honoraires",
      feeNoticeDesc: "Conformément aux règles du Barreau de Casablanca, les honoraires sont fixés d'un commun accord avec le mandant, en fonction de la complexité de l'affaire, du temps consacré et de l'enjeu financier du litige. Aucune diligence n'est engagée sans accord préalable.",
    },
    bookingModal: {
      title: "Planifier une Consultation",
      subtitle: "Sélectionnez vos critères pour transmettre directement votre demande via WhatsApp au cabinet.",
      fullName: "Nom et Prénom",
      fullNamePlaceholder: "Ex. Mohammed Benani",
      phone: "Numéro de Téléphone",
      phonePlaceholder: "+212 6 XX XX XX XX",
      serviceType: "Prestation souhaitée",
      practiceArea: "Domaine de droit concerné",
      consultationMode: "Modalité de consultation",
      modeCabinet: "Au cabinet (Casablanca)",
      modePhone: "Par téléphone",
      modeWritten: "Consultation juridique écrite",
      modeUrgent: "Procédure d'urgence",
      briefSummary: "Bref résumé de la situation",
      briefSummaryPlaceholder: "Décrivez succinctement les faits essentiels et les délais éventuels...",
      submitWhatsApp: "Confirmer & Ouvrir WhatsApp",
      directCall: "Appeler le cabinet directement",
      confidentialityNotice: "Vos informations sont protégées par le secret professionnel absolu de l'avocat.",
      close: "Fermer",
    },
    contact: {
      badge: "Coordonnées",
      title: "Cabinet Sanaa",
      subtitle: "Situé au cœur de Casablanca, accessible pour vos rendez-vous et correspondances judiciaires.",
      officeAddress: "Adresse du Cabinet",
      officeAddressValue: "Angle Boulevard Zerktouni & Boulevard d'Anfa, Quartier Gauthier, Casablanca, Maroc",
      phoneLabel: "Standard Téléphonique",
      phoneValue: "+212 5 22 20 45 80",
      whatsappLabel: "Ligne Directe / WhatsApp",
      whatsappValue: "+212 6 61 48 92 10",
      emailLabel: "Courriel Électronique",
      emailValue: "contact@elaydoud-avocat.ma",
      hoursLabel: "Horaires d'Ouverture",
      hoursValue: "Du Lundi au Vendredi : 09h00 - 18h30 | Samedi sur rendez-vous d'urgence",
      appointmentOnly: "Réception de la clientèle uniquement sur rendez-vous préalable.",
      formTitle: "Envoyer une demande rapide",
      name: "Votre Nom",
      email: "Votre Courriel",
      phone: "Votre Téléphone",
      subject: "Objet de la demande",
      message: "Message / Précisions",
      sendViaWhatsApp: "Transmettre via WhatsApp Direct",
    },
    footer: {
      disclaimer: "Cabinet Sanaa — Inscrite au tableau de l'Ordre des Avocats au Barreau de Casablanca. Site d'information professionnelle conforme aux dispositions de la loi n° 28-08 organisant l'exercice de la profession d'avocat au Maroc et au règlement intérieur de l'Ordre.",
      allRightsReserved: "Tous droits réservés.",
      barAssociation: "Barreau de Casablanca",
      ethicsNotice: "Secret Professionnel & Rigueur Déontologique",
    },
  },
  ar: {
    nav: {
      about: "عن المكتب",
      services: "الخدمات والمهام",
      practiceAreas: "مجالات الممارسة",
      approach: "المنهجية والأتعاب",
      contact: "التواصل والمقر",
      bookConsultation: "حجز استشارة",
      callNow: "اتصال مباشر",
    },
    hero: {
      badge: "هيئة المحامين بالدار البيضاء",
      headline: "الأستاذة سناء العيدود",
      subheadline: "محامية بهيئة الدار البيضاء",
      description: "استشارات قانونية دقيقة، دفاع حازم وتتبع صارم للملفات أمام مختلف محاكم وإدارات المملكة المغربية مع الالتزام التام بالسر المهني وأخلاقيات المهنة.",
      ctaPrimary: "حجز موعد عبر واتساب",
      ctaSecondary: "تصفح مجالات الاختصاص",
      credentialsTag: "مقيدة بجدول هيئة المحامين بالدار البيضاء • كفاءة، استقلالية وسرية مهنية مطلقة",
    },
    credentials: {
      barTitle: "هيئة الدار البيضاء",
      barDesc: "محامية مسجلة بجدول هيئة الدار البيضاء مخول لها الترافع أمام كافة محاكم المملكة",
      jurisdictionTitle: "اختصاص وطني شامل",
      jurisdictionDesc: "المحاكم الابتدائية، محاكم الاستئناف، المحاكم التجارية والإدارية ومحكمة النقض",
      ethicsTitle: "السر المهني المطلق",
      ethicsDesc: "التزام صارم بقواعد المروءة والشرف والسرية القانونية المضمونة قانوناً",
      availabilityTitle: "التفاعل والجاهزية",
      availabilityDesc: "معالجة فورية للملفات العاجلة وإحاطة مستمرة للموكلين بمجريات القضايا",
    },
    about: {
      badge: "عن الأستاذة والمكتب",
      title: "الصرامة العلمية، النزاهة والخبرة القانونية في خدمة حقوقكم",
      paragraph1: "الأستاذة سناء العيدود، محامية بهيئة الدار البيضاء، تقدم خدمات الدفاع والاستشارة القانونية للمقاولات والمؤسسات والأفراد في مختلف النزاعات القضائية والإجراءات الوقائية.",
      paragraph2: "ترتكز ممارستنا على إحاطة متعمقة بمقتضيات القانون الوضعي المغربي والاجتهادات القضائية الصادرة عن محاكم الاستئناف ومحكمة النقض. يخضع كل ملف لدراسة موضوعية دقيقة قبل سلوك أي مسطرة ودية أو قضائية.",
      paragraph3: "نحرص في مكتبنا على تعزيز ثقة الموكلين عبر الوضوح التام، والشفافية في بيان الفرص والمخاطر، والالتزام الصادق بالدفاع عن المصالح المشروعة وفق أسمى معايير الشرف المهني.",
      quote: "رسالة المحاماة هي إرساء قواعد العدالة، وتبصير المتقاضي، وصون الحقوق بحزم وأمانة.",
      quoteAuthor: "الأستاذة سناء العيدود",
      pillars: [
        {
          title: "استراتيجية مخصصة",
          desc: "كل نازلة تحمل خصوصيات فريدة تتطلب حلاً قانونياً مصمماً بعناية فائقة.",
        },
        {
          title: "شفافية مطلقة",
          desc: "تواصل مستمر حول مآل المساطر ووضوح تام في تحديد الأتعاب منذ البداية.",
        },
        {
          title: "تعدد التخصصات",
          desc: "قدرة عالية على الترافع في قضايا الأعمال، الميدان المدني، الجنائي والضريبي.",
        },
      ],
    },
    services: {
      badge: "خدماتنا",
      title: "مواكبة قانونية شاملة ومتكاملة",
      subtitle: "ثلاثة محاور رئيسية لتأمين معاملاتكم وصون حقوقكم أمام الهيئات المختصة.",
      items: [
        {
          id: "consultations",
          title: "الاستشارات القانونية",
          description: "تقديم آراء ومشورة قانونية مكتوبة أو شفوية معللة، وتدقيق مسبق للمخاطر التعاقدية للشركات والأفراد.",
          points: [
            "استشارات بمكتب المحامية بالدار البيضاء بعد تحديد موعد مسبق",
            "استشارات قانونية كتابية مفصلة مستندة للمواد القانونية والاجتهاد القضائي",
            "تقييم مسبق لحظوظ النجاح والحلول الودية المتاحة قبل التقاضي",
            "صياغة ومراجعة العقود والاتفاقيات لضمان حمايتها القانونية",
          ],
          cta: "طلب استشارة قانونية",
        },
        {
          id: "review",
          title: "دراسة وتتبع الملفات والقضايا",
          description: "فحص مستفيض للوثائق والمستندات، والتتبع المستمر لمجريات الدعاوى والأحكام التمهيدية والنهائية.",
          points: [
            "دراسة شاملة لوثائق الموكل ودفوع الخصوم",
            "إعداد المذكرات والمقالات الافتتاحية والمستنتجات الجوابية بحرفية",
            "متابعة دقيقة لجلسات المحاكم وإجراءات الخبرة والمعاينات",
            "تقارير دورية تطلع الموكل على كافة تطورات الملف القضائي",
          ],
          cta: "عرض ملف للدراسة",
        },
        {
          id: "representation",
          title: "التمثيل أمام المحاكم والإدارات",
          description: "الترافع والدفاع أمام كافة درجات المحاكم المغربية، واللجان الإدارية وهيئات التوفيق والتنفيذ.",
          points: [
            "المحاكم الابتدائية والمحاكم التجارية ومحاكم الاستئناف",
            "محكمة النقض والمحاكم الإدارية بمختلف مدن المملكة",
            "التمثيل أمام إدارات الدولة والمؤسسات العمومية ولجان الضرائب",
            "تنفيذ الأحكام القضائية واستيفاء الديون بالطرق القانونية",
          ],
          cta: "توكيل المكتب",
        },
      ],
    },
    practiceAreas: {
      badge: "مجالات الاختصاص",
      title: "تخصصات الممارسة القانونية",
      subtitle: "كفاءة متمرسة في أهم فروع القانون المغربي لحماية مصالحكم الشخصية والتجارية.",
      allTab: "كافة المجالات",
      corporateTab: "قضايا الأعمال والشركات",
      personalTab: "قضايا الأفراد والأسرة",
      litigationTab: "نزاعات نوعية ومتخصصة",
      items: [
        {
          id: "written-consultations",
          category: "corporate",
          title: "الاستشارات القانونية الكتابية",
          summary: "صياغة فتاوى وآراء قانونية مكتوبة تضمن سلامة قراراتكم الاستثمارية والتعاقدية.",
          details: [
            "فتاوى واستشارات رسمية مؤشر عليها من طرف الأستاذة",
            "تفسير وتطبيق نصوص القوانين والمراسيم المغربية النافذة",
            "تدقيق البنود الحساسة في العقود والتصرفات القانونية",
            "مذكرات توجيهية استباقية لتفادي النزاعات القضائية",
          ],
        },
        {
          id: "family-law",
          category: "personal",
          title: "قضايا الأسرة والأحوال الشخصية",
          summary: "مواكبة إنسانية وحكيمة في المساطر الخاضعة لمدونة الأسرة المغربية برعاية وصيانة للحقوق.",
          details: [
            "دعاوى التطليق للشقاق والطلاق بالاتفاق والرجوع لبيت الزوجية",
            "مستحقات الزوجة ونفقة الأطفال وأجرة الحضانة وسكنى المحضون",
            "قضايا التركات وقسمة الميراث وتصفية الأموال المشتركة",
            "تذييل الأحكام الأجنبية بالصيغة التنفيذية بالمغرب (Exequatur)",
          ],
        },
        {
          id: "labor-law",
          category: "corporate",
          title: "قضايا الشغل وقانون العمل",
          summary: "تقديم المشورة للمشغلين والأجراء وإدارة النزاعات الفردية والجماعية وفق مدونة الشغل.",
          details: [
            "صياغة ومراجعة عقود الشغل وملاءمة النظام الداخلي",
            "نزاعات الفصل التعسفي والمطالبة بالتعويضات القانونية",
            "المساطر التصالحية أمام مفتشية الشغل ومجالس الصلح",
            "تدقيق الامتثال لمعايير قانون الشغل والسلامة المهنية",
          ],
        },
        {
          id: "civil-commercial",
          category: "corporate",
          title: "القضايا المدنية والتجارية",
          summary: "الدفاع في نزاعات الالتزامات والعقود، المسؤولية المدنية، والأكرية التجارية والمدنية.",
          details: [
            "فسخ العقود التجارية ومطالبات الإخلال بالالتزام",
            "الكراء التجاري وفق القانون 49-16 واسترداد المحلات واستخلاص الوجيبة",
            "دعاوى المسؤولية العقدية والتقصيرية والتعويض عن الأضرار",
            "استخلاص الديون التجارية والحجوزات التحفظية والتنفيذية",
          ],
        },
        {
          id: "criminal-law",
          category: "litigation",
          title: "قضايا الجنح والجنايات",
          summary: "مؤازرة والدفاع عن المتهمين والضحايا في سائر مراحل الدعوى العمومية والتحقيق والمحاكمة.",
          details: [
            "الجرائم المالية وخيانة الأمانة والنصب والشيك بدون رصيد والتزوير",
            "القانون الجنائي للأعمال ومسؤولية المسيرين القانونيين",
            "تنصيب المطالبين بالحق المدني والمطالبة بالتعويضات الجابرة للضرر",
            "الترافع أمام الغرف الجنحية والجنائية بمحاكم الاستئناف",
          ],
        },
        {
          id: "administrative-tax",
          category: "litigation",
          title: "المساطر الإدارية والقرارات العمومية",
          summary: "الطعن في القرارات الإدارية غير المشروعة ومباشرة دعاوى التعويض ومنازعات الصفقات.",
          details: [
            "دعاوى الإلغاء لتجاوز السلطة أمام المحاكم الإدارية",
            "منازعات الصفقات العمومية وتنفيذ العقود الإدارية",
            "قضايا نزع الملكية للمنفعة العامة والمطالبة بالتعويض العادل",
            "مسؤولية الدولة والإدارات العمومية عن الأضرار اللاحقة بالمرتفقين",
          ],
        },
        {
          id: "tax-litigation",
          category: "litigation",
          title: "منازعات الضرائب والتحصيل الجبري",
          summary: "حماية الملزمين بالضريبة أثناء المراقبة الضريبية وسلوك الطعون الإدارية والقضائية.",
          details: [
            "مؤازرة الشركات أثناء مساطر الفحص الضريبي للمحاسبة",
            "تقديم التظلمات والشكايات أمام مصالح إدارة الضرائب والخزينة",
            "الترافع أمام اللجان المحلية واللجنة الوطنية للنظر في الطعون الضريبية",
            "إقامة دعاوى بطلان جداول الضرائب والحجوزات غير القانونية",
          ],
        },
        {
          id: "financial-banking",
          category: "corporate",
          title: "المنازعات البنكية والمالية",
          summary: "الدفاع في النزاعات القائمة بين المؤسسات الائتمانية والزبناء والضامنين.",
          details: [
            "منازعة مديونيات البنوك والفوائد والعمولات غير المستحقة",
            "الضمانات البنكية والرهون الرسمية والكفالات الشخصية",
            "إجراءات الحجز العقاري ووقف البيع بالمزاد العلني",
            "نزاعات المعاملات البنكية والشيكات والكمبيالات",
          ],
        },
        {
          id: "corporate-disputes",
          category: "corporate",
          title: "نزاعات الشركات والشركاء",
          summary: "تسوية الخلافات بين الشركاء والمساهمين وعزل المسيرين ومساطر صعوبات المقاولة.",
          details: [
            "حماية حقوق الشركاء الأقلية وحل نزاعات الإدارة والتسيير",
            "دعاوى مسؤولية المسيرين وأعضاء مجالس الإدارة",
            "إبطال قرارات الجموع العامة غير المطابقة للقانون والنظام الأساسي",
            "مساطر الوقاية والتسوية والتصفية القضائية للمقاولات المتعثرة",
          ],
        },
        {
          id: "arbitration-mediation",
          category: "litigation",
          title: "التحكيم والوساطة الاتفاقية",
          summary: "تطبيق الوسائل البديلة لحل المنازعات الوطنية والدولية بالسرعة والسرية التامة.",
          details: [
            "صياغة بنود ومشارطات التحكيم واتفاقيات الوساطة",
            "تمثيل الأطراف أمام الهيئات ومحاكم التحكيم المعتمدة",
            "إجراءات تذييل أحكام التحكيم بالصيغة التنفيذية بالمغرب",
            "المفاوضات الودية والصلح الاتفاقي لإنهاء النزاعات باحترافية",
          ],
        },
      ],
    },
    consultation: {
      badge: "المنهجية",
      title: "كيفية حجز الاستشارة والأتعاب",
      subtitle: "إطار عمل شفاف وموثوق يتوافق مع القوانين المنظمة لمهنة المحاماة بالمملكة المغربية.",
      steps: [
        {
          step: "01",
          title: "التواصل الأولي",
          desc: "تواصلوا عبر تطبيق واتساب أو الهاتف لتوضيح طبيعة الموضوع. يتم اقتراح موعد للاستشارة خلال 24 إلى 48 ساعة.",
        },
        {
          step: "02",
          title: "جلسة الاستشارة والتشخيص",
          desc: "جلسة عمل بالمكتب بالدار البيضاء أو عبر الهاتف للمغاربة المقيمين بالخارج، للاطلاع على الوثائق وتحديد التوجه القانوني.",
        },
        {
          step: "03",
          title: "اتفاقية الأتعاب الواضحة",
          desc: "تحديد مسبق وشفاف للأتعاب والمصاريف وفق المادة 51 من القانون 28-08 المنظم لمهنة المحاماة دون مفاجآت.",
        },
        {
          step: "04",
          title: "مباشرة الإجراءات والتتبع",
          desc: "الشروع الفوري في كتابة المقالات والمذكرات ومباشرة المساطر مع إخبار الموكل بكل تطور بدقة ووضوح.",
        },
      ],
      feeNoticeTitle: "الشفافية وأخلاقيات الأتعاب",
      feeNoticeDesc: "وفقاً لأعراف وتقاليد هيئة المحامين بالدار البيضاء، تحدد أتعاب المحامي باتفاق صريح مع الموكل، مع مراعاة طبيعة القضية وتشعبها، والجهد المبذول، والمسؤولية الملقاة على عاتق الدفاع، دون الشروع في أي عمل إلا بعد التوافق التام.",
    },
    bookingModal: {
      title: "طلب موعد واستشارة قانونية",
      subtitle: "يرجى ملء المعطيات التالية لإرسال رسالة مباشرة ومؤطرة عبر واتساب إلى مكتب الأستاذة.",
      fullName: "الاسم الكامل",
      fullNamePlaceholder: "مثال: ذ. كريم العلمي",
      phone: "رقم الهاتف للتواصل",
      phonePlaceholder: "+212 6 XX XX XX XX",
      serviceType: "نوع الخدمة المطلوبة",
      practiceArea: "مجال الاختصاص المعني",
      consultationMode: "صيغة الاستشارة المفضلة",
      modeCabinet: "حضورياً بمكتب الدار البيضاء",
      modePhone: "استشارة عبر الهاتف",
      modeWritten: "استشارة قانونية كتابية مفصلة",
      modeUrgent: "مسطرة استعجالية طارئة",
      briefSummary: "ملخص مقتضب عن القضية أو الاستفسار",
      briefSummaryPlaceholder: "اذكر باختصار الوقائع الأساسية والآجال إن وجدت...",
      submitWhatsApp: "تأكيد والانتقال إلى واتساب",
      directCall: "اتصال هاتفي مباشر بالمكتب",
      confidentialityNotice: "كافة البيانات والمعلومات مصانة ومحمية بموجب السر المهني للمحاماة.",
      close: "إغلاق",
    },
    contact: {
      badge: "معلومات الاتصال",
      title: "مكتب سناء للمحاماة",
      subtitle: "مقر المكتب في موقع استراتيجي بقلب العاصمة الاقتصادية الدار البيضاء.",
      officeAddress: "عنوان المكتب",
      officeAddressValue: "ملتقى شارع الزرقطوني وشارع أنفا، حي كوتييه، الدار البيضاء، المغرب",
      phoneLabel: "الهاتف الثابت للمكتب",
      phoneValue: "+212 5 22 20 45 80",
      whatsappLabel: "الخط المباشر / واتساب",
      whatsappValue: "+212 6 61 48 92 10",
      emailLabel: "البريد الإلكتروني المهني",
      emailValue: "contact@elaydoud-avocat.ma",
      hoursLabel: "أوقات العمل والاستقبال",
      hoursValue: "من الإثنين إلى الجمعة: 09:00 - 18:30 | السبت لمواعيد الطوارئ فقط",
      appointmentOnly: "يتم استقبال الزبناء حصرياً بناءً على موعد مسبق لضمان جودة الاستماع والسرية.",
      formTitle: "إرسال طلب فوري",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      subject: "موضوع الطلب",
      message: "تفاصيل إضافية",
      sendViaWhatsApp: "إرسال عبر واتساب الفوري",
    },
    footer: {
      disclaimer: "مكتب سناء للمحاماة — الأستاذة سناء العيدود، محامية بهيئة المحامين بالدار البيضاء. موقع مهني إخباري وفقاً للمقتضيات القانونية للقانون رقم 28-08 المنظم لمهنة المحاماة والنظام الداخلي للهيئة.",
      allRightsReserved: "جميع الحقوق محفوظة.",
      barAssociation: "هيئة المحامين بالدار البيضاء",
      ethicsNotice: "السر المهني والأمانة واجب أصيل",
    },
  },
  en: {
    nav: {
      about: "About the Firm",
      services: "Services",
      practiceAreas: "Practice Areas",
      approach: "Method & Fees",
      contact: "Contact & Location",
      bookConsultation: "Book Consultation",
      callNow: "Call Office",
    },
    hero: {
      badge: "Casablanca Bar Association Member",
      headline: "Me. Sanaa El Aydoud",
      subheadline: "Attorney at Law — Casablanca Bar",
      description: "Strategic legal counsel, rigorous litigation advocacy, and client representation before all courts and administrative bodies throughout the Kingdom of Morocco.",
      ctaPrimary: "Book Consultation via WhatsApp",
      ctaSecondary: "Explore Practice Areas",
      credentialsTag: "Admitted to the Casablanca Bar • Bound by strict Moroccan legal deontology & professional secrecy",
    },
    credentials: {
      barTitle: "Casablanca Bar Association",
      barDesc: "Registered advocate with full right of audience before all Moroccan jurisdictions",
      jurisdictionTitle: "National Jurisdiction",
      jurisdictionDesc: "First Instance Courts, Courts of Appeal, Commercial Courts, and Court of Cassation",
      ethicsTitle: "Strict Professional Secrecy",
      ethicsDesc: "Guaranteed client confidentiality, ethical independence, and deontology",
      availabilityTitle: "Prompt Responsiveness",
      availabilityDesc: "Diligent handling of emergency motions and transparent case tracking",
    },
    about: {
      badge: "Profile",
      title: "Precision, discretion, and legal excellence protecting your interests",
      paragraph1: "Registered with the Casablanca Bar Association, Maître Sanaa El Aydoud advises and defends multinational companies, Moroccan enterprises, entrepreneurs, and private individuals in complex legal matters.",
      paragraph2: "Our practice is grounded in deep mastery of Moroccan statutory law, prevailing precedents of appellate jurisdictions, and the Court of Cassation. Every case undergoes exhaustive documentary and doctrinal assessment prior to amicable or adversarial litigation.",
      paragraph3: "We prioritize clarity, strict professional independence, and client discretion, ensuring high-calibre advocacy tailored to practical commercial and personal realities.",
      quote: "The duty of an advocate is to enlighten the client, manage legal risk, and uphold justice with unwavering integrity.",
      quoteAuthor: "Me. Sanaa El Aydoud",
      pillars: [
        {
          title: "Bespoke Strategy",
          desc: "Every dispute requires a customized legal strategy tailored to specific business or family context.",
        },
        {
          title: "Total Transparency",
          desc: "Clear updates at every procedural stage with predictable fee structures agreed beforehand.",
        },
        {
          title: "Multidisciplinary Capability",
          desc: "Proven track record bridging corporate business law, civil claims, criminal defense, and tax disputes.",
        },
      ],
    },
    services: {
      badge: "Our Practice",
      title: "Comprehensive Legal Services in Morocco",
      subtitle: "Three pillars of legal service designed to protect your interests and secure your rights.",
      items: [
        {
          id: "consultations",
          title: "Legal Consultations",
          description: "Authoritative written or oral legal opinions, risk auditing, and preventative counsel for corporate entities and individuals.",
          points: [
            "In-person consultations at our Casablanca office by prior appointment",
            "Comprehensive written legal opinions citing applicable Moroccan statutes & case law",
            "Pre-litigation risk assessments and viability evaluations",
            "Contractual drafting, review, and risk mitigation",
          ],
          cta: "Request Consultation",
        },
        {
          id: "review",
          title: "Case Review & Follow-up",
          description: "Meticulous examination of evidence, procedural audits, and continuous tracking of active court proceedings.",
          points: [
            "Comprehensive audit of supporting documents and counterparty claims",
            "Preparation of reasoned pleadings, writs, and written submissions",
            "Close tracking of court dockets, hearings, and interlocutory rulings",
            "Regular, clear progress reports delivered to the client",
          ],
          cta: "Submit Case for Review",
        },
        {
          id: "representation",
          title: "Court & Administration Representation",
          description: "Full advocacy and defense before all Moroccan judicial courts, administrative bodies, and conciliation panels.",
          points: [
            "First Instance Courts and Commercial Courts",
            "Courts of Appeal (Civil, Commercial, and Administrative)",
            "Representation before public authorities, tax inspection committees, and arbitral tribunals",
            "Enforcement of court judgements and commercial debt recovery",
          ],
          cta: "Retain the Firm",
        },
      ],
    },
    practiceAreas: {
      badge: "Expertise",
      title: "Practice Areas",
      subtitle: "Recognized proficiency across major Moroccan legal disciplines for corporate and individual clients.",
      allTab: "All Areas",
      corporateTab: "Business & Corporate",
      personalTab: "Individuals & Family",
      litigationTab: "Specialized Litigation",
      items: [
        {
          id: "written-consultations",
          category: "corporate",
          title: "Written Legal Consultations",
          summary: "Formal legal opinions and doctrinal memorandums to secure commercial transactions and corporate decisions.",
          details: [
            "Formal written opinions bearing counsel's legal signature",
            "Statutory interpretation of Moroccan business regulations",
            "Risk review for complex commercial agreements",
            "Strategic preventative memorandums before transaction closing",
          ],
        },
        {
          id: "family-law",
          category: "personal",
          title: "Family Law & Personal Status",
          summary: "Discreet and compassionate counsel under the Moroccan Family Code (Moudawana).",
          details: [
            "Divorce proceedings (irreconcilable differences / Chiqaq, mutual consent, judicial)",
            "Child custody (Hadana) and maintenance / alimony (Nafaqa)",
            "Estate distribution, inheritance liquidation, and joint property division",
            "Exequatur enforcement of foreign family court judgements in Morocco",
          ],
        },
        {
          id: "labor-law",
          category: "corporate",
          title: "Employment & Labor Law Cases",
          summary: "Advising corporate employers and executives on Moroccan labor regulations and dispute resolution.",
          details: [
            "Drafting and review of employment contracts and internal policies",
            "Individual and collective redundancies, disciplinary actions",
            "Litigation for wrongful dismissal and statutory severance claims",
            "Moroccan Labor Code compliance audits",
          ],
        },
        {
          id: "civil-commercial",
          category: "corporate",
          title: "Civil & Commercial Business Cases",
          summary: "Advocacy in contractual breaches, tort liability, debt recovery, and commercial lease disputes.",
          details: [
            "Commercial contract breach, termination, and performance enforcement",
            "Commercial leases (Law 49-16), rent defaults, and eviction procedures",
            "Contractual and civil negligence liability",
            "Asset freezing, conservatory attachments, and debt execution",
          ],
        },
        {
          id: "criminal-law",
          category: "litigation",
          title: "Misdemeanor & Criminal Cases",
          summary: "Vigorous criminal defense and victim representation at all stages of prosecution and trial.",
          details: [
            "White-collar offenses: breach of trust, fraud, forgery, check violations",
            "Corporate criminal liability and director liability",
            "Civil party constitution for corporate and individual victims",
            "Advocacy before Correctional and Criminal Appellate Chambers",
          ],
        },
        {
          id: "administrative-tax",
          category: "litigation",
          title: "Administrative & Regulatory Matters",
          summary: "Challenging ultra vires state acts, handling public procurement disputes, and administrative claims.",
          details: [
            "Annulment actions against administrative decisions for abuse of power",
            "Public procurement disputes and execution of state contracts",
            "Zoning, building permits, and compulsory public acquisition (expropriation)",
            "State liability claims for administrative fault",
          ],
        },
        {
          id: "tax-litigation",
          category: "litigation",
          title: "Tax Disputes & Litigation",
          summary: "Defending taxpayers during tax audits, preliminary administrative disputes, and court litigation.",
          details: [
            "Assistance during corporate tax audits by the General Directorate of Taxes (DGI)",
            "Formal administrative claims and contestations",
            "Appeals before Local Tax Commissions and the National Tax Appeals Commission (CNRF)",
            "Judicial tax litigation before Moroccan administrative courts",
          ],
        },
        {
          id: "banking-finance",
          category: "corporate",
          title: "Financial & Banking Disputes",
          summary: "Representing borrowers, guarantors, and entities in contentious banking and lending matters.",
          details: [
            "Challenging irregular bank claims, interest calculations, and bank charges",
            "Collateral disputes, mortgage foreclosures, and personal guarantees",
            "Injunctions against real estate foreclosure auctions",
            "Disputes involving commercial negotiable instruments and promissory notes",
          ],
        },
        {
          id: "corporate-disputes",
          category: "corporate",
          title: "Corporate Disputes & Governance",
          summary: "Resolving shareholder deadlocks, director removals, and distressed enterprise proceedings.",
          details: [
            "Minority shareholder oppression and management deadlock claims",
            "Civil and commercial liability actions against managers and directors",
            "Annulment of irregular general meetings and board resolutions",
            "Corporate restructuring, judicial reorganization, and liquidation",
          ],
        },
        {
          id: "arbitration-mediation",
          category: "litigation",
          title: "Arbitration & Mediation",
          summary: "Domestic and international Alternative Dispute Resolution (ADR) delivering confidential resolutions.",
          details: [
            "Drafting arbitration agreements and mediation compromise clauses",
            "Client representation before domestic and international arbitral tribunals",
            "Exequatur enforcement of domestic and foreign arbitral awards in Morocco",
            "Structured confidential mediation and settlement negotiations",
          ],
        },
      ],
    },
    consultation: {
      badge: "Method",
      title: "Consultation Process & Fees",
      subtitle: "A transparent, structured procedure governed by Moroccan bar standards and deontological ethics.",
      steps: [
        {
          step: "01",
          title: "Initial Contact",
          desc: "Briefly outline your legal matter via WhatsApp or telephone. A consultation appointment is scheduled within 24 to 48 hours.",
        },
        {
          step: "02",
          title: "Consultation & Case Diagnosis",
          desc: "In-depth review at our Casablanca office or via secure call. Evaluation of evidentiary documents and recommended legal roadmap.",
        },
        {
          step: "03",
          title: "Engagement & Fee Agreement",
          desc: "Formal fee agreement detailing the retainer (fixed fee, hourly basis, or success fee as regulated under Moroccan Law 28-08).",
        },
        {
          step: "04",
          title: "Execution & Regular Briefings",
          desc: "Diligent drafting of pleadings, court filings, and continuous updates provided at every critical procedural milestone.",
        },
      ],
      feeNoticeTitle: "Deontological Fee Transparency",
      feeNoticeDesc: "In accordance with Casablanca Bar Association rules, legal fees are agreed upon clearly with the client based on case complexity, time involved, and financial stakes. No billing or action is initiated without mutual prior agreement.",
    },
    bookingModal: {
      title: "Schedule a Consultation",
      subtitle: "Complete the details below to transmit a formatted consultation request directly via WhatsApp.",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g., Karim Bennani",
      phone: "Phone Number",
      phonePlaceholder: "+212 6 XX XX XX XX",
      serviceType: "Requested Service",
      practiceArea: "Relevant Legal Discipline",
      consultationMode: "Consultation Format",
      modeCabinet: "In-Person Office (Casablanca)",
      modePhone: "Phone Consultation",
      modeWritten: "Formal Written Legal Opinion",
      modeUrgent: "Emergency Court Procedure",
      briefSummary: "Brief Summary of the Matter",
      briefSummaryPlaceholder: "Summarize the key facts, counterparty, and any urgent statutory deadlines...",
      submitWhatsApp: "Confirm & Open WhatsApp",
      directCall: "Direct Office Call",
      confidentialityNotice: "All communications are protected under strict Moroccan advocate professional secrecy.",
      close: "Close",
    },
    contact: {
      badge: "Contact",
      title: "Cabinet Sanaa",
      subtitle: "Conveniently situated in central Casablanca for client consultations and judicial correspondence.",
      officeAddress: "Office Address",
      officeAddressValue: "Intersection of Zerktouni & d'Anfa Boulevards, Gauthier District, Casablanca, Morocco",
      phoneLabel: "Office Telephone",
      phoneValue: "+212 5 22 20 45 80",
      whatsappLabel: "Direct Line / WhatsApp",
      whatsappValue: "+212 6 61 48 92 10",
      emailLabel: "Professional Email",
      emailValue: "contact@elaydoud-avocat.ma",
      hoursLabel: "Office Hours",
      hoursValue: "Monday - Friday: 09:00 - 18:30 | Saturday by urgent appointment only",
      appointmentOnly: "Client reception strictly by prior confirmed appointment.",
      formTitle: "Quick Consultation Inquiry",
      name: "Your Name",
      email: "Your Email",
      phone: "Your Phone",
      subject: "Inquiry Subject",
      message: "Additional Details",
      sendViaWhatsApp: "Send via Direct WhatsApp",
    },
    footer: {
      disclaimer: "Cabinet Sanaa — Me. Sanaa El Aydoud, admitted to the Casablanca Bar Association. Professional informational website in accordance with Moroccan Law No. 28-08 governing the legal profession.",
      allRightsReserved: "All rights reserved.",
      barAssociation: "Casablanca Bar Association",
      ethicsNotice: "Advocate Confidentiality & Professional Ethics",
    },
  },
};
