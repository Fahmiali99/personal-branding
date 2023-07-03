import React from "react";
import { data } from "../utils/footer";

function Footer() {
  return (
    <div
      className="w-full grid grid-cols-1 xl:grid-cols-2 px-2 sm:px-0 py-2.5"
      style={{ height: "48px" }}
    >
      <div className="hidden xl:block ">
        © 2022
        <a href="/" className="hover:underline">
          Fahmi Ali Husni
        </a>
        . All Rights Reserved.
      </div>
      <div className="flex justify-center xl:justify-end">
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
  );
}

export default Footer;
