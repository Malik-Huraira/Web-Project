import '../styles/footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="Main footer footer">
            <div className="Container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col">
                        <h5>Key Series</h5>
                        <hr />
                        <ul className="list list-unstyled">
                            <li>T20 world Cup</li>
                            <li>Australia vr pakistan</li>
                            <li>England vr India</li>
                            <li>West Indies vr Afghanistan</li>
                            <li>UAE vr Bangladesh</li>
                            <li>Psl</li>
                         <Link to={"/Qea"}> <li>QEA Trophy</li> </Link> 
                            <li>World cup 2022</li>
                            <li>Woman cup</li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col">
                        <h5>Quick link</h5>
                        <hr />
                        <ul className="list list-unstyled">
                            <li>ICC Rating</li>
                            <li>T20 Timeout</li>
                            <li>Fantasy Pick</li>
                            <li>Timeout</li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col">
                        <h5>ESPNcirinfo App</h5>
                        <hr />
                        <ul className="list list-unstyled">
                            <li>Android App</li>
                           <Link to={"/Ios"}> <li>ios App</li></Link>
                        </ul>
                    </div>
                    {/* column 4*/}
                    <div className="col">
                        <h5>Follow ESPNcirinfo</h5>
                        <hr />
                        <ul className="list list-unstyled">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Twitter</li>
                            <li>Snapchat</li>
                        </ul>
                    </div>
                    {/* column 5*/}
                    <div className="col">
                        <h5>ESPN Site</h5>
                        <hr />
                        <ul className="list list-unstyled">
                            <li>The cricket info </li>
                            <li>ESPN</li>
                        </ul>
                    </div>
                    <div className="row">
                        <p className="col-lg">
                            Term of use| privacy policy| Interested-Based-Ads| Feedback        &copy;{new Date().getFullYear()} ESPN Sport Media Ltd. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;