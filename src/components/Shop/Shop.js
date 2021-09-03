import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shop.css'

function Shop() {

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const responce = await fetch('https://rickandmortyapi.com/api/character');
    const data = await responce.json();
    const items = await data.results;
    setItems(items)
  }

  const [items, setItems] = useState([])

  return (
    <div className='shop'>
      {items.map(item => {
        return (
          <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </h1>)
      })}
    </div>
  )
}

export default Shop;