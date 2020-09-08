import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>I am Suraj Chandgude.</p>
      <p>You can contact me at officeofsuraj@pm.me.</p>
      <h3>
        Visit me on{" "}
        <a
          href="https://www.twitter.com/iamsurajdc"
          rel="noreferrer"
          target="_blank"
        >
          twitter!
        </a>
      </h3>
      <Footer />
    </div>
  )
}

export default Contact
