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
} from "../../enums";
import SegmentBox from "../SegmentBox";

export default function Segment({ segmentMode, addLeg, cancelLeg }) {
  const [segmentState, setSegmentState] = useState({
    totalLot: 1,
    position: PositionType.BUY,
    optionType: OptionType.PUT,
    expiry: IntervalType.WEEKLY,
    strikeCriteria: StrikeCriteria.STRIKE_TYPE,
  });
  useEffect(() => {
    switch (segmentMode) {
      case SegmentType.FUTURES:
        setSegmentState({
          totalLot: 1,
          position: PositionType.BUY,
        });
        break;
      case SegmentType.OPTIONS:
        setSegmentState({
          totalLot: 1,
          position: PositionType.BUY,
          optionType: OptionType.PUT,
          expiry: IntervalType.WEEKLY,
          strikeCriteria: StrikeCriteria.STRIKE_TYPE,
        });
        break;
      default:
        setSegmentState({});
    }
  }, [segmentMode]);

  const segmentChange = (e) => {
    const { id, value } = e.target;
    setSegmentState({
      ...segmentState,
      [id]: value,
    });
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
