import React from 'react';

import { Label, Checkbox } from './styles';

const MainTask = ({id, content}) => (
  <>
    <Checkbox id={id} />
    <Label for={id}>
      {content}
    </Label>
  </>
);

export default MainTask;