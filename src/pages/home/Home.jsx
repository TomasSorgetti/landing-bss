import { Component } from 'react';
import HeroBanner from "../../components/hero_banner/HeroBanner";
import BestSellers from "../../components/best_sellers/BestSellers"
class Home extends Component {
    render() {
        return (
            <>
                <HeroBanner />
                <BestSellers />
            </>
        );
    }
}

export default Home;