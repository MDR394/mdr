import React from "react";

const Footer = () => {
  return (
    <div>
      <center>
        <div
          className="bg-teal-900 flex lg:flex-row justify-center flex-col gap-3 lg:gap-20 py-6"
          style={{ backgroundColor: "#003737" }}
        >
          <h2 className="text-gray-50 font-burtons text-sm md:text-xl">
            WhatsApp/Phone:{" "}
            <spam className="text-teal-500 dark:text-teal-500 underline text-lg">
              <a href="https://wa.me/+923001212394">0300 1212394</a>
            </spam>
          </h2>
          <h2 className="text-gray-50 text-l md:text-xl font-burtons text-sm">
            Email Address:{" "}
            <spam className="text-teal-500 dark:text-teal-500 underline font-sans">
              <a href="mailto:mdawoodrafique394@gmail.com">
                mdawoodrafique394@gmail.com
              </a>
            </spam>
          </h2>
        </div>
      </center>
    </div>
  );
};

export default Footer;
