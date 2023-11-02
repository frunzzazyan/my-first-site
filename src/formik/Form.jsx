import { Formik } from 'formik'
import './Form.css'
import { schema } from './yup'
import { Link } from 'react-router-dom'



const initialValues = {
    fname:'',
    lname:'',
    email:'',
    password:'',
    rpassword:'',

}

let dataUser = new Map()

const Form = ({setSignIn}) => {
  
  
  
  function submit(state,active){
    setSignIn(true)
    localStorage.setItem(state.fname + '-' + state.lname, JSON.stringify(Object.assign(state,{login: state.fname + '-' + state.lname})))
    localStorage.setItem('bool',true)
    localStorage.setItem('user-name',state.fname + '-' + state.lname)
    dataUser.set(state.fname + '-' + state.lname ,JSON.parse(localStorage.getItem(state.fname + '-' + state.lname)))
  }

  return (
    <>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submit}>

    {({values,errors,touched,handleChange,handleBlur,handleSubmit})=>{
      return <div className='div-form'>
        <form onSubmit={handleSubmit} action="">
            <h2>Sign In</h2>
            <div className="fname-lname">
                <input onBlur={handleBlur} onChange={handleChange} type="text" style={{borderColor:(errors.fname && touched.fname? 'red': 'grey' )}} name='fname' placeholder='fname'/>
                <span>{(errors.fname && touched.fname? errors.fname :'')}</span>
                <input onBlur={handleBlur} onChange={handleChange} type="text" style={{borderColor:(errors.lname && touched.lname? 'red': 'grey' )}} name='lname' placeholder='lname'/>
                <span>{(errors.lname && touched.lname? errors.lname :'')}</span>
            </div>
            <input onBlur={handleBlur} onChange={handleChange} type="email" style={{borderColor:(errors.email && touched.email? 'red': 'grey' )}} name='email' placeholder='email'/>
            <span>{(errors.email && touched.email? errors.email :'')}</span>
            <input onBlur={handleBlur} onChange={handleChange} type="password" style={{borderColor:(errors.password && touched.password? 'red': 'grey' )}} name='password' placeholder='password'/>
            <span>{(errors.password && touched.password? errors.password :'')}</span>
            <input onBlur={handleBlur} onChange={handleChange} type="password" style={{borderColor:(errors.rpassword && touched.rpassword? 'red': 'grey' )}} name='rpassword' placeholder='rpassword'/>
            <span>{(errors.rpassword && touched.rpassword? errors.rpassword :'')}</span>
           <input disabled={!!Object.keys(errors).length } className='submit' type="submit" value="submit" />
        </form>
       </div>
    }}


    </Formik>



  </>
  )
}

export default Form