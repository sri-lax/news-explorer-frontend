import "./Footer.css";
import githubIcon from "../../assets/githubIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">© 2025 Sreelekshmi Anitha Krishnan</p>

        <nav className="footer__nav">
          <div className="footer__pages">
            <button className="footer__link" onClick={() => navigate("/")}>
              Home
            </button>
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </div>

          <div className="footer__social">
            <a
              href="https://github.com/sreelekshmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="footer__icon" />
            </a>
            <a
              href="https://linkedin.com/in/sreelekshmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="footer__icon" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
