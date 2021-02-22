import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1>A super simple responsite site<br />template <strong>powered by <a href="#" target="_blank">Notion</a></strong>,<br /> 
                    crafted by <a href="#" target="_blank">Conrad Lin</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
