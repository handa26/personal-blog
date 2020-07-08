import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Intro from "../components/intro"

class IndexPage extends React.Component {
  render() {
    const Image = styled.img`
      width: 100%;
      max-width: 500px;
      height: auto;
    `

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Ananda Muhammad"
          keywords={[`blog`, `anandamuhammad`, `handa`, `handa26`]}
        />
        <Image style={{ margin: 0 }} src="./Hello.svg" alt="Intro" />
        <Intro />

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
