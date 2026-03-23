import { useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import '../src/assets/css/App.css';

function App() {

  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  console.log(allRoutes)
 
  return (
    <div className="BaseDiv">
      <Router allRoutes={allRoutes} />
    </div>
  );
}
export default App;


// <div style={AppBaseDiv}>