import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Segment from "../Segment";
import { segmentTypes } from "../../types";

export default function HeadLeg() {
  const [legs, setLegs] = useState([]);
  const [segmentValue, setSegmentValue] = useState("Options");

  const addLeg = ()=>{

  }

  const cancelLeg = ()=>{

  }

  return (
    <>
      <div>
        <ButtonGroup>
          Select Segments
          {segmentTypes.map((segment, idx) => (
            <ToggleButton
              key={idx}
              id={segment.value}
              type="radio"
              variant={idx % 2 ? 'outline-primary' : 'outline-info'}
              name="segment"
              value={segment.value}
              checked={segmentValue === segment.value}
              onChange={(e) => {
                setSegmentValue(e.currentTarget.value)
              }}
            >
              {segment.type}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <Segment segmentMode={segmentValue} addLeg={addLeg} cancelLeg={cancelLeg}/>
      </div>
      {legs.map((leg) => {
        return (<></>)
      })}
    </>
  );
}
