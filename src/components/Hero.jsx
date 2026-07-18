import profile from "../data/profile.json";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-mesh" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
      </div>
      <div className="container hero-inner">
        <p className="eyebrow hero-enter hero-enter-1">Portfolio</p>
        <h1 className="hero-name hero-enter hero-enter-2">{profile.name}</h1>
        <p className="hero-tagline hero-enter hero-enter-3">{profile.tagline}</p>
        <div className="hero-enter hero-enter-4">
          <a className="hero-cta" href="#projects">
            View projects
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
