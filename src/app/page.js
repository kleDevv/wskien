import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ backgroundColor: 'rgba(52, 144, 220, 0.5)' }} className="flex flex-col items-center justify-center">

      {/* Flexbox container for two columns */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">

       {/* Left Column */}
       <div className="left-column flex-shrink-0 flex flex-col items-start space-y-4 p-20 md:overflow-y-auto md:max-h-screen md:fixed left-0 top-0">
          {/* Personal Information */}
          <div className="name-title">
            <div className="text-4xl text-white">Kien Le</div>
            <div className="text-xl text-white font-bold">Computer Science</div>
          </div>

          {/* Vertical List */}
          <nav className="text-white p-4">
            <div className="max-w-5xl mx-auto flex flex-col space-y-2">
                <a href="#Projects" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Projects
                </a>
                <a href="#Work" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Work History
                </a>
                <a href="#Education" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Education
                </a>
                <a href="#Resume" className="text-xl font-bold hover:text-gray-500 hover:text-lg">
                  &mdash; Resume
                </a>
            </div>
          </nav>
        </div>

        {/* Right Column */}
        <div className="right-column flex flex-col items-start space-y-4 flex-grow max-w-screen-md overflow-y-auto">
          {/* Projects */}
          <section id="Projects" className="text-left max-w-screen-md">
            <h1>
              Projects
            </h1>
            {/* Add your projects content here */}
            <h2>
              Project 1
            </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
              </p>
              <h2>
              Project 2
            </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
              </p>
              <h2>
              Project 3
            </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
              </p>
          </section>

          {/* Relevant Work History */}
          <section id="Work" className="text-left max-w-screen-md">
            <h1>
              Work History
            </h1>
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
            {/* Add your work history content here */}
          </section>

          {/* Education */}
          <section id="Education" className="text-left max-w-screen-md">
            <h1>
              Education
            </h1>
            <h2>
              Oregon State University
            </h2>
            <p>
              BS Computer Science with a Minor in Business and Entreperneurship
            </p>
            {/* Add your education content here */}
          </section>

          {/* Resume */}
          <section id="Resume" className="text-left padding max-w-screen-md">
            <h1>
              Resume
            </h1>
            {/* Add your resume content here */}
            <p>
              You can download my resume{" "}
              <a href="/RESUME.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
                here
              </a>
              .
            </p>
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
