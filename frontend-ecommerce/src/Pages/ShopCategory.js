import { useContext, useEffect, useState } from 'react';
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props)=>{
    const {all_product} =useContext(ShopContext);

    let [categoryProducts, setCategoryProducts] =useState([]);

    useEffect(()=>{
      categoryProducts = [];
      let proArr = [];
      all_product.map((elem)=>{
         if (props.category===elem.category){
            proArr.push(elem);
         }
         
      });
      setCategoryProducts(proArr);
    })
   
    return (<div className="shop-category">
         <img className='ShopCategory-banner' src={props.banner} />
         <div className='ShopCategory-indexSort'>
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className='ShopCategory-sort'>
                Sort by <img src={dropdown_icon} />
            </div>
         </div>
         <div className='ShopCategory-products'>
            {console.log(categoryProducts)}
            {
            categoryProducts.map((elem)=>{                 
                    return <Item key={elem.id}  elem={elem}/>                 
            })}
         </div>
         <div className='ShopCategory-loadmore'>
            Explore More
         </div>
    </div>
    )
}

export default ShopCategory;