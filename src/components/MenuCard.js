import React from 'react';

const MenuCard = ({menuData}) => {
   
    return (
        <>
      
                <section className='main-card-cointainer'>

                   {menuData.map((curElem)=>{
                    const { id , name , category , image , description } =curElem;     //we use currElem in every place to reduce the code or not reapet 
            return(
                <>
            <div className='card-container' key={curElem.id}>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{id}</span>
                        <span className='card-author subtle'>{name}</span>
                        <h2 className='card-title'> {category}</h2>
                        <span className='card-description'>
                            {description}
                        </span>
                        <div className='card-read'> Read</div>
                    </div>
                    </div>
                    <img src={image} alt='images' className='card-media'/>
                    <span className='card-tag subtle'>{name}</span>
                </div>
            
        </>
         ) 
        })}
        </section>
         </>
    )
}

export default MenuCard;