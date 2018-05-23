import React from 'react';

export default props => {
  const { title, date } = props.data.contentfulBlogPost;
  const { html } = props.data.contentfulBlogPost.body.childMarkdownRemark;
  return (
    <div>
      <span>{date}</span>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      slug
      id
    }
  }
`;
