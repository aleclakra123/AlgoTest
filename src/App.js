import { useEffect } from 'react';
import HeadLeg from './components/HeadLeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  useEffect(()=>{
    document.title = 'AlgoTest22';
  }, [])

  return (
    <div className="App">
      <HeadLeg />
    </div>
  );
}

export default App;
