export const personalInfo = {
  name: "Aftab Asghar",
  shortTitle: "Undergraduate Computer Science Student",
  heroTitle: "Undergraduate Computer Science Student | Aspiring Software Developer",
  university: "Riphah International University",
  degree: "Bachelor of Science in Computer Science (cont..)",
  email: "muhammadaftabasghar@gmail.com",
  phone: "0343-7181456",
  location: "Jhoke Malkani, Tehsil Paharpur, Dist. D.I. Khan, Pakistan",
  bio: "Hello! My name is Aftab, and I am an enthusiastic and motivated undergraduate in a Bachelor of Science in Computer Science. Seeking to leverage my strong academic foundation, project experiences, and passion for software development to contribute to a dynamic and innovative team.",
  heroIntroduction: "Hello! I'm Aftab Asghar, an enthusiastic Computer Science student passionate about programming, software development, and building useful digital solutions. I enjoy learning new technologies, solving problems, and turning ideas into practical projects.",
  github: "https://github.com/AftabAsghar-512",
  linkedin: "https://www.linkedin.com/in/muhammad-aftab-asghar-b111a02bb",
  profileImage: "/profile.jpg", // Users can drop profile.jpg into public folder
};

export const aboutCards = [
  {
    id: 1,
    title: "Computer Science Student",
    description: "Currently pursuing BS Computer Science at Riphah International University with strong academic foundations in core computing.",
    icon: "GraduationCap",
    tag: "Academics"
  },
  {
    id: 2,
    title: "Software Development",
    description: "Hands-on experience building functional academic projects across desktop systems, mobile applications, and game environments.",
    icon: "Code2",
    tag: "Engineering"
  },
  {
    id: 3,
    title: "Problem Solving",
    description: "Strong grasp of algorithmic logic, Programming Fundamentals (PF), and Object-Oriented Programming (OOP) paradigms.",
    icon: "Brain",
    tag: "Analytical"
  },
  {
    id: 4,
    title: "Continuous Learning",
    description: "Always excited to explore modern software stacks, industry best practices, and collaborate on innovative developer teams.",
    icon: "Sparkles",
    tag: "Growth Mindset"
  }
];

export const skillsData = [
  {
    name: "C++ Programming",
    category: "Core Languages",
    level: "Intermediate / Academic",
    proficiencyScore: 80, // Editable indicator
    description: "Core algorithms, pointers, memory concepts, Object-Oriented Programming (OOP), and game logic.",
    icon: "Code"
  },
  {
    name: "Java Programming",
    category: "Core Languages",
    level: "Intermediate / Academic",
    proficiencyScore: 75, // Editable indicator
    description: "Object-oriented software architecture, class hierarchies, design principles, and desktop applications.",
    icon: "Coffee"
  },
  {
    name: "Python Programming",
    category: "Core Languages",
    level: "Intermediate / Academic",
    proficiencyScore: 78, // Editable indicator
    description: "Scripting, rapid application prototyping, clean data structures, and algorithmic automation.",
    icon: "FileCode2"
  },
  {
    name: "Web Development",
    subtitle: "HTML5 & CSS3",
    category: "Web & UI",
    level: "Foundational & Responsive",
    proficiencyScore: 82, // Editable indicator
    description: "Semantic web markup, CSS responsive layouts, styling, modern flexbox/grid, and clean UI structuring.",
    icon: "Globe"
  },
  {
    name: "Database Management",
    category: "Data & Systems",
    level: "Intermediate / Academic",
    proficiencyScore: 75, // Editable indicator
    description: "Relational database concepts, schema design, table relationships, SQL queries, and data integrity.",
    icon: "Database"
  },
  {
    name: "Mobile App Development",
    subtitle: "Master App Development",
    category: "Mobile",
    level: "Practical / Projects",
    proficiencyScore: 70, // Editable indicator
    description: "Mobile app interfaces, state management, bill-sharing workflows, and user experience for smartphones.",
    icon: "Smartphone"
  }
];

