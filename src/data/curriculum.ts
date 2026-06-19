import type { Subject, Chapter } from "@/data/subjects";

/**
 * Curriculum placeholder hierarchy for Learnvixa.
 *
 * Goal: provide the COMPLETE educational framework (categories → exams/classes →
 * subjects → chapters) as browseable placeholders. Real content is added one
 * chapter at a time via the static content files in `src/data/content/`.
 *
 * Every subject/chapter defined here is marked `comingSoon: true`. The only
 * fully-authored content lives in `src/data/subjects.ts` (CBSE Class 12 Science).
 */

// ---------- helpers ----------

function mkChapters(names: string[]): Chapter[] {
  return names.map((name, i) => ({ id: i + 1, name, comingSoon: true }));
}

function mkSubject(
  id: string,
  name: string,
  icon: string,
  color: string,
  chapters: string[],
): Subject {
  return {
    id,
    name,
    icon,
    color,
    comingSoon: true,
    chapters: mkChapters(chapters),
  };
}

// ---------- generic placeholder chapter sets ----------

const GENERIC_4 = ["Unit 1 — Foundations", "Unit 2 — Core Concepts", "Unit 3 — Applications", "Unit 4 — Practice"];
const GENERIC_6 = [...GENERIC_4, "Unit 5 — Advanced Topics", "Unit 6 — Revision"];

// =====================================================================
// SCHOOL — CBSE
// =====================================================================

// ---- LKG / UKG / Primary (Classes 1-2) ----
function preprimarySubjects(prefix: string): Subject[] {
  return [
    mkSubject(`${prefix}-english`, "English", "📖", "0 80% 55%", [
      "Alphabets A–Z", "Phonics & Sounds", "Simple Words", "Rhymes & Stories",
    ]),
    mkSubject(`${prefix}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Numbers 1–100", "Shapes & Patterns", "Addition Basics", "Subtraction Basics",
    ]),
    mkSubject(`${prefix}-evs`, "Environmental Studies", "🌱", "150 80% 45%", [
      "My Family", "My Body", "Plants & Animals", "Seasons & Weather",
    ]),
    mkSubject(`${prefix}-gk`, "General Knowledge", "🧠", "280 70% 55%", [
      "Colors & Shapes", "Days & Months", "Festivals", "Good Habits",
    ]),
    mkSubject(`${prefix}-art`, "Art & Craft", "🎨", "38 92% 55%", [
      "Drawing Basics", "Coloring", "Paper Craft", "Creative Play",
    ]),
  ];
}

// ---- Classes 3-5 (Junior Primary) ----
function juniorPrimarySubjects(prefix: string): Subject[] {
  return [
    mkSubject(`${prefix}-english`, "English", "📖", "0 80% 55%", [
      "Grammar Basics", "Reading Comprehension", "Writing Skills", "Poetry", "Vocabulary",
    ]),
    mkSubject(`${prefix}-hindi`, "Hindi", "📜", "25 80% 50%", [
      "व्याकरण", "पठन", "लेखन", "कविता", "कहानी",
    ]),
    mkSubject(`${prefix}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Numbers & Operations", "Fractions", "Measurement", "Geometry Basics", "Data Handling",
    ]),
    mkSubject(`${prefix}-evs`, "EVS / Science", "🔬", "150 80% 45%", [
      "Living World", "Our Environment", "Food & Health", "Earth & Space", "Materials Around Us",
    ]),
    mkSubject(`${prefix}-social`, "Social Studies", "🌍", "210 70% 50%", [
      "Our Country", "Maps & Directions", "Communities", "History Stories",
    ]),
    mkSubject(`${prefix}-computer`, "Computer Science", "💻", "280 80% 60%", [
      "Intro to Computers", "Parts of a Computer", "Using the Keyboard", "Paint & Drawing",
    ]),
  ];
}

