
import React, { useState } from "react"

const Orders = ({ productdata, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
   <>
    {productdata.map((productdata, index) => {
        return (
           <>
           <label>{count}</label> <br />
            <div><h4>{productdata.price}.00 </h4>
            <button onClick={() => addToCart(productdata)}>
            ADD</button></div>
           </>
        )
    })}
    <div>Orders</div>
   
   </>
  )
}
export default Orders