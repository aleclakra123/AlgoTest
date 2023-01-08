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
      <Form.Group className="mb-3" controlId="Lots">
        {!leg && <Form.Label>Total Lot</Form.Label>}
        <Form.Control
          type="number"
          min="1"
          value={segmentState.Lots}
          onChange={segmentChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="PositionType">
        {!leg && <Form.Label>Position</Form.Label>}
        <Form.Select value={segmentState.PositionType} onChange={segmentChange}>
          {positionTypes.map(({ type, value }) => {
            return (
              <option value={value} key={value}>
                {type}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      {segmentMode === SegmentType.OPTIONS && (
        <>
          <Form.Group className="mb-3" controlId="OptionType">
            {!leg && <Form.Label>Option Type</Form.Label>}
            <Form.Select
              value={segmentState.OptionType}
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
          <Form.Group className="mb-3" controlId="ExpiryKind">
            {!leg && <Form.Label>Expiry</Form.Label>}
            <Form.Select value={segmentState.ExpiryKind} onChange={segmentChange}>
              {intervalTypes.map(({ type, value }) => {
                return (
                  <option value={value} key={value}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="EntryType">
            {!leg && <Form.Label>Select Strike Criteria</Form.Label>}
            <Form.Select
              value={segmentState.EntryType}
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
          {segmentState.EntryType ===
            StrikeCriteria.STRIKE_TYPE && (
            <Form.Group className="mb-3" controlId="StrikeParameter">
              {!leg && <Form.Label>Strike Type</Form.Label>}
              <Form.Select
                value={segmentState.StrikeParameter}
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
          {segmentState.EntryType ===
            StrikeCriteria.PREMIUM_RANGE && (
            <>
              <Form.Group className="mb-3" controlId="LowerRange">
                {!leg && <Form.Label>Lower Range</Form.Label>}
                <Form.Control
                  type="number"
                  min="1"
                  value={segmentState.LowerRange}
                  onChange={segmentChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="UpperRange">
                {!leg && <Form.Label>Upper Range</Form.Label>}
                <Form.Control
                  type="number"
                  min="1"
                  value={segmentState.UpperRange}
                  onChange={segmentChange}
                />
              </Form.Group>
            </>
          )}
          {segmentState.EntryType ===
            StrikeCriteria.CLOSEST_PREMIUM && (
            <Form.Group className="mb-3" controlId="Premium">
              {!leg && <Form.Label>Premium</Form.Label>}
              <Form.Control
                type="number"
                min="1"
                value={segmentState.Premium}
                onChange={segmentChange}
              />
            </Form.Group>
          )}
          {segmentState.EntryType ===
            StrikeCriteria.STRADDLE_WIDTH && (
            <>
              <Form.Group className="mb-3" controlId="AtmStrike">
                {!leg && <Form.Label>ATM Strike</Form.Label>}
                <Form.Select
                  value={segmentState.AtmStrike}
                  onChange={segmentChange}
                >
                  <option value={AdjustmentType.PLUS}>+</option>
                  <option value={AdjustmentType.MINUS}>-</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="AdjustmentFactor">
                {!leg && <Form.Label>x ATM Straddle Price</Form.Label>}
                <Form.Control
                  type="number"
                  min="1.5"
                  value={segmentState.AdjustmentFactor}
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
