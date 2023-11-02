import { Formik } from 'formik'
import './Login.css'
import { schema } from './loginYup'

const initialValues = {
    login:'',
    password:'',
}



const Login = ({setSignIn}) => {
  function submiting(state,{type,payload}){
    let userName = localStorage.getItem('user-name')
    let userData = JSON.parse(localStorage.getItem(userName))

    if(userData.login === state.login && userData.password === state.password){
      setSignIn(true)
      localStorage.setItem('user',JSON.stringify(state))
      localStorage.setItem('bool', true)

    } 
  }
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submiting}>
        {({values,errors,touched,handleChange,handleBlur,handleSubmit})=>{
          return <form className='login' onSubmit={handleSubmit} action="">
            <h1>Login</h1>
                <input onChange={handleChange} onBlur={handleBlur} style={{borderColor: (errors.login && touched.login? 'red': 'grey')}} type="text" name='login' placeholder='login' />
                 <span>{errors.login}</span>       
                <input onChange={handleChange} onBlur={handleBlur} style={{borderColor: (errors.password && touched.password? 'red': 'grey')}} type="password" name='password' placeholder='password' />
                         <span>{errors.password}</span>       
                <input disabled={!!Object.keys(errors).length } type="submit" value='Go for it' className='submit' />
            </form>
        }}
    </Formik>
  )
}

export default Login