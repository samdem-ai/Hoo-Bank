import "./Features.css";
import { send, shield, star, bill, apple, google, card } from '../assets'

const Features = () => {
    return (
        <div className="features-section">
            <div className="text-container">
                <div className="features-section__handling-money row">
                    <div className="features-section__left col">
                        <h2 className="features-section__title">
                            You do the business, we’ll handle the money.
                        </h2>
                        <p className="features-section__text">
                            With the right credit card, you can improve your financial life by
                            building credit, earning rewards and saving money. But with
                            hundreds of credit cards on the market.
                        </p>
                        <button className="features-section__btn">Get Started</button>
                    </div>
                    <div className="features-section__card-container col">
                        <div className="row features-section__card ">
                            <div className="img-container col"><img loading="lazy" src={star} alt="start" className="" /></div>
                            <div className="col">
                                <h3>Rewards</h3>
                                <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                            </div>
                        </div>
                        <div className="row features-section__card features-section__card--highlighted">
                            <div className="img-container col"><img loading="lazy" src={shield} alt="shield" className="" /></div>
                            <div className="col">
                                <h3>100% Secured</h3>
                                <p>We take proactive steps make sure your information and transactions are secure.</p>
                            </div>
                        </div>
                        <div className="row features-section__card">
                            <div className="img-container col"><img loading="lazy" src={send} alt="send" className="" /></div>
                            <div className="col">
                                <h3>Balance Transfer</h3>
                                <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-section__billing row">
                    <div className="col">
                        <h2 className="features-section__title features-section__title--smaller">Easily control your billing & invoicing.</h2>
                        <p className="features-section__text">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                        <div className="features-section__img-container">
                            <img loading="lazy" src={apple} alt="apple store" />
                            <img loading="lazy" src={google} alt="play  store" />
                        </div>
                    </div>
                    <div className="col">
                        <img loading="lazy" src={bill} alt="bill image" className="features-section__bill-img" />
                    </div>
                </div>
                <div className="features-section__deal row">
                    <div className="col">
                        <h2 className="features-section__title features-section__title--smaller">Find a better card deal in few easy steps.</h2>
                        <p className="features-section__text">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                        <button className="features-section__btn">Get Started</button>
                    </div>
                    <div className="col">
                        <img loading="lazy" src={card} alt="card image" className="features-section__card-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;