import React from "react";
import Form from "react-bootstrap/Form";
import { intervalTypes, positionTypes, segmentTypes, strikeCriteriaTypes } from "../../types";

export default function OptionsSegment({ segmentState, setSegmentState }) {

  const formChange = (e) => {
    const {id, value} = e.target;
    setSegmentState({
        ...segmentState,
        [id]: value
    })
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="totalLot">
        <Form.Label>Total Lot</Form.Label>
        <Form.Control
          type="number"
          value={segmentState.totalLot || 1}
          name="totalLot"
          onChange={formChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="position">
        <Form.Label>Position</Form.Label>
        <Form.Select value={segmentState.position || "sell"} onChange={formChange}>
          {
            positionTypes.map(({type, value})=>{
              return (<option value={value} key={value}>{type}</option>)
            })
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="optionType">
        <Form.Label>Option Type</Form.Label>
        <Form.Select value={segmentState.optionType || "call"} onChange={formChange}>
          {
            segmentTypes.map(({type, value})=>{
              return (<option value={value} key={value}>{type}</option>)
            })
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="expiry">
        <Form.Label>Expiry</Form.Label>
        <Form.Select value={segmentState.expiry || "weekly"} onChange={formChange}>
          {
            intervalTypes.map(({type, value})=>{
              return (<option value={value} key={value}>{type}</option>)
            })
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="strikeCriteria">
        <Form.Label>Select Strike Criterial</Form.Label>
        <Form.Select value={segmentState.strikeCriteria || "strikeType"} onChange={formChange}>
          {
            strikeCriteriaTypes.map(({type, value})=>{
              return (<option value={value} key={value}>{type}</option>)
            })
          }
        </Form.Select>
      </Form.Group>
    </>
  );
}
