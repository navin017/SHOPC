import React from 'react'
import { useSelector } from 'react-redux';
import './products.css';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title, category,image} = products[0];
  return (
    <div>
      <div className='components'>
      <img src={image} alt='img'/>
        <ul>
          <div className='content'>
            <li>
              {title}
              {id}
              {category}
            </li>
            <li className='modify'><button className='view-btn'>view</button><AutoFixHighRoundedIcon/></li>
          </div>
        </ul>
      </div>
    </div>
  )
}


