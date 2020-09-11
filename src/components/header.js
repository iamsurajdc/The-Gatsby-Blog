import React from "react";
import {Link} from "gatsby";
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
        Suraj Chandgude
        </Link>
      </h1>
      <span> <Link className={headerStyles.link}  to="/">Home</Link></span> |
      <span> <Link className={headerStyles.link} to="/about">About</Link></span> |
      <span> <Link className={headerStyles.link} to="/contact">Contact</Link></span> |
      <span> <Link className={headerStyles.link} to="/blog">Blog</Link></span>
    </header>
  )
}

export default Header