// ---- Classes 6-8 (Middle School) ----
function middleSchoolSubjects(prefix: string): Subject[] {
  return [
    mkSubject(`${prefix}-english`, "English", "📖", "0 80% 55%", [
      "Honeysuckle / Honeydew (Prose)", "Poetry", "Grammar", "Writing Skills", "It So Happened (Supplementary)",
    ]),
    mkSubject(`${prefix}-hindi`, "Hindi", "📜", "25 80% 50%", [
      "वसंत / दूर्वा (गद्य)", "पद्य", "व्याकरण", "रचना", "बाल महाभारत",
    ]),
    mkSubject(`${prefix}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Number System", "Algebra", "Geometry", "Mensuration", "Data Handling", "Ratio & Proportion",
    ]),
    mkSubject(`${prefix}-science`, "Science", "🔬", "150 80% 45%", [
      "Physics — Motion & Force", "Chemistry — Matter", "Biology — Living World",
      "Energy & Sound", "Light", "Environment",
    ]),
    mkSubject(`${prefix}-social`, "Social Science", "🌍", "210 70% 50%", [
      "History", "Geography", "Civics / Social & Political Life", "Economics Basics",
    ]),
    mkSubject(`${prefix}-sanskrit`, "Sanskrit", "🕉️", "38 70% 50%", [
      "रुचिरा — पाठ", "व्याकरण", "अनुवाद", "श्लोक",
    ]),
    mkSubject(`${prefix}-computer`, "Computer Science", "💻", "280 80% 60%", [
      "Computer Fundamentals", "MS Office Basics", "Internet & Email", "Intro to Programming",
    ]),
  ];
}

// ---- Class 9 ----
function class9Subjects(): Subject[] {
  const p = "cbse-class-9";
  return [
    mkSubject(`${p}-english`, "English", "📖", "0 80% 55%", [
      "Beehive (Prose)", "Beehive (Poetry)", "Moments (Supplementary)", "Grammar", "Writing Skills",
    ]),
    mkSubject(`${p}-hindi`, "Hindi", "📜", "25 80% 50%", [
      "क्षितिज (गद्य)", "क्षितिज (पद्य)", "कृतिका", "व्याकरण", "रचना",
    ]),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables",
      "Lines and Angles", "Triangles", "Quadrilaterals", "Areas of Parallelograms & Triangles",
      "Circles", "Surface Areas and Volumes", "Statistics", "Probability",
    ]),
    mkSubject(`${p}-science`, "Science", "🔬", "150 80% 45%", [
      "Matter in Our Surroundings", "Is Matter Around Us Pure", "Atoms and Molecules", "Structure of the Atom",
      "The Fundamental Unit of Life", "Tissues", "Diversity in Living Organisms",
      "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound",
      "Why Do We Fall Ill", "Natural Resources", "Improvement in Food Resources",
    ]),
    mkSubject(`${p}-social`, "Social Science", "🌍", "210 70% 50%", [
      "India and the Contemporary World — I (History)", "Contemporary India — I (Geography)",
      "Democratic Politics — I (Civics)", "Economics",
    ]),
    mkSubject(`${p}-sanskrit`, "Sanskrit", "🕉️", "38 70% 50%", GENERIC_6),
    mkSubject(`${p}-it`, "Information Technology", "💻", "280 80% 60%", [
      "Intro to IT/ITeS", "Data Entry & Keyboarding", "Digital Documentation", "Electronic Spreadsheet", "Digital Presentation",
    ]),
  ];
}

// ---- Class 10 ----
function class10Subjects(): Subject[] {
  const p = "cbse-class-10";
  return [
    mkSubject(`${p}-english`, "English", "📖", "0 80% 55%", [
      "First Flight (Prose)", "First Flight (Poetry)", "Footprints Without Feet", "Grammar", "Writing Skills",
    ]),
    mkSubject(`${p}-hindi`, "Hindi", "📜", "25 80% 50%", [
      "क्षितिज (गद्य)", "क्षितिज (पद्य)", "कृतिका", "व्याकरण", "रचना",
    ]),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations",
      "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry",
      "Some Applications of Trigonometry", "Circles", "Areas Related to Circles", "Surface Areas and Volumes",
      "Statistics", "Probability",
    ]),
    mkSubject(`${p}-science`, "Science", "🔬", "150 80% 45%", [
      "Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-metals",
      "Carbon and its Compounds", "Periodic Classification of Elements",
      "Life Processes", "Control and Coordination", "How do Organisms Reproduce", "Heredity and Evolution",
      "Light — Reflection and Refraction", "Human Eye and the Colourful World", "Electricity",
      "Magnetic Effects of Electric Current", "Sources of Energy", "Our Environment", "Management of Natural Resources",
    ]),
    mkSubject(`${p}-social`, "Social Science", "🌍", "210 70% 50%", [
      "India and the Contemporary World — II (History)", "Contemporary India — II (Geography)",
      "Democratic Politics — II (Civics)", "Understanding Economic Development",
    ]),
    mkSubject(`${p}-sanskrit`, "Sanskrit", "🕉️", "38 70% 50%", GENERIC_6),
    mkSubject(`${p}-it`, "Information Technology", "💻", "280 80% 60%", [
      "Digital Documentation (Advanced)", "Electronic Spreadsheet (Advanced)",
      "Database Management System", "Web Applications and Security",
    ]),
  ];
}

// ---- Class 11 — Stream wise ----
function class11Science(): Subject[] {
  const p = "cbse-class-11-sci";
  return [
    mkSubject(`${p}-physics`, "Physics", "⚡", "38 92% 50%", [
      "Physical World", "Units and Measurements", "Motion in a Straight Line", "Motion in a Plane",
      "Laws of Motion", "Work, Energy and Power", "System of Particles and Rotational Motion",
      "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids",
      "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory",
      "Oscillations", "Waves",
    ]),
    mkSubject(`${p}-chemistry`, "Chemistry", "🧪", "150 80% 45%", [
      "Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements & Periodicity",
      "Chemical Bonding and Molecular Structure", "States of Matter", "Thermodynamics", "Equilibrium",
      "Redox Reactions", "Hydrogen", "The s-Block Elements", "The p-Block Elements",
      "Organic Chemistry — Some Basic Principles", "Hydrocarbons", "Environmental Chemistry",
    ]),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Sets", "Relations and Functions", "Trigonometric Functions", "Principle of Mathematical Induction",
      "Complex Numbers and Quadratic Equations", "Linear Inequalities", "Permutations and Combinations",
      "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections",
      "Introduction to Three Dimensional Geometry", "Limits and Derivatives",
      "Mathematical Reasoning", "Statistics", "Probability",
    ]),
    mkSubject(`${p}-biology`, "Biology", "🧬", "120 70% 45%", [
      "The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom",
      "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Organisation in Animals",
      "Cell — The Unit of Life", "Biomolecules", "Cell Cycle and Cell Division",
      "Transport in Plants", "Mineral Nutrition", "Photosynthesis in Higher Plants",
      "Respiration in Plants", "Plant Growth and Development",
      "Digestion and Absorption", "Breathing and Exchange of Gases", "Body Fluids and Circulation",
      "Excretory Products", "Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination",
    ]),
    mkSubject(`${p}-cs`, "Computer Science", "💻", "280 80% 60%", [
      "Computer Systems and Organisation", "Computational Thinking and Programming — I",
      "Society, Law and Ethics", "Python Programming", "Data Handling",
    ]),
    mkSubject(`${p}-english`, "English Core", "📖", "0 80% 55%", [
      "Hornbill (Prose)", "Hornbill (Poetry)", "Snapshots", "Grammar", "Writing Skills",
    ]),
    mkSubject(`${p}-pe`, "Physical Education", "🏃", "210 70% 50%", GENERIC_6),
  ];
}

function class11Commerce(): Subject[] {
  const p = "cbse-class-11-com";
  return [
    mkSubject(`${p}-accountancy`, "Accountancy", "📒", "195 80% 50%", [
      "Introduction to Accounting", "Theory Base of Accounting", "Recording of Transactions — I",
      "Recording of Transactions — II", "Bank Reconciliation Statement", "Trial Balance and Rectification of Errors",
      "Depreciation, Provisions and Reserves", "Bills of Exchange", "Financial Statements",
      "Accounts from Incomplete Records", "Applications of Computers in Accounting",
    ]),
    mkSubject(`${p}-business`, "Business Studies", "💼", "38 80% 50%", [
      "Business, Trade and Commerce", "Forms of Business Organisation", "Private, Public and Global Enterprises",
      "Business Services", "Emerging Modes of Business", "Social Responsibility of Business",
      "Sources of Business Finance", "Small Business", "Internal Trade", "International Business",
    ]),
    mkSubject(`${p}-economics`, "Economics", "📊", "150 80% 45%", [
      "Introduction to Statistics", "Collection of Data", "Organisation of Data", "Presentation of Data",
      "Measures of Central Tendency", "Measures of Dispersion", "Correlation", "Index Numbers",
      "Indian Economic Development — Overview", "Indian Economy on Eve of Independence",
      "Five Year Plans", "Liberalisation, Privatisation and Globalisation", "Poverty", "Human Capital Formation",
      "Rural Development", "Employment", "Infrastructure", "Environment & Sustainable Development",
    ]),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", class11Science()[2].chapters.map(c => c.name)),
    mkSubject(`${p}-ip`, "Informatics Practices", "💻", "280 80% 60%", [
      "Introduction to Computer System", "Introduction to Python", "Data Handling with Python",
      "Database Concepts", "Introduction to SQL", "Cyber Safety",
    ]),
    mkSubject(`${p}-english`, "English Core", "📖", "0 80% 55%", [
      "Hornbill (Prose)", "Hornbill (Poetry)", "Snapshots", "Grammar", "Writing Skills",
    ]),
    mkSubject(`${p}-pe`, "Physical Education", "🏃", "210 70% 50%", GENERIC_6),
  ];
}

function class11Humanities(): Subject[] {
  const p = "cbse-class-11-hum";
  return [
    mkSubject(`${p}-history`, "History", "📜", "25 80% 50%", [
      "From the Beginning of Time", "Writing and City Life", "An Empire Across Three Continents",
      "The Central Islamic Lands", "Nomadic Empires", "The Three Orders",
      "Changing Cultural Traditions", "Confrontation of Cultures", "The Industrial Revolution",
      "Displacing Indigenous Peoples", "Paths to Modernisation",
    ]),
    mkSubject(`${p}-polity`, "Political Science", "🏛️", "210 70% 50%", [
      "Indian Constitution at Work", "Rights in the Indian Constitution", "Election and Representation",
      "Executive", "Legislature", "Judiciary", "Federalism", "Local Governments",
      "Political Theory — An Introduction", "Freedom", "Equality", "Social Justice", "Rights", "Citizenship",
    ]),
    mkSubject(`${p}-geography`, "Geography", "🌍", "170 70% 45%", [
      "Geography as a Discipline", "The Origin and Evolution of the Earth", "Interior of the Earth",
      "Distribution of Oceans and Continents", "Minerals and Rocks", "Geomorphic Processes",
      "Landforms", "Climate", "Water (Oceans)", "Life on the Earth",
      "India — Location", "Structure and Physiography", "Drainage System", "Climate",
    ]),
    mkSubject(`${p}-sociology`, "Sociology", "👥", "280 70% 55%", [
      "Sociology and Society", "Terms, Concepts and their Use", "Understanding Social Institutions",
      "Culture and Socialisation", "Doing Sociology — Research Methods",
      "Social Structure, Stratification and Social Processes", "Social Change and Social Order in Rural & Urban",
    ]),
    mkSubject(`${p}-psychology`, "Psychology", "🧠", "300 70% 55%", [
      "What is Psychology?", "Methods of Enquiry in Psychology", "The Bases of Human Behaviour",
      "Human Development", "Sensory, Attentional and Perceptual Processes", "Learning",
      "Human Memory", "Thinking", "Motivation and Emotion",
    ]),
    mkSubject(`${p}-english`, "English Core", "📖", "0 80% 55%", [
      "Hornbill (Prose)", "Hornbill (Poetry)", "Snapshots", "Grammar", "Writing Skills",
    ]),
  ];
}

// ---- Class 12 — Stream wise ----
// Note: Class 12 SCIENCE uses the real subjects from subjects.ts (Maths,
// Physics, Chemistry, Computer Science, English). We define Commerce &
// Humanities as placeholders here.

function class12Commerce(): Subject[] {
  const p = "cbse-class-12-com";
  return [
    mkSubject(`${p}-accountancy`, "Accountancy", "📒", "195 80% 50%", [
      "Accounting for Partnership Firms — Fundamentals", "Reconstitution — Admission of a Partner",
      "Reconstitution — Retirement / Death of a Partner", "Dissolution of Partnership Firm",
      "Accounting for Share Capital", "Issue and Redemption of Debentures",
      "Financial Statements of a Company", "Analysis of Financial Statements", "Cash Flow Statement",
    ]),
    mkSubject(`${p}-business`, "Business Studies", "💼", "38 80% 50%", [
      "Nature and Significance of Management", "Principles of Management", "Business Environment",
      "Planning", "Organising", "Staffing", "Directing", "Controlling",
      "Financial Management", "Financial Markets", "Marketing", "Consumer Protection",
    ]),
    mkSubject(`${p}-economics`, "Economics", "📊", "150 80% 45%", [
      "Introduction to Microeconomics", "Theory of Consumer Behaviour", "Production and Costs",
      "The Theory of the Firm under Perfect Competition", "Market Equilibrium",
      "Non-competitive Markets", "Introduction to Macroeconomics", "National Income Accounting",
      "Money and Banking", "Income Determination", "Government Budget and the Economy",
      "Open Economy Macroeconomics",
    ]),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants",
      "Continuity and Differentiability", "Applications of Derivatives", "Integrals",
      "Applications of Integrals", "Differential Equations", "Vector Algebra",
      "Three Dimensional Geometry", "Linear Programming", "Probability",
    ]),
    mkSubject(`${p}-ip`, "Informatics Practices", "💻", "280 80% 60%", [
      "Data Handling using Pandas", "Plotting Data with Matplotlib", "Database Query using SQL",
      "Introduction to Computer Networks", "Societal Impacts",
    ]),
    mkSubject(`${p}-english`, "English Core", "📖", "0 80% 55%", [
      "Flamingo (Prose)", "Flamingo (Poetry)", "Vistas", "Grammar", "Writing Skills",
    ]),
  ];
}

function class12Humanities(): Subject[] {
  const p = "cbse-class-12-hum";
  return [
    mkSubject(`${p}-history`, "History", "📜", "25 80% 50%", [
      "Bricks, Beads and Bones", "Kings, Farmers and Towns", "Kinship, Caste and Class",
      "Thinkers, Beliefs and Buildings", "Through the Eyes of Travellers",
      "Bhakti-Sufi Traditions", "An Imperial Capital — Vijayanagara", "Peasants, Zamindars and the State",
      "Kings and Chronicles", "Colonialism and the Countryside",
      "Rebels and the Raj — 1857", "Colonial Cities", "Mahatma Gandhi and the Nationalist Movement",
      "Understanding Partition", "Framing the Constitution",
    ]),
    mkSubject(`${p}-polity`, "Political Science", "🏛️", "210 70% 50%", [
      "The Cold War Era", "The End of Bipolarity", "US Hegemony in World Politics",
      "Alternative Centres of Power", "Contemporary South Asia", "International Organisations",
      "Security in the Contemporary World", "Environment and Natural Resources", "Globalisation",
      "Challenges of Nation-Building", "Era of One-Party Dominance", "Politics of Planned Development",
      "India's External Relations", "Challenges to and Restoration of Congress System",
      "Crisis of the Democratic Order", "Rise of Popular Movements", "Regional Aspirations",
      "Recent Developments in Indian Politics",
    ]),
    mkSubject(`${p}-geography`, "Geography", "🌍", "170 70% 45%", [
      "Human Geography — Nature and Scope", "The World Population", "Human Development",
      "Primary Activities", "Secondary Activities", "Tertiary and Quaternary Activities",
      "Transport and Communication", "International Trade", "Human Settlements",
      "Population — Distribution, Density, Growth", "Migration", "Human Settlements (India)",
      "Land Resources and Agriculture", "Water Resources", "Mineral and Energy Resources",
      "Manufacturing Industries", "Planning and Sustainable Development",
    ]),
    mkSubject(`${p}-sociology`, "Sociology", "👥", "280 70% 55%", [
      "Introducing Indian Society", "Demographic Structure", "Social Institutions", "Market as a Social Institution",
      "Pattern of Social Inequality", "Challenges of Cultural Diversity", "Suggestions for Project Work",
      "Structural Change", "Cultural Change", "Story of Indian Democracy",
      "Change and Development in Rural Society", "Change and Development in Industrial Society",
      "Globalisation and Social Change", "Mass Media and Communications", "Social Movements",
    ]),
    mkSubject(`${p}-psychology`, "Psychology", "🧠", "300 70% 55%", [
      "Variations in Psychological Attributes", "Self and Personality", "Meeting Life Challenges",
      "Psychological Disorders", "Therapeutic Approaches", "Attitude and Social Cognition",
      "Social Influence and Group Processes", "Psychology and Life", "Developing Psychological Skills",
    ]),
    mkSubject(`${p}-english`, "English Core", "📖", "0 80% 55%", [
      "Flamingo (Prose)", "Flamingo (Poetry)", "Vistas", "Grammar", "Writing Skills",
    ]),
  ];
}

// =====================================================================
// ENTRANCE EXAMS
// =====================================================================

function jeeSubjects(advanced = false): Subject[] {
  const p = advanced ? "jee-adv" : "jee-main";
  const label = advanced ? "JEE Advanced" : "JEE Main";
  return [
    mkSubject(`${p}-physics`, `Physics (${label})`, "⚡", "38 92% 50%", [
      "Units and Measurements", "Kinematics", "Laws of Motion", "Work, Energy & Power",
      "Rotational Motion", "Gravitation", "Properties of Solids & Liquids", "Thermodynamics",
      "Kinetic Theory of Gases", "Oscillations & Waves", "Electrostatics", "Current Electricity",
      "Magnetic Effects of Current", "Electromagnetic Induction & AC", "Electromagnetic Waves",
      "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices",
      "Experimental Skills",
    ]),
    mkSubject(`${p}-chemistry`, `Chemistry (${label})`, "🧪", "150 80% 45%", [
      "Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Bonding", "States of Matter",
      "Thermodynamics", "Equilibrium", "Redox & Electrochemistry", "Chemical Kinetics",
      "Solutions", "Classification & Periodicity", "p-Block Elements", "d & f-Block Elements",
      "Coordination Compounds", "Environmental Chemistry",
      "Organic Chemistry — Basic Principles", "Hydrocarbons", "Haloalkanes & Haloarenes",
      "Alcohols, Phenols, Ethers", "Aldehydes, Ketones & Carboxylic Acids", "Amines",
      "Biomolecules", "Polymers", "Chemistry in Everyday Life",
    ]),
    mkSubject(`${p}-maths`, `Mathematics (${label})`, "📐", "195 100% 50%", [
      "Sets, Relations & Functions", "Complex Numbers & Quadratic Equations", "Matrices & Determinants",
      "Permutations & Combinations", "Binomial Theorem", "Sequences & Series",
      "Limit, Continuity & Differentiability", "Integral Calculus", "Differential Equations",
      "Coordinate Geometry", "Three Dimensional Geometry", "Vector Algebra",
      "Statistics & Probability", "Trigonometry", "Mathematical Reasoning",
    ]),
  ];
}

function neetSubjects(): Subject[] {
  const p = "neet";
  return [
    mkSubject(`${p}-physics`, "Physics", "⚡", "38 92% 50%", [
      "Physical World and Measurement", "Kinematics", "Laws of Motion", "Work, Energy & Power",
      "Motion of System of Particles & Rigid Body", "Gravitation", "Properties of Bulk Matter",
      "Thermodynamics", "Kinetic Theory of Gases", "Oscillations & Waves",
      "Electrostatics", "Current Electricity", "Magnetic Effects of Current & Magnetism",
      "Electromagnetic Induction & AC", "Electromagnetic Waves", "Optics",
      "Dual Nature of Matter & Radiation", "Atoms & Nuclei", "Electronic Devices",
    ]),
    mkSubject(`${p}-chemistry`, "Chemistry", "🧪", "150 80% 45%", [
      "Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements",
      "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions",
      "Hydrogen", "s-Block Elements", "p-Block Elements", "Organic Chemistry — Some Basic Principles",
      "Hydrocarbons", "Environmental Chemistry", "Solid State", "Solutions", "Electrochemistry",
      "Chemical Kinetics", "Surface Chemistry", "d & f Block Elements", "Coordination Compounds",
      "Haloalkanes & Haloarenes", "Alcohols, Phenols & Ethers", "Aldehydes, Ketones & Carboxylic Acids",
      "Amines", "Biomolecules", "Polymers", "Chemistry in Everyday Life",
    ]),
    mkSubject(`${p}-botany`, "Botany", "🌿", "120 70% 45%", [
      "Diversity in Living World", "Structural Organisation in Plants", "Cell Structure & Function",
      "Plant Physiology", "Reproduction in Plants", "Genetics & Evolution",
      "Biology & Human Welfare", "Biotechnology", "Ecology & Environment",
    ]),
    mkSubject(`${p}-zoology`, "Zoology", "🐾", "0 70% 55%", [
      "Animal Kingdom", "Structural Organisation in Animals", "Human Physiology",
      "Reproduction in Humans", "Reproductive Health", "Principles of Inheritance",
      "Molecular Basis of Inheritance", "Evolution", "Human Health & Disease",
      "Strategies for Enhancement in Food Production", "Microbes in Human Welfare",
      "Biotechnology — Principles & Processes", "Biotechnology Applications",
    ]),
  ];
}

function keamSubjects(): Subject[] {
  const p = "keam";
  return [
    mkSubject(`${p}-physics`, "Physics", "⚡", "38 92% 50%", jeeSubjects()[0].chapters.map(c => c.name)),
    mkSubject(`${p}-chemistry`, "Chemistry", "🧪", "150 80% 45%", jeeSubjects()[1].chapters.map(c => c.name)),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", jeeSubjects()[2].chapters.map(c => c.name)),
  ];
}

function bitsatSubjects(): Subject[] {
  const p = "bitsat";
  return [
    mkSubject(`${p}-physics`, "Physics", "⚡", "38 92% 50%", jeeSubjects()[0].chapters.map(c => c.name)),
    mkSubject(`${p}-chemistry`, "Chemistry", "🧪", "150 80% 45%", jeeSubjects()[1].chapters.map(c => c.name)),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", jeeSubjects()[2].chapters.map(c => c.name)),
    mkSubject(`${p}-english`, "English Proficiency", "📖", "0 80% 55%", [
      "Grammar", "Vocabulary", "Reading Comprehension", "Composition",
    ]),
    mkSubject(`${p}-logic`, "Logical Reasoning", "🧩", "280 80% 60%", [
      "Verbal Reasoning", "Non-Verbal Reasoning", "Analytical Reasoning", "Pattern Recognition",
    ]),
  ];
}

function viteeeSubjects(): Subject[] {
  return bitsatSubjects().map(s => ({ ...s, id: s.id.replace("bitsat-", "viteee-") }));
}

function cuetSubjects(): Subject[] {
  const p = "cuet";
  return [
    mkSubject(`${p}-general-test`, "General Test", "🧠", "280 70% 55%", [
      "General Knowledge", "Current Affairs", "General Mental Ability",
      "Numerical Ability", "Quantitative Reasoning", "Logical & Analytical Reasoning",
    ]),
    mkSubject(`${p}-english`, "English Language", "📖", "0 80% 55%", [
      "Reading Comprehension", "Vocabulary", "Grammar", "Verbal Ability", "Rearrangement of Sentences",
    ]),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", class12Commerce()[3].chapters.map(c => c.name)),
    mkSubject(`${p}-physics`, "Physics", "⚡", "38 92% 50%", GENERIC_6),
    mkSubject(`${p}-chemistry`, "Chemistry", "🧪", "150 80% 45%", GENERIC_6),
    mkSubject(`${p}-biology`, "Biology", "🧬", "120 70% 45%", GENERIC_6),
    mkSubject(`${p}-history`, "History", "📜", "25 80% 50%", GENERIC_6),
    mkSubject(`${p}-economics`, "Economics", "📊", "150 80% 45%", GENERIC_6),
    mkSubject(`${p}-business`, "Business Studies", "💼", "38 80% 50%", GENERIC_6),
    mkSubject(`${p}-accountancy`, "Accountancy", "📒", "195 80% 50%", GENERIC_6),
  ];
}

function ndaSubjects(): Subject[] {
  const p = "nda";
  return [
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Algebra", "Matrices and Determinants", "Trigonometry", "Analytical Geometry (2D & 3D)",
      "Differential Calculus", "Integral Calculus & Differential Equations", "Vector Algebra",
      "Statistics", "Probability",
    ]),
    mkSubject(`${p}-gat-english`, "GAT — English", "📖", "0 80% 55%", [
      "Grammar & Usage", "Vocabulary", "Comprehension", "Cohesion in Extended Text",
    ]),
    mkSubject(`${p}-gat-gk`, "GAT — General Knowledge", "🧠", "280 70% 55%", [
      "Physics", "Chemistry", "General Science", "History & Freedom Movement",
      "Geography", "Current Events", "Polity & Economics",
    ]),
  ];
}

function clatSubjects(): Subject[] {
  const p = "clat";
  return [
    mkSubject(`${p}-english`, "English Language", "📖", "0 80% 55%", [
      "Reading Comprehension", "Vocabulary", "Grammar", "Inference & Conclusion",
    ]),
    mkSubject(`${p}-current-affairs`, "Current Affairs & GK", "🌐", "280 70% 55%", [
      "National & International Events", "Sports", "Awards & Honours", "Static GK",
    ]),
    mkSubject(`${p}-legal-reasoning`, "Legal Reasoning", "⚖️", "210 70% 50%", [
      "Legal Principles & Application", "Indian Constitution Basics", "Contract Law", "Tort Law",
      "Criminal Law", "Family Law",
    ]),
    mkSubject(`${p}-logical-reasoning`, "Logical Reasoning", "🧩", "38 80% 50%", [
      "Arguments & Assumptions", "Syllogism", "Analogies", "Critical Reasoning",
    ]),
    mkSubject(`${p}-quant`, "Quantitative Techniques", "🔢", "195 90% 50%", [
      "Arithmetic", "Algebra", "Data Interpretation", "Mensuration",
    ]),
  ];
}

// =====================================================================
// GOVERNMENT EXAMS
// =====================================================================

function upscSubjects(): Subject[] {
  const p = "upsc";
  return [
    mkSubject(`${p}-history`, "History", "📜", "25 80% 50%", [
      "Ancient India", "Medieval India", "Modern India", "Art & Culture",
      "Indian National Movement", "World History", "Post-Independence India",
    ]),
    mkSubject(`${p}-polity`, "Indian Polity", "🏛️", "210 70% 50%", [
      "Constitutional Framework", "System of Government", "Central Government",
      "State Government", "Local Government", "Constitutional Bodies", "Non-Constitutional Bodies",
      "Fundamental Rights & Duties", "DPSP", "Amendments",
    ]),
    mkSubject(`${p}-geography`, "Geography", "🌍", "170 70% 45%", [
      "Physical Geography", "Indian Geography", "World Geography",
      "Climatology", "Oceanography", "Economic Geography", "Human & Population Geography",
    ]),
    mkSubject(`${p}-economy`, "Indian Economy", "📊", "150 80% 45%", [
      "Basic Concepts", "National Income", "Planning & NITI Aayog", "Money & Banking",
      "Fiscal Policy", "External Sector", "Agriculture", "Industry", "Services & Infrastructure",
    ]),
    mkSubject(`${p}-environment`, "Environment & Ecology", "🌱", "120 70% 45%", [
      "Ecology Basics", "Biodiversity", "Climate Change", "Environmental Pollution",
      "Conservation Efforts", "Protected Areas & Acts",
    ]),
    mkSubject(`${p}-science-tech`, "Science & Technology", "🔬", "280 60% 55%", [
      "Space Technology", "Defence Technology", "Nuclear Technology",
      "IT & Computers", "Biotechnology", "Recent Developments",
    ]),
    mkSubject(`${p}-ethics`, "Ethics, Integrity & Aptitude", "🧭", "300 70% 55%", [
      "Ethics & Human Interface", "Attitude", "Aptitude for Civil Services",
      "Emotional Intelligence", "Contributions of Thinkers", "Public/Civil Service Values",
      "Probity in Governance", "Case Studies",
    ]),
    mkSubject(`${p}-current-affairs`, "Current Affairs", "📰", "0 70% 55%", [
      "National Affairs", "International Relations", "Economy News",
      "Science & Tech News", "Schemes & Initiatives", "Reports & Indices",
    ]),
    mkSubject(`${p}-csat`, "CSAT — Aptitude", "🧠", "38 80% 50%", [
      "Comprehension", "Logical Reasoning", "Decision Making",
      "Basic Numeracy", "Data Interpretation",
    ]),
  ];
}

function sscSubjects(): Subject[] {
  const p = "ssc";
  return [
    mkSubject(`${p}-gk`, "General Awareness", "🧠", "280 70% 55%", [
      "History", "Geography", "Polity", "Economy",
      "General Science", "Current Affairs", "Static GK",
    ]),
    mkSubject(`${p}-reasoning`, "Reasoning", "🧩", "38 80% 50%", [
      "Analogy", "Classification", "Series", "Coding-Decoding",
      "Blood Relations", "Direction Sense", "Syllogism", "Non-Verbal Reasoning",
    ]),
    mkSubject(`${p}-quant`, "Quantitative Aptitude", "🔢", "195 90% 50%", [
      "Number System", "Simplification", "Percentage", "Profit & Loss",
      "Ratio & Proportion", "Time & Work", "Time, Speed & Distance",
      "Algebra", "Geometry", "Trigonometry", "Mensuration", "Data Interpretation",
    ]),
    mkSubject(`${p}-english`, "English", "📖", "0 70% 55%", [
      "Grammar", "Vocabulary", "Reading Comprehension",
      "Error Spotting", "Cloze Test", "Idioms & Phrases", "One Word Substitution",
    ]),
  ];
}

function pscSubjects(): Subject[] {
  return upscSubjects().map(s => ({ ...s, id: s.id.replace("upsc-", "psc-") }));
}

function bankingSubjects(): Subject[] {
  const p = "bank";
  return [
    mkSubject(`${p}-reasoning`, "Reasoning Ability", "🧩", "38 80% 50%", [
      "Puzzles & Seating Arrangement", "Syllogism", "Coding-Decoding", "Inequality",
      "Blood Relations", "Direction Sense", "Data Sufficiency", "Input-Output",
    ]),
    mkSubject(`${p}-quant`, "Quantitative Aptitude", "🔢", "195 90% 50%", [
      "Number Series", "Simplification & Approximation", "Data Interpretation",
      "Quadratic Equations", "Percentage", "Profit & Loss",
      "Time & Work", "Time, Speed & Distance", "Probability",
    ]),
    mkSubject(`${p}-english`, "English Language", "📖", "0 70% 55%", [
      "Reading Comprehension", "Cloze Test", "Error Spotting",
      "Sentence Improvement", "Para Jumbles", "Vocabulary", "Fillers",
    ]),
    mkSubject(`${p}-gk`, "General/Banking Awareness", "🏦", "280 70% 55%", [
      "Banking Awareness", "Financial Awareness", "Current Affairs",
      "Static GK", "Economy", "RBI & Monetary Policy", "Government Schemes",
    ]),
    mkSubject(`${p}-computer`, "Computer Knowledge", "💻", "280 80% 60%", [
      "Computer Fundamentals", "Hardware & Software", "MS Office",
      "Internet & Networking", "Cybersecurity Basics", "Banking Software",
    ]),
  ];
}

function railwaySubjects(): Subject[] {
  return sscSubjects().map(s => ({ ...s, id: s.id.replace("ssc-", "rly-") }));
}

function defenceSubjects(): Subject[] {
  // Defence parent — combines NDA + CDS commonalities
  const p = "def";
  return [
    mkSubject(`${p}-gk`, "General Knowledge", "🧠", "280 70% 55%", [
      "History", "Geography", "Polity", "Economy",
      "Science & Technology", "Current Affairs", "Defence & Security",
    ]),
    mkSubject(`${p}-maths`, "Mathematics", "📐", "195 100% 50%", [
      "Algebra", "Trigonometry", "Geometry", "Statistics",
      "Mensuration", "Calculus Basics", "Number System",
    ]),
    mkSubject(`${p}-reasoning`, "Reasoning", "🧩", "38 80% 50%", [
      "Verbal Reasoning", "Non-Verbal Reasoning", "Logical Deduction",
      "Analogy & Classification", "Coding-Decoding", "Data Interpretation",
    ]),
    mkSubject(`${p}-english`, "English", "📖", "0 70% 55%", [
      "Grammar", "Vocabulary", "Comprehension", "Spotting Errors",
      "Sentence Improvement", "Idioms & Phrases",
    ]),
  ];
}

// =====================================================================
// Registry & lookup
// =====================================================================

// Build a flat registry of every placeholder subject across the entire
// curriculum, indexed by subject id, so SubjectPage / ChapterPage can resolve
// any subject the user navigates into.
const ALL_PLACEHOLDER_SUBJECTS: Subject[] = [
  ...preprimarySubjects("cbse-lkg"),
  ...preprimarySubjects("cbse-ukg"),
  ...Array.from({ length: 2 }, (_, i) => preprimarySubjects(`cbse-class-${i + 1}`)).flat(),
  ...Array.from({ length: 3 }, (_, i) => juniorPrimarySubjects(`cbse-class-${i + 3}`)).flat(),
  ...Array.from({ length: 3 }, (_, i) => middleSchoolSubjects(`cbse-class-${i + 6}`)).flat(),
  ...class9Subjects(),
  ...class10Subjects(),
  ...class11Science(),
  ...class11Commerce(),
  ...class11Humanities(),
  ...class12Commerce(),
  ...class12Humanities(),
  ...jeeSubjects(false),
  ...jeeSubjects(true),
  ...neetSubjects(),
  ...keamSubjects(),
  ...bitsatSubjects(),
  ...viteeeSubjects(),
  ...cuetSubjects(),
  ...ndaSubjects(),
  ...clatSubjects(),
  ...upscSubjects(),
  ...sscSubjects(),
  ...pscSubjects(),
  ...bankingSubjects(),
  ...railwaySubjects(),
  ...defenceSubjects(),
];

export const placeholderRegistry: Map<string, Subject> = new Map(
  ALL_PLACEHOLDER_SUBJECTS.map(s => [s.id, s]),
);

export function getPlaceholderSubject(id: string): Subject | undefined {
  return placeholderRegistry.get(id);
}

export function getPlaceholderChapter(subjectId: string, chapterId: number): Chapter | undefined {
  return placeholderRegistry.get(subjectId)?.chapters.find(c => c.id === chapterId);
}

// ---------- profile → subjects dispatcher ----------

const cbseClassSubjectsByClass: Record<string, () => Subject[]> = {
  "lkg": () => preprimarySubjects("cbse-lkg"),
  "ukg": () => preprimarySubjects("cbse-ukg"),
  "class-1": () => preprimarySubjects("cbse-class-1"),
  "class-2": () => preprimarySubjects("cbse-class-2"),
  "class-3": () => juniorPrimarySubjects("cbse-class-3"),
  "class-4": () => juniorPrimarySubjects("cbse-class-4"),
  "class-5": () => juniorPrimarySubjects("cbse-class-5"),
  "class-6": () => middleSchoolSubjects("cbse-class-6"),
  "class-7": () => middleSchoolSubjects("cbse-class-7"),
  "class-8": () => middleSchoolSubjects("cbse-class-8"),
  "class-9": class9Subjects,
  "class-10": class10Subjects,
};

function class11SubjectsByStream(stream?: string): Subject[] {
  if (stream === "commerce") return class11Commerce();
  if (stream === "humanities" || stream === "arts") return class11Humanities();
  return class11Science();
}

function class12SubjectsByStream(stream?: string): Subject[] | null {
  if (stream === "commerce") return class12Commerce();
  if (stream === "humanities" || stream === "arts") return class12Humanities();
  // Science: signal caller to use real subjects from subjects.ts
  return null;
}

const examSubjectMap: Record<string, () => Subject[]> = {
  // Entrance — Engineering
  jee: () => jeeSubjects(false),
  "jee-main": () => jeeSubjects(false),
  "jee-advanced": () => jeeSubjects(true),
  keam: keamSubjects,
  bitsat: bitsatSubjects,
  viteee: viteeeSubjects,
  srmjeee: () => bitsatSubjects().map(s => ({ ...s, id: s.id.replace("bitsat-", "srmjeee-") })),
  // Entrance — Medical
  neet: neetSubjects,
  // Entrance — Law
  clat: clatSubjects,
  ailet: () => clatSubjects().map(s => ({ ...s, id: s.id.replace("clat-", "ailet-") })),
  // Entrance — University
  cuet: cuetSubjects,
  ipmat: () => [
    mkSubject("ipmat-quant", "Quantitative Aptitude", "🔢", "195 90% 50%", GENERIC_6),
    mkSubject("ipmat-varc", "Verbal Ability & RC", "📖", "0 80% 55%", GENERIC_6),
  ],
  "ca-foundation": () => [
    mkSubject("ca-fa", "Principles of Accounting", "📒", "195 80% 50%", GENERIC_6),
    mkSubject("ca-bcr", "Business Laws & BCR", "⚖️", "210 70% 50%", GENERIC_6),
    mkSubject("ca-bmlrs", "Business Maths, LR & Statistics", "📐", "195 100% 50%", GENERIC_6),
    mkSubject("ca-bec", "Business Economics", "📊", "150 80% 45%", GENERIC_6),
  ],
  // Design (still coming soon — generic placeholders)
  nid: () => [
    mkSubject("nid-dat", "Design Aptitude Test", "🎨", "300 70% 55%", GENERIC_6),
    mkSubject("nid-studio", "Studio Test Prep", "✏️", "0 70% 55%", GENERIC_6),
  ],
  nift: () => [
    mkSubject("nift-cat", "Creative Ability Test", "👗", "300 70% 55%", GENERIC_6),
    mkSubject("nift-gat", "General Ability Test", "🧠", "38 80% 50%", GENERIC_6),
  ],
  // Government
  upsc: upscSubjects,
  ssc: sscSubjects,
  psc: pscSubjects,
  banking: bankingSubjects,
  railways: railwaySubjects,
  defence: defenceSubjects,
  nda: ndaSubjects,
};

export function getCurriculumSubjects(
  category: string,
  examId?: string,
  classLevel?: string,
  stream?: string,
): Subject[] | null {
  if (category === "school") {
    if (classLevel === "class-12") {
      const s = class12SubjectsByStream(stream);
      return s; // null for Science → caller uses real subjects
    }
    if (classLevel === "class-11") return class11SubjectsByStream(stream);
    const fn = classLevel ? cbseClassSubjectsByClass[classLevel] : undefined;
    return fn ? fn() : preprimarySubjects("cbse-generic");
  }

  if (examId && examSubjectMap[examId]) return examSubjectMap[examId]();

  // Unknown selection — show a generic placeholder
  return [
    mkSubject("gen-subject1", "Subject 1", "📚", "195 80% 50%", GENERIC_4),
    mkSubject("gen-subject2", "Subject 2", "📝", "38 80% 50%", GENERIC_4),
  ];
}
