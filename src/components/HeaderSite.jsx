import { Link, Route,Routes } from 'react-router-dom'
import './HeaderSite.css'
import Home from './Home'
import Products from './Products'
import Cart from './Cart'
import {BsCartCheck} from 'react-icons/bs'
import {RiLogoutCircleRLine} from 'react-icons/ri'
import { useState } from 'react'
import Form from '../formik/Form'
import Profile from './Profile'
import Login from '../formik/Login'


const HeaderSite = () => {

  const [signIn, setSignIn] = useState(false)


  return (
    <>

   <header>
        <div>    
            <h1>Logo</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li>
        {(JSON.parse(localStorage.getItem('bool'))? <Link to='/cart'>Cart <BsCartCheck style={{width:'20px',height:'20px'}}/></Link> :(signIn? <Link to='/cart'>Cart <BsCartCheck style={{width:'20px',height:'20px'}}/></Link> : <Link to='/signin'>Sign In</Link> ))}
                </li>
                <li>
                  {(JSON.parse(localStorage.getItem('bool'))? <Link onClick={()=>{
                    JSON.stringify(localStorage.setItem('bool', false))
                    setSignIn(false)
                  }} to='/'>LogOut <RiLogoutCircleRLine style={{width:'20px', height: '20px'}}/></Link> : '')}
                </li>
            </ul>
        </div>
{(JSON.parse(localStorage.getItem('bool'))? <div className="div-profile">
        <div className="img">
              
        </div>
        <Link to='/profile'>Profile</Link>
        </div> : <div className='no-user'>
                <div className="img">
                <img src="" alt="" />
          </div>
          <Link to='/login'>login</Link>

      </div>)}
      
   </header>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
    {(JSON.parse(localStorage.getItem('bool'))? <Route path='/cart' element={<Cart/>}/>  : (signIn? <Route path='/cart' element={<Cart/>}/>:<Route path='/signin' element={<Form setSignIn={setSignIn}/>}/>))}
        <Route path='/profile' element={<Profile/>}/>
    {(JSON.parse(localStorage.getItem('bool')) && signIn ? <Route path='/cart' element={<Cart/>}/>   :<Route path='/login' element={<Login setSignIn={setSignIn}/>}/>)}
    </Routes>
    </>
  )
}

export default HeaderSite