import React, { Component } from 'react';
import TableRow from './TableRow';
import '../../assets/css/Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesInDb: ['hola']
    }
  }

  async componentDidMount() {
    try {
      const apiMovies = await fetch('/api/movies');
      const dataMovies = await apiMovies.json();
  
      this.setState({ moviesInDb: dataMovies.data }, () => {
        console.log(this.state); // Asegúrate de que el setState se haya completado antes de hacer el console.log
      });
    } catch (e) {
      console.error(e);
    }
  }
  

  render() {
    return (
      <div className="table-container">
        <table className="movie-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Duración</th>
              <th>Rating</th>
              <th>Género</th>
              <th>Premios</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.moviesInDb.map(movie=>(
                <TableRow
                key={movie.id} 
                id={movie.id}
                title={movie.title}
                duration={movie.duration}
                rating={movie.rating}
                genre={movie.genre}
                awards={movie.awards}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;