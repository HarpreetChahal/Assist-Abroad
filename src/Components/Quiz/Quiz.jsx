import React, { useState, useEffect } from "react";
import Navbar from "../../layout/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Button, TextField, LinearProgress } from "@mui/material";
import commonApi from "../../api/common";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate=useNavigate()
  useEffect(() => {
    const getQuestions = async () => {
      await commonApi({
        action: "getQuestionnaire",
        data: "",
      })
        .then(({ DATA = {}, MESSAGE }) => {
          setQuestions(DATA.data);
          setCurrentIndex(0);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getQuestions();
  }, []);

  const handleNextQuestion = () => {
    // Check if an answer is selected before moving to the next question
    const selectedAnswer = document.querySelector(
      'input[name="use-radio-group"]:checked'
    );

    if (selectedAnswer) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Please select an answer.");
    }
  };

  useEffect(() => {
    const calculateProgress = () => {
      const totalQuestions = questions.length;
      const currentProgress = ((currentIndex + 1) / totalQuestions) * 100;
      setProgress(currentProgress);
    };

    calculateProgress();
  }, [currentIndex, questions]);

  return (
    <div className="bg-[#F6F7FC] relative min-h-screen">
      <Navbar />
      <section className="w-full pt-32 lg:pt-52 px-5  lg:max-w-7xl py-9 px-5 lg:px-10 mx-auto">
      <div className="flex justify-between mb-2"> 
      <div className="text-1xl text-[#23314C] font_ab">{currentIndex + 1} of {questions.length} Questions</div>
      <div className="text-1xl text-[#23314C] font_ab">{Math.round(progress)}% Completed</div>
      </div>
      <LinearProgress
  variant="determinate"
  value={progress}
  sx={{
    width: '100%',
    height: 15,
    borderRadius: 3,
    backgroundColor: '#2f8f8fa',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#6d81fe', // Updated color of the progress bar
    },
  }}
/>
      
        <div className="bg-white mt-5 mx-auto shadow-md w-full border rounded-xl lg:max-w-7xl py-9 px-5 lg:px-10">
        
          <h1 className="text-3xl text-[#23314C] font_ab">
            {questions[currentIndex]?.prompt}
          </h1>
          
          <form action="">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <RadioGroup name="use-radio-group" defaultValue="">
                    {questions[currentIndex]?.options.map((option, index) => {
                      return (
                        <MyFormControlLabel
                          key={index}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 24,
                              color: "#23314c",
                            },
                            "& .MuiFormControlLabel-label": {
                              fontSize: "20px",
                              color: "#23314c",
                            },
                          }}
                          value={option}
                          label={option}
                          control={<Radio />}
                        />
                      );
                    })}
                  </RadioGroup>
                </div>
              </div>
            </fieldset>

            <div className="mt-10 flex items-center justify-between">
              <Button
                variant="contained"
                sx={{
                  color: "#ffffff",
                  bgcolor: "#6D81FC",
                  textTransform: "none",
                }}
                disabled={currentIndex === 0}
                onClick={() => {
                  setCurrentIndex(currentIndex - 1);
                }}
              >
                Previous
              </Button>

              <Button
                variant="contained"
                sx={{
                  color: "#ffffff",
                  bgcolor: "#6D81FC",
                  textTransform: "none",
                }}
                disabled={currentIndex === questions.length - 1}
                onClick={handleNextQuestion}
               
              >
                Next
              </Button>
            </div>

            <div className="flex items-center justify-center mt-10">
              {/* Reset button */}
              {currentIndex === questions.length - 1 && (
                <Link to={"/payment"}>
                  <Button
                    variant="contained"
                    onClick={()=>{
                      navigate("/payment",{replace:true})
                    }}
                    sx={{
                      color: "#ffffff",
                      bgcolor: "#6D81FC",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#6d81fc",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
