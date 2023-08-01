

import {BrowserRouter,Routes , Route} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles/> 
        <Routes>
          <Route path="/" element={<div>MAIN</div>}/>
          <Route path="/login" element={<div>LOGIN</div>}/>
          <Route path="/search" element={<div>SEARCH</div>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
