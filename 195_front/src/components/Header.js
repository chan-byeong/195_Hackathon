import "../styles/header.css"

import Nav from './elements/Nav'
import Searchbar from "./elements/Searchbar";


const Header = () => {






  return(
    <header className='header-container'>
      <Nav/>
      <Searchbar/>
      {/**
       * Navigation Bar
       * Search Bar
       */}
    </header>
  );
}

export default Header;