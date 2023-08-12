import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

export default function Home() {

  return (
    <main style={{ backgroundColor: '#4682a9' }} className="flex flex-col items-center justify-center">

      {/* Flexbox container for two columns */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
       {/* Left Column */}
       <div className="left-column flex-shrink-0 flex flex-col items-start space-y-4 p-20 md:overflow-y-auto md:max-h-screen md:fixed left-0 top-0">
          {/* Personal Information */}
          <div className="name-title">
          <div className="text-4xl" style={{color: '#f6f4eb'}}>Kien Le</div>
          <div className="text-xl font-bold">
            <span style={{ color: 'orange' }}>OSU</span><span style={{color: '#f6f4eb'}}> | 2023</span>
          </div>
          <div className="text-xl font-bold" style={{color: '#f6f4eb'}}>Computer Science</div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4" style={{ paddingTop: '30px', marginBottom: '20px' }} >
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
          <a href="/RESUME.pdf" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
            <Image src="/email-icon.png" alt="Email Icon" width={24} height={24} className="hover:text-gray-700" />
          </a>
        </div>

          {/* Vertical List */}
          <nav className="text-white p-4" >
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
        <div className="right-column flex flex-col items-start space-y-4 flex-grow max-w-screen-md overflow-y-auto">
          {/*About me */}
          <section id="about-me">
          <h5 style={{ paddingBottom: '10px' }}>
            Back in 2018, I decided to try taking on a computer science course in high school. This experience enabled me to deep dive into the capabilities of programming and I created my first game. Although it wasn&apos;t super complex, I enjoyed spending way too much time adding different features. It allowed me to gain a passion for something new that I never stopped pursuing.
          </h5>
          <h5 style={{ paddingBottom: '10px' }}> Fast forward to today, I graduated with a BS degree in Computer Science and a minor in Business and Entrepreneurship and am working currently at my second MECOP internship at Flex Force Enterprises. Here, I am working with AI image detection and tracking software and integrating them into embedded systems.
          </h5>
          <h5 style={{ paddingBottom: '10px' }}>
            On my down time, I like competitive shooters like Valorant and Apex. But away from the screens, another big part of my life is church and worship. I play guitar, volleyball, and hike the Oregon trails.
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
                <p style={{ color: 'orange', fontSize: '20px'}}>
                  Oregon State University | 2023
                </p>
                <p style={{ color: '#f6f4eb' }}>
                  BS Computer Science with a Minor in Business and Entrepreneurship
                </p>
              </div>
            </div>
            {/* Add your education content here */}
          </section>

          {/* Projects */}
          <section id="Projects" className="text-left max-w-screen-md">
            <h1 style={{ color: '#88d1f1' }}>Projects</h1>
            {/* Loop through your projects */}
            {projects.map((project) => (
              <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-container" style={{ marginBottom: '20px' }}>
                  <div className="project-details">
                    <h2 style={{ color: '#f6f4eb' }}>{project.title}</h2>
                    <p style={{ color: '#749bc2' }}>{project.year}</p>
                  </div>
                  <div className="project-image" style={{ paddingTop: '2px' }}>
                    <Image
                      src='/Project2-image2.png'
                      alt="Project Image"
                      layout="responsive"
                      width={800}
                      height={600}
                      style={{ maxWidth: '100%', borderRadius: '10px' }}
                    />
                  </div>
                  <div className="project-details">
                    {project.descriptions.map((description, index) => (
                      <p style={{ color: '#f6f4eb' }} key={index}>{description}</p>
                    ))}
                    {/* Rest of your project content */}
                  </div>
                </div>
              </Link>
            ))}
          </section>

          {/* Relevant Work History */}
      
          <section id="Work" className="text-left max-w-screen-md">
            <h1>
              Work History
            </h1>
            <Link href="https://flexforce.us/" target="_blank" rel="noopener noreferrer" className="project-link">
              <div id="W2" className="project-container">
                <h2>
                  Flex Force Enterprises
                </h2>
                <h3>
                  MECOP Computer Science Intern
                </h3>
                <h4 style={{ color: '#749bc2' }}>
                  2023 June - Current
                </h4>
                  <p style={{ marginBottom: '20px' }}>
                    Worked on the ASP device, specifically on the On-Screen-Display functionality. Utilized the Nvidia Jetpack toolset on a device called the Jetson. The focus was on the tracking software tools provided by Nvidia Jetpack, and I am in charge of developing methods of detection and tracking for target objects.
                  </p>
              </div>
            </Link>
            <Link href="https://www.tek.com/en" target="_blank" rel="noopener noreferrer" className="project-link">
              <div id="W2" className="project-container">
                <h2 style={{ color: '#f6f4eb' }}>
                  Tektronix
                </h2>
                <h3>
                  MECOP Computer Science Intern
                </h3>
                <h4 style={{ color: '#749bc2' }}>
                  2022 April - September
                </h4>
                <div style={{ color: '#f6f4eb' }}>
                  <p style={{ marginBottom: '20px' }}> 
                    Worked on Innovations and Development Team for the Ops department. Worked on multiple projects that included the training of AI image-detection software as well as an application to utilize it with the on-prem system. Development in C# code.
                  </p>
                </div>
              </div>
            </Link>
          </section>

          {/* Resume */}
          <section id="Resume" className="text-left padding max-w-screen-md ">
            <h1>
              Resume
            </h1>
            {/* Add your resume content here */}
            <a href="/RESUME.pdf" target="_blank" rel="noopener noreferrer" className="">
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
            Loosely designed in Figma and coded in Visual Studio Code by Kien Le (Me). Built with Next.js and Tailwind CSS. Deployed with &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </main>
      
  );
}

const projects = [
  {
    id: 'P1',
    year: 'Fall 2022 - Spring 2023',
    title: 'DASHER BLITZ',
    descriptions: [
      '1st place winner of the 2023 Oregon State University Game Competition.',
      'Developed by my team and I (Dataflow Games), Dasher Blitz is a delivery style vehicle driving game that has different maps, in-game objects, multiple vehicles, and a continually improving experience for users. Dasher Blits was developed with Unreal Engine 5 and utilized the C++ and Blueprint capabilities. We also used Blender as a model and animation tool.',
      // Add more descriptions here
    ],
    link: 'https://github.com/DataDevv/CarGoesVroom',
    imageSrc: '/Project-image.png' // Path to the image for this project
    // Rest of the project data
  },
  {
    id: 'P2',
    year: 'Summer 2023',
    title: 'PERSONAL WEBSITE',
    descriptions: [
      'You are looking at it! Developed by yours truly, I created this project in order to showcase myself and my experience. This site was made with Next.js and its libraries. Styled with React components, .js and .css.',
      // Add more descriptions here
    ],
    link: 'https://github.com/kleDevv/wskien/tree/master',
    imageSrc: '/Project2-image2.png' // Path to the image for this project
    // Rest of the project data
  },
  // Add more projects here
];