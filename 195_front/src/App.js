import {BrowserRouter,Routes , Route} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ResultPage from './pages/ResultPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminMain from './components/admin/AdminMain';
import Signup from './components/loginpage/Signup';
import LoginDetail from './components/loginpage/LoginDetail';

import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles/> 
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/search" element={<DetailPage/>}/>
          <Route path="/register" element = {<RegisterPage/>}/>
          <Route path="/test" element={<AdminMain/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logindetail" element={<LoginDetail/>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
