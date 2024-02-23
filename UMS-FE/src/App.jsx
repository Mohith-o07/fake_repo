import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Studentui from "./components/component/Student/Studentui";
import Detailspage from "./components/component/Student/Detailspage";
import Question from "./components/component/Student/Question";
import Assessmentpage from "./components/component/Student/Assessmentpage";
import Instructionpage from "./components/component/Student/Instructionpage";
import Quiz from "./components/component/Student/Quiz";
import ProfessorPage from "./components/component/Professor/ProfessorPage";
import CreateAssessment from "./components/component/Professor/CreateAssessment";

function App() {
  const assessments = [
    {
      id: "lcmandhcf",
      title: "LCM and HCF",
      description: "Duration: 1hour",
    },
    {
      id: "conversion",
      title: "Conversions",
      description: "Duration: 1hour",
    },
    {
      id: "algebra",
      title: "Algebra",
      description: "Duration: 1hour",
    },
    {
      id: "equations",
      title: "Linear Equations",
      description: "Duration: 1hour",
    },
  ];

  const [studentDetails, setStudentDetails] = useState();
  const [classes,setClasses]=useState();
  const [studentInfo,setstudentInfo]=useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student details from backend
    axios.get("http://localhost:4000/student/studentDetails")
      .then(response => {
        setStudentDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching student details:', error);
        setLoading(false);
      });
  }, []);

    // Check if studentDetails is not null and extract variables
    if (studentDetails) {
      console.log(studentDetails);
      const { sid, sname, email, courses } = studentDetails;
      const student={sid,sname,email};
      setstudentInfo(student);
      //const coursesObject = courses.map(course => ({ id: course.id, name: course.name }));

      // Send coursesObject to backend
      axios.post("http://localhost:4000/student/details",courses)
        .then(response => {
          setClasses(response.data);
        })
        .catch(error => {
          console.error('Error sending courses to backend:', error);
        });
    }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/ca" element={<CreateAssessment />} />
          <Route
            path="/professorpage"
            element={<ProfessorPage classes={classes}/>}
          />
          <Route
            path="/detailspage/:subject"
            element={<Detailspage classes={classes}/>}
          />
          <Route
            path="/"
            element={<Studentui studentInfo={studentInfo} classes={classes} assessments={assessments}/>}
          />
          <Route
            path="/studentui"
            element={<Studentui studentInfo={studentInfo} classes={classes} assessments={assessments}/>}
          />
          <Route
            path="/practicepage/:subject/:unit"
            element={<Question classes={classes}/>}
          />
          <Route
            path="/quizpage/:subject/:unit"
            element={<Quiz classes={classes}/>}
          />
          <Route
            path="/assessmentpage/:assessment"
            element={<Assessmentpage assessments={assessments}/>}
          />
          <Route
            path="/instructionpage/:assessment"
            element={<Instructionpage assessments={assessments}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
