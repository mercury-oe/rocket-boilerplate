import React from 'react';
import { Space } from 'components';
import SolarSystemRoute from './solar-system';

export interface Route {
  pageId: string;
  path: string;
  component: <P>(props: P) => React.ReactElement;
  routes?: Route[];
}

function createRoutes(): Route {
  return {
    pageId: 'SPACE',
    path: '',
    component: Space,
    routes: [SolarSystemRoute()],
  };
}

export default createRoutes;
