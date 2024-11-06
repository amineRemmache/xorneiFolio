/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amine Remmache",
  title: "Hi all, I'm Amine / Xornei",
  subTitle: emoji(
    "A passionate DevOps & Software Engineer 🚀 having an experience of deploying and developping scalable SaaS applications with JavaScript / Nestjs / Nodejs / kubernetes and some other opertionnal tools and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1B3EjzmzMxQ24BxKI8zaFKHU3LSzxZTwi/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amineRemmache",
  linkedin: "https://www.linkedin.com/in/amine-mohammed-remmmache/",
  gmail: "amine.med.remmache@gmail.com",
  gitlab: "https://gitlab.com/bluesy_xornet",
  medium: "https://medium.com/@amine.med.remmache",
  reddit:"https://www.reddit.com/user/Bluesy_Xornet69",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "an ambitious DevOps & software engineer, obsessed with technology since i was a teenager.",
  skills: [
    emoji(
      "⚡ Deploy high availability required native cloud applications."
    ),
    emoji("⚡ Automating manual tasks, and improve pipeplines from dev to prod."),
    emoji(
      "⚡ I can manage any cluster based on linux's distributions Or Windows Server."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "K8s/K3s",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows Server",
      fontAwesomeClassname: "fab fa-windows"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESGI ”Graduate School of Computer Engineering”",
      logo: require("./assets/images/esgiLogo.png"),
      subHeader: "Master of Science in Cloud Computing",
      duration: "October 2019 - 2021",
      desc: "faced every aspect of cloud computing, from virtualisation concepts to the ethic & law that cloud computing of nowdays is based on.",
    },
    {
      schoolName: "University of science and technology of Oran",
      logo: require("./assets/images/ustoLogo.png"),
      subHeader: "Master Degree in Networks and distributed information systems",
      duration: "September 2018 - April 2021",
      desc: "after 6 years of studies, and knowledge gathering, i've been able to create a new mathematic method for aggregation and aid decision called \"AHEM\", and wrap it into a mobile application developed with Flutter as a graduation project.",
    },
    {
      schoolName: "University of science and technology of Oran",
      logo: require("./assets/images/ustoLogo.png"),
      subHeader: "Bachelor Degree in Networks and distributed information systems",
      duration: "September 2015 - April 2018",
      desc: "this degree has been the base for me to build a rationnal and pragmmatic way of thinking and problems solving, and of course, everything that has with software engineering, as uml diagrams, ethic, and software life cycle.  ",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "kostango.com",
      companylogo: require("./assets/images/kostango_logo.png"),
      date: "march 2023 – august 2024",
      descBullets: [
        "adapted with a huge code base and met all requirements within three months only.",
        "Established a daily monitoring routine and issue tracking system, achieving a median resolution rate of five bugs per day.",
        "Persistently developed and maintained automation scripts for builds, deployments, testing, and cron jobs to streamline operations.",
        "optimized, maintained & re-designed CI/CD pipeline, accelerating execution time by 60% and enhancing scalability with Ansible and a custom CLI tool.",
        "Played a key role in designing and implementing scalable, fault-tolerant architectures with zero downtime.",
        "securing & enhancing data migration process reducing its cost & chances of data loss.",
        "Successfully managed and delivered 3 backend tasks."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "blurry.ai",
      companylogo: require("./assets/images/blurrylogo.png"),
      date: "january 2021 – september 2022",
      descBullets: [
        "Continuously improving the way to deploy software and services, always automating manual tasks using tools or scripts, builds and integrations.",
        "Designed and deployed a CI/CD pipeline from scratch using GitLab, automating build, test, and deployment processes for faster and more reliable software delivery.",
        "Implemented a disaster recovery plan using Infrastructure as Code (IaC - Terraform) and configuration management tools (Ansible), achieving full automation for swift recovery and minimal downtime in critical scenarios.",
        "Measure and performance of Cloud solutions to achieve the best use of cloud resources.",
        "Identify, tackle and mitigate real-world Cloud deployment problems, incidents and security vulnerabilities.",
        "Participate in code reviews and knowledge transfers.",
      ]
    },
    {
      role: "DevOps and Backend Engineer",
      company: "Freelancing",
      companylogo: require("./assets/images/backend.png"),
      date: "Oct 2020 - July 2020",
      descBullets: [
        "Delivered and contributed to various projects, taking on diverse responsibilities across DevOps, backend development, and infrastructure management.",
        "Designed and implemented CI/CD pipelines with tools like Jenkins, GitLab CI/CD, and Docker to streamline and automate deployments.",
        "Managed and optimized scalable, secure cloud infrastructure on AWS, GCP, and Azure, adapting environments to fit project demands.",
        "Automated infrastructure setup and configuration management using Terraform and Ansible, ensuring consistency and efficiency across deployments.",
        "Developed RESTful APIs and microservices with Django, nest.js, creating robust backend solutions for client applications.",
        "Set up monitoring and logging solutions using Prometheus, Grafana, and ELK Stack to proactively maintain system health and performance.",
        "Documented workflows and effective team communication, ensuring smooth collaboration and successful project delivery.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that i have completed during my cursus.",
  achievementsCards: [
    {
      title: "Certified Kubernetes Administrator (CKA) with Practice Tests",
      subtitle:
        // "Comprehensive overview of Kubernetes, covering core concepts and architecture with complete practical demonstrations of production-ready setups."
        "Covered Kubernetes core concepts, production setups, scaling, security, and CI/CD integration.",
      image: require("./assets/images/kubernetes.png"),
      imageAlt: "Kubernetes Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-a31c55cd-a16a-466d-aeb0-a5990f557284/"
        }
      ]
    },
    {
      title: "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
      subtitle:
        "Learned AWS architecture, core services, security, and best practices for the SAA-C03 exam.",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-bc88745d-cda4-4a2b-8a36-b1ab0d48605f/"
        }
      ]
    },
    {
      title: "Qt 5 Core Intermediate with C++",
      subtitle:
        "explored design patterns principals and different built-in functions in QT.",
      image: require("./assets/images/qtlogo.png"),
      imageAlt: "QT c++ Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-7d192dc0-4d9f-4610-94d0-5bbfd7a48c4e/"
        }
      ]
    },
    {
      title: "Dart - Intermediate Course",
      subtitle:
        "",
      image: require("./assets/images/dartlogo.png"),
      imageAlt: "Dart Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-d48b3994-cbb1-45ae-ab0a-dc12ff5c4698/"
        }
      ]
    },
    {
      title: "Dart - Advanced Course",
      subtitle:
        "",
      image: require("./assets/images/dartlogo.png"),
      imageAlt: "Dart Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-1e65d531-c3f0-4a60-9d20-ceb96b0201ed/"
        }
      ]
    },
    {
      title: "Flutter Intermediate Course",
      subtitle:
        "",
      image: require("./assets/images/flutterlogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-e23e6200-7dab-4c50-b182-24d66ef60c63/"
        }
      ]
    },
    {
      title: "Flutter Advanced Course",
      subtitle:
        "",
      image: require("./assets/images/flutterlogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-a4920b99-2f40-4444-8adc-d5c0dc6db601/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "sharing is caring, computer enginnering went far and in no time through the huge presence & contribution of the community in every stack and part of computer enginnering, this is what we call the collective intelligence, and i like to be part of it.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@amine.med.remmache/the-complete-guide-for-a-passwordless-ssh-on-both-linux-windows-1f540a0fd476",
      title: "Full guide on how to configure a passwordless SSH",
      description:
        "a full guide on how to get the most of SSH and make it effective with a passwordless authentication based on SSH keypairs, on both Linux(ubuntu/debian) & Windows 10."
    },
    {
      url: "",
      title: "Coming soon...",
      description:
        "stay tuned i might publish something in any moment."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+213-658 881 278",
  email_address: "amine.med.remmache@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
