import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import revista from '../assets/images/thumbs/revista.png'
import activityLogger from '../assets/images/thumbs/activityLogger.png'

const DEFAULT_IMAGES = [
    { id: '1', thumbnail: revista, caption: 'Revista', description: 'A Journal app built using MERN stack.', githubLink: 'https://github.com/karthickram286/Revista', liveVersion: 'https://cryptic-oasis-70200.herokuapp.com/'},
    { id: '2', thumbnail: activityLogger, caption: 'Activity Logger', description: 'Activity Logger application to track activity of various users', githubLink: 'https://github.com/karthickram286/activity-logger'},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Karthick Ram"
        const siteDescription = "My Portfolio website powered by gatsby.js"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h1>About Me</h1>
                        </header>
                        <p>Hello, and welcome to <strong>Karthick Ram's</strong>, corner of the Internet. I'm 24 years old and a Software Developer by profession.<br /><br />
                        I was born and grew up in <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank" rel="noopener noreferrer">Chennai</a> and I love it here. Unfortunately, I have not traveled the world yet.<br /><br />
                        Earned my Bachelor's degree in Information Technology from <a href="https://en.wikipedia.org/wiki/Anna_University" target="_blank" rel="noopener noreferrer">Anna University</a>,
                        and I'm currently working as a Software Engineer in <a href="https://www.samsung.com" target="_blank" rel="noopener noreferrer">Samsung Electronics</a>. 
                        I was working at <a href="https://www.zoho.com" target="_blank" rel="noopener noreferrer">Zoho Corporation</a> prior this.<br /><br />
                        I build products using Java and JavaScript. Besides that, I love to read about Product Design, Scalable systems and problem-solving. To know what I've been up to lately you can follow my <a href="https://the-code-less-travelled.netlify.com/" target="_blank" rel="noopener noreferrer">tech-blog.</a><br /><br />
                        I religiously follow football and a diehard fan of <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." target="_blank" rel="noopener noreferrer">Chelsea Football Club</a>. Keep the Blue flag flying high 💙.<br /> 
                        </p>
                    </section>

                    <section id="two">
                        <h1>Projects</h1>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, thumbnail, caption, description, githubLink, liveVersion }) => ({
                            thumbnail,
                            caption,
                            description,
                            githubLink,
                            liveVersion
                        }))} />

                    </section>

                    <section id="three">
                        <h2>My <a 
                                href="https://github.com/karthickram286" 
                                target="_blank" rel="noopener noreferrer">GitHub</a> Contribution
                        </h2>
                        <center><img src={"http://ghchart.rshah.org/karthickram286"} alt="Github contributions"></img></center>
                    </section>

                    <section id="four">
                        <h2>Contact</h2>
                        <p>Have a question for me? Hire me? Want to grab a cup of coffee? Feel free to contact me!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:karthik.28696@gmail.com">karthik.28686@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-linkedin-square"><span className="label">LinkedIn</span></h3>
                                        <a href="https://www.linkedin.com/in/karthick-ram/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +91 9445633151
                                    </li>
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        No.2, Anna Street, Thiru nagar, Anakaputhur<br />
                                        Chennai, Tamil Nadu 600070, India.
                                    </li>
                                    <li>
                                        <h3 className="icon fa-calendar"><span className="label">Calendly</span></h3>
                                        <a href="https://calendly.com/karthick-ram" target="_blank" rel="noopener noreferrer">Schedule a meeting</a>
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