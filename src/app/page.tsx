
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroScene = dynamic(() => import("./components/HeroScene"), {
  ssr: false,
  loading: () => <div className="h-56" />,
});

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING · NLP",
    name: "Email Spam Detection",
    description:
      "Email classification using NLP techniques, TF-IDF and a machine-learning workflow. Explore the implementation in the repository.",
    stack: ["Python", "NLP", "Scikit-learn", "FastAPI"],
    href: "https://github.com/noman114/email-spam-detection-system",
    accent: "project-peach",
    image: "/projects/spam-detection.jpg",
    imageAlt:
      "Professional workspace with a laptop displaying an email spam classification interface",
  },
  {
    number: "02",
    category: "PREDICTIVE ANALYTICS",
    name: "House Price Prediction",
    description:
      "A regression project exploring property-price prediction, data preparation, model training and evaluation.",
    stack: ["Python", "Pandas", "Regression", "ML"],
    href: "https://github.com/noman114/House-Price-Prediction-Model",
    accent: "project-green",
    image: "/projects/house-price.jpg",
    imageAlt:
      "Office desk with a laptop displaying a property price prediction and analytics dashboard",
  },
  {
    number: "03",
    category: "SOFTWARE · ARTIFICIAL INTELLIGENCE",
    name: "AI Assistant",
    description:
      "Explore an AI-oriented software project. Visit the source repository to review its actual implementation.",
    stack: ["Python", "TypeScript", "Next.js"],
    href: "https://github.com/noman114/AI-Assistant",
    accent: "project-blue",
    image: "/projects/ai-assistant.jpg",
    imageAlt:
      "Modern workstation with a laptop displaying an AI assistant interface",
  },
];

