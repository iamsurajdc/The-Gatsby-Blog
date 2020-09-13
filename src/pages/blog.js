import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blogs</h1>
      <hr />
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li key={i} className={blogStyles.post}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p> {edge.node.frontmatter.date} </p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
