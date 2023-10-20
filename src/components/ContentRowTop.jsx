import React from 'react';

import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'

import ContentRowMovies from './ContentRowMovies'

export default function ContentRowTop({data,header,categories,userInfo,productInfo}) {
 console.log(categories);
      return (
      
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Impact X Dashboard</h1>
          </div>
                <ContentRowMovies  productInfo={productInfo}
          userInfo={userInfo}/>
                
          <div className="row">
                <LastMovieInDb  user={userInfo.users[userInfo.users.length -1]}/>
                <GenresInDb  categories={categories} />
          </div>
    </div>

  );
}