import React from 'react'

import MoviesInDb from './MoviesInDb'




export default function TableRow({ data, header }) {
  console.log(data);

  
  return (
   
    data.map((row, i) => (
      <MoviesInDb key={row +i} data={{ ...row }} header={header} />
    ))
   



  );
}









