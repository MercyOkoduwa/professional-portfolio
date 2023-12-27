import { RouterProvider } from 'react-router-dom';
import './App.css';
import {baseRoute} from  './routes/baseRoute'

function App() {
  return (
    <div className="App">
      <RouterProvider router={baseRoute} />
    </div>
  );
}

export default App;
