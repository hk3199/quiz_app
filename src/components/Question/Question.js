import { Button } from "@material-ui/core";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import "./Question.css"
// const Question = () =>{
//     return(
//         <div>quiz question</div>
//     )
// }
const Question = ({
        currQues,
        setCurrQues,
          questions,
          options,
          correct,
          score,
          setScore,
          setQuestions}
) => {
       //selected blue state
       const [selected,setSelected] = useState()
        //use error message comp
       const [error,setError]= useState(false)
       const handleSelect = (i) =>{
            if(selected===i && selected===correct)
            {
                return "select";
                //return classname of select
            }
            else if(selected ===i && selected!==correct)
            {
                return "wrong";
            }
            else if(i===correct)
            {
                return "select";
            }
       };

       const handleCheck= (i) =>{
            setSelected(i);
            //set the selected state to be i
            if(i===correct) setScore(score+1);
            setError(false);
       };

       const navigate= useNavigate();

       const handleNext=()=>{
        if(currQues>8)
        {
            navigate("/result");
        }
        else if(selected)
        {
            setCurrQues(currQues+1);
            setSelected();
        }
        else
        {
            setError("Please select an option");
        }
       }

       const handleQuit=()=>{
        setCurrQues(0);
        setQuestions();
       }

       return (<div className="question">
        <h1>
            Question {currQues+1} 
        </h1>

        <div className="singleQuestion">
            <h2>{questions[currQues].question}</h2>

            <div className="options">
                    {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                    {/* check if something is inside ooptions */}

                    {
                        options &&
                        options.map((i) => (
                            <button
                            className={`singleOption  ${selected && handleSelect(i)}`}
                            key={i}
                            onClick={() => handleCheck(i)}
                            //check if selected answer is correct or not and makes the score go hugher
                            disabled={selected}
                            // disabled once selected
                          >{i}</button>
                        ))}
                         </div>

                            <div className="controls">
                                <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                style={{ width: 185 }}
                                href="/"
                                onClick={handleQuit}
                                >
                                    Quit
                                </Button>
                                <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                style={{ width: 185 }}
                                onClick={ handleNext}
                                >
                                    Next Question
                                </Button>
                            </div>

        </div>
       </div>
       );  
};

export default Question