import { useEffect, useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { getRoutes } from './router/routes';

function App() {

  const [allRoutes, setAllRoutes] = useState([...publicRoutes])

  useEffect(() => {
    const routes = getRoutes()
    setAllRoutes([...allRoutes, routes])
  },[])

  return (
    <Router allRoutes= {allRoutes}>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Router>
)
}

export default App;