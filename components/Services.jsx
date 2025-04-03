import Image from "next/image";
import wordpress from "../public/wordpress.png";
import react from "../public/react.png";
import webDesign from "../public/web_design.png";
import cloud from "../public/5581142.webp"; // Add a relevant cloud image

const Services = () => {
  return (
    <section
      className="py-10 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="text-start">
        <h3 className="text-4xl font-bold text-teal-500 dark:text-teal-400">
          Services I Offer
        </h3>
        <p className="text-md mt-4 text-gray-800 dark:text-gray-300 ">
          Since the beginning of my journey as a freelance designer and
          developer, I have worked with agencies, startups, and talented
          individuals to build high-quality digital products for businesses and
          consumers.
        </p>
        <p className="text-md mt-2 text-gray-800 dark:text-gray-300">
          I specialize in **WordPress development, Web Design, Single Page
          Applications (SPAs), and Cloud & DevOps solutions**.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10 ">
        {/* WordPress Development */}
        <div className="text-center p-10 rounded-2xl border border-white/30 shadow-xl">
          <Image
            src={wordpress}
            width={100}
            height={100}
            alt="WordPress"
            className="mx-auto"
          />
          <h3 className="text-2xl font-medium pt-6 pb-2 dark:text-gray-200">
            WordPress Development
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Designing and developing modern, high-performance WordPress websites
            tailored to industry trends.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-400">
            Page Builders I Use:
          </h4>
          <p className="text-gray-800 dark:text-gray-400">
            Elementor | SeedProd | Divi
          </p>
        </div>

        {/* Website Designing */}
        <div className="text-center p-10 rounded-2xl border border-white/30 shadow-xl">
          <Image
            src={webDesign}
            width={100}
            height={100}
            alt="Web Design"
            className="mx-auto"
          />
          <h3 className="text-2xl font-medium pt-6 pb-2 dark:text-gray-200">
            Website Designing
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Crafting elegant and user-friendly website designs, following core
            web design principles.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-400">
            Design Tools I Use:
          </h4>
          <p className="text-gray-800 dark:text-gray-400">Figma | Photoshop</p>
        </div>

        {/* Web Applications (React, Node.js) */}
        <div className="text-center p-10 rounded-2xl border border-white/30 shadow-lg">
          <Image
            src={react}
            width={100}
            height={100}
            alt="Web Applications"
            className="mx-auto"
          />
          <h3 className="text-2xl font-medium pt-6 pb-2 dark:text-gray-200">
            Single Page Applications
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Developing high-performance "SPAs" using modern JavaScript
            frameworks like React.js and Next.js
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-400">
            Technologies I Use:
          </h4>
          <p className="text-gray-800 dark:text-gray-400">
            React.js | Node.js | MongoDB
          </p>
        </div>

        {/* DevOps & Cloud Deployment */}
        <div className="text-center p-10 rounded-2xl border border-white/30 shadow-xl ">
          <Image
            src={cloud}
            width={170}
            height={170}
            alt="Cloud & DevOps"
            className="mx-auto mt-[-30px]"
          />
          <h3 className="text-2xl mt-[-40px] font-medium pt-6 pb-2 dark:text-gray-200">
            DevOps & Cloud Solutions
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Optimizing deployments with **best coding practices, automation, and
            cloud infrastructure management**.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-400">
            Services I Provide:
          </h4>
          <p className="text-gray-800 dark:text-gray-400">
            CI/CD Pipelines | Docker & Kubernetes | Cloud Deployment (AWS,
            DigitalOcean) | Server Optimization
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
