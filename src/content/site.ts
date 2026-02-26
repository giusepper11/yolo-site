export type ExternalLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  intro: string;
  highlights: string[];
  technologies?: string[];
};

export type ToolCategory = {
  category: string;
  items: string[];
};

export type EducationEntry = {
  institution: string;
  program: string;
  period?: string;
};

export type CertificationEntry = {
  title: string;
  provider?: string;
  url?: string;
};

export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type SiteContent = {
  identity: {
    name: string;
    title: string;
    location: string;
    positioning: string;
    summary: string[];
  };
  links: {
    linkedin: string;
    github: string;
    email: string;
    phone: string;
    external: ExternalLink[];
  };
  expertise: string[];
  about: {
    mission: string;
    keyTooling: string[];
  };
  careerIntro: string;
  experience: ExperienceEntry[];
  topSkills: string[];
  toolsByCategory: ToolCategory[];
  languages: { name: string; proficiency: string }[];
  certifications: CertificationEntry[];
  education: EducationEntry[];
  portfolio: {
    externalPortfolioUrl?: string;
    projects: PortfolioProject[];
    placeholders: { title: string; description: string }[];
  };
};

const email = "giusepper11@gmail.com";
const phone = "+5511948501353";

export const siteContent: SiteContent = {
  identity: {
    name: "Giuseppe Rosa",
    title: "Senior Data Engineer @ Glofox | MBA in Data Engineering",
    location: "Sao Paulo, SP, Brazil",
    positioning:
      "I build robust data platforms and analytics pipelines that help teams make faster, better decisions.",
    summary: [
      "At Glofox, my mission is to harness data to drive sophisticated decision-making and innovation.",
      "I focus on scalable solutions with Python, SQL, AWS, Airflow, DBT, and Spark to optimize data integrity and accessibility.",
      "I collaborate with cross-functional teams to turn big data and APIs into actionable insights.",
    ],
  },
  links: {
    linkedin: "https://www.linkedin.com/in/giuseppe-rosa",
    github: "https://github.com/giusepper11",
    email,
    phone,
    external: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/giuseppe-rosa" },
      { label: "GitHub", href: "https://github.com/giusepper11" },
    ],
  },
  expertise: [
    "Data Engineering",
    "Python",
    "SQL",
    "Cloud Platforms",
    "Orchestration",
  ],
  about: {
    mission:
      "I help organizations design dependable data products that are easy to maintain, observable, and ready to scale.",
    keyTooling: [
      "Python",
      "SQL",
      "Airflow",
      "DBT",
      "Spark",
      "Snowflake",
      "AWS",
      "GCP",
      "FastAPI",
      "Kubernetes",
    ],
  },
  careerIntro:
    "From field service engineering to analytics and now senior data engineering, my career has centered on building systems people can trust when the stakes are high.",
  experience: [
    {
      company: "Glofox",
      role: "Senior Data Engineer",
      dateRange: "Nov 2021 - Present",
      location: "Dublin, Ireland",
      intro:
        "Leading high-impact data engineering initiatives that improve data quality, accessibility, and decision velocity.",
      highlights: [
        "Build and maintain resilient data pipelines for analytical and operational workloads.",
        "Partner with product and business teams to convert complex data into practical decision tools.",
        "Drive standards for data reliability, testing, and documentation across the stack.",
      ],
      technologies: ["Python", "SQL", "AWS", "Airflow", "DBT", "Spark"],
    },
    {
      company: "Juvo",
      role: "Data Engineer",
      dateRange: "Sep 2020 - Nov 2021",
      location: "San Francisco, CA, United States",
      intro:
        "Developed internal platforms supporting data science and identity scoring for financial inclusion use cases.",
      highlights: [
        "Built internal tools for data scientists and engineers for faster experimentation and delivery.",
        "Developed and maintained ETL/ELT pipelines in cloud-native environments.",
        "Supported large-scale data processing for prepaid mobile financial services products.",
      ],
      technologies: [
        "Python",
        "SQL",
        "Airflow",
        "Spark",
        "DBT",
        "Snowflake",
        "AWS",
        "GCP",
        "Kubernetes",
        "Docker",
        "FastAPI",
        "PostgreSQL",
      ],
    },
    {
      company: "AMcom Sistemas de Informacao",
      role: "Data Analyst",
      dateRange: "Dec 2018 - Sep 2020",
      location: "Sao Paulo, Brazil",
      intro:
        "Delivered public-sector data platforms and BI solutions for one of the largest school systems in South America.",
      highlights: [
        "Implemented automated ETL routines with Apache Airflow.",
        "Modeled data marts and open-data exports compliant with transparency requirements.",
        "Managed Metabase infrastructure and stakeholder-facing dashboards.",
      ],
      technologies: ["Airflow", "ETL", "Data Warehousing", "Metabase", "SQL"],
    },
    {
      company: "FAPESP",
      role: "Python Developer",
      dateRange: "Mar 2017 - Dec 2018",
      location: "Sao Paulo, Brazil",
      intro:
        "Built web and data products that measured social impact of research funding initiatives.",
      highlights: [
        "Developed Django and JavaScript applications for the virtual library ecosystem.",
        "Created a Python/Pandas ETL framework for governmental open data ingestion.",
        "Built exploratory data visualization tooling with Django and D3.js.",
      ],
      technologies: ["Python", "Django", "Pandas", "JavaScript", "D3.js", "Solr"],
    },
    {
      company: "TPS Representacoes e Engenharia",
      role: "Service Engineer",
      dateRange: "Jun 2012 - Mar 2017",
      location: "Brazil and Mexico",
      intro:
        "Executed installation and maintenance projects for large-scale steel manufacturing machinery.",
      highlights: [
        "Led field operations for commissioning and specialized maintenance projects.",
        "Coordinated technical delivery across multiple regions in Brazil and Mexico.",
      ],
      technologies: ["Field Engineering", "Project Delivery", "Industrial Systems"],
    },
  ],
  topSkills: ["Data Engineering", "Python", "SQL", "ETL/ELT", "Cloud Data Platforms"],
  toolsByCategory: [
    { category: "Orchestration", items: ["Airflow", "DBT"] },
    { category: "Warehousing", items: ["Snowflake", "Redshift", "Athena"] },
    { category: "Cloud", items: ["AWS", "GCP"] },
    { category: "Processing", items: ["Spark", "Pandas"] },
    { category: "APIs and Services", items: ["FastAPI", "PostgreSQL"] },
    { category: "Containers", items: ["Docker", "Kubernetes"] },
  ],
  languages: [
    { name: "Portugues", proficiency: "Native or bilingual" },
    { name: "Ingles", proficiency: "Native or bilingual" },
  ],
  certifications: [
    { title: "KAFKA: Introducao a Streams em Microsservicos" },
    { title: "Administracao PostgreSQL com Alta Performance" },
    { title: "Desenvolvimento em Front-end (HTML5, CSS3, Bootstrap, JavaScript e jQuery)" },
    { title: "Python Programmer Track" },
    { title: "Data Analyst with Python Track" },
  ],
  education: [
    {
      institution: "FIAP",
      program: "Postgraduate in Data Engineering",
      period: "2019 - 2020",
    },
    {
      institution: "Faculdade Impacta Tecnologia",
      program: "Analise e Desenvolvimento de Sistemas",
      period: "2017 - 2019",
    },
    {
      institution: "Universidade Catolica Dom Bosco",
      program: "Pos-graduacao em Gestao de Projetos",
    },
    {
      institution: "FATEC-SP",
      program: "Tecnologo em Mecanica de Precisao",
      period: "2009 - 2012",
    },
  ],
  portfolio: {
    externalPortfolioUrl: "https://github.com/giusepper11",
    projects: [],
    placeholders: [
      {
        title: "Data Product Case Study",
        description: "Coming soon: architecture, business context, and measurable outcomes.",
      },
      {
        title: "Platform Reliability Deep Dive",
        description: "Coming soon: pipeline quality, observability, and incident learnings.",
      },
      {
        title: "Cloud Migration Story",
        description: "Coming soon: migration strategy, trade-offs, and performance gains.",
      },
    ],
  },
};
