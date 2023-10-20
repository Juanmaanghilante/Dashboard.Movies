import React ,{useEffect,useState} from 'react';


export default function LastMovieInDb(props) {

const [user,setUser]=useState({})
      
useEffect(()=>{
      async function data(){
            if (props.user){
                  setUser(props.user)
            }
      }
      data()
},[props])
      

console.log('aca esta');
console.log(props);

      return(

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last user in Database</h5>
                  </div>
                  <div className="card-body">
                            <div className="text-center">
                              
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={`img/${user.avatar}`} alt=" Star Wars - Mandalorian " />
                            </div>
                                  <h1>name:{user.name}</h1>
                                  <p>email:{user.email}</p>
                                  <p>deatil :{user.detail}</p> 
                                      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View user detail</a>
                  </div>
            </div>
        </div>

  );
}