const expertise = [
  {
    n: "01",
    title: "Machine Learning",
    body: "Model development, classification, regression and evaluation.",
  },
  {
    n: "02",
    title: "Data & Python",
    body: "Data preparation, exploration and analysis with Python tools.",
  },
  {
    n: "03",
    title: "Software Development",
    body: "Web applications and interfaces built around useful workflows.",
  },
];

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".nav-inner", {
          y: -22,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-kicker",
          { y: 18, opacity: 0, duration: 0.5 },
          "-=0.3",
        )
        .from(
          ".hero-line",
          {
            yPercent: 110,
            opacity: 0,
            stagger: 0.13,
            duration: 0.9,
          },
          "-=0.15",
        )
        .from(
          ".hero-copy, .hero-actions",
          {
            y: 22,
            opacity: 0,
            stagger: 0.15,
            duration: 0.65,
          },
          "-=0.35",
        )
        .from(
          ".hero-visual",
          {
            x: 45,
            opacity: 0,
            scale: 0.96,
            duration: 1,
          },
          "-=0.65",
        );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 38,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.from(".project-card", {
        y: 45,
        opacity: 0,
        stagger: 0.16,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.to(".hero-orb", {
        y: -18,
        rotate: 8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-photo", {
        y: -9,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="portfolio">
      <header className="site-header">
        <div className="nav-inner wrap">
          <a href="#home" className="brand" aria-label="Noman Akram home">
            <span className="brand-mark">N.</span>
            <span>Muhammad Noman Akram</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Projects</a>
          </nav>

          <a className="nav-contact" href="#contact">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section id="home" className="hero wrap">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="kicker-line" />
            SOFTWARE · DATA · ARTIFICIAL INTELLIGENCE
          </p>

          <h1 className="hero-heading">
            <span className="line-mask">
              <span className="hero-line">Technology</span>
            </span>
            <span className="line-mask">
              <span className="hero-line serif">with purpose.</span>
            </span>
          </h1>

          <p className="hero-copy">
            Muhammad Noman Akram explores the intersection of software
            development, data and machine learning—building practical
            solutions through thoughtful engineering.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button-filled">
              Explore projects <ArrowDownRight size={18} />
            </a>

            <a
              href="https://github.com/noman114"
              target="_blank"
              rel="noreferrer"
              className="button-text"
            >
              GitHub profile <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <i className="status-dot" /> SOFTWARE & AI
            </span>
            <span>PYTHON · ML · WEB</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-top">
            <span>PROFILE / 001</span>
            <span>INDEPENDENT PORTFOLIO</span>
          </div>

          <div className="hero-orb">
            <HeroScene />
          </div>

          <div className="hero-photo">
            <Image
              src="/noman-akram.jpg"
              alt="Portrait of Muhammad Noman Akram"
              width={900}
              height={1100}
              priority
              sizes="(max-width: 760px) 85vw, 42vw"
              className="profile-image"
            />
          </div>

          <div className="photo-index">
            <span>MN.</span>
            <span>SOFTWARE · DATA · AI</span>
          </div>

          <span className="visual-coordinate">31° N / PK</span>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((n) => (
            <div className="marquee-set" key={n} aria-hidden={n > 0}>
              <span>Machine Learning</span>
              <i>✳</i>
              <span>Data Exploration</span>
              <i>✳</i>
              <span>Applied AI</span>
              <i>✳</i>
              <span>Software Engineering</span>
              <i>✳</i>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section wrap">
        <div className="section-heading reveal">
          <p className="eyebrow">01 — A little introduction</p>
          <h2>
            Good technology starts with
            <span className="serif"> good questions.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-aside reveal">
            <span className="aside-symbol">“</span>
            <p>
              Understand the problem. Explore the possibilities. Build with
              intention.
            </p>
          </div>

          <div className="about-copy reveal">
            <p className="about-lead">
              A technology professional interested in building useful
              software and exploring what data and AI can make possible.
            </p>

            <p>
              This portfolio brings together selected technical work,
              development interests and project explorations. Each project
              links to its source repository so visitors can explore the
              implementation directly.
            </p>

            <a
              className="inline-link"
              href="https://www.linkedin.com/in/muhammad-noman-akram-39b248167/"
              target="_blank"
              rel="noreferrer"
            >
              View professional profile <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="expertise" className="expertise-section">
        <div className="wrap section">
          <div className="section-heading reveal">
            <p className="eyebrow">02 — Areas of focus</p>
            <h2>
              Tools for <span className="serif">real problems.</span>
            </h2>
            <p className="section-description">
              A practical mix of data, intelligent systems and software
              development.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card reveal" key={item.n}>
                <span className="card-number">{item.n}</span>

                <div className="expertise-icon" aria-hidden="true">
                  {item.n === "01" ? "↗" : "⌘"}
                </div>

                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="card-rule" />
              </article>
            ))}
          </div>

          <div className="skills-list reveal">
            <span>TECHNOLOGIES</span>
            <p>
              Python / Pandas / NumPy / Scikit-learn / Machine Learning /
              TypeScript / React / Next.js / SQL / LLMs & RAG
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section wrap">
        <div className="projects-heading reveal">
          <div className="section-heading">
            <p className="eyebrow">03 — Selected repositories</p>
            <h2>
              Work worth <span className="serif">exploring.</span>
            </h2>
          </div>

          <a
            href="https://github.com/noman114?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            All repositories <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`project-card ${project.accent}`}
              key={project.number}
            >
              <div className="project-topline">
                <span>{project.number} / SELECTED PROJECT</span>
                <ArrowUpRight size={19} className="project-arrow" />
              </div>

              <div className="project-art">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 650px) 90vw, (max-width: 900px) 45vw, 30vw"
                  className="project-image"
                />

                <span className="project-image-overlay" />

                <span className="project-image-label">
                  PROJECT / {project.number}
                </span>
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-stack">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <span>Explore repository</span>
                <ArrowUpRight size={17} />
              </div>
            </a>
          ))}
        </div>

        <p className="project-note">
          Project details and repository links should reflect the actual
          implementation in each repository.
        </p>
      </section>

      <section className="closing-section">
        <div className="wrap closing-inner reveal">
          <p className="eyebrow">04 — Start a conversation</p>

          <h2>
            Have something
            <span className="serif"> worth building?</span>
          </h2>

          <p>
            Connect for conversations about software, data, machine learning
            and practical AI.
          </p>

          <div className="closing-actions" id="contact">
            <a
              className="button-filled"
              href="https://www.linkedin.com/in/muhammad-noman-akram-39b248167/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-glyph" aria-hidden="true">
                in
              </span>
              Connect on LinkedIn
              <ArrowUpRight size={17} />
            </a>

            <a
              className="button-outline"
              href="https://github.com/noman114"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-glyph" aria-hidden="true">
                GH
              </span>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">N.</span>
            <span>Muhammad Noman Akram</span>
          </a>

          <span>DESIGNED WITH INTENTION · 2026</span>

          <a
            href="mailto:REPLACE_WITH_VERIFIED_EMAIL"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --paper: #f5f1e9;
          --ink: #202b37;
          --muted: #6e756f;
          --line: #d9d7cd;
          --sage: #899a79;
          --peach: #d8a48d;
          --blue: #24374a;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        body {
          margin: 0;
          background: var(--paper);
          color: var(--ink);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        ::selection {
          background: var(--sage);
          color: white;
        }

        .portfolio {
          overflow: clip;
          background: var(--paper);
          font-family: Arial, Helvetica, sans-serif;
        }

        .wrap {
          width: min(1200px, calc(100% - 64px));
          margin-inline: auto;
        }

        .site-header {
          position: relative;
          z-index: 20;
          border-bottom: 1px solid rgba(32, 43, 55, 0.1);
        }

        .nav-inner {
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
          font-weight: 600;
        }

        .brand-mark {
          font-family: Georgia, serif;
          font-size: 28px;
          letter-spacing: -3px;
        }

        .desktop-nav {
          display: flex;
          gap: 34px;
          font-size: 13px;
          color: var(--muted);
        }

        .desktop-nav a,
        .nav-contact,
        .inline-link {
          transition: color 0.25s ease;
        }

        .desktop-nav a:hover,
        .inline-link:hover {
          color: #8b715f;
        }

        .nav-contact,
        .button-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid #c9c9bf;
          border-radius: 99px;
          padding: 12px 17px;
          font-size: 12px;
          transition:
            background 0.25s,
            transform 0.25s,
            border-color 0.25s;
        }

        .nav-contact:hover,
        .button-outline:hover {
          background: white;
          transform: translateY(-2px);
          border-color: var(--sage);
        }

        .hero {
          min-height: 690px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 36px;
          padding-block: 75px 92px;
        }

        .hero-kicker,
        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.17em;
          color: #69745f;
          text-transform: uppercase;
        }

        .kicker-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: var(--sage);
        }

        .hero-heading {
          margin: 31px 0 23px;
          font-size: clamp(55px, 7vw, 91px);
          font-weight: 500;
          letter-spacing: -0.075em;
          line-height: 0.98;
        }

        .line-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }

        .hero-line {
          display: block;
        }

        .serif {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.06em;
          color: var(--sage);
        }

        .hero-copy {
          max-width: 465px;
          font-size: 15px;
          line-height: 1.9;
          color: #687078;
        }

        .hero-actions,
        .closing-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 29px;
        }

        .button-filled {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 99px;
          padding: 15px 19px;
          background: var(--ink);
          color: white;
          font-size: 12px;
          transition:
            transform 0.25s,
            background 0.25s;
        }

        .button-filled:hover {
          background: #435547;
          transform: translateY(-3px);
        }

        .button-text {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          font-size: 12px;
        }

        .social-glyph {
          display: inline-grid;
          place-items: center;
          min-width: 19px;
          height: 19px;
          font-size: 12px;
          font-weight: 700;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 23px;
          border-top: 1px solid var(--line);
          margin-top: 48px;
          padding-top: 19px;
          color: #777e78;
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .status-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 7px;
          border-radius: 50%;
          background: var(--sage);
        }

        .hero-visual {
          position: relative;
          min-height: 495px;
          border: 1px solid #e0ddd4;
          border-radius: 48% 48% 10px 10px;
          background: #e9e5dc;
          overflow: hidden;
          isolation: isolate;
        }

        .hero-visual-top {
          position: absolute;
          z-index: 5;
          inset: 19px 20px auto;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 8px;
          letter-spacing: 0.12em;
          color: #68716b;
        }

        .hero-orb {
          position: absolute;
          inset: 45px 4% auto 20%;
          z-index: 0;
          opacity: 0.8;
        }

        .hero-photo {
          position: absolute;
          z-index: 2;
          width: 68%;
          height: 79%;
          left: 16%;
          bottom: 0;
          overflow: hidden;
          border-radius: 46% 46% 0 0;
          background: #c9c9c1;
          box-shadow: 0 20px 50px #202b3715;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .photo-index {
          position: absolute;
          z-index: 4;
          inset: auto 20px 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .photo-index span:first-child {
          font-family: Georgia, serif;
          font-size: 20px;
        }

        .visual-coordinate {
          position: absolute;
          z-index: 4;
          right: 13px;
          top: 48%;
          writing-mode: vertical-rl;
          color: #778078;
          font-size: 8px;
          letter-spacing: 0.18em;
        }

        .marquee {
          overflow: hidden;
          padding: 20px 0;
          border-block: 1px solid var(--line);
        }

        .marquee-track {
          display: flex;
          width: max-content;
        }

        .marquee-set {
          display: flex;
          align-items: center;
          gap: 28px;
          padding-right: 28px;
          white-space: nowrap;
        }

        .marquee-set span {
          font-family: Georgia, serif;
          font-size: 17px;
          font-style: italic;
          color: #59645b;
        }

        .marquee-set i {
          color: #9aa58a;
          font-style: normal;
        }

        .section {
          padding-block: 112px;
        }

        .section-heading {
          max-width: 780px;
        }

        .section-heading h2,
        .closing-inner h2 {
          margin: 21px 0 0;
          font-size: clamp(39px, 5.5vw, 67px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.065em;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 80px;
          margin-top: 55px;
        }

        .about-aside {
          border-top: 1px solid var(--line);
          padding-top: 17px;
        }

        .aside-symbol {
          color: var(--sage);
          font-family: Georgia, serif;
          font-size: 64px;
          line-height: 0.9;
        }

        .about-aside p {
          max-width: 260px;
          font-family: Georgia, serif;
          font-size: 20px;
          line-height: 1.5;
          font-style: italic;
        }

        .about-copy {
          max-width: 620px;
        }

        .about-copy p {
          color: #6e756f;
          font-size: 14px;
          line-height: 1.95;
        }

        .about-copy .about-lead {
          margin-top: 0;
          color: var(--ink);
          font-family: Georgia, serif;
          font-size: 25px;
          line-height: 1.5;
        }

        .inline-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          font-size: 12px;
          font-weight: 600;
        }

        .expertise-section {
          background: #eae7df;
          border-block: 1px solid var(--line);
        }

        .section-description {
          max-width: 400px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
          margin-top: 20px;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 50px;
        }

        .expertise-card {
          position: relative;
          min-height: 250px;
          padding: 26px;
          border: 1px solid #d8d7ce;
          background: #f4f1e9;
          transition:
            transform 0.35s,
            box-shadow 0.35s;
        }

        .expertise-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 40px #202b370d;
        }

        .card-number {
          color: #7b866e;
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .expertise-icon {
          margin-top: 22px;
          font-family: Georgia, serif;
          font-size: 31px;
          color: #8b9b7d;
        }

        .expertise-card h3 {
          margin: 18px 0 10px;
          font-family: Georgia, serif;
          font-size: 21px;
          font-weight: 400;
        }

        .expertise-card p {
          max-width: 260px;
          margin: 0;
          color: #70766f;
          font-size: 12px;
          line-height: 1.8;
        }

        .card-rule {
          position: absolute;
          left: 26px;
          bottom: 0;
          width: 35px;
          height: 3px;
          background: var(--sage);
          transition: width 0.3s;
        }

        .expertise-card:hover .card-rule {
          width: calc(100% - 52px);
        }

        .skills-list {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 20px;
          margin-top: 40px;
          padding-top: 22px;
          border-top: 1px solid #d3d2c9;
        }

        .skills-list span {
          font-size: 9px;
          letter-spacing: 0.14em;
          color: #788071;
        }

        .skills-list p {
          margin: 0;
          color: #5f6861;
          font-size: 12px;
          line-height: 1.9;
        }

        .projects-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
        }

        .projects-heading .inline-link {
          flex-shrink: 0;
          margin-bottom: 8px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
          margin-top: 48px;
          align-items: stretch;
        }

        .project-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 20px;
          border: 1px solid #dedbd2;
          background: #f9f7f1;
          transition:
            transform 0.35s,
            box-shadow 0.35s;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px #202b3710;
        }

        .project-topline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          font-size: 8px;
          letter-spacing: 0.1em;
          color: #72796e;
        }

        .project-arrow {
          flex-shrink: 0;
          transition: transform 0.3s;
        }

        .project-card:hover .project-arrow {
          transform: translate(3px, -3px);
        }

        /* Real project images */

        .project-art {
          position: relative;
          width: 100%;
          height: 220px;
          margin: 22px 0;
          overflow: hidden;
          isolation: isolate;
          background: #e7e5dc;
        }

        .project-image {
          object-fit: cover;
          object-position: center;
          transition: transform 0.65s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.06);
        }

        .project-peach .project-art {
          background: #ead8ce;
        }

        .project-green .project-art {
          background: #dce2d4;
        }

        .project-blue .project-art {
          background: #d9e0e5;
        }

        .project-image-overlay {
          position: absolute;
          inset: 45% 0 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(22, 31, 39, 0.58)
          );
          pointer-events: none;
        }

        .project-image-label {
          position: absolute;
          z-index: 2;
          left: 13px;
          bottom: 12px;
          color: white;
          font-size: 9px;
          letter-spacing: 0.14em;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
          pointer-events: none;
        }

        .project-category {
          margin-top: 0;
          color: #77806d;
          font-size: 8px;
          letter-spacing: 0.12em;
          line-height: 1.7;
        }

        .project-card h3 {
          margin: 10px 0;
          font-family: Georgia, serif;
          font-size: 23px;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .project-description {
          min-height: 95px;
          color: #6d746e;
          font-size: 12px;
          line-height: 1.8;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          padding-top: 18px;
        }

        .project-stack span {
          padding: 6px 8px;
          border: 1px solid #dedbd2;
          border-radius: 50px;
          font-size: 9px;
          color: #626a62;
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 22px;
          padding-top: 14px;
          border-top: 1px solid #e0ddd5;
          font-size: 10px;
        }

        .project-note {
          margin-top: 18px;
          color: #858980;
          font-size: 10px;
          line-height: 1.7;
        }

        .closing-section {
          background: var(--blue);
          color: var(--paper);
        }

        .closing-inner {
          padding-block: 100px 105px;
        }

        .closing-inner .eyebrow {
          color: #b7c3a8;
        }

        .closing-inner h2 {
          max-width: 800px;
        }

        .closing-inner h2 .serif {
          color: #b7c3a8;
        }

        .closing-inner > p:not(.eyebrow) {
          max-width: 470px;
          color: #c2c8ca;
          font-size: 13px;
          line-height: 1.9;
          margin-top: 23px;
        }

        .closing-section .button-filled {
          background: var(--paper);
          color: var(--ink);
        }

        .closing-section .button-filled:hover {
          background: #dce2d4;
        }

        .closing-section .button-outline {
          border-color: #63717d;
        }

        .closing-section .button-outline:hover {
          color: var(--ink);
        }

        .site-footer {
          background: var(--blue);
          border-top: 1px solid #ffffff20;
          color: #d5d8d7;
        }

        .footer-inner {
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-inner > span {
          color: #9da8ad;
          font-size: 8px;
          letter-spacing: 0.12em;
        }

        @media (max-width: 900px) {
          .hero {
            min-height: auto;
            grid-template-columns: 1fr 0.82fr;
            gap: 22px;
            padding-block: 65px;
          }

          .hero-heading {
            font-size: clamp(52px, 7vw, 72px);
          }

          .hero-visual {
            min-height: 410px;
          }

          .about-grid {
            gap: 40px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .project-card:last-child {
            grid-column: 1 / -1;
          }

          .project-card:last-child .project-art {
            height: 260px;
          }
        }

        @media (max-width: 650px) {
          .wrap {
            width: calc(100% - 38px);
          }

          .nav-inner {
            min-height: 72px;
          }

          .brand {
            font-size: 11px;
          }

          .brand-mark {
            font-size: 25px;
          }

          .desktop-nav {
            display: none;
          }

          .nav-contact {
            padding: 10px 12px;
            font-size: 10px;
          }

          .hero {
            grid-template-columns: 1fr;
            gap: 34px;
            padding-block: 57px 48px;
          }

          .hero-heading {
            font-size: clamp(54px, 13vw, 79px);
          }

          .hero-copy {
            font-size: 14px;
          }

          .hero-meta {
            margin-top: 32px;
          }

          .hero-visual {
            width: 100%;
            min-height: 440px;
            max-width: 440px;
            margin-inline: auto;
          }

          .hero-photo {
            width: 70%;
            left: 15%;
          }

          .section {
            padding-block: 76px;
          }

          .section-heading h2,
          .closing-inner h2 {
            font-size: clamp(38px, 10vw, 55px);
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-top: 32px;
          }

          .about-aside p {
            max-width: 330px;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 32px;
          }

          .expertise-card {
            min-height: 215px;
          }

          .skills-list {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .projects-heading {
            align-items: start;
            flex-direction: column;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 13px;
            margin-top: 30px;
          }

          .project-card:last-child {
            grid-column: auto;
          }

          .project-art,
          .project-card:last-child .project-art {
            height: 230px;
          }

          .project-description {
            min-height: 0;
          }

          .closing-inner {
            padding-block: 76px;
          }

          .footer-inner {
            padding-block: 20px;
            flex-wrap: wrap;
          }

          .footer-inner > span {
            order: 3;
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
