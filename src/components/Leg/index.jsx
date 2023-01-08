import React from "react";
import Card from "react-bootstrap/Card";
import SegmentBox from "../SegmentBox";
import Badge from "react-bootstrap/Badge";
import "./index.css";
import { Col, Form, Row } from "react-bootstrap";
import { momentumTypes, trailStopLossTypes } from "../../types";

export default function Leg({ segmentState, copyLeg, deleteLeg, editLeg }) {
  const segmentChange = (e) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      editLeg && editLeg(id, e.target.checked);
    } else {
      editLeg && editLeg(id, value);
    }
  };

  return (
    <Card className="legs">
      <Card.Header style={{ padding: "20px" }}>
        <SegmentBox
          segmentState={segmentState}
          segmentMode={segmentState.segmentMode}
          segmentChange={segmentChange}
          leg={true}
        />
        <Row>
          <Col>
            <Form.Check
              type="checkbox"
              id="SimpleMomentum"
              label="Simple Momentum"
              checked={segmentState.simpleMomentum}
              value={segmentState.simpleMomentum}
              onChange={segmentChange}
            />
          </Col>
          <Col>
            <Form.Select
              size="sm"
              disabled={!segmentState.simpleMomentum}
              value={segmentState.simpleMomentumType}
              onChange={segmentChange}
              id="SimpleMomentumType"
            >
              {momentumTypes.map(({ type, value }) => {
                return (
                  <option value={value} key={value}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              disabled={!segmentState.simpleMomentum}
              size="sm"
              type="number"
              min="0"
              id="SimpleMomentumValue"
              value={segmentState.simpleMomentumValue}
              onChange={segmentChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Check
              type="checkbox"
              id="TrailStopLoss"
              label="Trail SL"
              checked={segmentState.trailStopLoss}
              value={segmentState.trailStopLoss}
              onChange={segmentChange}
            />
          </Col>
          <Col>
            <Form.Select
              disabled={!segmentState.trailStopLoss}
              size="sm"
              value={segmentState.trailStopLossType}
              onChange={segmentChange}
              id="TrailStopLossType"
            >
              {trailStopLossTypes.map(({ type, value }) => {
                return (
                  <option value={value} key={value}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              disabled={!segmentState.trailStopLoss}
              size="sm"
              type="number"
              min="0"
              id="TrailStopLossValue1"
              value={segmentState.trailStopLossValue1}
              onChange={segmentChange}
            />
          </Col>
          <Col>
            <Form.Control
              disabled={!segmentState.trailStopLoss}
              size="sm"
              type="number"
              min="0"
              id="TrailStopLossValue2"
              value={segmentState.trailStopLossValue2}
              onChange={segmentChange}
            />
          </Col>
        </Row>
        <br />
        {copyLeg && deleteLeg && (
          <Row>
            <Col>
              <Badge
                bg="light"
                text="dark"
                className="badges"
                onClick={copyLeg}
              >
                📋 Copy
              </Badge>
            </Col>
            <Col>
              <Badge
                bg="light"
                text="dark"
                className="badges"
                onClick={deleteLeg}
              >
                ❌ Remove
              </Badge>
            </Col>
          </Row>
        )}
      </Card.Header>
    </Card>
  );
}
