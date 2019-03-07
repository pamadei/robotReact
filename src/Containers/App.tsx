import React, {useState, useEffect} from 'react';
import Robots from '../Components/Robots';
import Search from '../Components/Search';
import Scroll from '../Components/Scroll';

const App = () => {

  const [robots, setRobots] = useState([]);
  const [searchRobot, setsearchRobot] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {setRobots(data)})
    .catch(err => console.log(err))
  });

  const onSearchChanges = (e:any) => {
    setsearchRobot(e.target.value);
  }

  const robotSearched = robots.filter((robot:any) => {
    return robot.name.toLowerCase().includes(searchRobot.toLowerCase());
  });

  return (
    <div>
      <h1>Robot Land</h1>
      {(robots.length === 0) ? ( <h1>Loading</h1>) : (
        <div>
        <Search onSearch={onSearchChanges}/>
        <Scroll>
        <Robots robots={robotSearched}/>
        </Scroll>
        </div>
      )}
    </div>

  )
}

export default App;