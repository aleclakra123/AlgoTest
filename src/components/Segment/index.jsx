import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import FuturesSegment from "../FuturesSegment";
import Button from "react-bootstrap/Button";
import OptionsSegment from "../OptionsSegment";
import Form from "react-bootstrap/Form";
import "./index.css";

export default function Segment({ segmentMode, addLeg, cancelLeg }) {
  const [segmentState, setSegmentState] = useState({});

  useEffect(() => {
    setSegmentState({});
  }, [segmentMode]);

  return (
    <Form>
      <div className="formContainer">
        {segmentMode === "Futures" ? (
          <FuturesSegment
            segmentState={segmentState}
            setSegmentState={setSegmentState}
          />
        ) : (
          <OptionsSegment
            segmentState={segmentState}
            setSegmentState={setSegmentState}
          />
        )}
      </div>
      <ButtonGroup>
        <Button
          type="button"
          onClick={() => {
            addLeg(segmentState);
          }}
        >
          Add Leg
        </Button>
        <Button type="button" onClick={cancelLeg}>
          Cancel
        </Button>
      </ButtonGroup>
    </Form>
  );
}
