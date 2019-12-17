import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src="https://media.licdn.com/dms/image/C5103AQFKD5Za66TbkA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=dmLrmxuepUKCPb_Vu4ZvfeXWgLu4gibULm17iOFOlGg" /></a>
                    <br />
                    <h1>
                    Fullstack developer<br /> 
                    based on Chennai</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
