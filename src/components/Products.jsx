import { products } from '../DATA/products'
import './Products.css'
import CountState from './CountState'
import { useReducer, useState } from 'react'
import {BiCartAdd} from 'react-icons/bi'
import {RiFileCloseLine} from 'react-icons/ri'
import {FiFilter} from 'react-icons/fi'


export let arr = []
let filteredProducts;

const Products = () => {
    const [filter, dispatch] = useReducer(reducerFilter,products)
    
    const [count,setCount] = useState(1)
    
    const [brand,setBrand] = useState('')
    const [color,setColor] = useState('')
    const [sort,setSort] = useState('')
    const [priceMin,setPriceMin] = useState('')
    const [priceMax,setPriceMax] = useState('')
    const [filterBool,setFilterBool] = useState(false)

    

    function reducerFilter(state,{type,payload}){
        switch(type){
            case 'filter':
                payload.setFilterBool(true)
                filteredProducts = Object.assign({},payload)
                console.log(filteredProducts)
        }
    }
function fnCount(arg){
    setCount(arg)
}

  return (
    <>
    <div className='items'>
            <aside>govazd</aside>
            <div className="filter-products">
                <div className="filter">

                    <h1>Filter <FiFilter style={{color:'black'}}/></h1>
                    <select onChange={(e)=>{
                        setBrand(e.target.value)
                    }} name="brand" id="">
                        <optgroup label='brand' />
                        
                    <option  value='Rolex'>Rolex</option>
                    <option  value='Omega'>Omega</option>
                    <option  value='IWatch'>IWatch</option>
                    <option  value='Timex'>Timex</option>
                    <option  value='Citizen'>Citizen</option>

                    </select>
                    <select onChange={(e)=>{
                        setColor(e.target.value)
                    }} name="color" id="">
                        <optgroup label='color' />
                        <option  value='Black'>Black</option>
                        <option  value='blue'>blue</option>
                        <option  value='red'>red</option>
                        <option  value='green'>green</option>
                        <option  value='grey'>grey</option>

                    </select>
                    <select onChange={(e)=>{
                        setSort(e.target.value)
                    }} name="sort" id="">
                        <optgroup label='sort' />
                        <option  value='electric'>electric</option>
                        <option  value='machanical'>machanical</option>

                    </select>
                    <div className="numbers">
                        <input onChange={(e)=>{
                            setPriceMin(e.target.value)
                        }} type="number" placeholder='min'/>
                        <input onChange={(e)=>{
                            setPriceMax(e.target.value)
                        }} type="number" placeholder='max'/>
                    </div>
                    <input onClick={()=>dispatch({type:'filter', payload: {brand,color,sort,priceMax,priceMin,setFilterBool}})} className='submit' type="submit" value='Fitered' />
                </div>

    <div className='products'>
        {(filterBool? 
        <div>
            <RiFileCloseLine style={{color:'black'}} onClick={()=>{
                setFilterBool(false)
            }}/>
           {products.map(elem=>{
            if(elem.brand === filteredProducts.brand){
                return <div key={elem.id} className="odd">
                    <div className="img">
                <img src='' alt="" />

                    </div>
        
                <div className='add-and-state'>
                    <button onClick={()=>{
                        if(!arr.includes(elem))arr.push(Object.assign(elem, {count: count,  active: true, }))
                        elem.count = count                       
                    if(!elem.active)elem.active = true 
                        }}><BiCartAdd/></button>
                    <div className='count'>
                        <CountState fn={fnCount} />
                    </div>
                </div>
                    
                <div className="text">
                    <h2>{elem.brand}</h2>
                    <p>{elem.info}</p>
                    <h3>{elem.price} $</h3>
                </div>
            </div>
            }
            if(elem.color === filteredProducts.color){
                return <div key={elem.id} className="even">
                    <div className="img">
                <img src='' alt="" />

                    </div>
        
                <div className='add-and-state'>
                    <button onClick={()=>{
                        if(!arr.includes(elem))arr.push(Object.assign(elem, {count: count,  active: true, }))
                        elem.count = count                       
                    if(!elem.active)elem.active = true 
                        }}><BiCartAdd/></button>
                    <div className='count'>
                        <CountState fn={fnCount} />
                    </div>
                </div>
                    
                <div className="text">
                   <h2>{elem.brand}</h2>
                   <p>{elem.info}</p>
                   <h3>{elem.price} $</h3>
                </div>
            </div>
            }
            if(elem.sort === filteredProducts.sort){
                return <div key={elem.id} className="odd">
                    <div className="img">
                <img src='' alt="" />

                    </div>
        
                <div className='add-and-state'>
                    <button onClick={()=>{
                        if(!arr.includes(elem))arr.push(Object.assign(elem, {count: count,  active: true, }))
                        elem.count = count                       
                    if(!elem.active)elem.active = true 
                        }}><BiCartAdd/></button>
                    <div className='count'>
                        <CountState fn={fnCount} />
                    </div>
                </div>
                    
                <div className="text">
                  <h2>{elem.brand}</h2>
                  <p>{elem.info}</p>
                  <h3>{elem.price} $</h3>
                </div>
            </div>
            }
           
            if(elem.price <= filteredProducts.priceMax && elem.price >= filteredProducts.priceMin){
                return <div key={elem.id} className="even">
                    <div className="img">
                <img src='' alt="" />

                    </div>
        
                <div className='add-and-state'>
                    <button onClick={()=>{
                        if(!arr.includes(elem))arr.push(Object.assign(elem, {count: count,  active: true, }))
                        elem.count = count                       
                    if(!elem.active)elem.active = true 
                        }}><BiCartAdd/></button>
                    <div className='count'>
                        <CountState fn={fnCount} />
                    </div>
                </div>
                    
                <div className="text">
                   <h2>{elem.brand}</h2>
                   <p>{elem.info}</p>
                   <h3>{elem.price} $</h3>
                </div>
            </div>
            }
            
           })}
           </div>
        :
        products.map((elem,idx)=>{
            return (elem.id % 2 === 0? <div key={elem.id} className="even">
                <div className="img">
                <img src='' alt="" />

                </div>
        
                <div className='add-and-state'>
                    <button onClick={()=>{
                        if(!arr.includes(elem))arr.push(Object.assign(elem, {count: count,  active: true, }))
                        elem.count = count                       
                    if(!elem.active)elem.active = true 
                        }}><BiCartAdd/></button>
                    <div className='count'>
                
                        <CountState fn={fnCount} />
                    </div>
                </div>
                    
                <div className="text">
                  <h2>{elem.brand}</h2>
                  <p>{elem.info}</p>
                  <h3>{elem.price} $</h3>
                </div>
            </div>: <div key={elem.id} className="odd">
                <div className="text">
                    <h2>{elem.brand}</h2>
                    <p>{elem.info}</p>
                    <h3>{elem.price} $</h3>
                </div>
                <div className='add-and-state'>
                    <div className='count'>
                        <CountState fn={fnCount} />
                    </div>
                    <button onClick={()=>{
                        if(!arr.includes(elem))arr.push(Object.assign(elem, {count: count, active: true, }))
                        elem.count = count  
                    if(!elem.active)elem.active = true                    
                }}><BiCartAdd/></button>
                </div>
                <div className="img">
            <img src='' alt="" />

                </div>
            </div>)
        }))}
        </div>
    </div>
    </div>
   
  
    </>
  )
}

export default Products