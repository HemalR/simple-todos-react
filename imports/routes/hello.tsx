import { Blockquote, Chip } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';


export const Route = createFileRoute('/hello')({
  component: Hello,
})



function Datepicker() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}

function Hello () {
  return (
    <div>
      <Datepicker />
 <Chip defaultChecked>Awesome chip</Chip>
    <Blockquote cite="– Forrest Gump">
  Life is like an npm install – you never know what you are going to get.
</Blockquote>
    </div>
  );
};

