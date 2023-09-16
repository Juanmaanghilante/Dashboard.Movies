import React from 'react';

import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'

import ContentRowMovies from './ContentRowMovies'

export default function ContentRowTop({data,header}) {
  return (
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Impact X Dashboard</h1>
          </div>
                <ContentRowMovies data={data} header={header} />
                
          <div className="row">
                <LastMovieInDb />
                <GenresInDb />
          </div>
    </div>

  );
}