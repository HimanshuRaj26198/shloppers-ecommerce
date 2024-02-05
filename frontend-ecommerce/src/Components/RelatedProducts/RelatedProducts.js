import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
const RelatedProducts=()=>{
    return <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className='relatedproducts-item'>
                {data_product.map((elem)=>{
                    return <Item  key={elem.id} elem={elem}/>
                })}
            </div>
    </div>
}
export default RelatedProducts;