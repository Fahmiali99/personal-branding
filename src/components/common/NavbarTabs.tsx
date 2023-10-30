import React, { Fragment } from "react";
import { useState } from "react";

interface TabData {
  id: number;
  name: string;
  link: React.ReactNode;
}

interface NavbarTabsProps {
  data: TabData[];
  bright: boolean;
}

function NavbarTabs({ data }: NavbarTabsProps) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <Fragment>
      <div className="flex flex-wrap">
        <div className="w-full justify-center ">
          <div>
            <div className="flex space-x-7">
              {data?.map((menu, idx) => (
                <Fragment key={idx}>
                  <div className="-mb-px last:mr-0 flex-auto text-center">
                    <a
                      className={
                        " text-sm font-base font-medium py-1 sm:py-3 block leading-normal " +
                        (openTab === menu.id
                          ? "border-b-4 text-primary-500 border-blue-500"
                          : "text-black ")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(menu.id);
                      }}
                      data-toggle="tab"
                      href="#link1"
                    >
                      <div
                        className={`text-sm hover:text-primary-500  ${
                          openTab === menu.id
                            ? "text-primary-500"
                            : "text-gray-400 "
                        }`}
                      >
                        {menu.name}
                      </div>
                    </a>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="pt-4 sm:pt-5 flex-auto">
            {data.map((content, idx) => (
              <div
                key={idx}
                className={openTab === content.id ? "block" : "hidden"}
              >
                {content.link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NavbarTabs;
