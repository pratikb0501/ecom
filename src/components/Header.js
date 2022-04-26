import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglePage } from '../actions/product-action';

export default function Header() {
    const myCart = useSelector(state => state.allProducts.myCart);
    const currentPage = useSelector(state => state.allProducts.currentPage)
    const dispatch = useDispatch();
    return (
        <div className='header'>
            <h1>
                <p className='cur-ptr' onClick={() => dispatch(togglePage("homepage"))} title="Go to store">My Store</p>
                <p className='cur-ptr' onClick={() => dispatch(togglePage("mycart"))} title="Go to cart">Cart {myCart.length}</p>
            </h1>
        </div>
    )
}
