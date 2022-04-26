import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../thunk/product-thunk';
import { selectedProducts } from "../actions/product-action";
import Productcard from '../components/ProductCard';

export default function ProductsList() {
    const products = useSelector((state => state.allProducts.products));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <div className='all-cards'>
            {
                products && products.length > 0 && products.map(product => {
                    return (
                        <div key={product.id}>
                            <Productcard product={product} action={selectedProducts} buttonText="Add to Cart" />
                        </div>
                    )
                })
            }
            {
                products && products.length === 0 && (
                    <h3>Loading ...</h3>
                )
            }
        </div>
    )
}
