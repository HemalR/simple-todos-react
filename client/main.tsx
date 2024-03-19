import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Meteor } from 'meteor/meteor';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const theme = createTheme({
  /** Put your mantine theme override here */
});

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
        <MantineProvider theme={theme}>
          <RouterProvider router={ router } />
        </MantineProvider>
      </StrictMode>,
    )
  }
});
