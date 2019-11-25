import React from 'react';
import { Moon, Sun } from 'components/planets';

export default function SolarSystemView(): React.ReactElement {
  return (
    <section>
      <Moon />
      <Sun />
    </section>
  );
}
