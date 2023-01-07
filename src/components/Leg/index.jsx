import React from "react"
import Card from "react-bootstrap/Card";
import SegmentBox from "../SegmentBox";
import Badge from "react-bootstrap/Badge"
import "./index.css";

export default function Leg({segmentState, copyLeg, deleteLeg, editLeg}) {

  const segmentChange = (e)=>{
    const {id, value} = e.target;
    editLeg(id, value);
  }

  return (
    <Card className="legs">
      <Card.Header style={{"padding": "20px"}}>
        <SegmentBox segmentState={segmentState} segmentMode={segmentState.segmentMode} segmentChange={segmentChange} leg={true} />
        <Badge bg="info" text="dark" className="badges" onClick={copyLeg}>📋</Badge>
        <Badge bg="info" text="dark" className="badges" onClick={deleteLeg}>❌</Badge>
      </Card.Header>
    </Card>
  )
}
