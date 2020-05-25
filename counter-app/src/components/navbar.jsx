import React from "react"; // removed component

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

// class NavBar extends Component {
//   // state = {  }
//   render() {
    
//   }
// }

export default NavBar;
