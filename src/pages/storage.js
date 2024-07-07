import React from "react";
import './css/storage.css';

class Storage extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="pagesto">
                    <div id="pagesto-right">
                        <div id="pagesto-content">
                            <div className="uiux">
                                <details open>
                                    <summary>
                                        <h1>STORAGE TIPS</h1>
                                        <div id="flex"></div>
                                    </summary>
                                    <div id="pagesto-container">
                                        <div className="pagesto-elem">
                                            <div className="over"></div>
                                            <h3>
                                                <div className="buttonsto">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <h2>Optimal Storage Conditions</h2>
                                                </div>
                                            </h3>
                                            <p>
                                                Temperature Control: Store apples in a cool environment. The ideal temperature range is 32°F to 40°F (0°C to 4°C). <br />
                                                Humidity Levels: Maintain high humidity levels (90-95%) to prevent apples from drying out.
                                            </p>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                        <div className="pagesto-elem">
                                            <div className="over"></div>
                                            <h3>
                                                <div className="buttonsto">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <h2>Proper Ventilation</h2>
                                                </div>
                                            </h3>
                                            <p>Air Circulation: Ensure good air circulation in the storage area to prevent mold growth and maintain consistent temperature and humidity.</p>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                        <div className="pagesto-elem">
                                            <div className="over"></div>
                                            <h3>
                                                <div className="buttonsto">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <h2>Sorting and Monitoring</h2>
                                                </div>
                                            </h3>
                                            <p>
                                                Regular Inspection: Frequently check stored apples for signs of spoilage. Remove any apples that show signs of rot or mold to prevent them from affecting others. <br />
                                                Separation: Store different apple varieties separately as they may have different ripening and storage requirements.
                                            </p>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                        <div className="pagesto-elem">
                                            <div className="over"></div>
                                            <h3>
                                                <div className="buttonsto">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <h2>Packaging for Storage</h2>
                                                </div>
                                            </h3>
                                            <p>
                                                Use of Crates and Bins: Store apples in shallow crates or bins with adequate ventilation. Avoid packing them too tightly. <br />
                                                Wrapping Individual Apples: For longer storage, consider wrapping each apple in newspaper or tissue paper to reduce the risk of bruising and to absorb excess moisture.
                                            </p>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                        <div className="pagesto-elem">
                                            <div className="over"></div>
                                            <h3>
                                                <div className="buttonsto">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <h2>Storage Locations</h2>
                                                </div>
                                            </h3>
                                            <p>
                                                Basements and Cellars: Cool, dark, and humid basements or cellars are ideal storage locations for apples. <br />
                                                Refrigerators: For smaller quantities, storing apples in the crisper drawer of your refrigerator works well.
                                            </p>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Storage;
