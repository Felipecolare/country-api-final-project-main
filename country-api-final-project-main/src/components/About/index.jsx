import "./about.css";
import felipe from "../../images/felipe.png";

export default function About() {
  return (
    <section className="about">
      <div className="about__intro">
        <h2 className="about__title">Ahoy there!</h2>
        <img src={felipe} alt="Felipe" className="about__img" />
      </div>
      <p className="about__text">
        I'm Felipe. A developer, tech enthusiast, gamer, and adventure seeker.
      </p>
      <p className="about__text">
        I'm passionate about technology and love exploring new programming languages
        and frameworks. When I'm not coding, you can find me gaming, watching tech
        videos, or planning my next adventure.
      </p>
      <p className="about__text">
        I believe in continuous learning and staying up-to-date with the latest
        technologies. Every project is an opportunity to grow and improve my skills.
      </p>
      <p className="about__text">
        I'm currently focused on web development and enjoy building applications
        that solve real-world problems and provide great user experiences.
      </p>
      <p className="about__text">
        I'm always eager to take on new challenges and collaborate with other
        developers to create innovative solutions.
      </p>
    </section>
  );
}
