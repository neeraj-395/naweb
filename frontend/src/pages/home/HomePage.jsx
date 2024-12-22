import Paper from "@mui/material/Paper";
import Carousal from "react-material-ui-carousel"

import './HomePage.css';

import slide1 from "../../assets/slides/slide1.jpg"
import slide2 from "../../assets/slides/slide2.jpg"
import slide3 from "../../assets/slides/slide3.jpg"

function HomePage() {
    return (
        <Carousal indicators={false}>
            <Paper className="carousal-item">
                <img src={slide1} className="carousal-img" alt="slide1" />
            </Paper>
            <Paper className="carousal-item">
                <img src={slide2} className="carousal-img" alt="slide2" />
            </Paper>
            <Paper className="carousal-item">
                <img src={slide3} className="carousal-img" alt="slide3" />
            </Paper>
        </Carousal>
    );
}

export default HomePage;