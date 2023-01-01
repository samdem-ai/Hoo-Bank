import { discount, arrowUp, robot } from '../assets'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="text-container">
                <div className="row">
                    <div className="hero-section__top col">
                        <div className="hero-section__discount">
                            <img loading="lazy" src={discount} alt="discount image" />
                            <h2>20%<span> DISCOUNT FOR </span>1 MONTH<span> ACCOUNT</span></h2>
                        </div>
                        <h1 className='hero-section__title'>The Next <span>Generation</span> Payment Method.
                        </h1>
                        <p className="hero-section__text">
                            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                        </p>
                    </div>
                    <div className="tablet-wrapper">
                        <div className="hero-section__img-container col">
                            <div className='hero-section__blur'></div>
                            <div className="hero-section__blur1"></div>
                            <img loading="lazy" src={robot} alt="robot hand" className="hero-section__hero-img" />
                        </div>
                        <div className="hero-section__btn-container col">
                            <div className="btn-wrapper">
                                <button className='hero-section__btn'>
                                    <span>Get<br />Started</span>
                                    <img loading="lazy" src={arrowUp} alt="arrow up" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-section__scoreboard">
                    <div className="row">
                        <div className="col">3800+ <span>User Active</span></div>
                        <div className="line"></div>
                        <div className="col">230+ <span>TRUSTED BY COMPANY</span></div>
                        <div className="line"></div>
                        <div className="col">$230M+<span>TRANSACTION</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;