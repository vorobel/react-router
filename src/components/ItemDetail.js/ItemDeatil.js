import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Item({ match }) {

  useEffect(() => {
    fetchItem();
  }, [])

  const [item, setItem] = useState([])

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`);
    const data = await fetchItem.json();
    setItem(data);
  }

  return (
    <div className='item-detail'>
      <h1>{item.name}</h1>
      <p>{item.status}</p>
      <img src={item.image}/>
    </div>
  )
}

export default Item;