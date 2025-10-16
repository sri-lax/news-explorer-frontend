import "./About.css";
import authorImg from "../../assets/authorImg.svg";
import AuthorPic from "../../assets/AuthorPic.jpg";

function About() {
  return (
    <section className="about">
      <div className="author__info">
        <div className="author__img-wrapper">
          <img
            className="author__placeholder"
            src={authorImg}
            alt="placeholder circle"
          />
          <img
            className="author__img"
            src={AuthorPic}
            alt="Sreelekshmi Anitha Krishnan"
          />
        </div>
      </div>
      <div className="author__text">
        <h1 className="about-author">About the author</h1>

        <p className="author__description">
          I&apos;m Sreelekshmi Anitha Krishnan, a full-stack developer with
          hands-on experience in React for building dynamic user interfaces, and
          tools like Express.js and MongoDB for backend and database
          development.
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
