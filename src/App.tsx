import React, { useState, useEffect, useRef, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const Navbar = React.lazy(() => import('./components/common/Navbar'));
const Portfolio = React.lazy(() => import('./components/pages/portfolio'));
const About = React.lazy(() => import('./components/pages/about'));
const Home = React.lazy(() => import('./components/pages/home'));
const NotFound = React.lazy(() => import('./components/common/NotFound'));
const Footer = React.lazy(() => import('./components/common/Footer'));

function App() {
  const [navbar, setNavbar] = useState(false);
  const [bright, setBright] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    setNavbar(!navbar);
  }

  function buttonBright() {
    const newBright: boolean = !bright;
    setBright(newBright);
    localStorage.setItem("bright", JSON.stringify(newBright));
  }

  useEffect(() => {
    const savedMode = localStorage.getItem("bright");
    if (savedMode === "true") {
      setBright(true);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setNavbar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Suspense >
      <div className={`${bright ? "dark-mode " : "light-mode"}`}>
        <div className="h-auto sm:h-auto container mx-auto">
          <div className="lg:mx-64">
            <Navbar
              toggleMenu={toggleMenu}
              buttonBright={buttonBright}
              bright={bright}
              navbar={navbar}
              dropdownRef={dropdownRef}
            />
            <Routes>
              <Route path="*" element={<NotFound bright={bright} />} />
              <Route path="/" element={<Home bright={bright} />} />
              <Route path="/about" element={<About bright={bright} />} />
              <Route
                path="/portfolio"
                element={<Portfolio bright={bright} />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
