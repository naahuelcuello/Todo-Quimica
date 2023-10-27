import React from 'react'
import './CartWidget.css'
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {
  return (
    <div>
        <button className='ButtonCart'>
            <i className="bi bi-cart-plus"></i>
            <Badge pill bg="info">
                6
            </Badge>
        </button>
    </div>
  )
}

export default CartWidget