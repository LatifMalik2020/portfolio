 import profile from './profile.png';
import {faAppStore, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

 export const navigation = {
    name: "Abdul Bashir",
    links: [
        {
            title: "About",
            link: "#about",
        },
        {
            title: "Projects",
            link: "#projects",
        },
        {
            title: "Contact",
            link: "#contact",
        },
        {
            title: "Links",
            link: "/links",
        },

    ],
 }
 export const intro = {
    title: "Hey, I'm Abdul Bashir",
    description: "A Software Engineer @ JPMorgan Chase &Co.",
    image: profile.src,
    buttons: [
        {
            title: "Contact Me",
            link: "#contact",
            isPrimary: true,
        },
        {
            title: "Resume",
            link: "https://docs.google.com/document/d/1Jus_k3Wr1FsTulMju_O9JmAJB0tkLz4QO8EPPfrGsRM/edit?usp=sharing",
            isPrimary: false,
        },
    ],
 }

 export const about = {
    title: "My Background",
    description: [
        "I am Abdul Bashir, a Software Engineer at JPMorgan Chase & Co. I have been with JPMorgan Chase for almost two years now, contributing to various innovative projects and leveraging cutting-edge technologies. The tech industry is ever-evolving, and I love being able to grow with it, while continually solidifying the fundamentals.Throughout my career, I've had the opportunity to work on a diverse range of technologies and projects, from developing scalable backend systems using Java and Spring Boot to building responsive and dynamic front-end applications with React.js and TypeScript. My expertise extends to cloud platforms and container orchestration tools like Kubernetes, enabling efficient and resilient application deployments.At JPMorgan Chase, I've honed my skills in agile methodologies, collaborating closely with cross-functional teams to deliver high-quality software solutions. My role involves not only coding but also participating in design discussions, code reviews, and mentoring junior developers. This holistic approach ensures that I stay at the forefront of technological advancements while fostering a culture of continuous learning and improvement.In addition to my technical skills, I am committed to following best practices in software development, ensuring clean, maintainable, and efficient code. I believe in the importance of strong foundational knowledge, which allows me to adapt to new technologies and paradigms seamlessly.As I continue my journey in the tech industry, I am excited about the possibilities that lie ahead. I am dedicated to leveraging my skills and experiences to drive innovation, create value, and make a positive impact in the world through technology.",
    ],
 }

 export const work = {
    title: "What I do",
    cards: [
        {
            title: "Software Engineering at JPMorgan Chase & Co.",
            description: "I have been with JPMorgan Chase for almost 2 years, contributing to innovative projects and leveraging cutting-edge technologies",
            icons: null,
        },
    ],
 }

 export const projects = {
    title: "Projects",
    cards: [
        {
            title: "upsc[AI]le",
            description: "Unlike traditional methods for enlarging images, which creates pixelation, blur, and distortion in the altered image, our image upscaling application, upscales small, low resolution images into large, high resolution images without losing image quality.",
            icons: [
                {
                    icon: faGithub,
                    link: "https://github.com/LaunchCodeLiftoffProjects/safna-group",
                },
            ]
        },
        {
            title: "DeenDiscovery",
            description: "Developed an application that interfaces with an external API to retrieve and store Quranic data into a SQL database, offering users an intuitive interface to navigate through chapters seamlessly. The application features advanced search functionality and sorting capabilities, enabling users to efficiently query and organize content based on chapter and verse numbers.",

            icons: [

                {
                    icon: faGithub,
                    link: "https://github.com/LatifMalik2020/DeenDiscovery/tree/master",
                },
            ]
        },
        {
            title: "Contract Guru",
            description: "Participated in the Global Hackathon hosted by JPMorgan Chase as a key member of the backend Java development team. Our project involved creating sophisticated logic to aggregate data across all repositories within JPMC’s infrastructure. We successfully developed a system to calculate and analyze the code coverage metrics, specifically the Contract Test Percentage, at both the repository and individual class levels, thereby enhancing the visibility of testing standards adherence within the organization’s codebase.",
            icons: [
                {
                    icon: faGithub,
                    link: "https://github.com/",
                },
            ]
        },
    ],
 }

 export const contact = {
    title: "Get in touch",
    description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at abdulzahirabdulbashir@gmail.com.",
    buttons: [
        {
            title: "Email Me",
            link: "mailto:abdulzahirabdulbashir@gmail.com",
            isPrimary: true,
        },
        {
            title: "Schedule Meeting",
            link: "https://topmate.io/abdul_bashir/",
            isPrimary: false,
        },
    ]
 }

 // SEARCH ENGINE
 export const SEO = {
    // 50 - 60 char
    title: "Software Engineer | TypeScript | Reactjs| Java Developer",
    description: "I am a software Engineer at JPMorgan Chase.I am also a former Fixed Income /Bond Trader and stock Market enthusiast .",
    image: profile.src,
 }

 export const links = {
    image: profile.src,
    title: "@AZahir.B",
    description: "Software Engineer | TypeScript | Reactjs| Java Developer",
    cards: [
        {
            title: "My GitHub",
            link: "https://github.com/LatifMalik2020",
        },
        {
            title: "My LinkedIn",
            link: "https://www.linkedin.com/in/a-zahir/",
        },
    ]
 }