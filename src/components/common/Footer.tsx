import React from "react";

import { data } from "../utils/footer";

function Footer() {
  return (
    <div className="" style={{ height: "48px" }}>
      <div className="  px-2 sm:px-0 py-2.5 ">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-full ">
            <span className="hidden xl:block ">
              © 2022
              <a href="/" className="hover:underline">
                Fahmi Ali Husni
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="w-full flex justify-center xl:justify-end">
            {data.map((item, idx) => {
              return (
                <div key={idx} className="mx-2">
                  <button
                    onClick={() => window.open(item.href)}
                    className="flex items-center"
                  >
                    <item.Icons className="mx-2" />
                    <p>{item.title}</p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
