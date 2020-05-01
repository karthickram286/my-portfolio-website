import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="." className="image avatar"><img alt="profile pic" src="https://media-exp1.licdn.com/dms/image/C5103AQEigFV_NbS2xA/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=jgf_TDcTkDQ1ZOPhMaz8QuPmdhSlXbIM_CoXclC_7hk" /></a>
                    <br />
                    <h2>
                    Karthick Ram
                    </h2>
                    <h5>Software Developer, Tech Enthusiast, Football fanatic</h5>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
