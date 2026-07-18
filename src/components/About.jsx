import profile from "../data/profile.json";
import useReveal from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container about-grid reveal" ref={ref}>
        <div className="about-photo">
          <img src={profile.photo} alt={profile.name} />
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title">Who I am</h2>
          <p className="about-bio">{profile.bio}</p>
        </div>
      </div>
    </section>
  );
}
