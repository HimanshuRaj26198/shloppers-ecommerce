import './Popular.css';
import Item from '../Item/Item';
import  data_product from '../Assets/data';

const Popular=()=>{
    return <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-items'>
            {data_product.map((elem)=>{
                return <Item key={elem.id} elem={elem}/>
            })}
        </div>

    </div>
}
export default Popular;