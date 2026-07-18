import profile from "../data/profile.json";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {year} {profile.name}</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </footer>
  );
}
