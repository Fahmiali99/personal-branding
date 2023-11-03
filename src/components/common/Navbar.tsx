import { useState, useEffect, Fragment } from "react";
import { data } from "../utils/navbar";
import { BsMoonStars } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
interface NavbarProps {
  toggleMenu: () => void;
  buttonBright: () => void;
  bright: boolean;
  navbar: boolean;
  dropdownRef: any;
}
function NavigationBar({
  toggleMenu,
  buttonBright,
  bright,
  navbar,
  dropdownRef,
}: NavbarProps) {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  const isActive = false;
  return (
    <Fragment>
      <div
        className={` fixed w-full z-20 top-0 left-0  ${
          scrollPos > 50
            ? ` {${
                bright
                  ? ` border-b border-gray-700 dark:border-gray-600 dark-mode-navbar bg-transition-smooth duration-500  `
                  : ` border-b border-gray-300 dark:border-gray-600 light-mode-navbar  bg-transition-smooth duration-500 `
              }}`
            : `bg-transparant {${
                bright
                  ? ` border-b border-gray-700 dark:border-gray-600 dark-mode-navbar bg-transition-smooth duration-500`
                  : ` border-b border-gray-200 dark:border-gray-600 light-mode-navbar sm:bg-transparant  bg-transition-smooth duration-500 `
              }}`
        }`}
      >
        <div
          ref={dropdownRef}
          className="container mx-auto   px-2 sm:px-0 py-2.5 dark:bg-gray-900"
        >
          <div className=" lg:mx-64  flex flex-wrap items-center justify-between ">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="h-10 mr-3 sm:h-10 "
                alt="Fahmi Logo"
                width="40px"
                height="40px"
              />
              <h1 className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                Li.
              </h1>
            </Link>
            <div className="flex md:order-2 ">
              <div className="hidden sm:block">
                <button
                  onClick={buttonBright}
                  type="button"
                  aria-label="Toggle Brightness"
                  className={
                    bright
                      ? `ring-transparent font-medium  text-sm px-2.5 py-2.5 text-center mr-3 md:mr-0 hover:bg-slate-700  rounded-full `
                      : `ring-transparent hover:text-blue-500 font-medium  text-sm px-2.5 py-2.5 text-center mr-3 md:mr-0 hover:bg-white duration-300 rounded-full `
                  }
                >
                  {bright ? (
                      <FiSun className="text-xl" />
                    ) : (
                      <BsMoonStars className=" text-xl " />
                  )}
                </button>
              </div>

              <button
                onClick={toggleMenu}
                aria-label="navbar button"
                type="button"
                className={
                  bright
                    ? `inline-flex md:hidden  text-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 text-center  md:mr-0  bg-slate-700 `
                    : `inline-flex md:hidden text-gray-500 font-medium rounded-full text-sm px-2.5 py-2.5 text-center  md:mr-0  bg-slate-100 shadow-md`
                }
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={` mt-2 sm:mt-5 md:mt-0 items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
                navbar ? "block" : "hidden"
              }`}
              id="navbar-sticky"
            >
              {data.map((item, idx) => {
                return (
                  <Fragment key={idx}>
                      <div className="p-0 sm:p-3  ">
                        <ul className="flex-1 justify-self-center  md:block md:pb-0 md:mt-0 ">
                          <li>
                            <NavLink
                              to={item.href}
                              className={
                                isActive
                                  ? "active block py-2 pl-3 pr-4  md:p-0 dark:text-white  "
                                  : " block py-2 pl-3 pr-4  md:p-0 dark:text-white"
                              }
                              aria-current="page"
                            >
                              <div className="flex items-center">
                                <item.Icons className="mr-2 text-xl block sm:hidden" />
                                <label
                                  className={
                                    bright
                                      ? "font-medium py-1 link link-underline bg-gradient-to-r from-sky-500 to-indigo-500"
                                      : " font-medium py-1 link link-underline bg-gradient-to-r from-blue-500 to-blue-500"
                                  }
                                >
                                  {item.title}
                                </label>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                  </Fragment>
                );
              })}
              <div className="block sm:hidden px-3 my-2 ">
                <hr
                  className={
                    bright
                      ? " h-px my-2  border-0 bg-slate-700"
                      : " h-px my-2 bg-fuchsia-100 border-0 "
                  }
                />

                <button
                  onClick={buttonBright}
                  type="button"
                  className={
                    bright
                      ? ` ring-transparent my-2 w-full bg-slate-700 font-medium  text-sm px-2.5 py-3 text-center mr-3 md:mr-0 hover:bg-slate-700  rounded-full flex justify-center`
                      : `ring-transparent my-2 w-full bg-slate-100 font-medium  text-sm px-2.5 py-3 text-center mr-3 md:mr-0 hover:bg-slate-100  rounded-full flex justify-center `
                  }
                >
                  {bright ? (
                    <div className="flex items-center">
                      <FiSun className="text-dark text-xl" />
                      <h1 className="mx-2 font-medium">Light theme</h1>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <BsMoonStars className=" text-xl " />
                      <h1 className="mx-2 font-medium">Dark theme</h1>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NavigationBar;
