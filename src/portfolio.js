/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Splash screen chahiye to true, nahi chahiye to false
};

// SEO Related settings
const seo = {
  title: "Manas Tiwari | Cloud & Software Engineer",
  description:
    "Manas Tiwari's personal portfolio showcasing projects, skills, cloud computing specialization, software development work, and professional journey in tech.",
  og: {
    title: "Manas Tiwari Portfolio",
    type: "website",
    url: "https://manas-pf.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Manas Tiwari",
  logo_name: "Manas Tiwari",
  nickname: "Student",
  subTitle:
    "A passionate cloud and DevOps engineer building automated, scalable, and resilient infrastructures for real-world impact.",
  resumeLink:
    "https://drive.google.com/file/d/1r0_f43z6A162ds1M7ZKp82uUTgQv3pzL/view?usp=drive_link",
  portfolio_repository: "https://github.com/manas0911user",
  githubProfile: "https://github.com/manas0911user",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/manas0911user",
  // linkedin: "https://www.linkedin.com/in/manas-tiwari-srmist/",
  // gmail: "mt9405@srmist.edu.in",
  // gitlab: "https://gitlab.com/manas0911user",
  // instagram: "https://www.instagram.com/m.a.n_a_s/"

  {
    name: "Github",
    link: "https://github.com/manas0911user",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manas-tiwari-srmist/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mt9405@srmist.edu.in",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/manas0911user",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#FC6D26", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/m.a.n_a_s/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Engineering scalable, responsive front-end systems using React  ",
        "⚡ Designing and building backend services and APIs using Node.js, Express, and Flask  ",
        "⚡ Building cloud-ready applications with RESTful APIs, authentication, and scalable architectures ",
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
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hands-on experience architecting and operating solutions across multiple cloud platforms ",
        "⚡ Designing, hosting, and maintaining production-grade applications on virtual machine infrastructures with integrated databases ",
        "⚡ Deploying and optimizing deep learning models on cloud platforms for real-time mobile and edge consumption ",
        "⚡ Engineering real-time data streaming pipelines between databases and servers across GCP and AWS environments",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "DevOps",
      fileName: "DesignImg",
      skills: [
        "⚡ Architecting fully automated DevOps pipelines enabling rapid, reliable, and secure software delivery  ",
        "⚡ Engineering cloud infrastructure automation using Infrastructure-as-Code for scalable production systems ",
        "⚡ Designing production-grade observability platforms for monitoring, logging, and system reliability  ",
      ],
      softwareSkills: [
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#906868"
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#9e3832",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#6495ed",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/mt9405",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mt9405",
    },
    
    {
      siteName: "Codolio",
      iconifyClassname: "simple-icons:coolify",
      style: {
        color: "#323754",
      },
      profileLink: "https://codolio.com/profile/manas0911",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM Institute of Science& Technology",
      subtitle: "B.Tech. in Computer Science& Engineering with Specialization in Cloud Computing",
      logo_path: "srmlogo.png",
      alt_name: "SRMIST",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.Developed a strong academic foundation in core computer science disciplines with a focused specialization in Cloud Computing and Distributed Systems ",
        "⚡ Gained hands-on expertise through advanced coursework in cloud platforms, DevOps practices, and scalable system engineering .",
        "⚡ Awarded academic honors and scholarships for consistent excellence and high performance throughout the program  ",
      ],
      website_link: "https://www.srmup.in/",
    },
    {
      title: "Makhanlal Chaturvedi National University of Journalism and Communication",
      subtitle: "Diploma In Computer Application",
      logo_path: "university_logo-webs..._imresizer.jpg",
      alt_name: "MCRPV",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ Built a strong foundation in computer applications, programming fundamentals, databases, networking, and operating systems.",
        "⚡ Gained practical hands-on experience in software tools, web technologies, and system-level computing concepts.",
        "⚡ Developed core technical skills in application development, system usage, and digital technologies.",
      ],
      website_link: "https://www.mcu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Gorav J Shah",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-76a8c728-5ecd-4e11-b9dc-9bee7b87fef8/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Gen AI",
      subtitle: "- Anton Voroniuk",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2fc0b402-94c1-4fca-b248-16f8ab6032dc/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Structures & Algorithm",
      subtitle: "- Abdul Bari",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-606cd39c-2af3-45e8-a223-6ba304fc4606/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "IoT",
      subtitle: "- Junaid Ahmed",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-1c3c66e2-7762-4b81-8517-0103d00408d6/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    
    {
      title: "Cloud Infrastructure",
      subtitle: "- Oracle",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8EEB7273D08A7E1C6D03ED85C075F5D87285B02B8B008DE7CF246B1F78C9C24F",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Solution Architecture",
      subtitle: "- Forge",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12kfJzEVL3F9u-SEVqd1531fA5f5VCqcs/view?usp=sharing",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked on building and operating scalable cloud-native systems across multiple projects, focusing on cloud infrastructure, DevOps automation, and system reliability. My experience spans designing production-grade architectures, automating delivery pipelines, and engineering resilient platforms for real-world use cases. Alongside technical work, I actively contribute to open-source communities and engage in knowledge-sharing initiatives, driven by a passion for collaborative engineering and community-driven growth.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Still Finding First Job",
          company: "",
          company_url: "",
          logo_path: "srmlogo.png",
          duration: "June 2023 - Present",
          location: "India",
          description:
            "Actively seeking my first professional opportunity as a Cloud/DevOps Engineer, with a strong focus on building real-world skills through hands-on projects, cloud infrastructure design, automation, and continuous learning. Currently working on production-style projects to gain industry-level experience and readiness.",
          color: "#000000",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Develeopment Intern",
          company: "Cognifyz Technologies",
          company_url: "https://cognifyz.com/",
          logo_path: "cognifyz.png",
          duration: "Jul 2025 - Jun 2025",
          location: "India",
          description:
            "Contributed to the development of end-to-end web solutions, focusing on responsive UI design, backend integration, and performance optimization using modern web technologies.",
          color: "#000000",
        },
        
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Computer Society Of India Students Chapter",
          company: "SRMIST",
          company_url: "https://www.linkedin.com/company/computer-society-of-india-srm-ncr/posts/?feedView=all",
          logo_path: "srmlogo.png",
          duration: "Aug 2023 - Jan 2026",
          location: "Ghaziabad",
          description:
            "Managed official documentation, records, and digital assets for the CSI Club, supporting event management, reporting, and organizational operations through structured documentation systems.",
          color: "#4285F4",
        },
        {
          title: "National Servics Scheme Students Chapter",
          company: "SRMIST",
          company_url: "https://www.linkedin.com/company/national-service-scheme/posts/?feedView=all",
          logo_path: "srmlogo.png",
          duration: "Aug 2024- Oct 2025",
          location: "Ghaziabad",
          description:
            "Played an active role in organizing and executing community development programs, awareness campaigns, and social service initiatives under the NSS unit.",
          color: "#D83B01",
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

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with  AI, React, Cloud and Opensource Development.",
  },
  blogSection: {
    
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Rishabh Vihar Housing Society",
    locality: "Modinagar",
    country: "India",
    region: "",
    postalCode: "201204",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Rishabh+Vihar+Housing+Society/@28.8123789,77.5475012,17z/data=!3m1!4b1!4m6!3m5!1s0x390cf539d480c731:0xbb12c93e45f146dc!8m2!3d28.8123742!4d77.5500761!16s%2Fg%2F12hnqgv9k!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "Contact Me",
    subtitle: "9165007247",
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
