import React, {useState, useEffect} from 'react';
import Leg from '../../components/Leg';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function LegsList() {
  const [legs, setLegs] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    let isCancelled = false;;
    async function fetchLegs() {
      try {
        const querySnapshot = await getDocs(collection(db, "legs"));
        const result = [];
        querySnapshot.forEach((doc) => {
          result.push(doc.data());
        });
        if(!isCancelled) {
          setLegs(result);
        }
      } catch(err) {
        if(!isCancelled) {
          console.error("Error fetching data");
        }
      }
    }
    fetchLegs();
    return () => {
      isCancelled = true;
    };
  }, [])

  return (
    <Container className="mr-50">
      <Button type="button" onClick={()=>{
        navigate("/");
      }}>Add Leg</Button>
      {
        legs.map((leg, index)=>{
          return (<Leg
            key={index}
            segmentState={leg}
          />);
        })
      }
     </Container>
  )
}




        
        