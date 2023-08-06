import {BrowserRouter,Routes , Route} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import ResultPage from './pages/MainPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles/> 
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<div>LOGIN</div>}/>
          <Route path="/search" element={<div>SEARCH</div>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
