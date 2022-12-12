import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Students } from "../components/Student/Students";

const students = () => {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Students />
      </main>

      <Footer />
    </div>
  );
};

export default students;
