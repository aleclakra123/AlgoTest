import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Segment from "../Segment";
import { segmentTypes } from "../../types";
import { SegmentType } from "../../enums";
import Leg from "../Leg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card, Col } from "react-bootstrap";
import "./index.css";

export default function HeadLeg() {
  const [legs, setLegs] = useState([]);
  const [segmentValue, setSegmentValue] = useState(SegmentType.OPTIONS);

  const addLeg = (leg) => {
    setLegs([...legs, leg]);
  };

  const cancelLeg = () => {};

  return (
    <Container>
      <Card style={{'padding': '20px'}}>
        <Row>
          <Col>Select Segments</Col>
          <Col>
            <ButtonGroup>
              {segmentTypes.map((segment, idx) => (
                <ToggleButton
                  key={idx}
                  id={segment.value}
                  type="radio"
                  variant={
                    segmentValue === segment.value
                      ? "primary"
                      : "outline-primary"
                  }
                  name="segment"
                  value={segment.value}
                  checked={segmentValue === segment.value}
                  onChange={(e) => {
                    setSegmentValue(Number(e.currentTarget.value));
                  }}
                >
                  {segment.type}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Segment
            segmentMode={segmentValue}
            addLeg={addLeg}
            cancelLeg={cancelLeg}
          />
        </Row>
      </Card>

      {legs.map((leg, index) => {
        return <Leg key={index} segmentState={leg} />;
      })}
    </Container>
  );
}
