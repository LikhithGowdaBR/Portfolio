export const listTools = [
  {
    id: 1,
    gambar: "assets/tools/python.svg",
    nama: "Python",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: "assets/tools/java.svg",
    nama: "Java",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: "assets/tools/sql.svg",
    nama: "SQL",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: "assets/tools/js.svg",
    nama: "JavaScript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: "assets/tools/reactjs.svg",
    nama: "React JS",
    ket: "Frontend Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: "assets/tools/html.svg",
    nama: "HTML5",
    ket: "Markup",
    dad: "600",
  },
  {
    id: 7,
    gambar: "assets/tools/css.svg",
    nama: "CSS3",
    ket: "Styling",
    dad: "700",
  },
  {
    id: 8,
    gambar: "assets/tools/bootstrap.svg",
    nama: "Bootstrap",
    ket: "UI Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: "assets/tools/nodejs.svg",
    nama: "Node.js",
    ket: "Runtime",
    dad: "900",
  },
  {
    id: 10,
    gambar: "assets/tools/expressjs.svg",
    nama: "Express.js",
    ket: "Backend Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: "assets/tools/mongodb.svg",
    nama: "MongoDB",
    ket: "Database",
    dad: "1100",
  },
  {
    id: 12,
    gambar: "assets/tools/mysql.svg",
    nama: "MySQL",
    ket: "Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: "assets/tools/git.svg",
    nama: "Git",
    ket: "Version Control",
    dad: "1300",
  },
  {
    id: 14,
    gambar: "assets/tools/github.svg",
    nama: "GitHub",
    ket: "Repository",
    dad: "1400",
  },
  {
    id: 15,
    gambar: "assets/tools/vscode.svg",
    nama: "VS Code",
    ket: "Code Editor",
    dad: "1500",
  },
  {
    id: 16,
    gambar: "assets/tools/cyber.svg",
    nama: "Cybersecurity",
    ket: "SOC / Threat Analysis",
    dad: "1600",
  },
  {
    id: 17,
    gambar: "assets/tools/aws.svg",
    nama: "AWS",
    ket: "Cloud Security",
    dad: "1700",
  },
];

