import React, { Component }  from 'react';

import Cards from './Cards';

export default function ContentRowMovies (props)  {
  console.log('aca esta esto');
  console.log(props);
  return (
    <div className='row'>
            <Cards 
              title = "total of products in data base "
              quantity = {props.productInfo.count}
              color = "primary"
              icon = "fa-film" />
            <Cards 
              title = "Total Users in data base"
              quantity = {props.userInfo.count}
              color = "success"
              icon = "fa-award" />
            <Cards 
              title = "Actors quantity"
              quantity = {5}
              color = "warning"
              icon = "fa-user" />
    </div>

  )

  }


 
  
  
   
   
  


