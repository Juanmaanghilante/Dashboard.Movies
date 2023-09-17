import React from "react";
import image from '../assets/images/logo-impactx.png';
import { Link, Route, Switch } from "react-router-dom";
import ContentWraper from "./ContentWraper";
import LastMovieindb from "./LastMovieInDb";
import GenresinDb from "./GenresInDb";
import Table from "./table/Table";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { useState } from "react";
import { object } from "prop-types";

function Sidebar() {
  const [userInfo, setUserInfo] = useState({ count: 0,users: [],});
  const [productInfo, setProductInfo] = useState({
    count: 0,
    countByCategory: {},
    products: [], });

async function fetchData(endpoint, setState) {
    try {
      const apiFetch = await fetch(endpoint);
      const data = await apiFetch.json();
console.log(data);
      setState(data.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    async function data() {
      await Promise.all([
        fetchData("/api/users", setUserInfo),
        fetchData("/api/products", setProductInfo),
      ]);
    }
    data()
    
    
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/lastMovieindb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Ultimo producto en la base de datos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/genreinDb">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>GenreInDb</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/contentRowMovies">
            <i className="fas fa-fw fa-table"></i>
            <span>Content Row Movies</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Switch>
        <Route path="/" exact ={true}>
          <ContentWraper productInfo={productInfo} userInfo={userInfo} />
        </Route>
        <Route path="/genres" exact element={<GenresinDb
        categories={ Object.keys(productInfo.countByCategory)}/>
        } >
          <GenresinDb  categories={Object.keys(productInfo.countByCategory)} />
        </Route>
        <Route path="/lastMovieindb" exact={true} productInfo={productInfo} userInfo={userInfo}    >
          <LastMovieindb />
        </Route>
        <Route path="/contentRowMovies" exact={true}  productInfo={productInfo} userInfo={userInfo}>
          <ContentRowMovies />
        </Route>
        <Route
          path="/tableUser"
          exact={true}
          element={
            <Table
              data={userInfo.users
              }
              header={["id", "name", "email", "detail"]}
            />
          }
        >
          <Table />
        </Route>
        <Route
          path="/tableProduct"
          exact={true}
          component={
            <Table
              data={productInfo.products}
              header={["id", "name", "description", "detail", "category"]}
            />
          }
        >
          <Table />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Sidebar;
