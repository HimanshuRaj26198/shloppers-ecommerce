import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png'
const Offers=()=>{
    return <div className="offers">
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h3 >Offers for you</h3>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image}/>

        </div>

    </div>
}

export default Offers;