import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';

export const Route = createRootRoute({
	component: () => (
    <>
			<div>
      <h1>Welcome to Meteor!</h1>
      <Link to="/hello">Link to hello page</Link>
			<Link to="/info">Link to info page</Link>
    </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})