import { useState } from 'react';
import './banner.css';

export default function Banner() {
  console.log("Banner component is rendering!"); // Debugging log

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    'linear-gradient(to right, #06327d 40%, #209d5c)', 
    '#209d5c', 
    '#06327d',
    'linear-gradient(45deg, #33cc33, #0099ff)', 
    'linear-gradient(45deg, #0099ff, #6a0dad)'  
  ];

  return (
    <section className="banner">
      <h1>Banner Loaded</h1> {/* Add this to see if it appears */}
    </section>
  );
}
