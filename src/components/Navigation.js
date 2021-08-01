import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { CartContext } from '../CartContext'
const Navigation = () => {
const cartstyle = {
    // background : "#f59e0d",
    display :"flex",
    padding : "6px 12px",
    borderRadius:"50px"
}

const {cart}=useContext(CartContext);

    return (
        <nav className=" flex items-center justify-between py-4 mx-8">
           
               <Link to="/">
                   <img style={{height:45}} src="/images/logo.png" alt="logo" />
               </Link>
            <ul className="flex items-center">
                <li><Link to="/">Home</Link></li>
                <li className="ml-6"><Link to="/products" exact>Products</Link></li>
                <li className="ml-6 ">
                    <Link to="/cart">
                        <div style={cartstyle} className="bg-blue-400">
                            <span className='text-white font-bold'>{cart.totalItems ? cart.totalItems : 0 }</span>
                            <img className="ml-2" style={{height:30}} src="/images/cart.png" alt="cart" />
                        </div>
                    </Link> 
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
