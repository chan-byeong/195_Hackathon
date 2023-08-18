import {BrowserRouter,Routes , Route} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ResultPage from './pages/ResultPage';
import JobPostingForm from './components/register/JobPostingForm';
import LoginPage from './pages/LoginPage';
import Signup from './components/loginpage/Signup';
import LoginDetail from './components/loginpage/LoginDetail';
import AdminMain from './components/admin/AdminMain';


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles/> 
        <Routes>
       
          <Route path="/" element={<MainPage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
          <Route path="/result/:id" element={<DetailPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          {/* <Route path="/search" element={<DetailPage/>}/> */}
          <Route path="/postingform" element={<JobPostingForm/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loginDetail" element={<LoginDetail/>}/>
          <Route path="/adminMain" element={<AdminMain/>}/>
          <Route path="/register" element={<JobPostingForm/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
