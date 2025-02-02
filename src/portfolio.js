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
  username: "Lokesh Bhushan",
  title: "Hi, I'm Lokesh",
  subTitle: emoji(
    "A Data Science and Machine Learning enthusiast skilled in Python, TensorFlow, and predictive modeling. Experienced in building AI-driven solutions, automating workflows, and deriving actionable insights. Passionate about solving complex problems and contributing to impactful, innovative projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ODz_7lOuR9tfjSFlwS9VsBud135ez284/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lkshbhushan001",
  linkedin: "https://www.linkedin.com/in/lokesh-bhushan/",
  gmail: "lkshbhushan001@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/lkshbhushan",  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA-DRIVEN MACHINE LEARNING ENGINEER PASSIONATE ABOUT SOLVING REAL-WORLD PROBLEMS",
  skills: [
    emoji(
      "⚡ Develop predictive models and machine learning solutions to optimize processes and drive decision-making"
    ),
    emoji("⚡ Build and deploy AI-driven tools for automation, anomaly detection, and data analysis"),
    emoji(
      "⚡ Leverage Python, TensorFlow, and SQL to create scalable and efficient data pipelines"
    ),
    emoji(
      "⚡ Collaborate across teams to design and implement end-to-end data solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },    
    {
      skillName: "Neural Networks",
      fontAwesomeClassname: "fas fa-network-wired"
    },   
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },   
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },        
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },     
    {
      skillName: "Random Forest",
      fontAwesomeClassname: "fas fa-tree"
    },    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R-Studio",
      fontAwesomeClassname: "fas fa-registered"
    },
    {
      skillName: "LLMs",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The State University of New York at Buffalo",
      logo: require("./assets/images/ubLogo.png"),
      subHeader: "Master of Science in Industrial Engineering (Data Analytics)",
      duration: "August 2023 - Present",
      desc: "Achieved a GPA of 3.84. Currently working as a research assistant on Wildfire Management using Machine Learning:",
      descBullets: [
        "Quantified lag time between prescribed burns and wildfires to inform fire management strategies.",
        "Identified vegetation types with varying wildfire risks post-prescribed burns.",
        "Analyzed spatial-temporal dynamics of proximity and time since burns on wildfire likelihood."
      ]
    },
    {
      schoolName: "Indian Institute of Engineering Science and Technology, Shibpur",
      logo: require("./assets/images/iiestLogo.png"),
      subHeader: "Bachelor of Technology in Aerospace Engineering and Applied Mechanics",
      duration: "July 2015 - June 2019",
      desc: "Ranked top 10% in the program."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "85%"
    },
    {
      Stack: "LangChain(RAG)",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer Vision and Image Processing",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcsLogo.png"),
      date: "April 2022 – August 2023",
      desc: "Achieved a 20% increase in product efficiency. Designed ML models to streamline HR processes and improve decision-making:",
      descBullets: [
        "Built predictive models to forecast employee attrition, optimizing hiring processes.",
        "Implemented sentiment analysis models to enhance employee engagement strategies.",
        "Automated resume screening using natural language processing, reducing manual effort by 30%."
      ]
    },
    {
      role: "Associate Consultant",
      company: "Capgemini",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "August 2019 – April 2022",
      desc: "Optimized cloud resource utilization by 15% and reduced downtime by 15%. Developed ML solutions to enhance system efficiency:",
      descBullets: [
        "Built predictive models to monitor and optimize cloud resource usage in a multi-cloud environment.",
        "Designed anomaly detection algorithms, improving system reliability by 10%.",
        "Automated workload forecasting and scaling decisions using Load Balancers for efficient resource allocation."
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
  subtitle: "Some projects I created to showcase my skills",
  projects: [
    {
      image: require("./assets/images/dataWebsiteLogo.png"),
      projectName: "Data Preprocessing and Recommendations application",
      projectDesc: "Built a full-stack app for automated data preprocessing with AI-driven cleaning options. Integrated RAG for prompt-based cleaning and a dashboard for insights like feature importance and outlier detection, boosting user efficiency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://data-optimizer.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/frDetectionLogo.png"),
      projectName: "Customer Fraud Detection System",
      projectDesc: "Developed machine learning models to detect fraudulent transactions. Conducted feature engineering to identify high-impact predictors of fraud across millions of customer records, enhancing accuracy and reliability in fraud detection.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      //]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "365 Data Science",
      subtitle:
        "Awarded the Data Scientist Certificate, demonstrating advanced technical expertise and credibility in data science, validating my skills as a highly-skilled professional in the field.",
      image: require("./assets/images/365dataLogo.png"),
      imageAlt: "365 Data Science Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://learn.365datascience.com/certificates/DD-2E143AE9BE/"
        }
      ]
    },
    
    {
      title: "Microsoft Azure",
      subtitle:
        "Earned the Azure Developer Associate certification, demonstrating expertise in building, and deploying cloud applications on Microsoft Azure.",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/LokeshBhushan-7992/FABEFEF957AF178C?sharingId=1B198528DD61F422"
        }
      ]
    },
    {
      title: "365 Data Science",
      subtitle: "Awarded the Build Chat Applications with OpenAI and LangChain Certificate, demonstrating proficiency and qualifying me to apply this expertise in data analytics and data science.",
      image: require("./assets/images/365dataLogo.png"),
      imageAlt: "365 Data Science Logo",
      footerLink: [        
        {
          name: "View Certification",
          url: "https://learn.365datascience.com/certificates/CC-9AB2D39FBC/"
        }
      ]
    },
    {
      title: "National Science Olympiad",
      subtitle: "Achieved Rank 16 in Science Olympiad and Rank 24 in Cyber Olympiad of NSO Foundation at state level.",
      image: require("./assets/images/nsoLogo.png"),
      imageAlt: "NSO Logo",
      footerLink: [
        
      ]
    }
    
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(716)-970-8603",
  email_address: "lkshbhushan001@gmail.com",
  isHireable: "Yes"
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
