import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import QuizSection from "./QuizSection/QuizSection";
import './Home.css'

const Home = () => {
  return (
    <>
      <section className="home_content">
        {/* Hero Seciton */}
        <div className="heroSection_content">
          <div className="container">
            <HeroSection />
          </div>
        </div>

        {/* Hero Seciton end */}


        {/* Quiz section */}
        <section id="quiz__section" className="quiz__section">
            <div className="container">
            <QuizSection />
            </div>
        </section>
        {/* Quiz section end */}

      </section>
    </>
  );
};

export default Home;
