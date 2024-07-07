import React from 'react';
import './home.css';
import { gsap } from 'gsap';

class Home extends React.Component {
    componentDidMount() {
        this.page2Animation();
    }

    page2Animation = () => {
        var rightElems = document.querySelectorAll(".right-elem")
        rightElems.forEach((elem) => {
            elem.addEventListener("mouseenter", () => {
                gsap.to(elem.querySelector('img'), {
                    opacity: 1,
                    scale: 1,
                })
            });

            elem.addEventListener("mouseleave", () => {
                gsap.to(elem.querySelector('img'), {
                    opacity: 0,
                    scale: 0,
                })
            });

            elem.addEventListener("mousemove", (dets) => {
                gsap.to(elem.querySelector('img'), {
                    x: dets.clientX - elem.getBoundingClientRect().left - 90,
                    y: dets.clientY - elem.getBoundingClientRect().top - 215,
                })
            })
        });
    }

    render() {
        return (
            <div id="main">
                <div id="page1">
                    {/* <div id="apple"></div><img src="./peakpx.jpg" alt="123" srcset="" /> */}
                    <h1>
                        ORCHARDGO
                    </h1>
                    <br />
                    <h2>PASSIONATE ABOUT PERFECTIONISM</h2>

                    <div id="page1some">
                        <h4>Visual Aids</h4>
                        <h4>Resource Library</h4>
                        <h4>and</h4>
                        <h4>Seasonal Advice</h4>
                    </div>
                </div>
                <div id="page2">
                    <div id="page2-left">
                        {/* <p>Exclusive insights into <br />UI/UX and product design</p> */}
                        <h5>Welcome to ORCHARDGO - Apple Tree Care Guide, your comprehensive resource for all things related to growing and maintaining healthy apple trees. Whether you're a novice gardener or an experienced orchardist, our website offers detailed information and expert advice on every aspect of apple tree care.

                            From selecting the perfect spot for planting to mastering the art of pruning, we provide step-by-step guides, seasonal tips, and troubleshooting advice to ensure your apple trees thrive. Our mission is to help you enjoy a bountiful harvest with minimal effort and maximum enjoyment.
                            
                            Explore our user-friendly sections on planting, watering, fertilizing, disease control, and more. Let’s grow together!</h5>
                    </div>
                    <div id="page2-right">
                        <div class="right-elem" id="right-elem1">
                            <h2>What is the best time to plant and <br />ideal soil conditions ?</h2>
                            <img src="./images2/how-to-plant-bare-root-fruit-tree.jpg" alt="" />
                        </div>
                        <div className="right-elem">
                            <h2>What types of sprays are needed and<br />what should be the safety precautions ?</h2>
                            <img src="./images2/hp-apple-tree-spray-oil-28hmo-29-2c-mak-orchard-hmo.jpg" alt="" />
                        </div>
                        <div className="right-elem">
                            <h2>How should I store the produce to keep  <br />them fresh longer ?</h2>
                            <img src="./images2/product-jpeg-500x500.webp" alt="" />
                        </div>
                        <div className="right-elem">
                            <h2>What are the essential techniques for<br />pruning for optimal growth ?</h2>
                            <img src="./images2/AB208-felco-classic-pruner-number-2-right-hand-u-3709.jpg" alt="" />
                        </div>
                    </div>
                </div>
                
                <div id="page3">
                    <div id="info">
                        <h3>DESIGNED AND DEVELOPED BY:</h3> <br />

                        <h3>Abhinav Pirta</h3> <br />
                        CONTACT:  <br />
                        
                        Email:pirtaabhi@gmail.com <br />


                        <h3>FEEDBACKS ARE ALWAYS VALUED AND WELCOMED</h3>
                        <div id="counter"><script type="text/javascript" src="//counter.websiteout.com/js/13/0/0/0"></script></div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Home;
