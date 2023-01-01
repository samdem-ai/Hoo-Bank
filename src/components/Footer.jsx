import { logo, instagram, facebook, twitter, linkedin } from "../assets";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="text-container">
                <div className="footer-section__line"></div>
                <div className="footer-section__content row">
                    <div className="footer-section__upper row">
                        <div className="footer-section__logo-container col">
                            <img loading="lazy" src={logo} alt="logo" className="footer-section__logo" />
                            <p className="footer-section__text">A new way to make the payments easy, reliable and secure.</p>
                        </div>
                        <div className="footer-section__links">
                            <div className="col">
                                <h2 className="footer-section__title">Useful Links</h2>
                                <a href="#">Content</a>
                                <a href="#">How it Works</a>
                                <a href="#">Create</a>
                                <a href="#">Explore</a>
                                <a href="#">Terms & Services</a>
                            </div>
                            <div className="col">
                                <h2 className="footer-section__title">Community</h2>
                                <a href="#">Help Center</a>
                                <a href="#">Partners</a>
                                <a href="#">Suggestions</a>
                                <a href="#">Blog</a>
                                <a href="#">Newsletters</a>
                            </div>
                            <div className="col">
                                <h2 className="footer-section__title">Partner</h2>
                                <a href="#">Our Partner</a>
                                <a href="#">Become a Partner</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section__line"></div>
                    <div className="footer-section__socials row">
                        <div className="col">
                            <p className="footer-section__text footer-section__text--smaller">Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
                        </div>
                        <div className="col">
                            <img loading="lazy" role={'link'} src={instagram} alt="instagram" />
                            <img loading="lazy" role={'link'} src={facebook} alt="facebook" />
                            <img loading="lazy" role={'link'} src={twitter} alt="twitter" />
                            <img loading="lazy" role={'link'} src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
