import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h1>Software Developer</h1>
                        </header>
                        <p>Hello. My name is <strong>Karthick Ram</strong>, a Fullstack developer since 2017. I currently work as a Backend Engineer at <a href="https://www.zoho.com" target="_blank">Zoho Corporation</a>. In my spare time, I keep myself occupied with side projects. To see what I've been upto lately check-out my <a href="https://the-code-less-travelled.netlify.com/" target="_blank">blog</a>.</p>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                    <h2>Github Contribution</h2>
                    <center><img src={"http://ghchart.rshah.org/karthickram286"} alt="Github contributions"></img></center>
                    </section>

                    <section id="four">
                        <h2>Contact</h2>
                        <p>Have a question for me? Hire me? Want to grab a cup of coffee? Feel free to contact me!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <input type="hidden" name="contact-form-name" value="contact-form" />
                                    {/* <div className="row uniform 50%"> */}
                                        {/* <div className="6u 12u$(xsmall)"> */}
                                            <input type="text" name="name" id="name" placeholder="Name" /> <br />
                                        {/* </div> */}
                                        {/* <div className="6u 12u$(xsmall)"> */}
                                            <input type="email" name="email" id="email" placeholder="Email" /> <br />
                                        {/* </div> */}
                                        {/* <div className="12u"> */}
                                            <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
                                        {/* </div> */}
                                    {/* </div> */}
                                    <br />
                                    <button type="submit">Send Message</button>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        No.2 Anna Street, Thiru nagar, Anakaputhur.<br />
                                        Chennai, Tamil Nadu 600070<br />
                                        India
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +91 9445633151
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">karthik.28686@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex