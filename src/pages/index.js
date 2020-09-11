import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <h4>
        Hi I am Suraj Chandgude {" "}
        <span role="img" aria-label="robo">
          🤖
        </span>
        , A Full Stack Developer from beautifull town of Chasnali.
      </h4>
      <p>I am from Chasnali Kopargaon. MH, India, Planet Earth</p>

      <p>
        Need a developer? <Link to="/contact"> Contact Me? </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
