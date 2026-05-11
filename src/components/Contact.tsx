import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/dhruvgodambe"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — dhruvgodambe
              </a>
            </p>
            <p>
              <a
                href="mailto:dhruvrockstone@gmail.com"
                data-cursor="disable"
              >
                dhruvrockstone@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BE Electronics Engineering, Mumbai University — 2018–2024</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/DhruvGodambe"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvgodambe"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Dhruv Godambe</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
