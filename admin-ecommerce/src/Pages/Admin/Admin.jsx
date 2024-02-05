
import Sidewar from '../../Components/Sidewar/Sidewar';
import {Routes ,Route} from 'react-router-dom';
import './Admin.css';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
const Admin = () => {
  return (
    <div className='admin' >
      <Sidewar /> 
      <Routes>
        <Route path='/addproduct'   element={<AddProduct />}/>
        <Route path='/listproduct'  element={<ListProduct />} />
      </Routes>

      </div>
  )
}

export default Admin