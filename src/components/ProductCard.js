import { useDispatch } from "react-redux";



export default function Productcard({ product, action, buttonText }) {

    const dispatch = useDispatch();

    return (
        <div className='main-div cur-ptr'>
            <div className='img-div'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='div-description'>
                <p className='city-name'>{product.title}</p>
            </div>
            <p className='city-distance'>{product.price} USD</p>
            <div className="add-cart">
                <button onClick={() => dispatch(action(product))}>{buttonText}</button>
            </div>
        </div>
    )
}