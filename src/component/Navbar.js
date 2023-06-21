import React from 'react'
import bell from '../images/bell.png'
import home from '../images/home.png'
import setting from '../images/setting.png'
import ellipsis from '../images/ellipsis.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://deepthought.education/assets/images/logo/logo.svg" className="px-5" alt="" style={{ height: '60px', width: 'auto' }} />
                    </a>
                    <div className=" px-5">
                        <img src={home} className="mx-2" style={{ height: '40px' }} alt=""></img>
                        <img src={setting} className="mx-2" style={{ height: '40px' }} alt=""></img>
                        <img src={bell} className="mx-2" style={{ height: '40px' }} alt=""></img>
                        <img src="https://loveyoursmileorthodontics.com.au/wp-content/uploads/93697233-893x675.jpg" className="rounded-circle mx-2" style={{ height: '40px' }} alt=""></img>
                        <img src={ellipsis} className="mx-2" style={{ height: '20px' }} alt=""></img>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
