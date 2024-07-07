import React from "react";
import './css/rightlocation.css';
class Rightlocation extends React.Component{
    render(){
        return(
            <div id="main">
        
            <div id="page">
             <button>RIGHT LOCATION </button>
               
                <div id="page-right">
                    <p><span></span>Choose a location with well-drained soil, full sun, and good air circulation for planting apple trees. Avoid low-lying areas prone to frost pockets, as these can damage blossoms and fruit. Ensure the site has a soil pH level between 6.0 and 7.0 for optimal nutrient availability. Additionally, select a site with natural windbreaks to protect the trees from strong winds and promote healthy growth.</p>
                        <div id="page-content">
                           <div class="uiux">
                            <details open>
                                <summary><h1>KEY CONSIDERATIONS</h1>
                                     <div id="flex">
                                        <h4>SOIL AND SUNLIGHT</h4>
                                        <h4>AIR CIRCULATION</h4>
                                        <h4>SOIL pH</h4>
                                        <h4>WIND PROTECTION</h4>
                                        
                                    </div>  </summary>
                            <div id="page-container">
                                <div class="page-elem">
                                    <div class="over"></div>
                                    <h3>SOIL AND SUNLIGHT</h3>
                                    <p>Select a site with well-drained soil to prevent root rot. <br/>
                                        Ensure full sun exposure for at least 6-8 hours daily for optimal growth.</p>
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                                <div class="page-elem">
                                    <div class="over"></div>
                                    <h3>AIR CIRCULATION</h3>
                                    <p>Choose an area with good air movement to reduce disease risk <br/>
                                        Avoid low-lying areas that can trap cold air and create frost pockets</p>
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                                <div class="page-elem">
                                    <div class="over"></div>
                                    <h3>SOIL pH</h3>
                                    <p>Test soil pH to ensure it falls between 6.0 and 7.0 for best nutrient uptake.  <br/>
                                        Amend soil as needed to maintain the ideal pH range.</p>
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                                <div class="page-elem">
                                    <div class="over"></div>
                                    <h3>PROTECTION FROM WIND</h3>
                                    <p>Select a location with natural or artificial windbreaks to shield trees from strong winds.<br/>
                                        Windbreaks can be other trees, shrubs, or structures.</p>
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                               
                            </div>
                           
                            </details>
                            </div>
                        </div>
                </div>
            </div>
           
           
        
    
            
        </div>
        )
    }
}
export default Rightlocation;