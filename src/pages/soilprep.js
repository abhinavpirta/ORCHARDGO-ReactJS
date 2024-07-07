import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/soilprep.css';

gsap.registerPlugin(ScrollTrigger);

const Soilprep = () => {
  useEffect(() => {
    const page6prepAnimation = () => {
      gsap.to("#btm6prep-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6prep-part2",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1, // set scrub to a number to make the animation smooth
        }
      });
      gsap.to("#btm6prep-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6prep-part3",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        }
      });
      gsap.to("#btm6prep-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6prep-part4",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        }
      });
    };
    
    page6prepAnimation();
  }, []);

  return (
    <div id="main">
      <div id="page6prep">
        <h1>Optimal Soil Preparation Guide</h1>
        <div id="page6prep-content">
          <div id="right-6">
            <p>Proper soil preparation is crucial for the successful growth and productivity of apple trees. Begin by conducting a soil test to determine the pH and nutrient levels. Apple trees prefer a slightly acidic to neutral pH range of 6.0 to 7.0. Adjust the pH by adding lime to raise it or sulfur to lower it, as necessary. Conduct a nutrient analysis to identify any deficiencies and amend the soil with organic matter or appropriate fertilizers to ensure a balanced nutrient profile.

            Remove all weeds and grass within a 3-foot diameter around the planting site. This step is essential to eliminate competition for nutrients and water, allowing the young tree to establish itself more effectively.
            
            Condition the soil by incorporating compost or well-rotted manure to enhance fertility and improve soil structure. This organic matter increases the soil's water-holding capacity and promotes beneficial microbial activity. Ensure the soil is well-aerated by loosening it to a depth of 12-18 inches. Good aeration facilitates root growth and ensures proper drainage, preventing waterlogging and root rot..</p>
            <p>By carefully preparing the soil, you create an optimal environment for your apple trees to thrive, leading to healthier trees and higher fruit yields. Proper soil preparation is an investment in the long-term success of your orchard.</p>
          </div>
        </div>
        <div id="page6prep-bottom">
          <div id="btm6prep-part1" className="btm6prep-parts"></div>
          <div id="btm6prep-part2" className="btm6prep-parts">
            <h5>SOIL TESTING AND AMENDMENT</h5>
            <h4><span>1</span>pH testing</h4>
            <h4><span>2</span>Nutrient Analysis</h4>
            <h4><span>3</span>Organic Matter</h4>
            <h4><span>4</span>pH Adjustment</h4>
            <h4><span>5</span>Soil Texture</h4>
            <h4><span>6</span>Drainage Check</h4>
          </div>
          <div id="btm6prep-part3" className="btm6prep-parts">
            <h5>WEED AND GRASS REMOVAL</h5>
            <h4><span>1</span>Clear Vegetation</h4>
            <h4><span>2</span>Prevent Competition</h4>
          </div>
          <div id="btm6prep-part4" className="btm6prep-parts">
            <h5>SOIL CONDITIONING</h5>
            <h4><span>1</span>Add Compost</h4>
            <h4><span>2</span>Improve Aeration</h4>
            <h4><span>3</span>Enhance Fertility</h4>
          </div>
          <div id="btm6prep-part5" className="btm6prep-parts"></div>
        </div>
      </div>
    </div>
  );
};

export default Soilprep;
