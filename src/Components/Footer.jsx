import React from "react";

const Footer = () => {
  return (
    <div className="w-screen bg-black mt-5 flex items-center justify-center">
      <div className="w-2/3 mb-10 text-white mt-10 flex flex-wrap items-center  justify-between">
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <h2>CATEGORIES</h2>
            </li>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic Automation</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <h2>CONTACT</h2>
            </li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
            <li>About</li>
          </ul>
        </div>
        <div className="text-white">
          <select className="bg-black" value="United States">
            <option value="USA">United States</option>
            <option value="India">India</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
