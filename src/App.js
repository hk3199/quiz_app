
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
function App() {
  const [name,setName]=useState ()
  const fetchQuestions=async(category="",difficulty="") => {             //api call
      const{data}=await axios.get(  `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
          // console.log(data);
  }
  const [questions,setQuestions]=useState();
  const [score,setScore]=useState(0);

  return (
     <BrowserRouter>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
      <Header/>
      <Routes>
      <Route path="/" element={<Home 
      name={name} 
      setName={setName} 
      fetchQuestions={fetchQuestions}/>} />

      <Route  path="/quiz" element={<Quiz 
      name={name}
      questions={questions}
      score={score}
      setScore={setScore}
      setQuestions={setQuestions}
      />} />
      <Route  path="/result" element={<Result
      name={name}
      score={score}
      
      />} />
      </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
 