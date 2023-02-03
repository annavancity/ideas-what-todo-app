import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');
  const getAdvice = async () => {
    const response = await fetch("http://www.boredapi.com/api/activity/")
    const data = await response.json();
    setAdvice(data.activity);
  }
  useEffect(()=> {
    getAdvice();
  }, [])

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>New Activity</button>
    </div>
  );
}

export default App;
