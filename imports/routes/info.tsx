
import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/info')({
  component: Info,
})

function Info () {
  return (
    <div>
      <h2>Information page</h2>
    </div>
  );
};
