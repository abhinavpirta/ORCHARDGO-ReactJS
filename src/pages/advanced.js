import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/advanced.css';

gsap.registerPlugin(ScrollTrigger);

const Advanced = () => {
  useEffect(() => {
    const page6adAnimation = () => {
      gsap.to("#btm6ad-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6ad-part2",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1, // set scrub to a number to make the animation smooth
        }
      });
      gsap.to("#btm6ad-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6ad-part3",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        }
      });
      gsap.to("#btm6ad-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6ad-part4",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        }
      });
    };

    page6adAnimation();
  }, []);

  return (
    <div id="main">
      <div id="page5ad">
        <button>ADVANCED PRUNING</button>
        <div id="page5ad-right">
          <p>
            <span></span>For those with a solid grasp of the basics, advanced pruning methods can further optimize the health and productivity of apple trees. Here’s an in-depth look at advanced techniques to take your pruning skills to the next level.
            <br />
            Why Advanced Pruning?
            <br />
            <b>Enhanced Yield:</b> Increase fruit size and quality by optimizing light and air distribution.
            <br />
            <b>Tree Longevity:</b> Improve overall tree structure and health for a longer lifespan.
            <br />
            <b>Specialized Goals:</b> Tailor pruning to achieve specific outcomes, such as size control or aesthetic shaping.
          </p>
          <div id="page5ad-content">
            <div className="uiux">
              <details open>
                <summary>
                  <h1>Pruning Techniques</h1>
                  <div id="flex">
                    <h4>ESPALIER PRUNING</h4>
                    <h4>RENEWAL PRUNING</h4>
                    <h4>CANOPY MANAGEMENT</h4>
                    <h4>FRUIT THINNING</h4>
                    <h4>RESTORATIVE PRUNING</h4>
                  </div>
                </summary>
                <div id="page5ad-container">
                  <div className="page5ad-elem">
                    <div className="over"></div>
                    <h3>ESPALIER PRUNING</h3>
                    <p>
                      A technique where trees are trained to grow flat against a structure, such as a wall or trellis.
                      <br />
                      Steps:
                      <br />
                      1. Choose a central leader and establish horizontal branches at desired intervals.
                      <br />
                      2. Prune regularly to maintain the flat shape and remove any growth that extends outward.
                      <br />
                      Benefits: Saves space, improves sunlight exposure, and adds decorative appeal.
                    </p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <div className="page5ad-elem">
                    <div className="over"></div>
                    <h3>RENEWAL PRUNING</h3>
                    <p>
                      Focuses on removing old, non-productive wood to encourage new growth.
                      <br />
                      Steps:
                      <br />
                      1. Identify and remove 1-2 older, unproductive branches each year.
                      <br />
                      2. Ensure cuts are made close to the main trunk or a healthy lateral branch.
                      <br />
                      Benefits: Maintains a balance of young, vigorous growth and older, productive wood.
                    </p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <div className="page5ad-elem">
                    <div className="over"></div>
                    <h3>CANOPY MANAGEMENT</h3>
                    <p>
                      Techniques to control the density and spread of the tree canopy.
                      <br />
                      Steps:
                      <br />
                      1. Thin out crowded areas to improve light penetration and air circulation.
                      <br />
                      2. Maintain an open center or vase shape for optimal fruit development.
                      <br />
                      Benefits: Reduces disease risk, enhances fruit quality, and ensures uniform ripening.
                    </p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <div className="page5ad-elem">
                    <div className="over"></div>
                    <h3>FRUIT THINNING</h3>
                    <p>
                      The removal of some fruits early in the growing season to enhance the size and quality of the remaining fruits.
                      <br />
                      Steps:
                      <br />
                      1. Assess fruit set and remove excess fruits to maintain a balance.
                      <br />
                      2. Space remaining fruits about 6-8 inches apart.
                      <br />
                      Benefits: Prevents overburdening the tree, improves fruit size and quality, and reduces branch breakage.
                    </p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <div className="page5ad-elem">
                    <div className="over"></div>
                    <h3>RESTORATIVE PRUNING</h3>
                    <p>
                      Used for neglected or overgrown trees to bring them back to a productive state.
                      <br />
                      Steps:
                      <br />
                      1. Gradually remove large, old branches over several years.
                      <br />
                      2. Focus on restoring a balanced structure and removing excessive growth.
                      <br />
                      Benefits: Revitalizes old trees, improves light and air penetration, and restores productivity.
                    </p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div id="page6ad">
        <h1>ADVANCED PRUNING</h1>
        <div id="page6ad-content">
          <div id="right-6">
            <p>
              Advanced pruning methods can significantly enhance the health, productivity, and aesthetics of your apple trees. Techniques like espalier pruning, renewal pruning, and canopy management allow for precise control over tree growth and fruit production. With careful planning and execution, these advanced methods will help you achieve a thriving, productive orchard. Regular practice and attention to detail will ensure long-term success in your advanced pruning endeavors.
            </p>
          </div>
        </div>
        <div id="page6ad-bottom">
          <div id="btm6ad-part1" className="btm6ad-parts"></div>
          <div id="btm6ad-part2" className="btm6ad-parts">
            <h5>ADVANCED TOOLS</h5>
            <h4><span>1</span>POLE PRUNERS</h4>
            <h4><span>2</span>PRUNING SCISSORS</h4>
            <h4><span>3</span>SPECIALITY SAWS</h4>
          </div>
          <div id="btm6ad-part3" className="btm6ad-parts">
            <h5>TIMING AND FREQUENCY</h5>
            <h4><span>1</span>SEASONAL TIMING</h4>
            <h4><span>2</span>REGULAR MAINTENANCE</h4>
          </div>
          <div id="btm6ad-part4" className="btm6ad-parts">
            <h5>CONSIDERATIONS AND PRECAUTIONS</h5>
            <h4><span>1</span>TREE AGE AND HEALTH</h4>
            <h4><span>2</span>WEATHER CONDITIONS</h4>
            <h4><span>3</span>PEST AND DISEASE MANAGEMENT</h4>
          </div>
          <div id="btm6ad-part5" className="btm6ad-parts"></div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
