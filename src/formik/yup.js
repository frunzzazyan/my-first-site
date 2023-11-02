import * as yup from 'yup'
let p = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export const schema = yup.object().shape({
    fname:yup.string().min(3, 'this name invalid').required('error this fname'),
    lname:yup.string().min(3, 'this name invalid').required('error this lname'),
    email:yup.string().email().required('this email invalid'),
    password:yup.string().matches(p, 'error password').min(8,'error password').required('error this password'),
    rpassword: yup.string().oneOf([yup.ref('password')]).required('error rpassword'),
})