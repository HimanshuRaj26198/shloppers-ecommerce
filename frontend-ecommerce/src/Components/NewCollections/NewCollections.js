import { useEffect, useState } from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item';
const NewCollections = ({ refProp }) => {

  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollectioned').then(res => res.json()).then(data => setNewCollection(data)).catch(err => console.log(err))
  }, [])



  return <div id='LLLLL' ref={refProp} className="new-collections">
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className='collections'>
      {newCollection.map((elem) => {
        return <Item key={elem.id} elem={elem} />
      })}
    </div>

  </div>
}

export default NewCollections;