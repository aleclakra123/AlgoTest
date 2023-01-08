import React from 'react';
import Popover from 'react-bootstrap/Popover';

export default function Tooltip({text}) {
  return (
  <Popover id="popover-basic">
    <Popover.Body>
      {text}
    </Popover.Body>
  </Popover>
  )
}
