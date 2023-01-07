import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./index.css";
import {
  IntervalType,
  OptionType,
  PositionType,
  SegmentType,
  StrikeCriteria,
  StrikeType,
} from "../../enums";
import SegmentBox from "../SegmentBox";

export default function Segment({ segmentMode, addLeg, cancelLeg }) {
  const [segmentState, setSegmentState] = useState({
    totalLot: 1,
    position: PositionType.BUY,
    optionType: OptionType.PUT,
    expiry: IntervalType.WEEKLY,
    strikeCriteria: StrikeCriteria.STRIKE_TYPE,
    strikeType: StrikeType.ATM,
    lowerRange: 50,
    premium: 50,
    upperRange: 200
  });

  const segmentChange = (e) => {
    const { id, value } = e.target;
    const payload = {
      ...segmentState,
      [id]: value,
    };

    setSegmentState(payload);
  };

  return (
    <Form>
      <SegmentBox
        segmentChange={segmentChange}
        segmentMode={segmentMode}
        segmentState={segmentState}
      />
      <br />
      <div className="leg-buttons">
        <Button
          type="button"
          className="leg-btn"
          onClick={() => {
            addLeg({ ...segmentState, segmentMode });
          }}
        >
          Add Leg
        </Button>
        <Button
          className="leg-btn"
          type="button"
          onClick={cancelLeg}
          variant="outline-primary"
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}
