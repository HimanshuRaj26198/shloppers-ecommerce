import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState, useRef } from 'react';



const AddProduct = () => {
    const [image, setImage] = useState(false);
    const name = useRef('');
    const category = useRef('');
    const old_price = useRef('');
    const new_price = useRef('');
    // const [productDetails, setproductDetails] = useState({
    //     name: '',
    //     image: '',
    //     category: '',
    //     old_price: '',
    //     new_price: ''
    // });
    const imageHandler = (e) => {
        setImage(e.target.files[0]);

    }
    // const changeHandler = (e) => {
    //     console.log(e.target.name)
    //     setproductDetails({ ...productDetails, [e.target.name]: e.target.value })
    // }

    const Add_Product = async () => {
        const productDetails = {
            name: name.current.value,
            category: category.current.value,
            image: '',
            old_price: old_price.current.value,
            new_price: new_price.current.value
        }
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);
        await fetch("http://localhost:4000/upload", { method: "POST", headers: { Accept: "application/json" }, body: formData }).then((resp) => resp.json()).then((data) => { responseData = data });
        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch("http://localhost:4000/addproducts", { method: "POST", headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(product) })
                .then((resp) => resp.json).then((data) => { alert("Product added") }).catch(err => alert("Failed"))
        }
    }
    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input ref={name} type="text" name='name' placeholder='type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input ref={old_price} type="text" name='old_price' placeholder='type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p> Offer Price</p>
                    <input ref={new_price} type="text" name='new_price' placeholder='type here' />
                </div>
            </div>

            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select ref={category} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={() => { Add_Product() }} className='addproduct-btn'>ADD</button>
        </div>
    )
}

export default AddProduct;