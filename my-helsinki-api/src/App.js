import './App.css';
import OpenApi from './Components/OpenApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Place from './Components/Place'

function App() {
  return (
   <section>
     <BrowserRouter>
       <Routes>
         {/* <OpenApi /> */}
         <Route path="/" element={<OpenApi />} />
         <Route path="/place/:id" element={<Place />} />
         
       </Routes>
     </BrowserRouter> 
   </section>
  );
}

export default App;
