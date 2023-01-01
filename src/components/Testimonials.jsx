import { people01, people02, people03, quotes, airbnb, binance, coinbase, dropbox } from "../assets";
import './Testimonials.css'

const Testimonials = () => {
    const testaments = [
        {
            text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
            profile: people01,
            name: "Herman Jensen",
            status: "Founder & Leader",
        },
        {
            text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
            profile: people02,
            name: "Steve Mark",
            status: "Founder & Leader",
        },
        {
            text: "It is usually people in the money business, finance, and international trade that are really rich.",
            profile: people03,
            name: "Kenn Gallagher",
            status: "Founder & Leader",
        },
    ];

    const brands = [{ brand: 'airbnb', src: airbnb }, { brand: 'binance', src: binance }, { brand: 'coinbase', src: coinbase }, { brand: 'dropbox', src: dropbox }]
    return (
        <div className="testimonials-section">
            <div className="text-container">
                <div className="row">
                    <h1 className="testimonials-section__title">What people are saying about us</h1>
                    <p className="testimonials-section__text">
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                    </p>
                </div>
                <div className="testimonials-section__blur"></div>
                <div className="testimonials-section__testaments row">
                    {testaments.map((testament) => (
                        <div
                            className={`col testimonials-section__card ${testament.name === "Herman Jensen"
                                ? "testimonials-section__card--highlighted"
                                : ""
                                }`}
                            key={testament.name}
                        >
                            <img loading="lazy"
                                src={quotes}
                                alt="quotes"
                                className="testimonials-section__quotes-img"
                            />
                            <p>{testament.text}</p>
                            <div className="testimonials-section__profile">
                                <img loading="lazy" src={testament.profile} alt="profile picture" />
                                <div className="text">
                                    <h3>{testament.name}</h3>
                                    <p>{testament.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="testimonials-section__used-by">
                    {brands.map(brand => (
                        <div className="testimonials-section__brand" key={brand.brand}>
                            <img loading="lazy" src={brand.src} alt={`${brand.name} image`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
