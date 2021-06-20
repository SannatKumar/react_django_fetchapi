import { BrowserRouter } from 'react-router-dom';
import Table from './components/Table'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Table />   
        </BrowserRouter>     
    </div>
  );
}

export default App;
