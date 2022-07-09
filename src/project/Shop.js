import React from 'react';
import "./Styles.css";
import { Link } from 'react-router-dom';

export default function Shop() {
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
          {
            "id" : "2",
            "name": "Morphy Richards 25 L Convection Microwave Oven  (MWO 25CG, Steel)",
            "productId": "EURO19938202",
            "brandName": "Morphy",
            "category": "Microwave Ovens",
            "companyAssured": true,
            "rating": "3.9",
            "price": "10999",
            "discount": "11%",
            "imageURL": "https://rukminim1.flixcart.com/image/416/416/microwave-new/v/q/y/morphy-richard-25cg-original-imaec2ddymudmze3.jpeg?q=70",
            "sellerName": "Kwitch Retails",
            "isNewProduct": false
          },
          {
            "id" :"3",
            "name": "iPhone 12 (64-gigabyte)",
            "productId": "EURO19938404",
            "brandName": "Apple",
            "category": "Mobile",
            "companyAssured": true,
            "rating": "4",
            "price": "40000",
            "discount": "10%",
            "imageURL": "https://image.shutterstock.com/image-photo/mobile-smart-phone-on-white-260nw-1311685394.jpg",
            "sellerName": "Sandy",
            "isNewProduct": true
          },
          {
            "id" :"4",
            "name": "Sari",
            "productId": "EURO19938606",
            "brandName": "Niza Fashion",
            "category": "sari",
            "companyAssured": true,
            "rating": "4",
            "price": "4000",
            "discount": "10%",
            "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniUb2l7do-zdYl4yBwMWIU4TV0wmFephHcQ&usqp=CAU",
            "sellerName": "Nazeera",
            "isNewProduct": true
          }
    ]
  return (
    <>
    <div className='boxy'>
        {data.map((value,index)=>{
            return (
                <div className='box1' key={index}>
                    <div className='img'> <Link to={"/add"} > <img  src={value.imageURL}/> </Link>  </div>
                    <div>
                    <p>{value.brandName}</p>
                    <p>{value.price}</p>
                    <p>{value.sellerName}</p>
                    <p>{value.discount}</p>
                    </div>
                    <button > <Link to="/add" >ADD TO CART</Link> </button>
                </div>
            )
        })}
    </div>
    
    </>
  )
}
