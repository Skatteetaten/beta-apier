import React from "react";
import Grid from "@skatteetaten/frontend-components/Grid";
import { SingleColumnRow } from "../components/Columns";
import { graphql } from "gatsby";
import { renderAst } from "../components/renderAst";
import "./index.css";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const content = edges.map(({ node }) => (
    <div key={node.id}>{renderAst(node.htmlAst)}</div>
  ));

  return (
    <Grid>
      <SingleColumnRow>{content}</SingleColumnRow>
    </Grid>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { eq: "/frontpage/" } } }) {
      edges {
        node {
          id
          htmlAst
          fields {
            slug
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  return <title>{data.site.siteMetadata.title}</title>;
};
