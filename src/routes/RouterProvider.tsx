/* eslint-disable react/jsx-props-no-spreading,@typescript-eslint/no-use-before-define */
import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route as BrowserRoute } from 'react-router-dom';
import createRoutes, { Route } from 'routes/index';

const indexRoute = createRoutes();

function initRoutes(routes: Route[], parentPath = ''): ReactElement[] {
  return routes.map((route) => initRoute(route, parentPath));
}

function initRoute(route: Route, parentPath = ''): ReactElement {
  const path = `${parentPath}${route.path}`;

  return (
    <BrowserRoute
      key={route.pageId}
      path={path}
      render={(props): ReactElement => (
        <Switch>
          {route.routes && initRoutes(route.routes, route.path)}
          <route.component {...props} />
        </Switch>
      )}
    />
  );
}

export default function RouterProvider(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>{initRoute(indexRoute)}</Switch>
    </BrowserRouter>
  );
}
