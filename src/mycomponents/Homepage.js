import React from 'react'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/style.css'

export const Homepage = () => {
    return (
        <div>

            {/* Hero Section Starts Here */}
            <section className="home-hero align-items-center">
                <div className="container py-5">
                    <div className="row flex-wrap align-items-center justify-content-between">
                        <div className="col-md-6">
                            <div className="custom_banner">
                                <div className="custom_banner_left">
                                    <img src="images/paytm_mloyal.jpg" className="banner_logo" alt="" />
                                    <h3 className="custom_banner_heading">Deliver Highly Personalised Customer Experiences and drive business growth</h3>
                                    <p>Leverage theworld’s first comprehensive omnichannel loyaltysales &amp; marketing platform to unlock growth &amp; build closer relationships with your customers to drive much <strong>higher repeat sales.</strong></p>

                                    <div className="custom_b_btns">
                                        <a href="#" className="tte_btn">
                                            <span>Request a Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <img src="images/custom_banner_img.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Care Section Starts Here */}

            <section className="care pt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-12">
                            <div className="d-flex flex-column align-items-center">
                                <div className="careThumbs d-flex align-items-center justify-content-between flex-wrap w-100">
                                    <div className="careThumb bgc_1 d-flex align-items-center justify-content-center flex-column">
                                        <div className="careIcon"><img src="images/aquire_icon.png" class="img-fluid" alt="" /></div>
                                        <span className="caretext">Acquire</span>
                                    </div>
                                    <div className="careThumb bgc_2 d-flex align-items-center justify-content-center flex-column">
                                        <div className="careIcon"><img src="images/engage_icon.png" class="img-fluid" alt="" /></div>
                                        <span className="caretext">Engage</span>
                                    </div>
                                    <div className="careThumb bgc_1 d-flex align-items-center justify-content-center flex-column">
                                        <div className="careIcon"><img src="images/rewards_icon.png" class="img-fluid" alt="" /></div>
                                        <span className="caretext">Reward</span>
                                    </div>
                                    <div className="careThumb bgc_2 d-flex align-items-center justify-content-center flex-column">
                                        <div className="careIcon"><img src="images/retain_icon.png" class="img-fluid" alt="" /></div>
                                        <span className="caretext">Retain</span>
                                    </div>
                                    <div className="careThumb bgc_1 d-flex align-items-center justify-content-center flex-column">
                                        <div className="careIcon"><img src="images/repeat_icon.png" class="img-fluid" alt="" /></div>
                                        <span className="caretext">Repeat</span>
                                    </div>
                                </div>
                                <div className="careImg">
                                    <img src="images/care_image.png" class="img-fluid" alt="" />
                                </div>
                                <div className="jumbotron careJumbotron">
                                    <div className="d-flex justify-content-center">
                                        <div className="col-md-9 col-12">
                                            <h3>Host your loyalty program on Paytm app and stay consumer-ready with data-driven artificial intelligence-powered technology.</h3>
                                            <h1>Create a 360 degree Customer View with Paytm m'Loyal</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loyalty Section Starts Here */}

            <section className="loyalty_section py-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 m-auto">
                            <h1 className="font-weight-bold crm_heading text-center mb-5 font-46">The Complete Loyalty Marketing & CRM Suite</h1>
                        </div>
                    </div>
                                        
                    <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap">
                        <div className="col-md-6 mb-5">
                            <h3 className="font-weight-bold font-26">Customer Acquisition Cloud (CAC)™ Solutions</h3>
                            <h6 className="font-17 lh-14">Our Customer Acquisition Cloud (CAC)™ solutions enable brands to leverage channels across social, mobile, the web, offline and traditional media to acquire, track and convert potential customers into real shoppers.</h6>
                            <div className="custom_b_btns mt-5">
                                <a href="#" className="tte_btn">
                                    <span>Request a Demo</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5 pl-lg-5">
                            <img src="images/loyalty_img.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="d-flex align-items-start justify-content-between flex-wrap">
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Last Mile Data Capture</h3>
                                        <p className="font-15 font-weight-semi mb-1">Paytm m'loyal helps you understand:</p>
                                        <ul className="listing font-15  font-weight-semi">
                                            <li>Who your customers are?</li>
                                            <li>How frequently customers visit your online/offline store?</li>
                                            <li>How much are your customers spending?</li>
                                            <li>Top & least performing channel</li>
                                            <li>How to reduce customer loyalty management overhead & improve ROI</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">CRM & Member Management	</h3>
                                        <p className="font-15 font-weight-semi mb-1">Paytm m'loyal's CRM interface helps you:</p>
                                        <ul className="listing font-15  font-weight-semi">
                                            <li>Manage Store Accounts</li>
                                            <li>Manage Loyalty Members Database</li>
                                            <li>Run Feedback & Referral Schemes</li>
                                            <li>Data Sanitization</li>
                                            <li>Enriching Customer Profiles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">OmniChannel Connectors</h3>
                                        <p className="font-15 font-weight-semi">Paytm m'loyal can be easily integrated with your POS systems, web, social, mobile, market places & offline channels to stitch each of your customer touchpoints. It comes with built-in widgets, utilities and software components to capture vital customer details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Loyalty Branding & Marketing	</h3>
                                        <p className="font-15 font-weight-semi">From coming up with innovative program names, logos and tag lines to online advertisements, social media proliferation, and appropriate use of QR codes & digital media, we drive higher visibility and build winning loyalty programs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* CEC Section Starts Here */}

            <section className="cec py-5 bg_grey">
                <div className="container mt-5">
                    <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap">
                        <div className="col-md-6 mb-5">
                            <h3 className="font-weight-bold font-26">Customer Engagement Cloud (CEC) Solutions</h3>
                            <h6 className="font-17 lh-14 mb-2">Customer Engagement Cloud (CEC)™ is an ROI tracker and a real-time one-2-one campaign management solution.</h6>
                            <h6 className="font-17 lh-14">Inbuilt Campaign management tool allows you to cluster your data with as many Permutations / combinations possible. Cluster based ROI is available in real time
to plan the next campaigns based on cluster performance.</h6>
                            <div className="custom_b_btns mt-5">
                                <a href="#" className="tte_btn">
                                    <span>Request a Demo</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <img src="images/cec_img.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="d-flex align-items-start justify-content-between flex-wrap">
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Precision Mktg Framework (PMF)</h3>
                                        <p className="font-15 font-weight-semi mb-1">Precision Mktg Framework (PMF)™ help brands understand consumer behavior, product preference, quantitative and subjective factors to define the right communication for all types of consumers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Consumer Loyalty Mobile App (CLMA)</h3>
                                        <p className="font-15 font-weight-semi mb-1">Personalised customer loyalty mobile apps allow customers to view their transaction history, points, messages, notifications, brand ads as well as access brand social channels and eligible coupons & rewards.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Shopper WebLounge (SWL)</h3>
                                        <p className="font-15 font-weight-semi">A comprehensive member portal that allows members to check their loyalty points, messages, coupons and rewards. It comes with an in-built shopping cart, rewards store and mobile couponing engine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* CRC Section Starts Here */}

            <section className="crc py-5 bg_light-grey">
                <div className="container mt-5">
                    <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap">
                        <div className="col-md-6 mb-5">
                            <h3 className="font-weight-bold font-26">Customer Rewards Cloud (CRC)</h3>
                            <h6 className="font-17 lh-14 mb-2">Our Customer Reward Cloud (CRC) enable brands to choose from 250+ different kinds of schemes and loyalty logics to offer their customers. It also helps brands gain valuable insights into consumer buying behavior and impact the lifestyle</h6>                            
                            <div className="custom_b_btns mt-5">
                                <a href="#" className="tte_btn">
                                    <span>Request a Demo</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <img src="images/crc_img.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="d-flex align-items-start justify-content-between flex-wrap">
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Loyalty & Business Intelligence (LBI)</h3>
                                        <p className="font-15 font-weight-semi mb-1">"LBI” is well-thought loyalty rules & intelligent schemes engine ensures your loyalty & engagement efforts move in the same direction. It helps you:</p>
                                        <ul className="listing font-15  font-weight-semi">
                                            <li>Flexibility to create a Point/Stamp/Rewards based program</li>
                                            <li>Setup Offer Structure for all Clusters</li>
                                            <li>Run Feedback & Referral Schemes</li>
                                            <li>Configure Business / Communication Rules</li>
                                            <li>Define Customer Lifecycle Automation Workflow</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Data Analytics Manager (DAM)</h3>
                                        <p className="font-15 font-weight-semi mb-1">DAM is a real-time data analytics & clustering tool that offers:</p>
                                        <ul className="listing font-15  font-weight-semi">
                                            <li>Daily analytics on program performance</li>
                                            <li>Predictive analysis & recommendations</li>
                                            <li>Visual analytics on store performance, consumer cluster performance, ROI and more</li>
                                            <li>Useful insights into loyalty members, loyalty purchases, repeat sales, top member contribution to the business & point analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-start">
                                    <div className="crm_li_icon"></div>
                                    <div className="crm_content">
                                        <h3 className="font-20 font-weight-medium">Rewards Store</h3>
                                        <p className="font-15 font-weight-semi">Available across all smartphone devices, online and on social media, Rewards Store offers an online/mobile infrastructure to help brands create a rewards ecosystem. Brands can simply pull in vouchers/offers from complementary brand partners or their own ecosystem. They can also create targeted rewards for different customer clusters. Reward with Points, Cash-backs or gift vouchers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* How To Section Starts Here */}

            <section className="howTo py-5 bg_grey">
                <div className="container mt-5">
                    <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap">                        
                        <div className="col-md-7 mb-5">
                            <div className="videoThumb">
                                <img src="images/videoThumb.jpg" className="img-fluid" alt="" />
                                <a href="#" className="playBtn">
                                    <img src="images/playBtn.png" className="img-fluid" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="font-weight-bold font-46">How Paytm m'loyal Works?</h3>
                            <h6 className="font-15 lh-14 mb-4 mt-3">The most comprehensive Loyalty & Marketing Platform you can bank on!</h6>                            
                            <div className="custom_b_btns">
                                <a href="#" className="tte_btn">
                                    <span>Request a Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-12">
                        <div className="text-center">
                            <h2 className="font-40 font-weight-bold">Why Choose Paytm-m’Loyal™ ?</h2>
                            <h4 className="font-20 font-weight-semi">Open your brand to the limitless customer engagement possibilities with Paytm m'loyal</h4>
                        </div>  
                    </div>
                </div>      

                <div className="d-flex align-items-start justify-content-between flex-wrap mt-5">
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="paytmIcon">
                            <img src="images/trustedLoyaltyPartner.png" className="img-fluid" alt="" />
                        </div>
                        <h3 className="font-20 font-weight-medium">Trusted Loyalty Partner</h3>
                        <p className="font-15 font-weight-semi mt-md-4">100 Million+ Loyalty members, 300+ Brands Engaged & ₹161 Billion+ Loyalty Sales</p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="paytmIcon">
                            <img src="images/onePlateform.png" className="img-fluid" alt="" />
                        </div>
                        <h3 className="font-20 font-weight-medium">One Platform - Multiple Uses</h3>
                        <p className="font-15 font-weight-semi mt-md-4">Drive end-to-end customer engagement from one powerful dashboard.</p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="paytmIcon">
                            <img src="images/scaleUp.png" className="img-fluid" alt="" />
                        </div>
                        <h3 className="font-20 font-weight-medium">Scale Up with the Paytm App</h3>
                        <p className="font-15 font-weight-semi mt-md-4">Launch your Loyalty Program on the Paytm App and increase reach, nrolments, redemptions and a host of benefits to your customers & influencers </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="paytmIcon">
                            <img src="images/pos_integration.png" className="img-fluid" alt="" />
                        </div>
                        <h3 className="font-20 font-weight-medium">Hasslefree POS Integration</h3>
                        <p className="font-15 font-weight-semi mt-md-4">Supports quick & easy integration with a wide range of billing systems.</p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="paytmIcon">
                            <img src="images/payWithPoints.png" className="img-fluid" alt="" />
                        </div>
                        <h3 className="font-20 font-weight-medium">Let Customers Pay With Points</h3>
                        <p className="font-15 font-weight-semi mt-md-4">Let customers use their mobile phones to earn & burn points without using cash with the Paytm App.</p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="paytmIcon">
                            <img src="images/increaseROI.png" className="img-fluid" alt="" />
                        </div>
                        <h3 className="font-20 font-weight-medium">Increase ROI for your Business</h3>
                        <p className="font-15 font-weight-semi mt-md-4">Gain valuable insights for faster decision-making & reduce operating costs.</p>
                    </div>                    
                </div>
            </div>
            </section>

            {/* Brand Section Starts Here */}

            <section className="brand_section py-5 bg_grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 m-auto">
                            <h1 className="font-weight-bold crm_heading text-center mb-4 font-46">Customer Loyalty Industry Segments</h1>
                        </div>
                    </div>                                        
                    <div className="d-flex justify-content-between align-items-start mt-5 flex-wrap">
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/fnb.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Food & Beverage</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/luxury.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Luxury</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/fashion.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Fashion & LFR</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/healthWellness.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Health & Wellness</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/electronics.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Electronics</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/entertainment.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Entertainment</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/mall.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Mall</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/bfsi.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">BFSI</h3>                            
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 col-12 m-auto">
                            <h1 className="font-weight-bold crm_heading text-center mb-4 font-46 mt-5">Create Successful Trade loyalty & Channel Reward Programs</h1>
                        </div>
                    </div>                                        
                    <div className="d-flex justify-content-between align-items-start mt-5 flex-wrap">
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/dealers.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Dealers</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/influencers.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Influencers</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/resellers.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Resellers</h3>                            
                        </div>
                        <div className="col-md-3 col-sm-4 mb-5">
                            <img src="images/salesRepresentatives.png" alt="" className="img-fluid" />
                            <h3 className="font-weight-medium font-20 mt-3 text-center">Sales Representatives / Employees</h3>                            
                        </div>                        
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="custom_b_btns">
                            <a href="#" className="tte_btn">
                                <span>Request a Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Award And Recognition Section Starts Here */}

            <section className="awards py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 m-auto">
                            <h3 className="font-40 font-weight-bold mt-3 mb-4 text-center">Awards & Recognitions</h3>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-start flex-wrap mt-5">
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/aimialargelogo.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Innovation in Loyalty</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">AIMIA Loyalty Summit</h3>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/indian_retail_logo.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Best CRM Technology</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">India Retail Award</h3>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/Amity-Global-Institute-logo.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Amity Global Leadership</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">Amity Global </h3>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/aegisGrahambell.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Innovation in Mobile app for Enterprises</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">Aegis Graham Bell</h3>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/student_information_system_indira_international_innovation_logo.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Entrepreneurship Award</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">Indira International Innovation</h3>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/loyaltysummit.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Best Customer Loyalty</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">Customer Loyalty Summit</h3>
                        </div> 
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/CIOoulook-logo.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Top 25 Big Company</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">CIO Outlook Asia Pacific</h3>
                        </div> 
                        <div className="col-md-4 col-sm-6 col-12 mb-5">
                            <div className="awardLogo">
                                <img src="images/star-retailer-logo.png" className="img-fluid" alt="" />
                            </div>
                            <h4 className="font-20 font-weight-medium">Best Loyalty Solution Award</h4>
                            <h3 className="font-26 font-weight-semi mt-md-4 text-dark_grey">Star Retailer Award</h3>
                        </div>                
                    </div>
                </div>
            </section>

            {/* Success Stories Section Starts Here */}

            <section className="testimonials py-5 bg_grey">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 m-auto">
                            <h3 className="font-40 font-weight-bold mt-3 mb-4 text-center">Success Stories</h3>
                        </div>
                    </div>
                    <div className="container-fluid mt-4 mb-3">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-sm-12">
                                <OwlCarousel className='owl-theme' loop margin={33} nav dots="false">
                                    <div className='testimonial_item bg-white'>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="testimonial_logo mr-3">
                                                <img src="images/newU.png" className="img-fluid" alt="" />
                                            </div>
                                            <div className="testimonial_content">
                                                <h4 className="font-20 font-weight-medium mb-1">New U</h4>
                                                <p className="font-15 font-weight-semi text-black-50 mb-0">Mr. Vijay Shanker <br />COO-H&B Stores Limited</p>
                                            </div>
                                        </div>
                                        <div className="w-100 mt-3">
                                            <p className="font-15 font-weight-bold lh-14 text-medium-grey">The entire team is creative & keeps suggesting innovative ways to connect with customers & create new avenues of sales.</p>
                                            <a href="/" className="font-20 font-weight-bold text_primary">Read More</a>
                                        </div>
                                    </div>                                    
                                    <div className='testimonial_item bg-white'>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="testimonial_logo mr-3">
                                                <img src="images/Inc5.png" className="img-fluid" alt="" />
                                            </div>
                                            <div className="testimonial_content">
                                                <h4 className="font-20 font-weight-medium mb-1">Inc.5 Shoes</h4>
                                                <p className="font-15 font-weight-semi text-black-50 mb-0">Mr Amin Virji <br />CEO</p>
                                            </div>
                                        </div>
                                        <div className="w-100 mt-3">
                                            <p className="font-15 font-weight-bold lh-14 text-medium-grey">Support is quite strong, thanks to live ticketing and support mechanism from the entire team!.</p>
                                            <a href="/" className="font-20 font-weight-bold text_primary">Read More</a>
                                        </div>
                                    </div>                                  
                                    <div className='testimonial_item bg-white'>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="testimonial_logo mr-3">
                                                <img src="images/orchid.png" className="img-fluid" alt="" />
                                            </div>
                                            <div className="testimonial_content">
                                                <h4 className="font-20 font-weight-medium mb-1">Orchid Hotels</h4>
                                                <p className="font-15 font-weight-semi text-black-50 mb-0">Mr. Vishal Kamat  <br />Director, The Orchid Hotel</p>
                                            </div>
                                        </div>
                                        <div className="w-100 mt-3">
                                            <p className="font-15 font-weight-bold lh-14 text-medium-grey">MobiQuest has helped us to have an insight and optimum utilization of our existing vast database .</p>
                                            <a href="/" className="font-20 font-weight-bold text_primary">Read More</a>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div> 
                    </div>                    
                </div>
            </section>


        </div>
    )
}
