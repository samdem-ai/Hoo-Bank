import { logo, menu, close } from '../assets'
import { useState } from 'react';
import './Navbar.css'




const Navbar = () => {
    const [openedNav, setOpenedNav] = useState(0);
    const [navSrc, setNavSrc] = useState(menu)
    function handleNav() {
        if (openedNav === 0) {
            document.querySelector('.nav__list').classList.add('animate')
            setNavSrc(close)
            setOpenedNav(1);
        } else {
            document.querySelector('.nav__list').classList.remove('animate')
            setNavSrc(menu)
            setOpenedNav(0);
        }
    }

    return (
        <nav className="nav">
            <div className="text-container">
                <div className="nav__mobile-container">
                    <a href="#" role={'button'}>
                        <img loading="lazy" src={logo} alt="hoo bank logo" className='nav__logo-img' />
                    </a>
                    <a href="#" role={'button'} onClick={handleNav}>
                        <img loading="lazy" src={navSrc} alt="nav toggle" className='nav__toggle' />
                    </a>
                </div>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">About Us</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Features</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Solution</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;