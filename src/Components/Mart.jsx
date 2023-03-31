import React, { Suspense, useCallback, useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import Search from "./Pages/Search";
import Loader from "./Loader";

const Home = React.lazy(() => import("./Pages/Home"));
const Shop = React.lazy(() => import("./Pages/Shop"));
const About = React.lazy(() => import("./Pages/About"));
const Contact = React.lazy(() => import("./Pages/Contact"));

const Cart = React.lazy(() => import("./Pages/Cart"));
const Payment = React.lazy(() => import("./Pages/Payment-page"));

function Mart() {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    if (!search) return;

    setSearch("");
    navigate(`/search?term=${search}`);
  };

  const onInputChange = useCallback(
    e => {
      setSearch(e.target.value);
    },
    [search]
  );

  const headerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;
    if (mainRef.current) mainRef.current.style.setProperty("--top-margin", ` ${headerHeight}px`);
  });

  return (
    <>
      <Header
        search={search}
        elem={headerRef}
        onInputChange={onInputChange}
        handleSearch={handleSearch}
      />

      <main ref={mainRef}>
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/search" element={<Search />} />

              <Route path="/shop" element={<Shop />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default Mart;
