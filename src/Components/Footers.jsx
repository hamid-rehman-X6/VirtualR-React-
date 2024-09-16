import React from "react";
import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from "../DATA/projectData";

const Footers = () => {
  return (
    <footer className="border-t border-neutral-700 mt-20 py-10 mx-4 lg:mx-24">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-4 text-md">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-md">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-md">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-neutral-600">
          Copyright © 2024, Hamid Rehman. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footers;
