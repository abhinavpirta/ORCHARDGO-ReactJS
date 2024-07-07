import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/graft.css';

gsap.registerPlugin(ScrollTrigger);

const Graft = () => {
  useEffect(() => {
    const page6graAnimation = () => {
      gsap.to("#btm6gra-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6gra-part2",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1, // set scrub to a number to make the animation smooth
        }
      });
      gsap.to("#btm6gra-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6gra-part4",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        }
      });
    };

    page6graAnimation();
  }, []);

  return (
    <div id="main">
      <div id="page6gra">
        <h1>APPLE GRAFTING</h1>
        <div id="page6gra-content">
          <div id="right-6">
            <p>Apple grafting is a horticultural technique used to propagate apple trees by joining two different plant parts so they grow as one. This method is widely used to produce apple trees that combine desirable traits from two separate plants, such as disease resistance, improved fruit quality, and better growth habits.</p>
          </div>
        </div>
        <div id="page6gra-bottom">
          <div id="btm6gra-part1" className="btm6gra-parts"></div>
          <div id="btm6gra-part2" className="btm6gra-parts">
            <h5>TYPES OF GRAFTING</h5>
            <h4><span>1</span>WHIP AND TONGUE GRAFTING</h4>
            <h4><span>2</span>CLEFT GRAFTING</h4>
            <h4><span>3</span>BUD GRAFTING</h4>
            <h4><span>4</span>BRIDGE GRAFTING</h4>
          </div>
          <div id="btm6gra-part4" className="btm6gra-parts">
            <h5>BASIC COMPONENTS</h5>
            <h4><span>1</span>ROOTSTOCK</h4>
            <h4><span>2</span>SCION</h4>
          </div>
          <div id="btm6gra-part5" className="btm6gra-parts"></div>
        </div>
      </div>
      <div id="page5gra">
        <div id="page5gra-right">
          <div id="page5gra-content">
            <div className="uiux">
              <h1>Why Graft Apple Trees?</h1>
              <div id="flex"></div>
              <div id="page5gra-container">
                <div className="page5gra-elem">
                  <div className="over"></div>
                  <h3>
                    <div className="buttonaft">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h2>CONSISTENCY</h2>
                    </div>
                  </h3>
                  <p>Ensures the new tree inherits the exact characteristics of the parent tree, guaranteeing uniformity in fruit size, taste, and ripening time.</p>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
                <div className="page5gra-elem">
                  <div className="over"></div>
                  <h3>
                    <div className="buttonaft">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h2>DISEASE RESISTANCE</h2>
                    </div>
                  </h3>
                  <p>Combines the disease-resistant properties of rootstock with the desirable traits of the scion (the top part of the grafted plant).</p>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
                <div className="page5gra-elem">
                  <div className="over"></div>
                  <h3>
                    <div className="buttonaft">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h2>ENHANCED GROWTH</h2>
                    </div>
                  </h3>
                  <p>Uses vigorous rootstocks to improve the growth rate, size, and yield of the apple tree.</p>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
                <div className="page5gra-elem">
                  <div className="over"></div>
                  <h3>
                    <div className="buttonaft">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h2>SPACE EFFICIENCY</h2>
                    </div>
                  </h3>
                  <p>Allows for the cultivation of dwarf or semi-dwarf trees suitable for smaller spaces or orchards.</p>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="page5gra">
        <div id="page5gra-right">
          <div id="page5gra-content">
            <div className="uiux">
              <h1>Basic Components of Grafting</h1>
              <div id="flex"></div>
              <div id="page5gra-container">
                <div className="page5gra-elem">
                  <div className="over"></div>
                  <h3>
                    <div className="buttonaft">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h2>ROOTSTOCK</h2>
                    </div>
                  </h3>
                  <p>The lower part of the graft that forms the root system. It provides the tree with support and affects its size and growth rate.</p>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
                <div className="page5gra-elem">
                  <div className="over"></div>
                  <h3>
                    <div className="buttonaft">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h2>SCION</h2>
                    </div>
                  </h3>
                  <p>The upper part of the graft that becomes the fruit-bearing portion of the tree. It determines the variety of apples produced.</p>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graft;
