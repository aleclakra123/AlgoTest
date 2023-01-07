import React from "react";
import Form from "react-bootstrap/Form";
import "./index.css";
import {
  intervalTypes,
  optionTypes,
  positionTypes,
  strikeCriteriaTypes,
  strikeTypes,
} from "../../types";
import { SegmentType, StrikeCriteria, AdjustmentType } from "../../enums";
import "./index.css";

export default function SegmentBox({
  segmentState,
  segmentChange,
  segmentMode,
  leg,
}) {
  return (
    <div className="formContainer">
      {leg && "Lots"}
      <Form.Group className="mb-3" controlId="totalLot">
        {!leg && <Form.Label>Total Lot</Form.Label>}
        <Form.Control
          type="number"
          min="1"
          value={segmentState.totalLot}
          onChange={segmentChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="position">
        {!leg && <Form.Label>Position</Form.Label>}
        <Form.Select value={segmentState.position} onChange={segmentChange}>
          {positionTypes.map(({ type, value }) => {
            return (
              <option value={value} key={value}>
                {type}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      {Number(segmentMode) === SegmentType.OPTIONS && (
        <>
          <Form.Group className="mb-3" controlId="optionType">
            {!leg && <Form.Label>Option Type</Form.Label>}
            <Form.Select
              value={segmentState.optionType}
              onChange={segmentChange}
            >
              {optionTypes.map(({ type, value }) => {
                return (
                  <option value={value} key={value}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="expiry">
            {!leg && <Form.Label>Expiry</Form.Label>}
            <Form.Select value={segmentState.expiry} onChange={segmentChange}>
              {intervalTypes.map(({ type, value }) => {
                return (
                  <option value={value} key={value}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="strikeCriteria">
            {!leg && <Form.Label>Select Strike Criteria</Form.Label>}
            <Form.Select
              value={segmentState.strikeCriteria}
              onChange={segmentChange}
            >
              {strikeCriteriaTypes.map(({ type, value }) => {
                return (
                  <option value={value} key={value}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          {Number(segmentState.strikeCriteria) ===
            StrikeCriteria.STRIKE_TYPE && (
            <Form.Group className="mb-3" controlId="strikeType">
              {!leg && <Form.Label>Strike Type</Form.Label>}
              <Form.Select
                value={segmentState.strikeType}
                onChange={segmentChange}
              >
                {strikeTypes.map(({ type, value }) => {
                  return (
                    <option value={value} key={value}>
                      {type}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          )}
          {Number(segmentState.strikeCriteria) ===
            StrikeCriteria.PREMIUM_RANGE && (
            <>
              <Form.Group className="mb-3" controlId="lowerRange">
                {!leg && <Form.Label>Lower Range</Form.Label>}
                <Form.Control
                  type="number"
                  min="1"
                  value={segmentState.lowerRange}
                  onChange={segmentChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="upperRange">
                {!leg && <Form.Label>Upper Range</Form.Label>}
                <Form.Control
                  type="number"
                  min="1"
                  value={segmentState.upperRange}
                  onChange={segmentChange}
                />
              </Form.Group>
            </>
          )}
          {Number(segmentState.strikeCriteria) ===
            StrikeCriteria.CLOSEST_PREMIUM && (
            <Form.Group className="mb-3" controlId="premium">
              {!leg && <Form.Label>Premium</Form.Label>}
              <Form.Control
                type="number"
                min="1"
                value={segmentState.premium}
                onChange={segmentChange}
              />
            </Form.Group>
          )}
          {Number(segmentState.strikeCriteria) ===
            StrikeCriteria.STRADDLE_WIDTH && (
            <>
              <Form.Group className="mb-3" controlId="atmStrike">
                {!leg && <Form.Label>ATM Strike</Form.Label>}
                <Form.Select
                  value={segmentState.atmStrike}
                  onChange={segmentChange}
                >
                  <option value={AdjustmentType.PLUS}>+</option>
                  <option value={AdjustmentType.MINUS}>-</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="adjustmentFactor">
                {!leg && <Form.Label>x ATM Straddle Price</Form.Label>}
                <Form.Control
                  type="number"
                  min="1.5"
                  value={segmentState.adjustmentFactor}
                  onChange={segmentChange}
                />
              </Form.Group>
            </>
          )}
        </>
      )}
    </div>
  );
}
