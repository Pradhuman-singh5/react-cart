import { Link } from "react-router-dom";
import {useContext, useState} from 'react'
import { CartContext } from "../CartContext";
const Card = (props) => {
    const [isAdding , setIsAdding ] = useState(false);
    const {cart,setCart} = useContext(CartContext);
    const {card}=props;

    const AddToCart = (event,cardinfo)=>{
        event.preventDefault()
        let _cart = {...cart};
        if(!_cart.items){
            _cart.items={}
        }
        if(_cart.items[card.id]){
            _cart.items[card.id]+=1;
        }else{
            _cart.items[card.id]=1
        }
        if(!_cart.totalItems){
            _cart.totalItems=0;
        }
        _cart.totalItems+=1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000);
    }

    return (
        
            <Link to={`/products/${card.id}`}>
            <div>
                <img src={card.img} alt="p1"/>
                <h2 className="text-lg font-bold py-2">{card.name}</h2>
                <div className="flex justify-between items-center mt-4">
                    <span>₹{card.price}</span>
                    <button disabled={isAdding} onClick={(e)=>{AddToCart(e,card)}} className={`${isAdding?'bg-green-500':'bg-blue-500'} py-1 px-4 rounded-full font-bold`}>Add{isAdding?'ed':''}</button>
                </div>
                </div>
            </Link>
        
    )
}

export default Card
