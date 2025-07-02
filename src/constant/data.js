import client1 from "../assets/client-image-1.jpg";
import client2 from "../assets/client-image-2.jpg";
import client3 from "../assets/client-image-3.jpg";
import client4 from "../assets/client-image-4.jpg";
import aboutImage from "../assets/about-body-img.png";
import aboutImage1 from "../assets/about-image-1.jpg";
import aboutImage2 from "../assets/about-image-2.jpg";
import aboutImage3 from "../assets/about-image-3.jpg";
import serviceIcon from "../assets/icon-service-1.svg";
import serviceIcon2 from "../assets/icon-service-2.svg";
import serviceIcon3 from "../assets/icon-service-3.svg";
import serviceIcon4 from "../assets/icon-service-4.svg";
import serviceIcon5 from "../assets/icon-service-5.svg";
import serviceIcon6 from "../assets/icon-service-6.svg";
import projectImage1 from "../assets/project-1.jpg";
import projectImage2 from "../assets/project-2.jpg";
import projectImage3 from "../assets/project-3.jpg";
import projectImage4 from "../assets/project-4.jpg";
import projectImage5 from "../assets/project-5.jpg";
import projectImage6 from "../assets/project-6.jpg";
import projectImage7 from "../assets/project-7.jpg";
import projectImage8 from "../assets/project-8.jpg";
import projectImage9 from "../assets/project-9.jpg";
import iconWhy1 from "../assets/icon-why-choose-1.svg";
import iconWhy2 from "../assets/icon-why-choose-2.svg";
import iconWhy3 from "../assets/icon-why-choose-3.svg";
import iconChoose1 from "../assets/icon-why-choose-counter-1.svg";
import iconChoose2 from "../assets/icon-why-choose-counter-2.svg";
import iconChoose3 from "../assets/icon-why-choose-counter-3.svg";
import iconChoose4 from "../assets/icon-why-choose-counter-4.svg";
import author1 from "../assets/author-1.jpg";
import author2 from "../assets/author-2.jpg";
import author3 from "../assets/author-3.jpg";
import author4 from "../assets/author-4.jpg";
import author5 from "../assets/author-5.jpg";
import author6 from "../assets/author-6.jpg";
import logo from "../assets/company-logo-linear.svg"
import testimonilaQuote from "../assets/testimonial-quote-linear.svg"
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
import team5 from "../assets/team-5.jpg";
import team6 from "../assets/team-6.jpg";
import team7 from "../assets/team-7.jpg";
import team8 from "../assets/team-8.jpg";
import postImage1 from "../assets/post-1.jpg";
import postImage2 from "../assets/post-2.jpg";
import postImage3 from "../assets/post-3.jpg";
import postImage4 from "../assets/post-4.jpg";
import postImage5 from "../assets/post-5.jpg";
import postImage6 from "../assets/post-6.jpg";
import iconMission from "../assets/icon-our-mission.svg"
import iconValue from "../assets/icon-our-value.svg"
import iconVision from "../assets/icon-our-vision.svg"
import mailIcon from "../assets/icon-mail-accent.svg"
import phoneIcon from "../assets/icon-phone-accent.svg"
import locationIcon from "../assets/icon-location.svg"
import gallery1 from "../assets/gallery-1.jpg"
import gallery2 from "../assets/gallery-2.jpg"
import gallery3 from "../assets/gallery-3.jpg"
import gallery4 from "../assets/gallery-4.jpg"
import gallery5 from "../assets/gallery-5.jpg"
import gallery6 from "../assets/gallery-6.jpg"
import gallery7 from "../assets/gallery-7.jpg"
import gallery8 from "../assets/gallery-8.jpg"
import gallery9 from "../assets/gallery-9.jpg"
import serviceImage1 from "../assets/service-1.jpg"
import serviceImage2 from "../assets/service-2.jpg"
import serviceImage3 from "../assets/service-3.jpg"
export const navItem = [
  {
    text: "Home",
    link: "/",
    submenu: [
      { name: "Home-Image", url: "/image" },
      { name: "Home-Video", url: "/video" },
      { name: "Home-Slider", url: "/slider" },
    ],
  },
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Blogs",
    link: "/blog",
  },
  {
    text: "page",
    submenu: [
      {
        name: "Service Details",
        url: "/servicedetails",
      },
      {
        name: "Blogs Details",
        url: "/blogsdetails",
      },
      {
        name: "Project",
        url: "/project",
      },
      {
        name: "Project Details",
        url: "/projectdetails",
      },
      {
        name: "Our Team",
        url: "/team",
      },
      {
        name: "Team Details",
        url: "/teamdetails",
      },
      {
        name: "Pricing",
        url: "/price",
      },
      {
        name: "Testimonials",
        url: "/testimonials",
      },
      {
        name: "Image Gallery",
        url: "/gallery",
      },
      {
        name: "Video Gallery",
        url: "/videogallery",
      },
      {
        name: "FAQS",
        url: "/faqs",
      },
      {
        name: "404",
        url: "/pagenotfound",
      },
    ],
  },
  {
    text: "Contact Us",
    link: "/contact",
  },
];

