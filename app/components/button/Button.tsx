"use client";
import './button.css';


export default function Button() {
  return (
    <button
      className="btn"
      onClick={() => {
        console.log('click');
        window.location.href = '/About';
      }}
    >
      Click Me
    </button>
  );
}