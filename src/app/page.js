'use client';

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react';
import { metadata } from './metadata';

export default function Home() {
    // State to track whether the user clicked 'Show More'
    const [showAllProjects, setShowAllProjects] = useState(false);

    const projects = [
        {
            id: 'P1',
            year: 'Fall 2022 - Spring 2023',
            title: 'DASHER BLITZ',
            skills: ['C++', 'Blueprint', 'Unreal Engine 5', 'Blender'],
            descriptions: [
                '1st place winner of the 2023 Oregon State University Game Competition.',
                'Developed by my team and I (Dataflow Games), Dasher Blitz is a delivery style vehicle driving game that has different maps, in-game objects, multiple vehicles, and a continually improving experience for users. Dasher Blits was developed with Unreal Engine 5 and utilized the C++ and Blueprint capabilities. We also used Blender as a model and animation tool.',
                // Add more descriptions here
            ],
            link: 'https://github.com/DataDevv/CarGoesVroom',
            imageSrc: '/Project-image.PNG' // Path to the image for this project
            // Rest of the project data
        },
        {
            id: 'P2',
            year: 'Spring 2024',
            title: 'CVI2.ORG',
            skills: ['Angular Framework', 'MySQL', 'PHP', 'HTML', 'CSS'],
            descriptions: [
                'The CVI website was developed using the Angular framework to effectively showcase the organization\'s mission, ongoing projects, and the pastors involved.The site features a clean, intuitive UI and includes an admin panel that allows user - level content updates, ensuring both easy navigation for visitors and straightforward management for administrators.This platform provides the organization with a flexible way to keep content current and engage with their community.I worked alongside another contributor to bring this project to life.',
                // Add more descriptions here
            ],
            link: 'cvi2.org',
            imageSrc: '/CVI-image.PNG' // Path to the image for this project
            // Rest of the project data
        },

        {
            id: 'P3',
            year: 'Summer 2023',
            title: 'PERSONAL WEBSITE',
            skills: ['Next.js', 'React.js', 'JavaScript', 'CSS'],
            descriptions: [
                'You are looking at it! Developed by yours truly, I created this project in order to showcase myself and my experience. This site was made with Next.js and its libraries. Styled with React components, .js and .css.',
                // Add more descriptions here
            ],
            link: 'https://github.com/kleDevv/wskien/tree/master',
            imageSrc: '/Project2-image2.PNG' // Path to the image for this project
            // Rest of the project data
        },
        {
            id: 'P4',
            year: 'Spring 2023',
            title: 'Song Guesser',
            skills: ['Android Studio', 'Musixmatch API', 'Kotlin'],
            descriptions: [
                'Song Guesser is a fun and interactive game app built with Android Studio, Kotlin, and the Musixmatch API. The game challenges users to identify the correct song from a set of four options based on a displayed snippet of lyrics. Players can track their performance through features like streaks and accuracy scores, making it both engaging and competitive. \n This project highlights my skills in mobile app development, API integration, and Kotlin programming, showcasing my ability to create dynamic and user - friendly applications.',
                // Add more descriptions here
            ],
            link: 'https://github.com/osu-cs492-w23/final-project-team-31.git',
            imageSrc: '/SG-image.PNG' // Path to the image for this project
            // Rest of the project data
        },
        // Add more projects here
    ];

    // Determine which projects to display based on the state
    const projectsToShow = showAllProjects ? projects : projects.slice(0, 2);

    return (
        <main style={{ backgroundColor: '#4682a9' }} className="flex flex-col items-center justify-center">

            <Head>
                <link rel="shortcut icon" href="public/favicon.ico" />
            </Head>

            {/* Flexbox container for two columns */}
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">

                {/* Left Column */}
                <div className="left-column flex-shrink-0 flex flex-col items-start space-y- p-20 md:overflow-y-auto md:max-h-screen md:fixed left-0 top-0 bottom-0">
                    {/* Personal Information */}
                    <div className="name-title">
                        <div className="text-4xl" style={{ color: '#f6f4eb' }}>Kien Le</div>
                        <div className="text-xl font-bold">
                            <span style={{ color: 'orange' }}>OSU</span><span style={{ color: '#f6f4eb' }}> | 2023</span>
                        </div>
                        <div className="text-xl font-bold" style={{ color: '#f6f4eb' }}>Computer Science</div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-left space-x-4" style={{ paddingTop: '30px', marginBottom: '20px' }} >
                        {/*<a target="_blank" href="https://icons8.com/icon/32292/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                        <a href="https://www.instagram.com/key_en_le/" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                            <Image src="/instagram-icon2.png" alt="Instagram Icon" width={24} height={24} className="hover:text-gray-700" />
                        </a>
                        {/*<a target="_blank" href="https://icons8.com/icon/118467/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                        <a href="https://www.facebook.com/profile.php?id=100005960447507" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                            <Image src="/facebook-icon2.png" alt="Facebook Icon" width={24} height={24} className="hover:text-gray-700" />
                        </a>
                        {/*<a target="_blank" href="https://icons8.com/icon/ZmG5l3ueI6FO/linkedin">linkedin</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                        <a href="https://www.linkedin.com/in/kien-le-066173259/" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                            <Image src="/linkedin-icon.png" alt="LinkedIn Icon" width={24} height={24} className="hover:text-gray-700" />
                        </a>
                        {/*<a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                        <a href="https://github.com/kleDevv" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                            <Image src="/gh-icon.png" alt="GitHub Icon" width={24} height={24} className="hover:text-gray-700" />
                        </a>
                        {/*<a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/enail">email</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                        <a href="/RESUMEupdated.pdf" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                            <Image src="/email-icon.png" alt="Email Icon" width={24} height={24} className="hover:text-gray-700" />
                        </a>
                    </div>

                    {/* Vertical List */}
                    <nav className="text-white p-4 items-left " >
                        <div className="max-w-5xl mx-auto flex flex-col space-y-2" >
                            <a style={{ color: '#91c8e4' }} href="#about-me" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                                &mdash; About Me
                            </a>
                            <a style={{ color: '#91c8e4' }} href="#Education" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                                &mdash; Education
                            </a>
                            <a style={{ color: '#91c8e4' }} href="#Projects" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                                &mdash; Projects
                            </a>
                            <a style={{ color: '#91c8e4' }} href="#Work" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                                &mdash; Work History
                            </a>
                            <a style={{ color: '#91c8e4' }} href="#Resume" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                                &mdash; Resume
                            </a>
                        </div>
                    </nav>
                </div>



                {/* Right Column */}
                <div className="right-column flex flex-col items-start space-y-4 flex-grow max-w-screen-md overflow-y-auto ">
                    {/*About me */}
                    <section id="about-me">
                        <h5 style={{ paddingBottom: '10px' }}>
                            Back in 2018, I decided to try taking on a computer science course in high school. This experience enabled me to deep dive into the capabilities of programming and I developed my first game. I quickly realized how much I enjoyed exploring the possibilities of technology and the creative process that programming allowed me to work within. Since then, I have continued to build on that initial curiosity, pursuing opportunities to grow my skills and deepen my knowledge in Computer Science.
                        </h5>
                        <h5 style={{ paddingBottom: '10px' }}> Today, I am an OSU graduate with a Bachelor&apos;s in Computer Science and a minor in Business and Entrepreneurship. After school, I had the opportunity with the MECOP program to work at Flex Force Enterprises. There, I was working with high-level programming and design in order to implement image detection and tracking software for ASP Products.
                        </h5>
                        <h5 style={{ paddingBottom: '10px' }}>
                            Other than coding, I serve in
                            {' '}
                            <a
                                style={{
                                    color: '#91c8e4',
                                    transition: 'color 0.3s, font-size 0.3s',
                                }}
                                href="https://vgbcportland.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold hover:text-custom-color hover:text-xl"
                            >
                                church and worship
                            </a>
                            , I also love to play competitive games, guitar, volleyball, and hike the Oregon trails.
                        </h5>

                    </section>



                    {/* Education */}
                    <section id="Education" className="text-left max-w-screen-md" style={{ color: '#f6f4eb' }}>
                        <h1>
                            Education
                        </h1>
                        <div id="osu" className="flex items-center">
                            <div className="mr-4">
                                <Image
                                    src="/osu-logo.png"
                                    alt="OSU Logo"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div>
                                <p style={{ color: 'orange', fontSize: '20px' }}>
                                    Oregon State University | 2023
                                </p>
                                <p style={{ color: '#f6f4eb' }}>
                                    BS Computer Science with a Minor in Business and Entrepreneurship
                                </p>
                            </div>
                        </div>
                        {/* Add your education content here */}
                    </section>

                    {/* Relevant Work History */}
                    <section id="Work" className="text-left padding max-w-screen-md">
                        <h1>Work History</h1>
                        {workHistory.map((entry) => (
                            <Link
                                key={entry.id}
                                href={entry.link} // Use the link property from each workHistory entry
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <div className="project-container">
                                    <h2>{entry.company}</h2>
                                    <h3>{entry.jobTitle}</h3>
                                    <h4 style={{ color: '#749bc2' }}>{entry.date}</h4>
                                    <div className="skills flex" style={{ padding: '5px 0' }}>
                                        {entry.skills.map((skill, index) => (
                                            <div className="skill-bubble" key={index}>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ color: '#f6f4eb' }}>
                                        <p style={{ marginBottom: '20px' }}>{entry.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </section>


                    {/* Projects */}
                    <section id="Projects" className="text-left padding max-w-screen-md">
                        <h1 style={{ color: '#88d1f1' }}>Projects</h1>
                        {/* Loop through your projects */}
                        {projectsToShow.map((project) => (
                            <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                <div className="project-container" style={{ marginBottom: '20px' }}>
                                    <div className="project-details">
                                        <div className="flex items-center"> {/* Container for project title */}
                                            <h2 style={{ color: '#f6f4eb', marginRight: '10px' }}>{project.title}</h2>
                                        </div>
                                        <p style={{ color: '#749bc2' }}>{project.year}</p> {/* Moved project year here */}
                                        <div className="skills flex" style={{ padding: '5px 0' }}> {/* Add padding here */}
                                            {project.skills.map((skill, index) => (
                                                <div className="skill-bubble" key={index}>
                                                    {/* Skill inside a bubble */}
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="project-image" style={{ paddingTop: '2px' }}>
                                        <Image
                                            src={project.imageSrc}
                                            alt="Project Image"
                                            layout="responsive"
                                            width={800}
                                            height={600}
                                            style={{ maxWidth: '100%', borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="project-details">
                                        {project.descriptions.map((description, index) => (
                                            <p style={{ color: '#f6f4eb' }} key={index}>
                                                {description}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {projects.length > 2 && (
                            <button
                                style={{
                                    color: '#91c8e4',
                                    transition: 'color 0.3s, font-size 0.2s'
                                }}
                                onClick={() => setShowAllProjects((prev) => !prev)}  // Toggle state using previous value
                                className="text-[#9CA3AF] font-bold hover:underline hover:text-lg"
                            >
                                {showAllProjects ? '← Show Less' : 'View Additional Project Archive →'}
                            </button>
                        )}
                    </section>


                    {/* Resume */}
                    <section id="Resume" className="text-left padding max-w-screen-md ">
                        <h1>
                            Resume
                        </h1>
                        {/* Add your resume content here */}
                        <a href="/RESUMEupdated.pdf" target="_blank" rel="noopener noreferrer" className="">
                            <div id="resume" className="project-container">
                                <p style={{ color: '#f6f4eb' }}>
                                    You can download my resume{" "}
                                    <span className="underline">here</span>.
                                </p>
                            </div>
                        </a>
                    </section>
                </div>
            </div>

            {/* Your footer */}
            <footer className="py-6 px-4 w-full text-center">
                <p className="text-sm text-gray-600">
                    Loosely designed in Figma and coded in Visual Studio Code by Kien Le (Me). Built with <a href="nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> and Tailwind CSS. Deployed with <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> &copy; {new Date().getFullYear()}
                </p>
            </footer>

        </main>

    );
}


const workHistory = [
    {
        id: 'W1',
        company: 'Flex Force Enterprises',
        jobTitle: 'MECOP Computer Science Intern',
        date: '2023 June - Current',
        skills: ['Linux', 'C++', 'Embedded Systems', 'GStreamer', 'NVIDIA DeepStream'],
        description:
            'Worked on the ASP device, specifically on the On-Screen-Display functionality. Utilized the Nvidia Jetpack toolset on a device called the Jetson. The focus was on the tracking software tools provided by Nvidia Jetpack, and I am in charge of developing methods of detection and tracking for target objects.',
        link: 'https://flexforce.us/', // Different link for this work history entry
    },
    {
        id: 'W2',
        company: 'Tektronix',
        jobTitle: 'MECOP Computer Science Intern',
        date: '2022 April - September',
        skills: ['C#', 'C++', '.Net', 'Cognex Image Dectection AI'],
        description:
            'Worked on Innovations and Development Team for the Ops department. Worked on multiple projects that included the training of AI image-detection software as well as an application to utilize it with the on-prem system. Development in C# code.',
        link: 'https://www.tek.com/en', // Different link for this work history entry
    },
    // Add more work history entries as needed
];