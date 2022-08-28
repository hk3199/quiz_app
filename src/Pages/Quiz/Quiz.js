import { CircularProgress } from "@material-ui/core";
import { useEffect,useState } from "react";
import './Quiz.css'
import Question from "../../components/Question/Question";

const Quiz = ({name,questions,score,setScore,setQuestions}) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);


  useEffect(()=>{
      console.log(questions);

      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    }, [currQues, questions]);
  
    console.log(options);

    const handleShuffle = (options) => {
      return options.sort(() => Math.random() - 0.5);
    };
    
  return (
       <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>


    {
      questions?( <>
      <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>

          <Question 
          currQues={currQues}
          setCurrQues={setCurrQues}
          questions={questions}
          options={options}
          correct={questions[currQues]?.correct_answer}
          score={score}
          setScore={setScore} //ability to set the score
           setQuestions={setQuestions}
          
          />


      </>) : (<CircularProgress   style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}></CircularProgress>)
      
    }
    </div>
    );
  };
  
  export default Quiz;