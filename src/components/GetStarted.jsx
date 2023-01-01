import './GetStarted.css'

const GetStarted = () => {
    return (
        <div className="get-started-section">
            <div className="text-container">
                <div className="get-started-section__inside row">
                    <div className="col get-started-section__text-container">
                        <h2 className='get-started-section__title'>Let’s try our service now!</h2>
                        <p className='get-started-section__text'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                    <div className="col">
                        <button className="get-started-section__btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;