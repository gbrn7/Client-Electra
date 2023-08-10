import Eform from './form';
import './style.css'
import logo from '../../assets/img/logo.svg';
import adminHero from '../../assets/img/adminHero.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EAlert from '../../components/Alert';
import { postData } from '../../utils/fetch';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/actions';

export default function PageSignin() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const [alert, setAlert] = useState(({
    status: false,
    message: '',
    type:'',
  }))

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await postData('/admins/auth/signin', form);
    if(res?.data?.data){
      setIsLoading(false);

      dispatch(userLogin(res.data.data.token, res.data.data.role, res.data.data.refreshToken, res.data.data.email))

      navigate('/');
    }else{
      alertHandle(res?.response?.data?.msg ?? `Internal Server Error`, 'danger');
      setIsLoading(false)
    }
  }

  const alertHandle = (err, type) => {
    setAlert({status:true, message:err, type:{type}})
  }

  return (
    <section className="login d-flex justify-content-center justify-content-lg-between">
        <div className="login-left col-7 d-none d-lg-block">
            <img src={adminHero} className="login-img h-100"/>
        </div>
        <div className="login-right col-7 col-lg-5">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-7">
                    <div className="header">
                        <div className="text-center">
                            <img src={logo} className="logo"/>
                            <h1 className="my-0 mt-lg-1 mb-3">Sign in as Admin</h1>
                            {alert.status && <EAlert type="danger" message={alert.message}/>}
                        </div>
                    </div>
                      <Eform form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading}/>
                    </div>
                </div>
        </div>
    </section>
  )
}
