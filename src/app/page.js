import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

export default function Home() {

  return (
    <main style={{ backgroundColor: 'rgba(52, 144, 220, 0.5)' }} className="flex flex-col items-center justify-center">

      {/* Flexbox container for two columns */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">

      <Head>
        {/* Link to the "Inter" font CSS */}
        <link rel="stylesheet" href="/fonts/Inter-3.19/inter.css" />
      </Head>

       {/* Left Column */}
       <div className="left-column flex-shrink-0 flex flex-col items-start space-y-4 p-20 md:overflow-y-auto md:max-h-screen md:fixed left-0 top-0">
          {/* Personal Information */}
          <div className="name-title">
          <div className="text-4xl text-black">Kien Le</div>
          <div className="text-xl font-bold">
            <span style={{ color: 'orange' }}>OSU</span><span style={{ color: 'black' }}> | 2023</span>
          </div>
          <div className="text-xl text-black font-bold">Computer Science</div>
        </div>

          {/* Vertical List */}
          <nav className="text-white p-4">
            <div className="max-w-5xl mx-auto flex flex-col space-y-2">
                <a href="#Education" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Education
                </a>
                <a href="#Projects" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Projects
                </a>
                <a href="#Work" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Work History
                </a>
                <a href="#Resume" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Resume
                </a>
            </div>
          </nav>
        </div>

        {/* Right Column */}
        <div className="right-column flex flex-col items-start space-y-4 flex-grow max-w-screen-md overflow-y-auto">

          {/* Education */}
          <section id="Education" className="text-left max-w-screen-md">
            <h1>
              Education
            </h1>
            <div id="osu" className="flex items-center"> {/* Add "flex items-center" to horizontally center the logo and text */}
              <div className="mr-4">
                <Image
                  src="/osu-logo.png"
                  alt="OSU Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h2>
                  Oregon State University
                </h2>
                <p>
                  BS Computer Science with a Minor in Business and Entrepreneurship
                </p>
              </div>
            </div>
            {/* Add your education content here */}
          </section>

          {/* Projects */}
          <section id="Projects" className="text-left max-w-screen-md">
            <h1>
              Projects
            </h1>
              {/* Add your projects content here */}
              <Link href="https://github.com/DataDevv/CarGoesVroom" target="_blank" rel="noopener noreferrer" className="project-link">
                <div id="P1" className="project-container">
                  <h2>
                    Dasher Blitz
                  </h2>
                  <p>1st place winner of the 2023 Oregon State University Game Competition.</p>
                  <p>Made by me and my team (Dataflow Games), Dasher Blitz is a delivery style vehicle driving game that has different maps, in-game objects, multiple vehicles, and a continually improving experience for users.</p>
                  <div className="project-image" style={{ paddingTop: '10px' }}>
                    <Image
                      src="/Project-image.png"
                      alt="Project Image"
                      layout="responsive"
                      width={800}
                      height={600}
                      style={{ maxWidth: '100%', borderRadius: '10px' }}
                    />
                  </div>
                </div>
              </Link>

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
                <h4>
                  2023 June - Current
                </h4>
                  <p>
                    Worked on ASP software system and utilizing the Nvidia Jetpack toolset on a device called the Jetson. The focus was on the tracking software tools provided by Nvidia Jetpack, and developing methods of detection and tracking for target objects.
                  </p>
              </div>
            </Link>
            <Link href="https://www.tek.com/en" target="_blank" rel="noopener noreferrer" className="project-link">
              <div id="W2" className="project-container">
                <h2>
                  Tektronix
                </h2>
                <h3>
                  MECOP Computer Science Intern
                </h3>
                <h4>
                  2022 April - September
                </h4>
                  <p> 
                    Worked on Innovations and Development Team for the Ops departement. Worked on multiple projects that included the training of AI image-detection software as well as an application to utilize it with the on-prem system. Development in C# code.
                  </p>
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
                <p>
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
