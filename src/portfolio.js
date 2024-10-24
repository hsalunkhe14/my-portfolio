/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hrutvik's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hrutvik Yogesh Salunkhe Portfolio",
    type: "",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hrutvik Yogesh Salunkhe",
  logo_name: "HYS",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ygLOqg8do9nR8yoW_aTmRkum0vpkrV7e/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/hsalunkhe14",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/hsalunkhe14",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hrutvik-salunkhe",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:hsalunkhe023@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/hruttvikkk_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience Developing highly scalable models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },

    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Stony Brook University (SUNY), New York",
      subtitle: "MS in Computer Engineering",
      logo_path: "SBU_logo.png",
      alt_name: "Stony Brook University",
      duration: "Aug 2023 - May 2025(Expected)",
      descriptions: [
        "▶  Current GPA: 3.7  |  Semester: 3 ",
        "▶  Relevant Coursework: Data Science Fundamentals, Computer Vision, Digital Image Processing, Wireless Networks, Deep Learning, VLSI Systems Design",
        "▶  Teaching Assistant for ESE 224: Assist students with C++ programming concepts, design course materials, assignments, and projects, and conduct labs and doubt sessions to enhance learning experiences.",
      ],
      website_link: "http://stonybrook.edu/grad",
    },
    {
      title: "PES Modern College of Engineering (Pune University), Pune, India",
      subtitle:
        "BE in Electronics and Telecommunications with Minors in Data Science",
      logo_path: "modern_logo.jpg",
      alt_name: "Pes Modern College of Engineering",
      duration: "2019 - 2023",
      descriptions: [
        "▶  GPA : 8.6/10",
        "▶  Relevant Coursework: Object Oriented Programming, Cloud Computing, Database Management Systems, Data Structures and Algorithms, VLSI, Javascript, Computer Networks, Data Science ",
        "▶  Served as the Departmental Editor and was appointed to the position of Editor in chief for my college's Rotaract Club. ",
        "▶  During my time here, I was associated with Cultural department and the Drama club. As part of it, I have participated and acted as the backstage and technical manager in state level drama competetions.",
      ],
      website_link: "https://moderncoe.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programming for Everybody",
      subtitle: "- Charles Severence",
      logo_path: "uni_michigan.png",
      certificate_link:
        "https://coursera.org/share/225401c918a996845d87e84e502aea8a",
      alt_name: "University of Michigan",
      color_code: "#FFCB05",
    },
    {
      title: "Data Science Bootcamp",
      subtitle: "- 365 Careers (Udemy)",
      logo_path: "DATASCIENCE.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7b966d4b-e55a-412a-9fa3-59e4f37a65a1/",
      alt_name: "Data Science",
      color_code: "#00000099",
    },
    {
      title: "PHP and MySQL training",
      subtitle: "- Indian Institute of Technology, Bombay",
      logo_path: "mysql.png",
      certificate_link:
        "https://drive.google.com/file/d/16GXXwXB_tw_oaeemhpfSJjhJBF_Bto9m/view?usp=sharing",
      alt_name: "IIT Bombay",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience & Projects",
  subtitle: "Internships and Assistantships ",
  description:
    " I’m a graduate student with experience from internships at startups and tech companies during my undergraduate studies. Right now, I’m working as a graduate assistant, where I’m gaining more practical knowledge and contributing to real projects. Thanks for stopping by! ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Web Developer and Database intern",
          company: "TechR Business Solutions",
          company_url: "https://techr.co.in/",
          logo_path: "techr.png",
          duration: "Sept 2022 - April 2023",
          location: "Pune, India",
          description:
            " Developed cross-platform web applications for android and iOS using Flutter, enhancing UI with Figma and JavaScript, while focusing on user-centric product design and conducted UX research. Designed debugging protocols for MongoDB, identifying and resolving 300+ performance issues to streamline data operations. Defined metrics and KPIs for projects through product analytics, tracking performance improvements over time to ensure alignment with business goals.  Collaborated with cross-functional teams to optimize algorithms and design scalable solutions. ",
          color: "#000000",
        },
        {
          title: "Data Science and Machine Learning intern",
          company: "Twowaits Technologies Pvt Ltd.",
          logo_path: "twowaits.png",
          duration: "NOv 2021 - Dec 2021",
          location: "India",
          description:
            "Analyzed behavior data of 20,000 customers using predictive analytics techniques (regression, clustering, decision trees), optimizing business insights. Leveraged Google Cloud’s BigQuery for scalable data processing and storage. Utilized ETL pipelines for data movement, using MS Excel, OpenCV, Matplotlib, Seaborn, NumPy, and Pandas for data analysis and visualization.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Neural Machine Translation",
          company: "Deep Learning",
          company_url: "https://about.google/",
          logo_path: "deeplearning_ai_logo.png",
          duration: "Jan 2024 - May 2024",
          location: "Stony Brook University",

          description:
            " Developed Seq2Seq Model: Created and optimized a Seq2Seq machine learning model with attention mechanism for English-to-Marathi language translation achieving accuracy over 90%.  Used T-distributed stochastic neighbor embedding to visualize and analyze the word embeddings.Applied CBOW:generated and analyzed pre-trained embeddings for improved linguistic pattern recognition. Used tools and technologies such as Python, TensorFlow/PyTorch, NLTK, Gensim (Word2Vec), Matplotlib/Seaborn, T-SNE, Pandas ",
          color: "#4285F4",
        },
        {
          title: "Analysis of NYC Cab Services",
          company: "Data Science & Analytics",
          company_url: "https://about.google/",
          logo_path: "DATASCIENCE.png",
          duration: "August 2023 - Dec 2023",
          location: "Stony Brook University",

          description:
            "Conducted comprehensive analysis of NYC cab services using geospatial, weather, crime, and demographic data for data-driven operational optimization. Managed high-volume datasets using ETL processes. Acchieved up to 92% model accuracy. Improved inference time by 25% using TensorBoard for performance optimization. Provided actionable business insights through detailed reporting, enabling data-driven decision-making for service enhancement and resource allocation. Used tools and libraries such as Python, Numpy, Pandas, Geopandas, SciKit-Learn, Matplotlib, Seaborn.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Graduate Assistantship",
      experiences: [
        {
          title: "Website Development Graduate Assistant",
          company: "The Graduate School, Stony Brook University",
          company_url: "https://stonybroook.edu/grad",
          logo_path: "sbu_logo2.png",
          duration: "June 2024 - Present",
          location: "Stony Brook, NY",
          description:
            "Conducted regular audits of existing web pages, identifying and rectifying outdated information on 30+ pages, which led to improved search rankings and an increase in traffic by 50% within two months. Utilized HTML, CSS, JavaScript and CMS for website updates. Ensured Web accessibility. Automated the integration of Google Forms responses into Google Spreadsheets using APPS Script, running queries to upload data into MySQL databases, enhancing data management efficiency. Developed RESTFul API calls to populate the website with reports and dissertations, utilizing Google Cloud Platform for streamlined operations.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Teaching Assistantship",
      experiences: [
        {
          title:
            "Teaching Assistant for ESE 224 (Advanced Programming and Data Structres)",
          company: "Department of Computer Engineering, Stony Brook University",
          // company_url: "https://stonybroook.edu/grad",
          logo_path: "sbu_logo2.png",
          duration: "August 2024 - Present",
          location: "Stony Brook, NY",
          description:
            "As a Teaching Assistant for the Advanced Programming and Data Structures course in C++, I currently assist students during lab sessions, hold office hours for questions and clarifications, and develop assignments, projects, and quizzes. I support students with coding challenges, guide them in writing clean, readable code, and help identify their strengths while suggesting areas for improvement. Grading their work and providing feedback not only aids their development but also refreshes and deepens my own understanding of programming concepts.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Hrutvik_Portrait.jpeg",
    description:
      "I’m always excited to explore new ideas and partnerships. If you’re interested in collaborating, whether it’s a project or just a brainstorming session, I’d love to hear from you!",
  },
  addressSection: {
    title: "Address",
    subtitle: "700 Health Sciences Drive, Stony Brook, NY-11790",
    locality: "Stony Brook",
    country: "USA",
    region: "New York",
    postalCode: "11790",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/UHRZhg2DaAkmmgY67",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1(631)664-4379",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
