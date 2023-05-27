import React from 'react';
import { useSelector } from 'react-redux';
import './products.css';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  
  return (
    <div className='totControl'>
      {products.map((product) => (
        <div className='components' key={product.id}>
          <img className="img" src={product.image} alt='img' />
          <ul>
            <div className='content'>
              <li>
                {product.title}
                {product.id}
                {product.category}
              </li>
              <li className='modify'>
                <button className='view-btn'>view</button>
                <AutoFixHighRoundedIcon/>
              </li>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};
