import React from "react";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";

export default function SurveyContent({ user }) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const { firstName, lastName, email } = user;
  // console.log(firstName, lastName, email);
  const [questions, setQuestions] = React.useState({
    options: [
      "Gender",
      "Age",
      "During the past 4 weeks, have you had any problems with your work or daily life due to your physical health?",
      "During the past 4 weeks, have you had any problems with your work or daily life due to any emotional problems, such as feeling depressed, sad or anxious?",
      "Overall how would you rate your mental health?",
      "Have you felt particularly low or down for more than 2 weeks in a row?",
      "During the past two weeks, how often has your mental health affected your relationships?",
      "Have you ever been diagnosed with a mental disorder before?",
      "When did you last get your mental health examination done?",
      "Is there a history of mental disorder in your family?",
      "Have you seen a therapist in the recent past?",
      "Are you currently taking any medication?",
      "How many hours do you sleep per day?",
      "How is your quality of sleep?",
      "What is your marital status?",
      "Are you a heavy smoker?",
      "Are you alcoholic?",
      "How often do you feel positive about your life?",
      "Suicide Attempt?",
      "Do you been experiencing mood swings?",
      "How often do you exercise?",
      "Do your religion have an effect on decision making?",
      "Have you experienced sleepness nights?",
      "Have you expereinces excessive sleeping?",
      "Do you find your family supportive?",
      "Have you experiening a weight loss or gain?",
      "Are you envolved in any extra cocarriculam activities?",
      "Are your academeics being affected by your mental health?",
      "Have you intentionally caused serious physical injury to yourself?",
      "Have you intentionally caused serious physical injury to anyone?",
    ],
  });
  const [answers, setAnswers] = React.useState({
    options: [
      "",
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  });

  const handleSurvey = () => {
    setOpen(false);
    history.push("/");
  };

  const setAnswer = (value, index) => {
    const answer = answers.options;
    answer[index] = value;
    setAnswers({ options: answer });
    console.log(answers.options);
    // console.log(questions.options);
  };

  const submitHandler = async () => {
    const db = firebase.firestore();
    db.collection("user-survey").add({
      firstName: firstName,
      lastName: lastName,
      email: email,
      answers: answers.options,
      questions: questions.options,
    });
    setOpen(true);
  };
  return (
    <div style={{ margin: "4rem 4rem" }}>
      <h3>Gender</h3>
      <label>
        <input
          type="radio"
          value="Male"
          checked={answers.options[0] === "Male"}
          onChange={(e) => setAnswer(e.target.value, 0)}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Female"
          checked={answers.options[0] === "Female"}
          onChange={(e) => setAnswer(e.target.value, 0)}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Other"
          checked={answers.options[0] === "Other"}
          onChange={(e) => setAnswer(e.target.value, 0)}
        />
        Other
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Prefer Not to Say"
          checked={answers.options[0] === "Prefer Not to Say"}
          onChange={(e) => setAnswer(e.target.value, 0)}
        />
        Prefer Not to Say
      </label>
      <br />
      <br />
      <h3>Age</h3>

      <input
        value={answers.options[1]}
        style={{ width: "10rem", height: "2rem" }}
        onChange={(e) => setAnswer(e.target.value, 1)}
      ></input>
      <br />
      <br />
      <h3>
        During the past 4 weeks, have you had any problems with your work or
        daily life due to your physical health?
      </h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[2] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 2)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[2] === "No"}
          onChange={(e) => setAnswer(e.target.value, 2)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Don't Know"
          checked={answers.options[2] === "Don't Know"}
          onChange={(e) => setAnswer(e.target.value, 2)}
        />
        Don't Know
      </label>
      <br />
      <br />
      <br />
      <h3>
        During the past 4 weeks, have you had any problems with your work or
        daily life due to any emotional problems, such as feeling depressed, sad
        or anxious?
      </h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[3] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 3)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[3] === "No"}
          onChange={(e) => setAnswer(e.target.value, 3)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Don't Know"
          checked={answers.options[3] === "Don't Know"}
          onChange={(e) => setAnswer(e.target.value, 3)}
        />
        Don't Know
      </label>
      <br />
      <br />
      <br />
      <h3>Overall how would you rate your mental health?</h3>
      <label>
        <input
          type="radio"
          value="Excellent"
          checked={answers.options[4] === "Excellent"}
          onChange={(e) => setAnswer(e.target.value, 4)}
        />
        Excellent
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Average"
          checked={answers.options[4] === "Average"}
          onChange={(e) => setAnswer(e.target.value, 4)}
        />
        Average
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Poor"
          checked={answers.options[4] === "Poor"}
          onChange={(e) => setAnswer(e.target.value, 4)}
        />
        Poor
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Not Good"
          checked={answers.options[4] === "Not Good"}
          onChange={(e) => setAnswer(e.target.value, 4)}
        />
        Not Good
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Not Sure"
          checked={answers.options[4] === "Not Sure"}
          onChange={(e) => setAnswer(e.target.value, 4)}
        />
        Not Sure
      </label>
      <br />
      <br />
      <br />
      <h3>
        Have you felt particularly low or down for more than 2 weeks in a row?
      </h3>
      <label>
        <input
          type="radio"
          value="Very Often"
          checked={answers.options[5] === "Very Often"}
          onChange={(e) => setAnswer(e.target.value, 5)}
        />
        Very Often
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Not so Often"
          checked={answers.options[5] === "Not so Often"}
          onChange={(e) => setAnswer(e.target.value, 5)}
        />
        Not so Often
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Somewhat Often"
          checked={answers.options[5] === "Somewhat Often"}
          onChange={(e) => setAnswer(e.target.value, 5)}
        />
        Somewhat Often
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Not At All"
          checked={answers.options[5] === "Not At All"}
          onChange={(e) => setAnswer(e.target.value, 5)}
        />
        Not At All
      </label>
      <br />
      <br />
      <br />
      <h3>
        During the past two weeks, how often has your mental health affected
        your relationships?
      </h3>
      <label>
        <input
          type="radio"
          value="Very Often"
          checked={answers.options[6] === "Very Often"}
          onChange={(e) => setAnswer(e.target.value, 6)}
        />
        Very Often
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Not so Often"
          checked={answers.options[6] === "Not so Often"}
          onChange={(e) => setAnswer(e.target.value, 6)}
        />
        Not so Often
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Somewhat Often"
          checked={answers.options[6] === "Somewhat Often"}
          onChange={(e) => setAnswer(e.target.value, 6)}
        />
        Somewhat Often
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Not At All"
          checked={answers.options[6] === "Not At All"}
          onChange={(e) => setAnswer(e.target.value, 6)}
        />
        Not At All
      </label>
      <br />
      <br />
      <br />
      <h3>Have you ever been diagnosed with a mental disorder before?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[7] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 7)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[7] === "No"}
          onChange={(e) => setAnswer(e.target.value, 7)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[7] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 7)}
        />
        Rather not to say
      </label>
      <br />
      <br />
      <h3>When did you last get your mental health examination done?</h3>
      <label>
        <input
          type="radio"
          value="Less than 6 months ago"
          checked={answers.options[8] === "Less than 6 months ago"}
          onChange={(e) => setAnswer(e.target.value, 8)}
        />
        Less than 6 months ago
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="A year ago"
          checked={answers.options[8] === "A year ago"}
          onChange={(e) => setAnswer(e.target.value, 8)}
        />
        A year ago
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="6 months ago"
          checked={answers.options[8] === "6 months ago"}
          onChange={(e) => setAnswer(e.target.value, 8)}
        />
        6 months ago
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="More than year ago"
          checked={answers.options[8] === "More than year ago"}
          onChange={(e) => setAnswer(e.target.value, 8)}
        />
        More than year ago
      </label>
      <br />
      <br />
      <br />
      <h3>Is there a history of mental disorder in your family?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[9] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 9)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[9] === "No"}
          onChange={(e) => setAnswer(e.target.value, 9)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[9] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 9)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Have you seen a therapist in the recent past?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[10] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 10)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[10] === "No"}
          onChange={(e) => setAnswer(e.target.value, 10)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[10] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 10)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Are you currently taking any medication?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[11] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 11)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[11] === "No"}
          onChange={(e) => setAnswer(e.target.value, 11)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[11] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 11)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>How many hours do you sleep per day?</h3>
      <label>
        <input
          type="radio"
          value="Less than 4"
          checked={answers.options[12] === "Less than 4"}
          onChange={(e) => setAnswer(e.target.value, 12)}
        />
        Less than 4
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="4-6"
          checked={answers.options[12] === "4-6"}
          onChange={(e) => setAnswer(e.target.value, 12)}
        />
        4-6
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="7-9"
          checked={answers.options[12] === "7-9"}
          onChange={(e) => setAnswer(e.target.value, 12)}
        />
        7-9
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="9+"
          checked={answers.options[12] === "9+"}
          onChange={(e) => setAnswer(e.target.value, 12)}
        />
        9+
      </label>
      <br />
      <br />

      <h3>How is your quality of sleep?</h3>
      <label>
        <input
          type="radio"
          value="Very Bad"
          checked={answers.options[13] === "Very Bad"}
          onChange={(e) => setAnswer(e.target.value, 13)}
        />
        Very Bad
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Normal"
          checked={answers.options[13] === "Normal"}
          onChange={(e) => setAnswer(e.target.value, 13)}
        />
        Normal
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Good"
          checked={answers.options[13] === "Good"}
          onChange={(e) => setAnswer(e.target.value, 13)}
        />
        Good
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Very Good"
          checked={answers.options[13] === "Very Good"}
          onChange={(e) => setAnswer(e.target.value, 13)}
        />
        Very Good
      </label>
      <br />
      <br />

      <h3>What is your marital status?</h3>
      <label>
        <input
          type="radio"
          value="Married"
          checked={answers.options[14] === "Married"}
          onChange={(e) => setAnswer(e.target.value, 14)}
        />
        Married
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Widdowed"
          checked={answers.options[14] === "Widdowed"}
          onChange={(e) => setAnswer(e.target.value, 14)}
        />
        Widowed
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Divorced"
          checked={answers.options[14] === "Divorced"}
          onChange={(e) => setAnswer(e.target.value, 14)}
        />
        Divorced
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Separated"
          checked={answers.options[14] === "Separated"}
          onChange={(e) => setAnswer(e.target.value, 14)}
        />
        Separated
      </label>
      <br />
      <br />

      <h3>Are you a heavy smoker?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[15] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 15)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[15] === "No"}
          onChange={(e) => setAnswer(e.target.value, 15)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[15] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 15)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Are you alcoholic?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[16] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 16)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[16] === "No"}
          onChange={(e) => setAnswer(e.target.value, 16)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[16] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 16)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>How often do you feel positive about your life?</h3>
      <label>
        <input
          type="radio"
          value="Never"
          checked={answers.options[17] === "Never"}
          onChange={(e) => setAnswer(e.target.value, 17)}
        />
        Never
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Most of the time"
          checked={answers.options[17] === "Most of the time"}
          onChange={(e) => setAnswer(e.target.value, 17)}
        />
        Most of the time
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="About half the time"
          checked={answers.options[17] === "About half the time"}
          onChange={(e) => setAnswer(e.target.value, 17)}
        />
        About half the time
      </label>

      <br />
      <label>
        <input
          type="radio"
          value="Always"
          checked={answers.options[17] === "Always"}
          onChange={(e) => setAnswer(e.target.value, 17)}
        />
        Always
      </label>
      <br />
      <br />

      <h3>Suicide Attempt?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[18] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 18)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[18] === "No"}
          onChange={(e) => setAnswer(e.target.value, 18)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[18] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 18)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Do you been experiencing mood swings?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[19] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 19)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[19] === "No"}
          onChange={(e) => setAnswer(e.target.value, 19)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[19] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 19)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>How often do you exercise?</h3>
      <label>
        <input
          type="radio"
          value="Daily"
          checked={answers.options[20] === "Daily"}
          onChange={(e) => setAnswer(e.target.value, 20)}
        />
        Daily
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Weekly"
          checked={answers.options[20] === "Weekly"}
          onChange={(e) => setAnswer(e.target.value, 20)}
        />
        Weekly
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Once a Month"
          checked={answers.options[20] === "Once a Month"}
          onChange={(e) => setAnswer(e.target.value, 20)}
        />
        Once a Month
      </label>
      <br />
      <br />

      <h3>Do your religion have an effect on decision making?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[21] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 21)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[21] === "No"}
          onChange={(e) => setAnswer(e.target.value, 21)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[21] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 21)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Have you experienced sleepness nights?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[22] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 22)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[22] === "No"}
          onChange={(e) => setAnswer(e.target.value, 22)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[22] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 22)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Have you expereinces excessive sleeping?</h3>
      <label>
        <input
          type="radio"
          value="Sometimes"
          checked={answers.options[23] === "Sometimes"}
          onChange={(e) => setAnswer(e.target.value, 23)}
        />
        Sometimes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Never"
          checked={answers.options[23] === "Never"}
          onChange={(e) => setAnswer(e.target.value, 23)}
        />
        Never
      </label>
      <br />
      <br />

      <h3>Do you find your family supportive?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[24] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 24)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[24] === "No"}
          onChange={(e) => setAnswer(e.target.value, 24)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[24] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 24)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Have you experiening a weight loss or gain?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[25] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 25)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[25] === "No"}
          onChange={(e) => setAnswer(e.target.value, 25)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[25] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 25)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Are you envolved in any extra cocarriculam activities?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[26] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 26)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[26] === "No"}
          onChange={(e) => setAnswer(e.target.value, 26)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[26] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 26)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Are your academeics being affected by your mental health?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[27] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 27)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[27] === "No"}
          onChange={(e) => setAnswer(e.target.value, 27)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[27] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 27)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>
        Have you intentionally caused serious physical injury to yourself?
      </h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[28] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 28)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[28] === "No"}
          onChange={(e) => setAnswer(e.target.value, 28)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[28] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 28)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <h3>Have you intentionally caused serious physical injury to anyone?</h3>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={answers.options[29] === "Yes"}
          onChange={(e) => setAnswer(e.target.value, 29)}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="No"
          checked={answers.options[29] === "No"}
          onChange={(e) => setAnswer(e.target.value, 29)}
        />
        No
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Rather not to say"
          checked={answers.options[29] === "Rather not to say"}
          onChange={(e) => setAnswer(e.target.value, 29)}
        />
        Rather not to say
      </label>
      <br />
      <br />

      <button
        style={{
          margin: "0rem 32rem",
          padding: "1rem",
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={() => submitHandler()}
      >
        Submit Survey
      </button>
      <div>
        <Dialog
          disableBackdropClick
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"User Health Survey"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to share survey asnwers with the website student
              counselor?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSurvey} color="primary" autoFocus>
              Yes
            </Button>
            <Button onClick={handleSurvey} color="secondary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
