import Footer from "../components/Footer";
import LeftBar from "../components/LeftBar";
import NavBar from "./Mainnav";
import Mid from "./Midsec";
import Right from "./Right";

const Cricket = () => {
    return (
        <div>
            <div className="row" style={{ height: 70, width:'100vw' }}>
                <div className="col-md-12 col-lg-12 col-12"><NavBar/></div>
            </div>
            <div className="row">
                <div className="col-md-3 col-lg-3 col-12" style={{ height:'auto'}}><LeftBar/></div>
                <div className="col-md-6 col-lg-6 col-12" style={{ height:'auto'}}><Mid/></div>
                <div className="col-md-3 col-lg-3 col-12" style={{ height:'auto' }}><Right/></div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12 col-12" ><Footer /></div>
            </div>
        </div>
    );
}

export default Cricket;