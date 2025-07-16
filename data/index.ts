import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Blogs", link: "https://medium.com/@singhrathoreayush1738" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "Hey there! I'm a passionate developer from India, Exploring Web3 and Software Engineering with curiosity and innovation. I love turning ideas into reality through code, and I'm always on the lookout for exciting collaborations and work opportunities. Whether it's building decentralized solutions or crafting seamless software experiences, I'm all in. Let's connect and create something amazing together! 🚀",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "The tech stack",
    description: "I have used for projects",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Selenexlabs",
    description: "Solana Foundation",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do checkout my professional CV!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Chainvoice",
    des: "Web3 platform to tokenize your PDF invoices as an enterprise or earn great profits investing in those tokens",
    img: "/p0.png",
    iconLists: ["/re.svg", "/ts.svg", "/sol.png", "/tail.svg", "/git.svg"],
    link: "https://chainvoice-defi.vercel.app/"
  },
  {
    id: 2,
    title: "ZkDetect",
    des: "A zero-knowledge verification dApp leveraging Ethereum (zkSync L2) and Solana, integrating AI-based deepfake detection with blockchain immutability and decentralized governance.",
    img: "/p5.png",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/git.svg", "/fa.png", "/sol.png"],
    link: "https://zk-face.vercel.app/",
  },
  {
    id: 3,
    title: "SolForge",
    des: "A platform to create and manage your own tokens on solana blockchain using the SPL token program",
    img: "/p1.png",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/sol.png", "/git.svg"],
    link: "https://solforgewallet.vercel.app/",
  },
  {
    id: 4,
    title: "Rag-Based-ChatBot",
    des: "A RAG-based web application which uses ollama's large language model to answer your every question related to that document.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/dock.svg", "/fa.png"],
    link: "https://auro-full-stack-task.vercel.app/",
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer & Machine Learning Intern",
    desc: "Assisted in the development of AI/ML model with a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Campus Automation Student Lead - SRM University",
    desc: "Architected and implemented the solution for Out-pass booking web application.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ayyush1738"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AyushSingh1738"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/singhrathoreayush/"
  },
];
