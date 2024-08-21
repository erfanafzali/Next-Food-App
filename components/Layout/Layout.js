import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Header />
      <div> {children} </div>
      <Footer />
    </div>
  );
}

export default Layout;
