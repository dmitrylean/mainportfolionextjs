"use client";
import Link from "next/link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Hi, I’m <span className="highlight">Dmitry</span>
          <br />
          <span className="big">React Developer</span>
          <br />
          <span className="muted">JS / PHP / Python</span>
        </h1>
      </div>
      <Link href="/contact" className="btn-primary">
        Hire Me
      </Link>
    </section>
  );
};

export default Hero;
