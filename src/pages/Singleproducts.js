
import { useState,useEffect,useContext } from 'react'
import { useParams , useHistory } from 'react-router-dom'
import { CartContext } from '../CartContext';

const Singleproducts = () => {
    const params = useParams();
    const [products,setProducts] = useState([])
    const history = useHistory();
    const {cart,setCart} = useContext(CartContext);
    const [isAdding , setIsAdding ] = useState(false);

    const AddToCart = (event,cardinfo)=>{
        event.preventDefault()
        let _cart = {...cart};
        if(!_cart.items){
            _cart.items={}
        }
        if(_cart.items[products.id]){
            _cart.items[products.id]+=1;
        }else{
            _cart.items[products.id]=1
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

    useEffect(()=>{
        fetch('../data.json')
        .then(res=> res.json())
        .then(data =>{
            setProducts(data[params.id]);
        }).catch(error => console.log(error))
    },[params.id])
    
    return (
        <div className=" mx-8 mt-9">
            <button className="mb-5 font-bold" onClick={()=>{history.goBack()}}>Back</button>
            <div className=" md:flex">
                <img className="w-100 md:w-3/5" src={products?.img} alt="product_img" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{products?.name}</h1>
                    <div className="font-bold mt-2">₹{products?.price}</div>
                    <button disabled={isAdding} onClick={(e)=>{AddToCart(e,products)}} className={`${isAdding?'bg-green-500':'bg-blue-500'} py-1 px-8 rounded-full font-bold mt-4`}>Add{isAdding?'ed':''} to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Singleproducts
