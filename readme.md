# Using Tanstack Router with Meteor

1. Install these packages:
   * @tanstack/react-router
   * @tanstack/router-devtools
   * @tanstack/router-cli

2. Create a script to generate file based routes: `tsr watch`

3. Add the config file:

```./tsr.config.json
{
  "routesDirectory": "./imports/routes",
  "generatedRouteTree": "./imports/routeTree.gen.ts",
  "routeFileIgnorePrefix": "-",
  "quoteStyle": "double"
}
```

4. Create the router

```main.tsx
import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Meteor } from 'meteor/meteor';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Import the generated route tree
import { routeTree } from '../imports/routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
Meteor.startup(() => {
  // Render the app
  const rootElement = document.getElementById('react-target')!
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    )
  }
});

```

5. Create a __root.tsx file as an entry point

```./imports/routes/__root.tsx
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
```

6. Conquer the world..? Or at least, enjoy file based routes...