import React from "react";
import Form from "react-bootstrap/Form";
import "./index.css";
import {
  intervalTypes,
  optionTypes,
  positionTypes,
  strikeCriteriaTypes,
} from "../../types";
import { SegmentType } from "../../enums";
import "./index.css";

export default function SegmentBox({segmentState, segmentChange, segmentMode, leg}) {
  return (
    <div className="formContainer">
       {leg && 'Lots'}
        <Form.Group className="mb-3" controlId="totalLot">
          {!leg && <Form.Label>Total Lot</Form.Label>}
          <Form.Control
            type="number"
            min="1" 
            value={segmentState.totalLot}
            name="totalLot"
            onChange={segmentChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="position">
          {!leg && <Form.Label>Position</Form.Label>}
          <Form.Select
            value={segmentState.position}
            onChange={segmentChange}
          >
            {positionTypes.map(({ type, value }) => {
              return (
                <option value={value} key={value}>
                  {type}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        {
          Number(segmentMode) === SegmentType.OPTIONS && (
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
              <Form.Select
                value={segmentState.expiry}
                onChange={segmentChange}
              >
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
          </>
        )}
      </div>
  )
}
