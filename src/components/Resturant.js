import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from '../Navbar';
import { MenuList } from '@material-ui/core';

const uniqueList =[
    ...new Set(               //spread operator so that only data will show in array
     Menu.map((curElem)=> {
    return curElem.category;
})
),
"All",
];
//console.log(uniqueList)

const Resturant = () => {
    const [menuData, setMenuData]= useState(Menu);
    const[menuList, setMenuList] = useState(uniqueList);

    const filterItem =(category)=>{

        if(category==="All"){                                // to seen all data at All button 
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);

    };
  return (
    <>
   <Navbar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData}/>

    </>
  );
};

export default Resturant;