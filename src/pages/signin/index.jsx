import Eform from './form';
import './style.css'
import logo from '../../assets/img/logo.svg';
import adminHero from '../../assets/img/adminHero.jpg'

export default function PageSignin() {

  return (
    <section className="login d-flex justify-content-center justify-content-lg-between">
        <div className="login-left col-7 d-none d-lg-block">
            <img src={adminHero} className="login-img  h-100"/>
        </div>
        <div className="login-right col-7 col-lg-5">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-7">
                    <div className="header">
                        <div className="text-center">
                            <img src={logo} className="logo"/>
                            <h1 className="my-0 mt-lg-3">Login Sebagai Admin</h1>
                        </div>
                    </div>
                      <Eform/>
                    </div>
                </div>
        </div>
    </section>
  )
}
