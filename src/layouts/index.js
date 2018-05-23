import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/header';
import ReactPlayer from 'react-player';

import './index.css';
import ohWonder from '../audios/oh-wonder.mp3';

const Player = styled(ReactPlayer)`
  bottom: 0;
  left: 0;
  padding: 0;
  position: fixed;

  audio {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

class Layout extends Component {
  state = {
    loadPlayer: false,
  };

  componentDidMount = () => {
    this.setState({ loadPlayer: true });
  };

  render() {
    const { children, data, location } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header data={data} location={location} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
          {this.state.loadPlayer ? (
            <Player url={ohWonder} controls height="auto" width="100vw" />
          ) : null}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/city.jpeg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
