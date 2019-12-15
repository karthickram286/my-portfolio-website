import React from 'react'
import { 
    FaHackerrank
} from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <h5>Find me on various platforms</h5>
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/karthick-ram/" className="icon fa-linkedin-square"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://twitter.com/Karthic87552474" className="icon fa-twitter-square"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/karthickram286/" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://stackoverflow.com/users/6056634/karthick-ram" className="icon fa-stack-overflow"><span className="label">StackOverflow</span></a></li>
                        <li><a href="https://medium.com/@karthick_ram96" className="icon fa-medium"><span className="label">Medium</span></a></li>
                        <li><a href="https://www.hackerrank.com/Karthick_ram"><FaHackerrank></FaHackerrank></a></li>
                        <li><a href="https://www.xing.com/profile/Karthick_Ramachandran3/cv" className="icon fa-xing-square"><span className="label">Xing</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Made with ❤️ in Chennai</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
