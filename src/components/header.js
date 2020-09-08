import React from "react";
import {Link} from "gatsby";

const Header = () => {
  return (
    <header>
      <h1>The Suraj Chandgude Blog</h1>
      <span> <Link to="/">Home</Link></span> |
      <span> <Link to="/about">About</Link></span> |
      <span> <Link to="/contact">Contact</Link></span> |
      <span> <Link to="/blog">Blog</Link></span>
    </header>
  )
}

export default Header
