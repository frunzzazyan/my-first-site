import * as yup from 'yup'
let p = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export const schema = yup.object().shape({
    login:yup.string().min(3,'error this login ').required('error login'),
    password:yup.string().matches(p, 'error password').min(8,'error password').required('error this password'),
}) 