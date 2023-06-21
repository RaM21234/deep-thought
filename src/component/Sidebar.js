import React, { useState } from 'react';
import './sidebar.css'
import back from '../images/back.png'
import one from '../images/one.png'
import close from '../images/close.png'
import notice from '../images/notice.png'


function Sidebar(props) {
    let data = props.data
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>

            <div className="card text-center rounded-4" style={{width:'150px',position:'absolute'}}>
                <div className="card-header py-3 rounded-top-4" style={{backgroundColor:'black',}}>
                    A
                </div>
                <div className="card-body" style={{height:'730px'}}>
                    <button className="btn " onClick={toggleSidebar} style={{ position: 'absolute',right:'30px' }}><img src={one} style={{height:'80px',width:'65px'}}alt=""></img></button>

                </div>
            </div>
            <div className="card text-center rounded-4" style={{width:'330px',top:'200px',position:'absolute',left:'1620px',transform:'rotate(270deg)'}}>
                <div className="card-header py-2 rounded-top-4" style={{backgroundColor:'black',}}>
                    <img src={notice} className="px-1"style={{backgroundColor:'white' ,height:'35px' ,width:'45px',transform:'rotate(90deg)'}}alt=""></img>
                    <img src={close} className="rounded-circle"style={{backgroundColor:'white' ,height:'40px',}}alt=""></img>
                </div>
                <div className="card-body" style={{height:'70px'}}>
                  

                </div>
            </div>



            <div className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''} border rounded-4 `} style={{ width: '550px', height: '800px', backgroundColor: 'white' }}>

                <div className="card ">
                    <div className="card-header py-3" style={{ backgroundColor: 'black', color: 'white' }}>
                        Journey Board
                    </div>
                    <button className="btn rounded-circle" onClick={toggleSidebar} style={{ position: 'absolute', left: '460px' }}><img src={back} style={{ height: '40px' }} className="pt-1" alt=""></img></button>
                    <div className="card-body py-4 px-4 " style={{ height: '730px' }}>
                        <ul>
                            <li><b>{data.tasks[0].task_title}</b></li>
                            <li>{data.tasks[0].assets[0].asset_title}</li>
                            <li>{data.tasks[0].assets[1].asset_title}</li>
                            <li>{data.tasks[0].assets[2].asset_title}</li>
                            <li>{data.tasks[0].assets[3].asset_title}</li>

                        </ul>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Sidebar;
