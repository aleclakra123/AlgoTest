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
    if(type === "checkbox") {
      editLeg(id, e.target.checked);
    } else {
      editLeg(id, value);
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
              id="simpleMomentum"
              label="Simple Momentum"
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
              id="simpleMomentumType"
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
              id="simpleMomentumValue"
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
              id="trailStopLoss"
              label="Trail SL"
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
              id="trailStopLossType"
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
              id="trailStopLossValue1"
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
              id="trailStopLossValue2"
              value={segmentState.trailStopLossValue2}
              onChange={segmentChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Badge bg="info" text="dark" className="badges" onClick={copyLeg}>
              📋
            </Badge>
          </Col>
          <Col>
            <Badge bg="info" text="dark" className="badges" onClick={deleteLeg}>
              ❌
            </Badge>
          </Col>
        </Row>
      </Card.Header>
    </Card>
  );
}
