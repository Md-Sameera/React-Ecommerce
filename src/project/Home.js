import React from 'react';
import "./Styles.css";

const Home=()=> {
    const data =[
        {
            "id" :"1 ",
            "name": "EUROLINE 810 POP UP 700 W Pop Up Toaster  (White)",
            "productId": "EURO19938201",
            "brandName": "EUROLINE",
            "category": "Pop Up Toasters",
            "companyAssured": false,
            "rating": "4.2",
            "price": "12232",
            "discount": "50%",
            "imageURL": "https://rukminim1.flixcart.com/image/416/416/k5lcvbk0/pop-up-toaster/2/j/w/euroline-820-pop-up-810-pop-up-original-imafz8h3duveqgh7.jpeg?q=70",
            "sellerName": "telform inc.",
            "isNewProduct": true
          },
          
    ]
  return (
    <>
    <div className='boxy'>
    <div>
    {data.map((value,index)=>{
            return (
                <div className='boxy' key={index}>
                    <div className='img'><img  src={value.imageURL}/> </div>
                    <div>
                    <p>{value.brandName}</p>
                    <p>{value.price}</p>
                    <p>{value.sellerName}</p>
                    <p>{value.discount}</p>
                        </div>
                </div>
            )
        })}
    </div>
    <div >
        <img className='shopy' src={"https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg"  } />
    </div>
    
    </div>
    </>
  )
}
export default Home