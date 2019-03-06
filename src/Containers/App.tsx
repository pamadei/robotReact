import React, {useState, useEffect} from 'react';
import Robots from '../Components/Robots';

const App = () => {

  const [robots, setRobots] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setRobots(data))
    .catch(err => console.log(err))
  })
 
  return (
    <div>
      <Robots robots={robots}/>
    </div>
  )
}

export default App;