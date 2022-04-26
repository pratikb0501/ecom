import React from 'react'
import { useSelector } from 'react-redux';
import { removeProduct } from '../actions/product-action';
import Productcard from '../components/ProductCard';

export default function MyCart() {
    const myCart = useSelector(state => state.allProducts.myCart)
    return (
        <div className='all-cards'>
            {
                myCart && myCart.length > 0 && myCart.map(product => {
                    return (
                        <div key={product.id}>
                            <Productcard product={product} action={removeProduct} buttonText="Remove From Cart" />
                        </div>
                    )
                })
            }
            {
                myCart && myCart.length === 0 && (
                    <h1>No items in cart</h1>
                )
            }
        </div>
    )
}