export const avatarList = [client1, client2, client3, client4];

export const aboutAvatar = [aboutImage, aboutImage1, aboutImage2, aboutImage3];

export const services = [
  {
    icon: serviceIcon,
    text: "Threat Detection and Prevention",
    para: "Real-time monitoring and proactive and measures to identify and threats.",
  },
  {
    icon: serviceIcon2,
    text: "Endpoint Security Solutions",
    para: "Real-time monitoring and proactive and measures to identify and threats.",
  },
  {
    icon: serviceIcon3,
    text: "Network Defense and Firewalls",
    para: "Real-time monitoring and proactive and measures to identify and threats",
  },
  {
    icon: serviceIcon4,
    text: "Data Encryption and Privacy",
    para: "Real-time monitoring and proactive and measures to identify and threats.",
  },
  {
    icon: serviceIcon5,
    text: "Cloud Security and Compliance",
    para: "Real-time monitoring and proactive and measures to identify and threats.",
  },
  {
    icon: serviceIcon6,
    text: "Incident Response and Management",
    para: "Real-time monitoring and proactive and measures to identify and threats.",
  },
];

export const projects = [
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
   projectImage5,
  projectImage6,
  projectImage7,
  projectImage8,
  projectImage9
];

export const chooseUs = [
  {
    icon: iconWhy1,
    heading: "expertise and experience",
    para: "A team of seasoned cybersecurity professionals with extensive industry knowledge.",
  },
  {
    icon: iconWhy2,
    heading: "proactive security approach",
    para: "Focused on preventing threats before they impact your system, not just reacting after the fact.",
  },
  {
    icon: iconWhy3,
    heading: "tailored training programs",
    para: "Educating your team on security best practices to reduce human error and enhance vigilance.",
  },
];

export const chooseCounter = [
  {
    icon: iconChoose1,
    text: "Years of Experience",
    count: "25+",
  },
  {
    icon: iconChoose2,
    text: "Project Completed",
    count: "15K",
  },
  {
    icon: iconChoose3,
    text: "Customer Happy",
    count: "16K",
  },
  {
    icon: iconChoose4,
    text: "Winning Awards",
    count: "120",
  },
];

export const pricingPlan = [
  {
    plan: "Basic plan",
    premium: "$29",
    text: "Essential protection for digital safety.",
    list: [
      "Anti-virus protection service",
      "Reliable personal data protection",
      "Advertisements blocking",
      "1 device using",
    ],
  },
  {
    plan: "Standard plan",
    premium: "$39",
    text: "Essential protection for digital safety.",
    list: [
      "Anti-virus protection service",
      "Reliable personal data protection",
      "Advertisements blocking",
      "1 device using",
    ],
  },
  {
    plan: "Premium plan",
    premium: "$49",
    text: "Essential protection for digital safety.",
    list: [
      "Anti-virus protection service",
      "Reliable personal data protection",
      "Advertisements blocking",
      "1 device using",
    ],
  },
];

export const testimonials = [
  {
    image: author1,
    name: "Alex J",
    profession: "IT Manager",
    para: "This cybersecurity service has been a game-changer for my business.The Basic Plan keeps my data secure, and I no longer worry about online threats. The setup was simple, and the team provided excellent support. Highly recommend!",
    para1:
      "I love how easy it is to use this service. It's affordable and gives me the confidence to work online without fear of breaches. A must-have for anyone who values their online safety!",
  },
  {
    image: author2,
    name: "Sarah Mitchell",
    profession: "Cloude Manager",
    para: "This cybersecurity service has been a game-changer for my business.The Basic Plan keeps my data secure, and I no longer worry about online threats. The setup was simple, and the team provided excellent support. Highly recommend!",
    para1:
      "I love how easy it is to use this service. It's affordable and gives me the confidence to work online without fear of breaches. A must-have for anyone who values their online safety!",
  },
];

export const ourteam = [
  {
    image: team1,
    name: "Michale Johnson",
    expert: "Security Officer",
  },
  {
    image: team2,
    name: "Sophia Carter",
    expert: "Cybersecurity Analyst",
  },
  {
    image: team3,
    name: "Michale Brown",
    expert: "Incident Response",
  },
  {
    image: team4,
    name: "Isabella Moore",
    expert: "Security Awareness",
  },
  {
    image: team5,
    name: "Michale Johnson",
    expert: "Security Officer",
  },
  {
    image: team6,
    name: "Sophia Carter",
    expert: "Cybersecurity Analyst",
  },
  {
    image: team7,
    name: "Michale Brown",
    expert: "Incident Response",
  },
  {
    image: team8,
    name: "Isabella Moore",
    expert: "Security Awareness",
  },
];

export const faq = [
  {
    heading: "What is cybersecurity?",
    para: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.",
  },
  {
    heading: "Why is cybersecurity important?",
    para: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.",
  },
  {
    heading: "What are the most common cyber threats?",
    para: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.",
  },
  {
    heading: "How can i protect my bussiness from cyber threats?",
    para: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.",
  },
];

