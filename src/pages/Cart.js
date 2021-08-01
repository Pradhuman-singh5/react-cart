import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../CartContext'

const Cart = () => {
    let total = 0;
const {cart,setCart} = useContext(CartContext);
const [products,setProducts] = useState([])
useEffect(()=>{
    if(!cart.items){
        return;
    }
    
    fetch('../data.json').then(res=>res.json()).then(data=>{
        if(!cart.items){
        return;
    }else{
        const items=Object.keys(cart.items)
        let cartitems =[]
          items.forEach(element=>{
            cartitems.push(data[element])
        })
        setProducts(cartitems)
    }
       
    })
    
    
},[cart])

const getQTY = (productid) => {
    return cart.items[productid];
}

const increment = (productid) => {
    const existingQty = cart.items[productid]
    const _cart = {...cart};
    _cart.items[productid]=existingQty+1;
    _cart.totalItems += 1;
    setCart(_cart);
}

const decrement = (productid) => {
    const existingQty = cart.items[productid]
    if(existingQty===1){
        return;
    }
    const _cart = {...cart};
    _cart.items[productid]=existingQty-1;
    _cart.totalItems -= 1;
    setCart(_cart);
}

const getSum = (productid,price) => {
    const sum = price * getQTY(productid);
    total+=sum
    return sum;
}

const handleDelete = (productid) => {

    const _cart = {...cart};
    const qty = _cart.items[productid];
    delete _cart.items[productid];
    _cart.totalItems -= qty;
    setCart(_cart)
}

const handleOrderNow = () => {
    window.alert('Order Placed Succesfully!');
    setProducts([]);
    setCart({});
}

    return (
        !products.length
        ?<img className='mx-auto w-1/2 mt-1/2' src='/images/emptycart.png' alt='emptycart' />
        :
        
        <div className="Center py-16 mx-8 lg:w-1/2 w-full pb-20">
                <h1 className='my-12 font-bold'>Cart items</h1>
                <ul>

                    {
                        products.map(product => {
                            return(
                        <li className='mb-12' key={product.id}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className=" h-16" src={product.img} alt='Product' />
                                    <span className='font-bold ml-4 w-48'>{product.name}</span>
                                 </div>
                                <div className='flex items-center justify-between'>
                                    <button onClick={()=>{decrement(product.id)}} className="bg-blue-500 px-4 py-2 rounded-full leading-none"><b>-</b></button>
                                    <b className='px-4'>{getQTY(product.id)}</b>
                                    <button onClick={()=>{increment(product.id)}} className="bg-blue-500 px-4 py-2 rounded-full leading-none"><b>+</b></button>
                                </div>
                                    <span>₹{getSum(product.id,product.price)}</span>
                                    <button onClick={()=>{handleDelete(product.id)}} className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
                            </div>
                        </li>
                            )
                        })
                    }
                </ul>
                <hr className='my-6'/>
                <div className='text-right'>
                    <b>Grand Total:</b> ₹{total}
                </div>
                <div className='text-right mt-6'>
                    <button onClick={handleOrderNow} className='bg-blue-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
                </div>
        </div>
        
    )
}

export default Cart
