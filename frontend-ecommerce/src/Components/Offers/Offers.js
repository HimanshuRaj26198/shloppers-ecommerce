import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png'
import bannerMen from "../Assets/banner_mens.png";
import bannerWomen from "../Assets/banner_women.png";
import bannerKid from "../Assets/banner_kids.png";
const Offers = () => {



    let offerImages = [bannerMen, bannerWomen, bannerKid, exclusive_image];

    return <div className="offers">
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h3 >Offers for you</h3>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} />

        </div>

    </div>
}

export default Offers;