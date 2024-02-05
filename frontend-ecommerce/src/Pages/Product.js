import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import {ShopContext} from "../Context/ShopContext";
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { ExampleContext } from '../Context/ExampleContext';



const Product = ()=>{


    const {all_product}= useContext(ShopContext)
    let {productId} = useParams();
    let product = all_product.find((e)=>e.id===Number(productId));
    return (
       <div>
            <Breadcrums product={product}/> 
            <ProductDisplay product={product}/> 
            <DescriptionBox />  
            <RelatedProducts />
       </div>
    )
}

export default Product;
