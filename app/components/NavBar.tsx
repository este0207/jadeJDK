"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2><Link href="#">Jade/JDK</Link></h2>
      <div className="burger-menu">
        <input id="nav-toggle" type="checkbox" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="burger-button" aria-label="Toggle navigation">
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </label>

        <nav className="nav" role="navigation" aria-labelledby="nav-label">
          <h3 id="nav-label" className="sr-only">Navigation</h3>
          <ul className="nav-list">
        <li><Link href="/test">Home</Link></li>
        <li><Link href="/test-2">About Me</Link></li>
        <li><Link href="/test-3">Project</Link></li>
        <li><Link href="/test-4">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}