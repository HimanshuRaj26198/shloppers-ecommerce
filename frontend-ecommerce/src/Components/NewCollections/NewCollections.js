 import './NewCollections.css';
 import new_collection from '../Assets/new_collections'
import Item from '../Item/Item';
 const NewCollections=()=>{
    return <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
          {new_collection.map((elem)=>{
            return <Item   key={elem.id} elem={elem}/>
          })}
        </div>

    </div>
 }

 export default NewCollections;