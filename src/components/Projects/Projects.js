// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/WeatherApp.jpg";
// import emotion from "../../Assets/Projects/blogApp.jpg";
// import editor from "../../Assets/Projects/todolist.jpg";
// import chatify from "../../Assets/Projects/payrollSystem.jpg";
// import suicide from "../../Assets/Projects/chatApp.jpg";
// import bitsOfCode from "../../Assets/Projects/VendorManagementSystem.webp";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Payroll System Management"
//               description="A Payroll System project is designed to automate the process of managing employee salaries, deductions, and benefits. The system calculates gross and net wages based on hours worked, overtime, taxes, and other deductions."
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Vendor Management System"
//               description=" Developed and maintained front-end features for Vendor Management Systems using HTML, CSS, and JavaScript.Improved user experience and system efficiency by reducing page load times by 15%.
//  Collaborated with backend developers to integrate APIs, enhancing functionality and ensuring seamless data flow."
//               // ghLink=""
//               // demoLink=""
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="To-do App"
//               description="The Todo App is a web-based application that helps individuals and teams manage their tasks and stay organized. It 
// features a simple yet effective interface for creating, updating, and tracking tasks, making it easy to keep on top of 
// daily responsibilities and projects. Built using HTML, CSS, and JavaScript."
//               ghLink="https://github.com/rishabh8510/TodoProject"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Weather App"
//               description="Created a weather application that retrieves and displays real-time weather data for any location using a weather 
// API.
//  •
//  Technologies used: HTML, CSS, JavaScript, Reactjs, API integration"
//               ghLink="https://github.com/rishabh8510/WeatherApp"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Chat App"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/rishabh8510/ChatApp"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Blog App"
//               description="blog page build with Reaxt.js and Tailwind Css which takes the content from makdown files and renders it using React.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/rishabh8510/BlogApp"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import p1 from "../../Assets/Projects/vasudev.jpeg";
import p2 from "../../Assets/Projects/logo.png";
import p3 from "../../Assets/Projects/dfwcz.png";
import p4 from "../../Assets/Projects/truck.png";
import p5 from "../../Assets/Projects/chatApp.jpg";
import p6 from "../../Assets/Projects/shipwine_logo.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some real projects I’ve worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* 1 - Latest Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="Vasudev Kutumbkam Foundation (Current Project)"
              description="Currently working on this project. Frontend is built using Next.js and backend is being developed using Express and PostgreSQL. It includes features for managing foundation activities and data."
              demoLink="https://ngo-swart-zeta.vercel.app/"
            />
          </Col>

          {/* 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Saket Infrastructure"
              description="This is a frontend project built in Next.js for a telecom-based infrastructure company. Worked on UI sections, layouts and responsiveness to make the website clean and user friendly."
              demoLink="https://www.saketinfra.in/"
            />
          </Col>

          {/* 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="Construction Management System (US Based)"
              description="A full stack project for managing construction work. Built using React (Vite), Express and PostgreSQL. Includes modules for handling project data, tasks and overall workflow."
              demoLink="#"
            />
          </Col>

          {/* 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="Trucking Tech Website"
              description="Frontend project developed in Next.js for a trucking company. Focused on building responsive pages, smooth UI and proper structure for business website needs."
              demoLink="https://www.truckingtechs.com/"
            />
          </Col>

          {/* 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title="Lead Management System"
              description="A full stack lead management system built using React (Vite), Express and PostgreSQL. Used to manage leads, track status and organize customer data efficiently."
              demoLink="#"
            />
          </Col>

          {/* 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p6}
              isBlog={false}
              title="Wine Management System (US Based)"
              description="Worked on a system for managing wine-related data and operations. The project includes handling records and organizing data in a structured way for business use."
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;