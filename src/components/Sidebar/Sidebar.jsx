import React, {useState} from 'react'
import ClassNames from 'classname'

import { FiTerminal, FiGithub, FiMenu , FiSettings, FiGrid, FiUser, FiPieChart, FiMessageCircle, FiFolder, FiShoppingCart, FiSave} from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import './Sidebar.scss'


const menuItems = [
    {name:"Dashboard", img: <FiGrid/>},
    {name:"User", img: <FiUser/>},
    {name:"Messages", img: <FiMessageCircle/>},
    {name:"Analytics", img:  <FiPieChart/>},
    {name:"File Manager", img: <FiFolder/>},
    {name:"Order", img:<FiShoppingCart/> },
    {name:"Saved", img:<FiSave/> },
    {name:"Setting", img: <FiSettings/> },
]

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(true)
    const [activeMenu, setActiveMenu ] = useState('')
   
    const activeSidebar = () =>{
        setShowSidebar(prev => !prev)
    }

    const updateActiveMenu = (key) => {
        setActiveMenu(key)
    }

    const menu = menuItems.map((value, index)=>{
        return <li onClick={() => updateActiveMenu(value.name)} key={value.name} className={ClassNames("menuSidebar__item",{
            "active": activeMenu === `${value.name}`
        })}>
            {value.img}
            <span>{value.name}</span>
        </li>
    })

    return (
        <div className={ClassNames("containderSidebar", {
            "active": showSidebar,
        })}>
            <div className="topSidebar">
                <div className="topSidebar__title"><FiGithub /> My sideBar</div>
                <div onClick={activeSidebar} className="topSidebar__btn"><FiMenu /></div>
            </div>

            <div className="menuSidebar">
                <ul className="menuSidebar__items">
                    <li className="menuSidebar__search">
                        <FiTerminal/>
                        {showSidebar && <input className="Search" type="text" placeholder="Search..."/>}
                    </li>
    
                    {menu}

                </ul>
            </div>

            <div className="bottomSidebar">
                <div className="bottomSidebar__info">
                    <img src="https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="img_avatar" />
                    <div className="bottomSidebar__infoTitle">
                        <span>Kirill Nyuhtilin</span>
                        <p>react developer</p>
                    </div>
                </div>
                <IoExitOutline/>
            </div>
            
        </div>
    )
}

export default Sidebar
