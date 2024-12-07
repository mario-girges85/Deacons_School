import React, { useState } from "react";
import { Button, Input, Select, Option, Radio } from "@material-tailwind/react";

const QuizManager = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    text: "",
    type: "written",
    choices: [],
    correctAnswer: null,
  });
  const [newChoice, setNewChoice] = useState("");
  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [editIndex, setEditIndex] = useState(null); // Index of question being edited

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion({ ...currentQuestion, [name]: value });
  };

  // Add a new choice for MCQ or multiple answers
  const handleAddChoice = () => {
    if (newChoice.trim() !== "") {
      setCurrentQuestion({
        ...currentQuestion,
        choices: [...currentQuestion.choices, newChoice],
      });
      setNewChoice("");
    }
  };

  // Select the correct answer for MCQ/Multiple Answer or True/False
  const handleSelectCorrectAnswer = (answer) => {
    setCurrentQuestion({ ...currentQuestion, correctAnswer: answer });
  };

  // Add or Update Question
  const handleSaveQuestion = () => {
    if (currentQuestion.text.trim() === "") return;

    if (isEditing) {
      // Update existing question
      const updatedQuestions = [...questions];
      updatedQuestions[editIndex] = currentQuestion;
      setQuestions(updatedQuestions);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new question
      setQuestions([...questions, currentQuestion]);
    }

    // Reset the form
    setCurrentQuestion({
      text: "",
      type: "written",
      choices: [],
      correctAnswer: null,
    });
  };

  // Edit a question
  const handleEditQuestion = (index) => {
    setCurrentQuestion(questions[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Submit the quiz
  const handleSubmitQuiz = () => {
    console.log("Submitted Questions:", questions);
    alert("Quiz submitted successfully!");
    setQuestions([]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-cdarkred-100">
          Quiz Manager
        </h2>

        {/* Question Form */}
        <div className="space-y-4">
          <Input
            label="Enter Question"
            name="text"
            value={currentQuestion.text}
            onChange={handleChange}
          />

          {/* Question Type */}
          <Select
            label="Select Question Type"
            value={currentQuestion.type}
            onChange={(type) =>
              setCurrentQuestion({
                ...currentQuestion,
                type,
                choices: [],
                correctAnswer: null,
              })
            }
          >
            <Option value="written">Written</Option>
            <Option value="mcq">Multiple Choice</Option>
            <Option value="truefalse">True / False</Option>
            <Option value="multiple">Multiple Answers</Option>
          </Select>

          {/* Choices for MCQ and Multiple Answers */}
          {(currentQuestion.type === "mcq" ||
            currentQuestion.type === "multiple") && (
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Input
                  label="Add Choice"
                  value={newChoice}
                  onChange={(e) => setNewChoice(e.target.value)}
                />
                <Button color="blue" onClick={handleAddChoice}>
                  Add
                </Button>
              </div>
              <ul className="list-disc ml-6">
                {currentQuestion.choices.map((choice, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Radio
                      id={`choice-${index}`}
                      name="correctAnswer"
                      value={choice}
                      checked={currentQuestion.correctAnswer === choice}
                      onChange={() => handleSelectCorrectAnswer(choice)}
                      ripple
                    />
                    <label htmlFor={`choice-${index}`}>{choice}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* True/False Question */}
          {currentQuestion.type === "truefalse" && (
            <div className="space-y-2">
              <Radio
                id="true"
                name="correctAnswer"
                value="True"
                checked={currentQuestion.correctAnswer === "True"}
                onChange={() => handleSelectCorrectAnswer("True")}
                label="True"
                ripple
              />
              <Radio
                id="false"
                name="correctAnswer"
                value="False"
                checked={currentQuestion.correctAnswer === "False"}
                onChange={() => handleSelectCorrectAnswer("False")}
                label="False"
                ripple
              />
            </div>
          )}

          {/* Add or Update Question */}
          <div className="flex space-x-4">
            <Button
              color={isEditing ? "yellow" : "green"}
              onClick={handleSaveQuestion}
            >
              {isEditing ? "Update Question" : "Add Question"}
            </Button>
            <Button className="bg-cdarkred-100" onClick={handleSubmitQuiz}>
              Submit Quiz
            </Button>
          </div>
        </div>

        {/* Questions Preview */}
        {questions.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Added Questions</h3>
            <ul className="space-y-2">
              {questions.map((question, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-50 border rounded shadow-sm flex justify-between items-center"
                >
                  <div>
                    <strong>Q{index + 1}:</strong> {question.text}{" "}
                    {(question.type === "mcq" ||
                      question.type === "multiple") && (
                      <div>
                        <span className="font-bold">Choices:</span>{" "}
                        {question.choices.join(", ")}
                      </div>
                    )}
                    {question.correctAnswer && (
                      <div>
                        <span className="font-bold">Correct Answer:</span>{" "}
                        {question.correctAnswer}
                      </div>
                    )}
                  </div>
                  <div className="space-x-2">
                    <Button
                      color="yellow"
                      size="sm"
                      onClick={() => handleEditQuestion(index)}
                    >
                      Edit
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizManager;
