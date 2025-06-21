import React from "react";
import Header from "../components/organisems/Header";
import Footer from "../components/organisems/Footer";

export default function HomeLayouts({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
