import React from 'react';
import { withRouter } from "react-router-dom";

import "./Layout.scss";

const Layout = (props) => {
  var pathName = window.location.pathname;

  return (
    <>
      <div className="layout-page">
        <div className="sidebar">
          <div className="input-container">
            <button className="button-search" ><i className="fa fa-search" aria-hidden="true" style={{ color: '#9A9999' }}></i></button>
            <input className="input-search" type="text" placeholder="Search"></input>
          </div>
          <div className="sidebar-link">
            <div className= {`link-content-sidebar cursor-pointer ${pathName === '/' ? `active-link` : null}`} onClick={() => props.history.push("/")}><i className="fa fa-home"></i> Home</div>
            <div className= {`link-content-sidebar cursor-pointer ${pathName.includes('/genre') ? `active-link` : null}`} onClick={() => props.history.push("/genre")}><i className="fa fa-filter"></i> Genres</div>
            <div className= {`link-content-sidebar cursor-pointer ${pathName.includes('/movie') ? `active-link` : null}`} onClick={() => props.history.push("/movie")}><i className="fas fa-film"></i> Movies</div>
          </div>
        </div>

        <div className="section-component">
          <div className="content-component">{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Layout);
