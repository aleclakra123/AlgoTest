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
    Lots: 1,
    PositionType: PositionType.BUY,
    OptionType: OptionType.PUT,
    ExpiryKind: IntervalType.WEEKLY,
    EntryType: StrikeCriteria.STRIKE_TYPE,
    StrikeParameter: StrikeType.ATM,
    LowerRange: 50,
    Premium: 50,
    UpperRange: 200,
    AtmStrike: AdjustmentType.MINUS,
    AdjustmentFactor: 1.5,
    SimpleMomentum: false,
    SimpleMomentumValue: 0,
    SimpleMomentumType: MomentumType.POINTS_UP,
    TrailStopLoss: false,
    TrailStopLossValue1: 0,
    TrailStopLossValue2: 0,
    TrailStopLossType: TrailStopLossType.POINTS
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