export const listProyek = [
  {
    id: 1,
    image: "assets/proyek/proyek1.svg",
    title: "ExploreHive – Local Discovery Platform",
    subtitle:
      "A full-stack place-discovery platform, live at explorehive.vercel.app.",
    fullDescription:
      "ExploreHive is a full-stack web application that helps users discover and explore places such as temples, beaches, parks, cafes, restaurants, hotels, waterfalls, and trekking spots. Users can browse listings, view details, create their own listings with images, write reviews, and manage everything through an authenticated account. Built with Node.js, Express.js, EJS, MongoDB/Mongoose, Passport.js for authentication, Cloudinary for image storage, and Leaflet.js for map integration. Deployed live on Vercel.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/LikhithGowdaBR/ExploreHive",
    liveUrl: "https://explorehive.vercel.app/listings",
    dad: "100",
  },
  {
    id: 2,
    image: "assets/proyek/proyek2.svg",
    title: "AI-Based Password Strength Prediction",
    subtitle:
      "A machine learning model that predicts password strength and hardens storage against attacks.",
    fullDescription:
      "Developed a machine learning model to predict password strength and generate actionable security recommendations for users. Implemented cryptographic hardening techniques for password storage, reducing exposure to brute-force and dictionary attacks. Built with Python, Machine Learning, and Cryptography.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/LikhithGowdaBR",
    dad: "200",
  },
  {
    id: 3,
    image: "assets/proyek/proyek3.svg",
    title: "Jarvis – AI Voice Assistant",
    subtitle:
      "A hands-free voice assistant combining speech recognition, an LLM, and text-to-speech.",
    fullDescription:
      "Built an AI-powered voice assistant integrating speech recognition, an LLM-based response engine, and text-to-speech synthesis for hands-free interaction. Designed a modular pipeline separating input capture, response generation, and audio output, enabling easy extension to new voice commands. Built with Python, the OpenAI API, Speech Recognition, and Text-to-Speech.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/LikhithGowdaBR/jarvis",
    dad: "300",
  },
  {
    id: 4,
    image: "assets/proyek/proyek4.svg",
    title: "Mini WhatsApp CRUD App",
    subtitle:
      "A WhatsApp-inspired chat manager demonstrating full CRUD operations.",
    fullDescription:
      "A simple WhatsApp-inspired CRUD application that lets users create, view, edit, and delete chat messages, with all data persisted in MongoDB. Built with Node.js, Express.js, MongoDB, Mongoose, and EJS, following an MVC folder structure with Method Override for RESTful update/delete routes.",
    borderColor: "#22C55E",
    gradient: "linear-gradient(180deg, #22C55E, #000)",
    url: "https://github.com/LikhithGowdaBR/mini-whatsapp-crud-app",
    dad: "400",
  },
  {
    id: 5,
    image: "assets/proyek/proyek5.svg",
    title: "Currency Converter",
    subtitle: "A browser-based currency converter with live exchange rates.",
    fullDescription:
      "A client-side currency converter built with vanilla HTML, CSS, and JavaScript. Users select a source and target currency and get a real-time converted amount, using a currency-code list and an exchange-rate API to keep values up to date.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/LikhithGowdaBR/currency_converter",
    dad: "500",
  },
  {
    id: 6,
    image: "assets/proyek/proyek6.svg",
    title: "Amazon Clone",
    subtitle: "A front-end clone of the Amazon homepage and layout.",
    fullDescription:
      "A static front-end clone of Amazon's homepage, built with HTML and CSS to practice replicating a complex, real-world e-commerce layout — including the navigation bar, product carousels, category grid, and responsive page structure.",
    borderColor: "#F97316",
    gradient: "linear-gradient(180deg, #F97316, #000)",
    url: "https://github.com/LikhithGowdaBR/Amazon_clone",
    dad: "600",
  },
  {
    id: 7,
    image: "assets/proyek/proyek7.svg",
    title: "Rock Paper Scissors Game",
    subtitle: "A browser-based Rock, Paper, Scissors game with score tracking.",
    fullDescription:
      "An interactive Rock, Paper, Scissors game built with HTML, CSS, and JavaScript. Players choose a move, the computer responds with a randomized choice, and the game tracks scores across rounds with instant visual feedback on the winner.",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://github.com/LikhithGowdaBR/rock-paper-scissor-game",
    dad: "700",
  },
  {
    id: 8,
    image: "assets/proyek/proyek8.svg",
    title: "Tic Tac Toe",
    subtitle: "A classic two-player Tic Tac Toe game in the browser.",
    fullDescription:
      "A classic two-player Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring turn-based play, win/draw detection, and the ability to reset the board and start a new round.",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(180deg, #06B6D4, #000)",
    url: "https://github.com/LikhithGowdaBR/tic-tac-toe",
    dad: "800",
  },
];

export const listExperience = [
  {
    id: 1,
    role: "Cybersecurity Intern",
    org: "Thetha Dynamics",
    period: "June 2025",
    points: [
      "Supported Security Operations Center (SOC) activities including real-time security monitoring and threat analysis.",
      "Assisted in incident detection and log analysis, contributing to faster identification and response to potential threats.",
    ],
  },
  {
    id: 3,
    role: "Python, Power BI & Prompt Engineering",
    org: "Academic & Professional Experience",
    period: "July 2024",
    points: [
      "Worked on Python programming to automate tasks, analyze data, and build small tools and scripts.",
      "Built interactive dashboards and reports in Power BI, turning raw datasets into clear, actionable visual insights.",
      "Practiced prompt engineering to design effective prompts for LLMs, improving output quality and reliability for AI-assisted workflows.",
    ],
  },
  {
    id: 2,
    role: "Artificial Intelligence & LLMs Trainee",
    org: "Samsung Innovation Campus",
    points: [
      "Selected via competitive college assessment; trained in AI, Data Science fundamentals, and Large Language Models.",
      "Data preprocessing using Python libraries (NumPy and Pandas) to prepare data for machine learning and visualization.",
      "Studied supervised and unsupervised learning concepts and applied suitable ML algorithms to given problems.",
    ],
  },
];

export const listCertifications = [
  "10+ certifications across cybersecurity, cloud, and data science",
];
