import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
      <Layout>
      <h1>Home</h1>
      <p>Hi I am Suraj Chandgude</p>
      <p>I am from Chasnali Kopargaon. MH, India Earth</p>

      <p>
        Need an developer? <Link to="/contact"> Contact Me? </Link>{" "}
      </p>
      </Layout>
  )
}

export default IndexPage
