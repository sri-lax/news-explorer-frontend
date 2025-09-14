import "./About.css";
import authorImg from "../../assets/authorImg.svg";

function About() {
  return (
    <section className="about">
      <div className="author__info">
        <img className="author__img" src={authorImg} alt="author" />{" "}
      </div>
      <div className="author__text">
        <h1 className="about-author">About the author</h1>

        <p className="author__description">
          I'm Sreelekshmi Anitha Krishnan, a full-stack developer with hands-on
          experience in React for building dynamic user interfaces, and tools
          like Express.js and MongoDB for backend and database development.
        </p>
        <p className="author__description">
          Through my training at TripleTen, I gained practical skills in
          building reliable applications, solving real-world challenges, and
          communicating technical concepts in a clear, approachable way.
        </p>
      </div>
    </section>
  );
}

export default About;
