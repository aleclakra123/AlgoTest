import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Segment from "../../components/Segment";
import { segmentTypes } from "../../types";
import { SegmentType } from "../../enums";
import Leg from "../../components/Leg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button, Card, Col } from "react-bootstrap";
import { db } from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function LegBuilder() {
  const [legs, setLegs] = useState([]);
  const [segmentValue, setSegmentValue] = useState(SegmentType.OPTIONS);
  const [showAddLegButton, setShowAddLegButton] = useState(false);
  const navigate = useNavigate();

  const addLeg = (leg) => {
    setLegs([...legs, leg]);
  };

  const editLeg = (index, name, value) => {
    legs[index] = {
      ...legs[index],
      [name]: value,
    };
    setLegs([...legs]);
  };

  const copyLeg = (index) => {
    const copiedLeg = legs[index];
    setLegs([...legs, copiedLeg]);
  };

  const deleteLeg = (index) => {
    setLegs(legs.filter((_, i) => i !== index));
  };

  const toggleAddLegButton = () => {
    setShowAddLegButton(!showAddLegButton);
  };

  const saveLegs = async () => {
    try {
      const legRef = collection(db, "legs");
      await Promise.all(
        legs.map((leg) => {
          return addDoc(legRef, leg);
        })
      );
    } catch (e) {
      console.error("Error adding legs: ", e);
    }
  };

  return (
    <Container className="mr-50">
      {!showAddLegButton && (
        <Card style={{ padding: "20px" }}>
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
                      setSegmentValue(e.currentTarget.value);
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
              cancelLeg={toggleAddLegButton}
            />
          </Row>
        </Card>
      )}
      {showAddLegButton && (
        <Button onClick={toggleAddLegButton}>Add Leg</Button>
      )}
      <br />
      <br />

      {legs.length > 0 && <h4>Legs</h4>}
      {legs.map((leg, index) => {
        return (
          <Leg
            key={index}
            segmentState={leg}
            copyLeg={() => {
              copyLeg(index);
            }}
            deleteLeg={() => {
              deleteLeg(index);
            }}
            editLeg={(name, value) => {
              editLeg(index, name, value);
            }}
          />
        );
      })}
      <br />
      <br />
      <Row>
        <ButtonGroup>
          <Button disabled={legs.length === 0} onClick={saveLegs}>
            Save Legs
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/legs");
            }}
          >
            Fetch Legs
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
}
