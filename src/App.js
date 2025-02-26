import React from "react";
import { motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars";
import { Mail, MapPin, FileText, Linkedin, Code } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono p-4 sm:p-8 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Davenee James | Power BI Portfolio
        </h1>

        <motion.img
          src="https://i.imgur.com/1veEFe5.jpeg"
          alt="Davenee James"
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-yellow-600 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out absolute left-16 top-4"
        />

        <section className="mb-8 flex flex-col sm:flex-row items-center justify-center sm:pl-64">
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl mb-4">About Me</h2>
            <p className="text-sm sm:text-base max-w-3xl">
              Hi, I’m Davenee James, a Data Analyst specializing in Power BI
              dashboard creation at Southwestern Adventist University. I have a
              strong background in Institutional Research, data analysis, and
              visualization. My passion lies in transforming complex datasets
              into interactive, insightful visualizations that drive strategic
              decisions.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-yellow-600 rounded-lg shadow-lg p-4">
            <h3 className="text-lg sm:text-xl mb-2 flex items-center">
              <Mail className="mr-2" /> Contact
            </h3>
            <p className="mb-2 flex items-center">
              <FileText className="mr-2" />
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:09f005a7-6766-4e73-94be-bd14cc986ad3"
                className="hover:text-teal-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </p>
            <p className="mb-2 flex items-center">
              <Linkedin className="mr-2" />
              <a
                href="https://www.linkedin.com/in/davenee-james-848171228/"
                className="hover:text-teal-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="mb-2 flex items-center">
              <Mail className="mr-2" /> daveneejames@gmail.com
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2" /> Dallas-Fort Worth Metroplex
            </p>
          </div>

          <div className="bg-yellow-600 rounded-lg shadow-lg p-4">
            <h3 className="text-lg sm:text-xl mb-2 flex items-center">
              <Code className="mr-2" /> Skills
            </h3>
            <ul className="list-disc list-inside">
              <li className="hover:text-teal-400 transition-colors duration-200">
                Power BI Dashboard Development & Data Modeling
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                Advanced Excel Techniques and Automation
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                SQL Querying & Database Management
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                DAX for Complex Calculations
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                Smartsheet Automation and Integration
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                Adobe Acrobat Proficiency
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                Drupal Website Design
              </li>
            </ul>
          </div>

          <div className="bg-yellow-600 rounded-lg shadow-lg p-4">
            <h3 className="text-lg sm:text-xl mb-2 flex items-center">
              <FileText className="mr-2" /> Certifications
            </h3>
            <ul className="list-disc list-inside">
              <li className="hover:text-teal-400 transition-colors duration-200">
                Microsoft Certified: Power BI Data Analyst Associate (In
                Progress)
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                Microsoft Excel Associate Certification (In Progress)
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                SQL & DAX Certifications (In Progress)
              </li>
              <li className="hover:text-teal-400 transition-colors duration-200">
                Watermark Solutions Certifications
              </li>
            </ul>
          </div>
        </div>

        <section className="mt-8 text-center">
          <h2 className="text-lg sm:text-xl mb-4">Dashboards</h2>
          <Scrollbars style={{ height: "50vh" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboards.map((dashboard, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className={`bg-yellow-600 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ease-in-out h-96`}
                >
                  <div className="h-full flex flex-col justify-between p-4">
                    <img
                      src={dashboard.image}
                      alt={dashboard.title}
                      className="w-full h-40 object-cover object-center mb-4 rounded-lg"
                    />
                    <h3 className="text-lg sm:text-xl mb-2 truncate">
                      {dashboard.title}
                    </h3>
                    <p className="text-sm sm:text-base mb-4 line-clamp-3">
                      {dashboard.description}
                    </p>
                    <a
                      href={dashboard.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-teal-400 transition-colors duration-200 w-full text-center"
                    >
                      View Dashboard
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Scrollbars>
        </section>
      </motion.div>
    </div>
  );
};

const dashboards = [
  {
    title: "Fact Book",
    description:
      "Comprehensive visualization of institutional data using Power BI features like drill-through and custom tooltips.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiN2JiOGE3MTMtMWM0My00ZDJhLWE3ZTUtNzk0NTExYmM3MWE3IiwidCI6IjRlOTE3NDQ4LWQ3ZmEtNDQ3ZC1hYjE5LTAzNzBiNGIyZGE5ZiIsImMiOjN9&pageName=ac77ce2fc7f987bc31d9",
    image: "https://i.imgur.com/xBRgFZk.jpeg",
  },
  {
    title: "Student Achievement",
    description:
      "Showcases student success metrics with interactive slicers and data visualization techniques.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZDgzOTUtMjRlMC00ZjhmLTg3ODctYTQ1NzlhNTM3ODA4IiwidCI6IjRlOTE3NDQ4LWQ3ZmEtNDQ3ZC1hYjE5LTAzNzBiNGIyZGE5ZiIsImMiOjN9&pageName=d88a7f5710eaced7adc2",
    image: "https://i.imgur.com/82LOSIJ.jpeg",
  },
  {
    title: "Graduating Senior Survey",
    description:
      "Senior exit survey data visualized with responsive design and trend analysis using DAX.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZGQ1ZmFhNTgtZThhZC00MDE4LWExNjYtMWVmZjgzODdlMzIzIiwidCI6IjRlOTE3NDQ4LWQ3ZmEtNDQ3ZC1hYjE5LTAzNzBiNGIyZGE5ZiIsImMiOjN9&pageName=12802e64dc661fdc3a6b",
    image: "https://i.imgur.com/SZGgUWR.png",
  },
  {
    title: "Staff Demographics",
    description: 
    "Created a report within Argos to build out this report and then visualize it to show staff demographics metrics"
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDBlZTBmMWUtYWVmMy00NDljLWFjNDktNzA4NmU3Zjc1YjQ0IiwidCI6IjRlOTE3NDQ4LWQ3ZmEtNDQ3ZC1hYjE5LTAzNzBiNGIyZGE5ZiIsImMiOjN9&pageName=c85708cbced2bde33169",
    image: "https://i.imgur.com/5kNzIF0.png",
  },
  {
    title: "STEM Excellence Check-In",
    description:
      "Automated data flow from Smartsheet to Power BI, tracking STEM program engagement.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzIyZjk2YWEtZmI1NC00ZTY1LWE3ZjEtOWY3MWFlYWM1ZWEyIiwidCI6IjRlOTE3NDQ4LWQ3ZmEtNDQ3ZC1hYjE5LTAzNzBiNGIyZGE5ZiIsImMiOjN9&pageName=dfe306a204599a7c125b",
    image: "https://i.imgur.com/J76xeiK.png",
  },
  {
    title: "Student Success Check-In",
    description:
      "Real-time Smartsheet data automation in Power BI for tracking student service engagement.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWU1NzMwOTItOWUzYi00YjlkLTkxZDgtNGQ3MmIzZDk3YTE2IiwidCI6IjRlOTE3NDQ4LWQ3ZmEtNDQ3ZC1hYjE5LTAzNzBiNGIyZGE5ZiIsImMiOjN9&pageName=50d4eb355220169c5dd5",
    image: "https://i.imgur.com/Vn3FfzZ.jpeg",
  },
];

export default App;
