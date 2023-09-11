import React  from 'react'
import image from '../assets/images/logo-DH.png'
import {Link,Route,Switch} from 'react-router-dom'
import ContentWraper from "./ContentWraper";
import LastMovieindb from './LastMovieInDb'
import GenresinDb from './GenresInDb'

import ContentRowMovies from './ContentRowMovies'
import NotFound from './NotFound';
function Sidebar (){



return (<React.Fragment>
    {/*<!-- Sidebar -->*/}
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/*<!-- Sidebar - Brand -->*/}
        <Link  className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div className="sidebar-brand-icon">
                <img className="w-100" src={image} alt="Digital House"/>
            </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0"/>

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - DH movies</span></Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider"/>

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
            <Link className="nav-link collapsed" to="/lastMovieindb">
                <i className="fas fa-fw fa-folder"></i>
                <span>Last Movie in Db</span>
            </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
            <Link className="nav-link" to="/genreinDb">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>GenreInDb</span></Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
            <Link className="nav-link" to="/contentRowMovies">
                <i className="fas fa-fw fa-table"></i>
                <span>Content Row Movies</span></Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block"/>
    </ul>
    {/*<!-- End of Sidebar -->*/}
    
<Switch>
    <Route path='/' exact={true}>
        <ContentWraper/>

    </Route>
    <Route path='/genreinDb' exact={true}>
        <GenresinDb/>

    </Route>
    <Route path='/lastMovieindb' exact={true}>
        <LastMovieindb/>

    </Route>
    <Route path='/contentRowMovies' exact={true}>
        <ContentRowMovies/>

    </Route>
<Route>
    <NotFound/>
</Route>
    
</Switch>



</React.Fragment>)
}




export default Sidebar