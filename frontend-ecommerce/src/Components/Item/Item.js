import './Item.css';
import { Link } from 'react-router-dom';
const Item = ({ elem }) => {
  return <div className="item">
    <Link to={`/product/${elem.id}`} ><img style={{ maxHeight: "418px", maxWidth: "350px" }} onClick={() => window.scrollTo(0, 0)} src={elem.image} /></Link>
    <p>{elem.name}</p>
    <div className='item-prices'>
      <div className='item-price-new'>
        ${elem.new_price}
      </div>
      <div className='item-price-old'>
        ${elem.old_price}
      </div>
    </div>

  </div>
}

export default Item;