import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
        {data.site.siteMetadata.title}
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
