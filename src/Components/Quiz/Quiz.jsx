import React,{useState,useEffect} from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Button, TextField } from "@mui/material";
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

  const [questions,setQuestions]=useState([])
  
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=>{
const getQuestions=async()=>{
  await commonApi({
    action: "getQuestionnaire",
    data: "",
  })
    .then(({ DATA = {}, MESSAGE }) => {
      setQuestions(DATA.data)
      setCurrentIndex(0)
   
    })
    .catch((error) => {
      console.error(error);
    });
}
getQuestions()
  },[])
  return (
    <div className="bg-[#F6F7FC] relative min-h-screen">
      <Navbar />
      
 
        <section
        className="w-full pt-32 lg:pt-52 px-5 lg:mx-0
        "
      ><div className="bg-white mx-auto shadow-md w-full border rounded-xl lg:max-w-7xl py-9  px-5 lg:px-10  ">
          <h1 className="text-3xl text-[#23314C] font_ab">
            {questions[currentIndex]?.prompt}
          </h1>
          <form action="">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  {/* <input
                    id="english"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="english"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    English
                  </label> */}
                  <RadioGroup name="use-radio-group" defaultValue="">
                   {questions[currentIndex]?.options.map((option,index) => {return <MyFormControlLabel
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
                    })}
                    
                  </RadioGroup>
                </div>
                {/* <div className="flex items-center gap-x-3">
                  <input
                    id="french"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="french"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    French
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Spanish"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Spanish"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    Spanish
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Hindi"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Hindi"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    Hindi
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Other"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Other"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    Other
                  </label>

                  <input
                    type="text"
                    className="bg-[#FEFEFE] px-2 py-2 border outline-none w-40 rounded-md"
                    placeholder="Type here"
                  />
                </div> */}
              </div>
            </fieldset>
          

          <div className=" mt-10 flex items-center justify-between">
            
            <Button
              variant="contained"
              sx={{
                color: "#ffffff",
                bgcolor: "#6D81FC",
                textTransform: "none",
              }}
              disabled={currentIndex==0}
              onClick={()=>{
                setCurrentIndex(currentIndex-1)
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
              disabled={currentIndex==questions.length-1}
              onClick={()=>{
                setCurrentIndex(currentIndex+1)
              }}
            >
              Next
            </Button>
          </div>

          <div className="flex items-center justify-center mt-10">
            {/* Reset button */}
            {currentIndex==questions.length-1 && <Link to={"/payment"}>
              <Button
                variant="contained"
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
            </Link>}
          </div>
          </form>
        </div>
        
        </section>
    
      
      {/* <p className=" mt-28 text-center text-[#23314C]">
        © 2023 Assist Abroad , Inc. All Rights Reserved.
      </p> */}
    </div>
  );
};

export default Quiz;
