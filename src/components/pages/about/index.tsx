import React from "react";
import { contact } from "../../utils/About/contact";
import { about } from "../../utils/About/about";
import Up from "../../common/Up";
import fahmi from "../../../assets/image/me.png";
import NavbarTabs from "../../common/NavbarTabs";
import ProgrammingTabs from "./detail/ProgrammingTabs";
import DesignTabs from "./detail/DesignTabs";
import AudioTabs from "./detail/AudioTabs";

interface AboutProps {
  bright: any;
}

function About({ bright }: AboutProps) {
  const tabMenu = [
    {
      id: 1,
      name: "Programming",
      link: <ProgrammingTabs bright={bright} />,
    },
    {
      id: 2,
      name: "Design",
      link: <DesignTabs bright={bright} />,
    },
    {
      id: 3,
      name: "Audio",
      link: <AudioTabs bright={bright} />,
    },
  ];

  return (
    <div>
      <div className=" pb-4 w-full h-full min-h-[calc(100vh-3rem)] px-2 md:px-0">
        <Up />

        <div className="block items-center">
          {about.map((item, idx) => {
            const subAbout = item.about;
            return (
              <div key={idx}>
                <div className=" flex justify-center">
                  <img src={fahmi} alt="" width={200} />
                </div>
                <div className=" flex justify-center py-5">
                  {/* <h1 className=" font-medium text-3xl sm:text-3xl">
                    {item.name}
                  </h1> */}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-medium">
                    {item.title}
                  </h1>
                  {subAbout.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-justify text-base md:text-lg"
                    >
                      <p className="py-1">{item.subAbout}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="skill pb-5">
            <h1 className="text-2xl sm:text-3xl font-medium py-1"> Skill </h1>
            <NavbarTabs bright={bright} data={tabMenu} />
            {/* Skill */}
          </div>
          <div className="text-justify">
            {contact.map((item, idx) => {
              const subContact = item.contact;
              return (
                <div key={idx}>
                  <h1 className="text-2xl sm:text-3xl font-medium">
                    {item.title}
                  </h1>
                  <p className="py-1 text-base md:text-lg">{item.about}</p>
                  <div>
                    {subContact.map((item, idx) => {
                      const setLength = item.href;
                      let substring = setLength.substring(0, 37);
                      const maxLength = 34;

                      if (substring.length > maxLength) {
                        substring = substring.substring(0, maxLength) + "...";
                      }

                      return (
                        <div key={idx} className="flex my-1">
                          <p>{item.title}</p>
                          <p className=" mx-2">-</p>
                          <span>
                            <button onClick={() => window.open(item.href)}>
                              <p className="underline text-base md:text-lg">
                                {substring}
                              </p>
                            </button>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
