import React from "react";
import './css/packing.css';

class Packing extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="pagep">
                    <div className="secpacktion">
                        <div className="secpack-left">
                            <h2>Pre-Packing Prepration</h2>
                            <p>
                                Sorting and Grading: Sort apples by size, color, and quality. Remove any damaged or diseased fruit to prevent spoilage. <br />
                                Washing and Drying: Clean apples to remove dirt and residues. Ensure they are thoroughly dried before packing to prevent mold growth.
                            </p>
                        </div>
                        <div className="secpack-right">
                            <img src="./images2/indiaApple-083808lb-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="secpacktion">
                        <div className="secpack-left">
                            <h2>Packing Materials</h2>
                            <p>
                                Crates and Boxes: Use sturdy, ventilated crates or boxes designed for fruit transport. They should be strong enough to withstand stacking. <br />
                                Cushioning Materials: Line boxes with padding such as shredded paper, foam, or fruit trays to minimize bruising during transit.
                            </p>
                        </div>
                        <div className="secpack-right">
                            <img src="./images2/himachal-apple-boxes-1000x1000.jpg" alt="" />
                        </div>
                    </div>
                    <div className="secpacktion">
                        <div className="secpack-left">
                            <h2>Packing Techniques</h2>
                            <p>
                                Layering: Pack apples in layers with cushioning between each layer to prevent pressure and bruising. <br />
                                Stacking: Ensure that apples are evenly stacked and not overfilled. Overfilling can lead to bruising and damage. <br />
                                Proper Ventilation: Make sure the packing allows for adequate air circulation to keep apples fresh and prevent moisture buildup.
                            </p>
                        </div>
                        <div className="secpack-right">
                            <img src="./images2/E8q1NG8VIAMHwZt.jpg" alt="" />
                        </div>
                    </div>
                    <div className="secpacktion">
                        <div className="secpack-left">
                            <h2>Labeling and Documentation</h2>
                            <p>
                                Accurate Labeling: Clearly label each box with variety, grade, and packing date. Include any special handling instructions. <br />
                                Documentation: Maintain detailed records of packed apples, including quantity, quality, and destination to ensure traceability.
                            </p>
                        </div>
                        <div className="secpack-right">
                            <img src="./images2/WhatsApp Image 2024-07-01 at 07.50.42_32a76538.jpg" alt="" />
                        </div>
                    </div>
                    <div className="secpacktion">
                        <div className="secpack-left">
                            <h2>Transportation</h2>
                            <p>
                                Handling with Care: During transport, handle packed apples gently to avoid shocks and vibrations that could cause bruising. <br />
                                Temperature Maintenance: Ensure transport vehicles are equipped with temperature control to maintain the cold chain from storage to delivery.
                            </p>
                        </div>
                        <div className="secpack-right">
                            <img src="./images2/apples-shipped-in-refrigerated-truck-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Packing;
