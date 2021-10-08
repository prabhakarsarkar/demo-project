import React from "react";
import Img from "./Img";

const FooterComponent = () => {
    return (
        <React.Fragment>
            <footer className="container">
                <hr style={{ backgroundColor: "whitesmoke" }} />
                <div class="footer_div">
                    <div class="left_footer">
                        <a href="#">
                            <p>RSS</p>
                        </a>
                        <a href="#">
                            <p>Tags</p>
                        </a>
                        <a href="#">
                            <p>Shop</p>
                        </a>
                        <a href="#">
                            <p>Blog</p>
                        </a>
                        <a href="#">
                            <p>Become an amateur</p>
                        </a>
                        <a href="#">
                            <p>Sitemap</p>
                        </a>
                        <a href="#">
                            <p>Download MDH Chat App</p>
                        </a>
                        <a href="#"><img class="left_footer__img" src="/images/hotsaka.png" /></a>
                    </div>
                    <div class="middle_footer">
                        <a href="#">
                            <p>Impront</p>
                        </a>
                        <a href="#">
                            <p>Content Removal</p>
                        </a>
                        <a href="#">
                            <p>FAQ/Contact</p>
                        </a>
                        <a href="#">
                            <p>Terms of Use</p>
                        </a>
                        <a href="#">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="#">
                            <p>Press</p>
                        </a>
                        <a href="#">
                            <p>Affiliates</p>
                        </a>
                        <a href="#">
                            <p>Feedback</p>
                        </a>
                        <div>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </div>

                    <div class="right_footer">
                        <p>mydirtyhobby.com © Copyright 2021 MG Social Ltd. | Trademarks MG Licensing Europe
                            S.à.r.l.</p>
                        <p><span>MG Billing US Corp. 2300 Empire Avenue, 7th Floor, Burbank,CA 91504, USA MG Billing
                            Limited, 195-197 Old Nicosia-Limassol Road, Dali Industrial Zone 2540, Block 1,
                            Cyprus</span></p>
                        <p>This site is operated by MG Social Limited. Registered address: Block 1, 195-197 Old
                            Nicosia-Limassol Road, Dali Industrial zone, Cyprus 2540.</p>
                        <p><a>18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement</a></p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default FooterComponent;
