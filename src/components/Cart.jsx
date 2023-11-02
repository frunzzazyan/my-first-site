import { useState } from 'react'
import './Cart.css'
import { arr } from './Products'
import {IoIosCloseCircleOutline} from 'react-icons/io'

console.log(arr)

const Cart = () => {
    const [close, setClose] = useState(true)

  return (
    <>
     <div className='card'>
      {arr.map((elem,idx)=>{
        if(elem.active){
            return<div key={elem.id} className='card-item'>
          
            <div className="img">
                <img src="" alt="" />
              <h4>{'count ' + elem.count}</h4>
            </div>
            <div className="count-close">
                    <IoIosCloseCircleOutline className='close' onClick={()=>{
                        setClose(!close)
                        elem.active = false
                    }}/>
            </div>
        </div>        
        }
      })}
            
    </div>
    </>
  )
}

export default Cart