export const posts = [
  {
    image: postImage1,
    title: "The Linux Threat You need to Know",
  },
  {
    image: postImage2,
    title: "Closing Security Gaps with Innovation",
  },
  {
    image: postImage3,
    title: "Bainlian Focuses on Data Export",
  },
];

export const footerItem = [
  {
    title: "Quick link",
    list: ["Home", "About Us", "Services", "Blog"],
  },
  {
    title: "Services",
    list: [
      "Threat detection",
      "Endpoint security",
      "Network defense",
      "Data encryption",
    ],
  },
  {
    title: "Support",
    list: ["Help", "Term's & condition", "Privacy policy", "Contact us"],
  },
  {
    title: "Quick link",
    list: [
      "+123 456 789",
      "info@domain.com",
      "123 High Street LN1 1AB United Kingdom",
    ],
  },
];

export const ourApproch=[
  {
    icon:iconMission,
    heading:"our mission",
    para:"To empower businesses with robust cybersecurity solutions, ensuring data integrity, privacy & resilience against."
  },
    {
    icon:iconVision,
    heading:"our Vision",
    para:"To empower businesses with robust cybersecurity solutions, ensuring data integrity, privacy & resilience against."
  },
    {
    icon:iconValue,
    heading:"Our Value",
    para:"To empower businesses with robust cybersecurity solutions, ensuring data integrity, privacy & resilience against."
  },
]
export const allPosts=[
  {
    image: postImage1,
    title: "The Linux Threat You need to Know",
  },
  {
    image: postImage2,
    title: "Closing Security Gaps with Innovation",
  },
  {
    image: postImage3,
    title: "Bainlian Focuses on Data Export",
  },
   {
    image: postImage4,
    title: "The Linux Threat You need to Know",
  },
  {
    image: postImage5,
    title: "Closing Security Gaps with Innovation",
  },
  {
    image: postImage6,
    title: "Bainlian Focuses on Data Export",
  },
]

export const contacts=[
  {
   icon:phoneIcon,
   heading:"Contact Us",
   para1:"+91-123 456 789",
   para2:"+91-123 456 789"
  },
   {
   icon:mailIcon,
   heading:"e-mail us",
   para1:"infodomainname@gmail.com",
   para2:"domainname@gmail.com"
  },
   {
   icon:locationIcon,
   heading:"Contact Us",
   para1:"12345 Unity Avenue Suite 100",
   para2:"Springfield, USA 54321"
  }
]

export const gallery=[
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9
]
export const testimonialCard=[
  {
    image:author1,
    logo:logo,
    para:'"Exceptional service! proactive approach to threat detection and prevention gave us peace of mind and ensured our systems remain secure."',
    name:"Alex J.",
    profession:"It Manager",
    quote:testimonilaQuote
  },
    {
    image:author2,
    logo:logo,
    para:'"Exceptional service! proactive approach to threat detection and prevention gave us peace of mind and ensured our systems remain secure."',
    name:"Sarah Mitchell.",
    profession:"Cloud Manager",
    quote:testimonilaQuote
  },
    {
    image:author3,
    logo:logo,
    para:'"Exceptional service! proactive approach to threat detection and prevention gave us peace of mind and ensured our systems remain secure."',
    name:"Jacon Jones",
    profession:"Operations Manager",
    quote:testimonilaQuote
  },
    {
    image:author4,
    logo:logo,
    para:'"Exceptional service! proactive approach to threat detection and prevention gave us peace of mind and ensured our systems remain secure."',
    name:"Courtney Henry.",
    profession:"Business Manager",
    quote:testimonilaQuote
  },
    {
    image:author5,
    logo:logo,
    para:'"Exceptional service! proactive approach to threat detection and prevention gave us peace of mind and ensured our systems remain secure."',
    name:"Theresa Webb.",
    profession:"Compliance officer",
    quote:testimonilaQuote
  },
    {
    image:author6,
    logo:logo,
    para:'"Exceptional service! proactive approach to threat detection and prevention gave us peace of mind and ensured our systems remain secure."',
    name:"Jenny Wilsom.",
    profession:"It Manager",
    quote:testimonilaQuote
  },
]

export const serviceCategory=[
  "Couples Counseling",
  "Adolescent Counseling",
  "Depression Counseling",
  "Stress Counseling",
  "Meditation Counseling"
]

export const serviceImage=[
 serviceImage1,
 serviceImage2,
 serviceImage3,
]
export const serviceAccourdion=[
  {
    heading:"What is a Life & Business Coach?",
    para:"Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward. Coaches do not diagnose or treat mental health conditions."
  },
    {
    heading:"How does coaching differ from therepy?",
    para:"Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward. Coaches do not diagnose or treat mental health conditions."
  },
    {
    heading:"Who can benfit and from life and business coaching?",
    para:"Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward. Coaches do not diagnose or treat mental health conditions."
  },
    {
    heading:"How long coaching process take?",
    para:"Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward. Coaches do not diagnose or treat mental health conditions."
  },
    {
    heading:"Can coaching help my business grow?",
    para:"Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward. Coaches do not diagnose or treat mental health conditions."
  },
]