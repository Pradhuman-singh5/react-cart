import Card from "./Card"
import { useState,useEffect} from 'react'

const Product = () => {
    const [cards,setCards] = useState([])

    useEffect(()=>{
        fetch('../data.json')
        .then(res=> res.json())
        .then(card =>{
            setCards(card);

        })
    },[])
    
    return (
        <div className="mx-8 pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 my-8 gap-24">
                {
                    cards.map(cards=><Card key={cards.id} card={cards}/>)
            
                }
                
            </div>
        </div>
    )
}

export default Product
