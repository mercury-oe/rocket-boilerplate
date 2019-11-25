/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactChild, ReactElement } from 'react';
import { BrowserRouter, Switch, Route as BrowserRoute } from 'react-router-dom';
import createRoutes, { Route } from 'routes/index';

const indexRoute = createRoutes();

const DefaultComponent = (): null => null;

const DefaultLayout = ({ children }: { children: ReactChild }): ReactElement => <>{children}</>;

function initRoutes(routes: Route[], parentPath = ''): ReactElement[] {
  return routes.map((route) => initRoute(route, parentPath));
}

function initRoute(route: Route, parentPath = ''): ReactElement {
  const {
    path: _path,
    component: Component = DefaultComponent,
    layout: Layout = DefaultLayout,
  } = route;
  const path = `${parentPath}${_path}`;

  return (
    <BrowserRoute key={route.pageId} path={path}>
      <Layout>
        <Switch>
          {route.routes && initRoutes(route.routes, path)}
          <Component />
        </Switch>
      </Layout>
    </BrowserRoute>
  );
}

export default function RouterProvider(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>{initRoute(indexRoute)}</Switch>
    </BrowserRouter>
  );
}
