import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "MySkillKart",
    category: "AI Agents, Marketplace, skills.md",
    tools:
      "Marketplace to buy and sell AI agent skills. Creators publish skills.md files; users download and attach them to Claude Cowork, Cursor, Codex, and other agents for extended capabilities.",
    link: "https://myskillkart.com",
  },
  {
    title: "Solana Referral Model with Multi Level Commission",
    category: "Rust, Node.js, React.js, AWS",
    tools:
      "Dapp with a 20-level compensation plan. Commission distribution on Solana blockchain. Live on mainnet since July 2024.",
    link: "https://frogbar-dapp-frontend.vercel.app/",
  },
  {
    title: "Custom DAO Platform on Polygon",
    category: "Solidity, Ethers.js, Node.js, AWS",
    tools:
      "Community DAO treasury for crypto assets. Governance contract for funding proposals and treasury decisions.",
    link: "https://github.com/DhruvGodambe",
  },
  {
    title: "Solana Arbitrage & Liquidity Bot",
    category: "Rust, Node.js, React.js, AWS",
    tools:
      "Arbitrage across Raydium, Orca, and Meteora DEXes. Adds and removes liquidity from high-yield pools based on volume and yield.",
    link: "https://github.com/DhruvGodambe",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const syncSlideHeight = () => {
      const container = trackContainerRef.current;
      if (!container) return;
      const maxHeight = slideRefs.current.reduce(
        (max, slide) => Math.max(max, slide?.offsetHeight ?? 0),
        0
      );
      if (maxHeight > 0) {
        container.style.minHeight = `${maxHeight}px`;
      }
    };

    syncSlideHeight();
    window.addEventListener("resize", syncSlideHeight);
    return () => window.removeEventListener("resize", syncSlideHeight);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container" ref={trackContainerRef}>
            <div
              className="carousel-track"
              style={{
                ["--slide-count" as string]: projects.length,
                transform: `translateX(-${(currentIndex * 100) / projects.length}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  className="carousel-slide"
                  key={project.title}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            className="carousel-link"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                          >
                            View project <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