export const projectsData = [
  {
    id: "doc-signer-pro",
    title: "Doc Signer Pro",
    category: "Desktop & Security Software",
    badge: "Published on Microsoft",
    summary: "A professional document signing and PDF authentication tool published on the Microsoft platform for secure digital signatures.",
    description: "Doc Signer Pro is a desktop utility published on the Microsoft platform. It streamlines document authentication by allowing users to securely apply digital signatures, manage certificate validations, annotate PDFs, and process multi-document workflows with speed and cryptographic integrity.",
    technologies: ["C# / .NET", "PDF Security", "Digital Signatures", "Microsoft Store Deployment", "Desktop App"],
    keyFeatures: [
      "Official publication and verification on the Microsoft Platform",
      "Secure digital signing and electronic signature placement on documents",
      "Support for PDF annotation, tamper verification, and certificates",
      "Streamlined document export and high-speed processing workflow"
    ],
    academicContext: "Published Software Application on Microsoft Platform",
    githubUrl: "https://github.com/AftabAsghar-512",
    demoUrl: "https://apps.microsoft.com/",
    gradient: "from-[#3B2314] via-[#5C3A21] to-[#8C5A35]"
  },
  {
    id: "candy-crush",
    title: "Candy Crush Game",
    category: "Game & Logic Development",
    badge: "PF & OOP Core",
    summary: "Developed as a programming project using Programming Fundamentals (PF) and Object-Oriented Programming (OOP) concepts in C++.",
    description: "A logic-driven game simulation inspired by the classic match-3 mechanics. The project demonstrates modular software design, 2D matrix state representation, dynamic element swapping, boundary checks, and algorithmic score tracking.",
    technologies: ["C++", "Object-Oriented Programming", "Data Structures", "Game Mechanics"],
    keyFeatures: [
      "Dynamic 2D grid matrix state rendering",
      "Valid horizontal and vertical match-3 detection algorithms",
      "Board cascading & replacement of matched pieces",
      "Player moves counter, score accumulation, and game-over states"
    ],
    academicContext: "Academic Project for Programming Fundamentals & OOP coursework",
    githubUrl: "https://github.com/AftabAsghar-512",
    demoUrl: "#",
    gradient: "from-[#6d4427] to-[#8c5a35]"
  },
  {
    id: "hotel-booking",
    title: "Hotel Room Booking System",
    category: "Database & Management System",
    badge: "Database Management",
    summary: "A software system designed to streamline hotel room booking operations, reservations, and guest data management.",
    description: "Designed to handle room inventory, availability verification, reservation workflows, customer check-in/check-out logs, and billing calculations. Emphasizes data consistency and user-friendly administrative workflows.",
    technologies: ["Database Management", "SQL / Relational Schema", "C++ / Java", "System Design"],
    keyFeatures: [
      "Room category listing (Deluxe, Standard, Suite) with price indices",
      "Real-time room availability status & reservation logs",
      "Guest profile record management and contact archiving",
      "Automated bill generation and checkout invoice summary"
    ],
    academicContext: "Database Management & Software Architecture Academic Project",
    githubUrl: "https://github.com/AftabAsghar-512",
    demoUrl: "#",
    gradient: "from-[#5c3a21] to-[#784c28]"
  },
  {
    id: "buddy-bills",
    title: "Buddy Bills Mobile App",
    category: "Mobile Application",
    badge: "Master App Development",
    summary: "A mobile application project created for managing shared bills, splitting group expenses, and tracking settlements.",
    description: "Created to eliminate the friction of shared expenses among roommates, friends, and project groups. Users can log group transactions, automatically divide payments fairly, and view net balances indicating who owes whom.",
    technologies: ["Mobile App Development", "UI/UX Design", "Expense Logic", "State Management"],
    keyFeatures: [
      "Group expense creation and itemized bill entry",
      "Equal and custom split calculation logic",
      "Live balance summary: 'You are owed' vs 'You owe'",
      "History feed of recent transactions and shared payments"
    ],
    academicContext: "Mobile Application Development Project",
    githubUrl: "https://github.com/AftabAsghar-512",
    demoUrl: "#",
    gradient: "from-[#8c5a35] to-[#a0714f]"
  },
  {
    id: "car-game-unity",
    title: "Car Game Using Unity",
    category: "3D / 2D Game Development",
    badge: "Unity Engine",
    summary: "An interactive car game project developed using the Unity game engine featuring physics-based vehicle dynamics.",
    description: "Developed in the Unity game engine leveraging C# scripting. Implements vehicle physics, wheel colliders, steering torque, responsive braking, obstacle collisions, lap timing, and responsive audio-visual feedback.",
    technologies: ["Unity Engine", "C# Scripting", "RigidBody Physics", "Level Design"],
    keyFeatures: [
      "Physics-based driving controls (acceleration, braking, drifting)",
      "Dynamic obstacle collision detection and boundary triggers",
      "Camera follow system with smooth dampening",
      "Heads-Up Display (HUD) showing speed, timer, and score"
    ],
    academicContext: "Interactive Media & Unity Game Development Academic Project",
    githubUrl: "https://github.com/AftabAsghar-512",
    demoUrl: "#",
    gradient: "from-[#4a2c16] to-[#6d4427]"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelors – Computer Science",
    institution: "Riphah International University",
    duration: "Currently Pursuing (cont..)",
    status: "In Progress",
    description: "Advancing knowledge in fundamental and modern computing topics including Object-Oriented Programming, Database Management Systems, Mobile App Engineering, and Software Design.",
    highlight: "Active Undergraduate Degree",
    isCurrent: true
  },
  {
    id: 2,
    degree: "FSc – Pre-Engineering",
    institution: "DI Khan Board",
    duration: "2021 – 2023",
    status: "Completed",
    description: "Completed higher secondary education with strong emphasis on Mathematics, Physics, and analytical reasoning that laid the cornerstone for computer science studies.",
    highlight: "Pre-Engineering Foundation",
    isCurrent: false
  },
  {
    id: 3,
    degree: "Matric – Science",
    institution: "DI Khan Board",
    duration: "2019 – 2021",
    status: "Completed",
    description: "Completed secondary school certification in Science subjects with solid academic performance.",
    highlight: "Secondary School Certificate",
    isCurrent: false
  }
];

export const hobbiesData = [
  {
    name: "Coding",
    category: "Technical Passion",
    icon: "CodeXml",
    description: "Tinkering with algorithms, debugging challenges, and exploring new programming frameworks."
  },
  {
    name: "Cycling",
    category: "Outdoor & Fitness",
    icon: "Bike",
    description: "Maintaining health, focus, and mental clarity through regular cycling trips."
  },
  {
    name: "Painting",
    category: "Creative Expression",
    icon: "Palette",
    description: "Expressing creativity, color balance, and spatial imagination with traditional art."
  },
  {
    name: "Badminton",
    category: "Active Sport",
    icon: "Activity",
    description: "Enjoying fast-paced reflex training, agile footwork, and energetic weekend matches."
  },
  {
    name: "Cricket",
    category: "Team Sport",
    icon: "Trophy",
    description: "Valuing teamwork, strategic game awareness, sportsmanship, and national enthusiasm."
  }
];
