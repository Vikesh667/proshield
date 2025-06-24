
import client1 from "../assets/client-image-1.jpg"
import client2 from "../assets/client-image-2.jpg"
import client3 from "../assets/client-image-3.jpg"
import client4 from "../assets/client-image-4.jpg"
import aboutImage from "../assets/about-body-img.png"
import aboutImage1 from "../assets/about-image-1.jpg"
import aboutImage2 from "../assets/about-image-2.jpg"
import aboutImage3 from "../assets/about-image-3.jpg"
import serviceIcon from "../assets/icon-service-1.svg"
import serviceIcon2 from "../assets/icon-service-2.svg"
import serviceIcon3 from "../assets/icon-service-3.svg"
import serviceIcon4 from "../assets/icon-service-4.svg"
import serviceIcon5 from "../assets/icon-service-5.svg"
import serviceIcon6 from "../assets/icon-service-6.svg"
import projectImage1 from "../assets/project-1.jpg"
import projectImage2 from "../assets/project-2.jpg"
import projectImage3 from "../assets/project-3.jpg"
import projectImage4 from "../assets/project-4.jpg"


export const navItem = [
  {
    text: "Home",
    link: "/",
    submenu: [
      { name: "Home-Image", url: "/" },
      { name: "Home-Video", url: "/" },
      { name: "Home-Slider", url: "/" }
    ]
  },
  {
    text: "About Us",
    link: "/about"
  },
    {
    text: "Services",
    link: "/services"
  },
    {
    text: "Blogs",
    link: "/blogs"
  },
    {
    text: "page",
    link: "/page",
    submenu:[
        {
            name:"Service Details",
            url:"/"
        },
         {
            name:"Blogs Details",
            url:"/"
        },
         {
            name:"Project",
            url:"/"
        },
         {
            name:"Project Details",
            url:"/"
        },
         {
            name:"Our Team",
            url:"/"
        },
         {
            name:"Team Details",
            url:"/"
        },
         {
            name:"Pricing",
            url:"/"
        },
         {
            name:"Testimonials",
            url:"/"
        },
         {
            name:"Image Gallery",
            url:"/"
        },
         {
            name:"Video Gallery",
            url:"/"
        },
          {
            name:"FAQS",
            url:"/"
        },
          {
            name:"404",
            url:"/"
        },

    ]
  },
  {
    text:"Contact Us",
    link:"/contact"
  }
];

export const avatarList = [
  client1,
  client2,
  client3,
  client4
];

export const aboutAvatar=[
  aboutImage,
  aboutImage1,
  aboutImage2,
  aboutImage3
]

export const services=[
  {
    icon:serviceIcon,
    text:"Threat Detection and Prevention",
    para:"Real-time monitoring and proactive and measures to identify and threats."
  },
  {
    icon:serviceIcon2,
    text:"Endpoint Security Solutions",
    para:"Real-time monitoring and proactive and measures to identify and threats."
  },
  {
    icon:serviceIcon3,
    text:"Network Defense and Firewalls",
    para:"Real-time monitoring and proactive and measures to identify and threats"
  },
  {
    icon:serviceIcon4,
    text:"Data Encryption and Privacy",
    para:"Real-time monitoring and proactive and measures to identify and threats."
  },
  {
    icon:serviceIcon5,
    text:"Cloud Security and Compliance",
    para:"Real-time monitoring and proactive and measures to identify and threats."
  },
  {
    icon:serviceIcon6,
    text:"Incident Response and Management",
    para:"Real-time monitoring and proactive and measures to identify and threats."
  }
]

 export const projects=[
   projectImage1,
   projectImage2,
   projectImage3,
   projectImage4
]