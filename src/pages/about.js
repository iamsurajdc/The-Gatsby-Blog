import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I am Suraj Chandgude.</p>
      <p>I am learning Gatsby for something interesting.</p>
      <Link to="/contact">Contact me ?</Link>
    </Layout>
  )
}

export default About
