import React from 'react'
import Card from 'react-bootstrap/Card';
import SegmentBox from '../SegmentBox';
import "./index.css";

export default function Leg({segmentState}) {
  return (
    <Card className="legs">
      <Card.Header>
        <SegmentBox segmentState={segmentState} segmentMode={segmentState.segmentMode} segmentChange={()=>{}} leg={true} />
      </Card.Header>
    </Card>
  )
}
