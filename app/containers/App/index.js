/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BrowsePage from 'containers/browse-page';
import CssBaseline from 'material-ui/CssBaseline';
import Theme from './theme';
import MainMenu from '../main-menu'
import Layout from './components/layout';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="Vocabulary"
        defaultTitle="Vocabulary"
      >
        <meta name="description" content="Vocabulary" />

      </Helmet>
      <CssBaseline />
      <Theme>
        <div>
          <MainMenu />
          <Layout>
            <BrowsePage />
          </Layout>
        </div>
      </Theme>
    </div>
  );
};
