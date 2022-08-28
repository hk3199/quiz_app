
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
      <Header/>
      <Routes>
            {/* <Route path="/"element={<Home/>}/>
           
           
            <Route path="/quiz" exact>
              <Quiz></Quiz>
            </Route>
            <Route path='/result' exact>
              <Result/>
            </Route> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
 