import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/ripeness.css';

gsap.registerPlugin(ScrollTrigger);

const Ripeness = () => {
  useEffect(() => {
    const page6Animation = () => {
      gsap.to("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6-part2",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1, // set scrub to a number to make the animation smooth
        }
      });
      gsap.to("#btm6-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6-part4",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        }
      });
    };

    page6Animation();
  }, []);

  return (
    <div id="main">
      <div id="page6">
        <h1>DETERMINING RIPENESS</h1>
        <div id="page6-content">
          <div id="right-6">
            <p>Harvesting apples at the right time ensures the best flavor and texture. Key indicators include color changes such as skin turning from green to yellowish or golden, a rosy blush, and a shiny surface. Firmness and texture are also critical; ripe apples should feel firm but not hard, and starch tests can confirm ripeness. Taste tests reveal that ripe apples are sweet, juicy, and flavorful, while their seeds turn dark brown or black. By observing these signs and regularly monitoring your apples, you can accurately determine the best time to harvest, ensuring a delicious and fruitful yield.</p>
          </div>
        </div>
        <div id="page6-bottom">
          <div id="btm6-part1" className="btm6-parts"></div>
          <div id="btm6-part2" className="btm6-parts">
            <h5>COLOUR CHANGE</h5>
            <h4><span>1</span>Deep / Rich Colour</h4>
            <h4><span>2</span>Flesh Colour</h4>
            <h4><span>3</span>Rosy Blush</h4>
            <h4><span>4</span>Even Colouration</h4>
            <h4><span>5</span>Glossiness</h4>
          </div>
          <div id="btm6-part4" className="btm6-parts">
            <h5>TASTE AND SEEDS</h5>
            <h4><span>1</span>Accurate Flavour Profile</h4>
            <h4><span>2</span>Juiciness</h4>
            <h4><span>3</span>Dark Brown or Black Seeds</h4>
          </div>
          <div id="btm6-part5" className="btm6-parts"></div>
        </div>
      </div>
    </div>
  );
};

export default Ripeness;
