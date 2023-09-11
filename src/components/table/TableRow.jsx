import React from 'react'
const TableRow = ({id,title,duration,rating,genre,awards}) => {
  return ( 
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{duration}</td>
      <td>{rating}</td>
      <td>{genre ? genre.name : 'Sin Género'}</td>
      <td>{awards}</td>
    </tr>
   );
}
 
export default TableRow;



