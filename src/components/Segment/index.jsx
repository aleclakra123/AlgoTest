import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./index.css";
import {
  AdjustmentType,
  IntervalType,
  MomentumType,
  OptionType,
  PositionType,
  StrikeCriteria,
  StrikeType,
  TrailStopLossType,
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
    upperRange: 200,
    atmStrike: AdjustmentType.MINUS,
    adjustmentFactor: 1.5,
    simpleMomentum: false,
    simpleMomentumValue: 0,
    simpleMomentumType: MomentumType.POINTS_UP,
    trailStopLoss: false,
    trailStopLossValue1: 0,
    trailStopLossValue2: 0,
    trailStopLossType: TrailStopLossType.POINTS
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
