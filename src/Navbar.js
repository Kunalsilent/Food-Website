import React from 'react'

const Navbar = ({filterItem, menuList} ) => {
  return (
 
  
    <>
    <h1>Hello, This happens to be my favorite dish. </h1>
    <nav className='navbar'>
        <div className='btn-group'>

        { menuList.map((curElem)=>{
            return(
                <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>
            );
        }) }
        </div>
    </nav>
    </>
  )
}

export default Navbar;