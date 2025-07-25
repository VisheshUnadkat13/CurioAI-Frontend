import React, { useEffect, useRef, useState, useCallback } from 'react';
import Animated3DBackground from './Animated3DBackground';
const BACKEND_BASE_URL = 'http://localhost:5000';

// const ChatbotPage = () => {
//     const [chatHistory, setChatHistory] = useState([]);
//     const [currentPrompt, setCurrentPrompt] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [topicForButtons, setTopicForButtons] = useState(''); // Stores the topic from the last user prompt
//     const chatContainerRef = useRef(null);
  
//     // Scroll to bottom of chat history
//     useEffect(() => {
//       if (chatContainerRef.current) {
//         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//       }
//     }, [chatHistory, loading]);
  
//     const sendMessage = async (message, actionType = 'general') => {
//       if (!message.trim() && actionType === 'general') return;
  
//       const userMessage = { type: 'user', message: message };
//       setChatHistory(prev => [...prev, userMessage]);
//       setCurrentPrompt('');
//       setLoading(true);
//       // setError(''); // Clear previous errors - removed as it's not defined in this scope
  
//       try {
//         let responseText = '';
//         let apiUrl = '';
//         let requestBody = {};
//         let isPost = true;
  
//         // Determine API call based on actionType
//         if (actionType === 'general') {
//           apiUrl = `/api/prompts/${encodeURIComponent(message)}`;
//           isPost = true; // Though path variable, Spring controller uses POST.
//           requestBody = {}; // No explicit body for path variable
//           setTopicForButtons(message); // Set topic for subsequent buttons
//         } else if (actionType === 'youtube') {
//           apiUrl = `/api/prompts/you-tube-link?topic=${encodeURIComponent(topicForButtons)}&lang=English`;
//           isPost = true;
//         } else if (actionType === 'summary') {
//           apiUrl = `/api/prompts/summery?topic=${encodeURIComponent(topicForButtons)}&level=intermediate&lang=English`;
//           isPost = true;
//         } else if (actionType === 'articles') {
//           apiUrl = `/api/prompts/articles?topic=${encodeURIComponent(topicForButtons)}`;
//           isPost = true;
//         } else if (actionType === 'interview') {
//           apiUrl = `/api/prompts/interviewQuestion?topic=${encodeURIComponent(topicForButtons)}&difficultyLevel=intermediate`;
//           isPost = true;
//         } else if (actionType === 'quiz') {
//           apiUrl = `/api/prompts/quiz?topic=${encodeURIComponent(topicForButtons)}`;
//           isPost = true;
//         }
  
//         const response = await fetch(apiUrl, {
//           method: isPost ? 'POST' : 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             // 'Authorization': `Bearer ${apiKey}` // If using API key directly, otherwise leave empty for Canvas proxy
//           },
//           body: isPost && Object.keys(requestBody).length > 0 ? JSON.stringify(requestBody) : null,
//         });
  
//         if (response.ok) {
//           responseText = await response.text();
//         } else {
//           responseText = `Error: ${response.status} - ${await response.text()}`;
//         }
  
//         setChatHistory(prev => [...prev, { type: 'ai', message: responseText }]);
//       } catch (error) {
//         setChatHistory(prev => [...prev, { type: 'ai', message: `Failed to get response: ${error.message}` }]);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     const handleKeyPress = (e) => {
//       if (e.key === 'Enter' && !loading) {
//         sendMessage(currentPrompt);
//       }
//     };
  
//     return (
//       <div className="chatbot-page-container">
//         <Animated3DBackground />
//         <div className="chatbot-main-content">
//           <h2 className="chatbot-title">AI Educator Chatbot</h2>
  
//           {/* Chat History */}
//           <div ref={chatContainerRef} className="chat-history custom-scrollbar">
//             {chatHistory.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`chat-message ${
//                   msg.type === 'user' ? 'user-message' : 'ai-message'
//                 }`}
//               >
//                 <p className="whitespace-pre-wrap">{msg.message}</p>
//               </div>
//             ))}
//             {loading && (
//               <div className="chat-message ai-message">
//                 <p>Thinking...</p>
//               </div>
//             )}
//           </div>
  
//           {/* Action Buttons */}
//           {topicForButtons && !loading && (
//             <div className="chatbot-action-buttons">
//               <button
//                 onClick={() => sendMessage(topicForButtons, 'summary')}
//                 className="action-button summary-button"
//               >
//                 Get Summary
//               </button>
//               <button
//                 onClick={() => sendMessage(topicForButtons, 'articles')}
//                 className="action-button articles-button"
//               >
//                 Read Articles
//               </button>
//               <button
//                 onClick={() => sendMessage(topicForButtons, 'interview')}
//                 className="action-button interview-button"
//               >
//                 Interview Questions
//               </button>
//               <button
//                 onClick={() => sendMessage(topicForButtons, 'quiz')}
//                 className="action-button quiz-button"
//               >
//                 Generate Quiz
//               </button>
//             </div>
//           )}
  
//           {/* Chat Input */}
//           <div className="chat-input-area">
//             <input
//               type="text"
//               className="chat-input"
//               placeholder="Ask me anything about education..."
//               value={currentPrompt}
//               onChange={(e) => setCurrentPrompt(e.target.value)}
//               onKeyPress={handleKeyPress}
//               disabled={loading}
//             />
//             <button
//               onClick={() => sendMessage(currentPrompt)}
//               className="send-button"
//               disabled={loading}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default ChatbotPage





// const ChatbotPage = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [currentPrompt, setCurrentPrompt] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [topicForButtons, setTopicForButtons] = useState(''); // Stores the topic from the last user prompt
//   const chatContainerRef = useRef(null);

//   // Scroll to bottom of chat history
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory, loading]);

//   const sendMessage = async (message, actionType = 'general') => {
//     if (!message.trim() && actionType === 'general') return;

//     const userMessage = { type: 'user', message: message };
//     setChatHistory(prev => [...prev, userMessage]);
//     setCurrentPrompt('');
//     setLoading(true);
//     // setError(''); // Clear previous errors - removed as it's not defined in this scope

//     try {
//       let responseText = '';
//       let apiUrl = '';
//       let requestBody = {};
//       let isPost = true;

//       // Determine API call based on actionType
//       if (actionType === 'general') {
//         apiUrl = `${BACKEND_BASE_URL}/api/prompts/${encodeURIComponent(message)}`;
//         isPost = true; // Though path variable, Spring controller uses POST.
//         requestBody = {}; // No explicit body for path variable
//         setTopicForButtons(message); // Set topic for subsequent buttons
//       } else if (actionType === 'youtube') {
//         apiUrl = `${BACKEND_BASE_URL}/api/prompts/you-tube-link?topic=${encodeURIComponent(topicForButtons)}&lang=English`;
//         isPost = true;
//       } else if (actionType === 'summary') {
//         apiUrl = `${BACKEND_BASE_URL}/api/prompts/summery?topic=${encodeURIComponent(topicForButtons)}&level=intermediate&lang=English`;
//         isPost = true;
//       } else if (actionType === 'articles') {
//         apiUrl = `${BACKEND_BASE_URL}/api/prompts/articles?topic=${encodeURIComponent(topicForButtons)}`;
//         isPost = true;
//       } else if (actionType === 'interview') {
//         apiUrl = `${BACKEND_BASE_URL}/api/prompts/interviewQuestion?topic=${encodeURIComponent(topicForButtons)}&difficultyLevel=intermediate`;
//         isPost = true;
//       } else if (actionType === 'quiz') {
//         apiUrl = `${BACKEND_BASE_URL}/api/prompts/quiz?topic=${encodeURIComponent(topicForButtons)}`;
//         isPost = true;
//       }

//       const response = await fetch(apiUrl, {
//         method: isPost ? 'POST' : 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           // 'Authorization': `Bearer ${apiKey}` // If using API key directly, otherwise leave empty for Canvas proxy
//         },
//         body: isPost && Object.keys(requestBody).length > 0 ? JSON.stringify(requestBody) : null,
//       });

//       if (response.ok) {
//         responseText = await response.text();
//       } else {
//         responseText = `Error: ${response.status} - ${await response.text()}`;
//       }

//       setChatHistory(prev => [...prev, { type: 'ai', message: responseText }]);
//     } catch (error) {
//       setChatHistory(prev => [...prev, { type: 'ai', message: `Failed to get response: ${error.message}` }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !loading) {
//       sendMessage(currentPrompt);
//     }
//   };

//   return (
//     <div className="chatbot-page-container">
//       <Animated3DBackground />
//       <div className="chatbot-main-content">
//         <h2 className="chatbot-title">AI Educator Chatbot</h2>

//         {/* Chat History */}
//         <div ref={chatContainerRef} className="chat-history custom-scrollbar">
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`chat-message ${
//                 msg.type === 'user' ? 'user-message' : 'ai-message'
//               }`}
//             >
//               <p className="whitespace-pre-wrap">{msg.message}</p>
//             </div>
//           ))}
//           {loading && (
//             <div className="chat-message ai-message">
//               <p>Thinking...</p>
//             </div>
//           )}
//         </div>

//         {/* Action Buttons */}
//         {topicForButtons && !loading && (
//           <div className="chatbot-action-buttons">
//           <button
//               onClick={() => sendMessage(topicForButtons, 'youtube')}
//               className="action-button youtube-button"
//             >
//               YouTube Link
//             </button>
//             <button
//               onClick={() => sendMessage(topicForButtons, 'summary')}
//               className="action-button summary-button"
//             >
//               Get Summary
//             </button>
//             <button
//               onClick={() => sendMessage(topicForButtons, 'articles')}
//               className="action-button articles-button"
//             >
//               Read Articles
//             </button>
//             <button
//               onClick={() => sendMessage(topicForButtons, 'interview')}
//               className="action-button interview-button"
//             >
//               Interview Questions
//             </button>
//             <button
//               onClick={() => sendMessage(topicForButtons, 'quiz')}
//               className="action-button quiz-button"
//             >
//               Generate Quiz
//             </button>
//           </div>
//         )}

//         {/* Chat Input */}
//         <div className="chat-input-area">
//           <input
//             type="text"
//             className="chat-input"
//             placeholder="Ask me anything about education..."
//             value={currentPrompt}
//             onChange={(e) => setCurrentPrompt(e.target.value)}
//             onKeyPress={handleKeyPress}
//             disabled={loading}
//           />
//           <button
//             onClick={() => sendMessage(currentPrompt)}
//             className="send-button"
//             disabled={loading}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatbotPage;


// import React, { useState, useEffect, useRef } from 'react';
// import Animated3DBackground from './Animated3DBackground'; // Assuming this component exists

// Define BACKEND_BASE_URL if it's not globally available
// Replace with your actual backend URL

const ChatbotPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [topicForButtons, setTopicForButtons] = useState(''); // Stores the topic from the last user prompt

  // Quiz specific states
  const [quizData, setQuizData] = useState(null); // Stores quiz questions and options
  const [userAnswers, setUserAnswers] = useState({}); // Stores user's selected answers for the quiz
  const [showQuizReport, setShowQuizReport] = useState(false); // Controls visibility of the quiz report
  const [quizReport, setQuizReport] = useState(null); // Stores the quiz report after submission

  const chatContainerRef = useRef(null);

  // Scroll to bottom of chat history
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, loading, quizData, showQuizReport]); // Add quiz-related states to dependencies

  const sendMessage = async (message, actionType = 'general') => {
    if (!message.trim() && actionType === 'general') return;

    // Clear quiz states when a new message is sent or a new action is initiated
    setQuizData(null);
    setUserAnswers({});
    setShowQuizReport(false);
    setQuizReport(null);

    const userMessage = { type: 'user', message: message };
    setChatHistory(prev => [...prev, userMessage]);
    setCurrentPrompt('');
    setLoading(true);

    try {
      let responseData;
      let apiUrl = '';
      let requestBody = {};
      let isPost = true;

      // Determine API call based on actionType
      if (actionType === 'general') {
        apiUrl = `${BACKEND_BASE_URL}/api/prompts/${encodeURIComponent(message)}`;
        isPost = true;
        setTopicForButtons(message); // Set topic for subsequent buttons
      } else if (actionType === 'youtube') {
        apiUrl = `${BACKEND_BASE_URL}/api/prompts/you-tube-link?topic=${encodeURIComponent(topicForButtons)}&lang=English`;
        isPost = true;
      } else if (actionType === 'summary') {
        apiUrl = `${BACKEND_BASE_URL}/api/prompts/summery?topic=${encodeURIComponent(topicForButtons)}&level=intermediate&lang=English`;
        isPost = true;
      } else if (actionType === 'articles') {
        apiUrl = `${BACKEND_BASE_URL}/api/prompts/articles?topic=${encodeURIComponent(topicForButtons)}`;
        isPost = true;
      } else if (actionType === 'interview') {
        apiUrl = `${BACKEND_BASE_URL}/api/prompts/interviewQuestion?topic=${encodeURIComponent(topicForButtons)}&difficultyLevel=intermediate`;
        isPost = true;
      } else if (actionType === 'quiz') {
        apiUrl = `${BACKEND_BASE_URL}/api/prompts/quiz?topic=${encodeURIComponent(topicForButtons)}`;
        isPost = true;
      } else {
        // Fallback for unknown action types, or handle error
        setChatHistory(prev => [...prev, { type: 'ai', message: `Unknown action type: ${actionType}` }]);
        setLoading(false);
        return;
      }

      const response = await fetch(apiUrl, {
        method: isPost ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${apiKey}` // If using API key directly, otherwise leave empty for Canvas proxy
        },
        body: isPost && Object.keys(requestBody).length > 0 ? JSON.stringify(requestBody) : null,
      });

      if (response.ok) {
        if (actionType === 'quiz') {
          responseData = await response.json(); // Expect JSON for quiz
          setQuizData(responseData);
          setChatHistory(prev => [...prev, { type: 'ai', message: `Quiz generated for ${topicForButtons}!` }]);
        } else {
          responseData = await response.text(); // Expect text for other actions
          setChatHistory(prev => [...prev, { type: 'ai', message: responseData }]);
        }
      } else {
        responseData = `Error: ${response.status} - ${await response.text()}`;
        setChatHistory(prev => [...prev, { type: 'ai', message: responseData }]);
      }
    } catch (error) {
      setChatHistory(prev => [...prev, { type: 'ai', message: `Failed to get response: ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      sendMessage(currentPrompt);
    }
  };

  const handleOptionChange = (questionId, selectedOption) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const submitQuiz = async () => {
    setLoading(true);
    try {
      // Assuming a new backend endpoint for quiz submission/reporting
      const reportApiUrl = `${BACKEND_BASE_URL}/api/prompts/quiz-report?topic=${encodeURIComponent(topicForButtons)}`;
      const response = await fetch(reportApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userAnswers), // Send user's answers to the backend
      });

      if (response.ok) {
        const report = await response.json();
        setQuizReport(report);
        setShowQuizReport(true);
        setQuizData(null); // Hide the quiz itself once submitted
        setChatHistory(prev => [...prev, { type: 'ai', message: `Quiz submitted! Here's your report.` }]);
      } else {
        const errorText = await response.text();
        setChatHistory(prev => [...prev, { type: 'ai', message: `Failed to submit quiz: ${error.status} - ${errorText}` }]);
      }
    } catch (error) {
      setChatHistory(prev => [...prev, { type: 'ai', message: `Error submitting quiz: ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const renderQuiz = () => {
    if (!quizData || !quizData.questions || quizData.questions.length === 0) {
      return <p>No quiz questions available.</p>;
    }

    return (
      <div className="quiz-container">
        <h3>{quizData.quizTitle || 'Quiz'}</h3>
        {quizData.questions.map((q) => (
          <div key={q.id} className="quiz-question">
            <p className="question-text">{q.id}. {q.questionText}</p>
            <div className="options-container">
              {q.options.map((option, idx) => (
                <label key={idx} className="quiz-option">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={userAnswers[q.id] === option}
                    onChange={() => handleOptionChange(q.id, option)}
                    disabled={loading}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={submitQuiz}
          className="submit-quiz-button"
          disabled={loading || Object.keys(userAnswers).length !== quizData.questions.length} // Disable if not all questions answered
        >
          Submit Quiz
        </button>
      </div>
    );
  };

  const renderQuizReport = () => {
    if (!quizReport) {
      return null;
    }

    return (
      <div className="quiz-report-container">
        <h3>Quiz Report</h3>
        <p><strong>Score:</strong> {quizReport.score}</p>
        <p><strong>Percentage:</strong> {quizReport.percentage}</p>
        {quizReport.feedback && <p><strong>Feedback:</strong> {quizReport.feedback}</p>}

        <div className="answers-review">
          <h4>Your Answers vs. Correct Answers:</h4>
          {quizData && quizData.questions.map(q => (
            <div key={q.id} className="answer-item">
              <p><strong>Q{q.id}:</strong> {q.questionText}</p>
              <p>Your Answer: <span className={userAnswers[q.id] === q.correctAnswer ? 'correct-answer' : 'incorrect-answer'}>
                {userAnswers[q.id] || 'Not answered'}
              </span></p>
              <p>Correct Answer: <span className="correct-answer-text">{q.correctAnswer}</span></p>
            </div>
          ))}
        </div>
      </div>
    );
  };


  return (
    <div className="chatbot-page-container">
      <Animated3DBackground />
      <div className="chatbot-main-content">
        <h2 className="chatbot-title">AI Educator Chatbot</h2>

        {/* Chat History */}
        <div ref={chatContainerRef} className="chat-history custom-scrollbar">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.type === 'user' ? 'user-message' : 'ai-message'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.message}</p>
            </div>
          ))}
          {loading && (
            <div className="chat-message ai-message">
              <p>Thinking...</p>
            </div>
          )}

          {/* Render Quiz if available and not showing report */}
          {quizData && !showQuizReport && renderQuiz()}

          {/* Render Quiz Report if available */}
          {showQuizReport && renderQuizReport()}
        </div>

        {/* Action Buttons */}
        {topicForButtons && !loading && !quizData && !showQuizReport && ( // Hide buttons when quiz or report is active
          <div className="chatbot-action-buttons">
            <button
              onClick={() => sendMessage(topicForButtons, 'youtube')}
              className="action-button youtube-button"
            >
              YouTube Link
            </button>
            <button
              onClick={() => sendMessage(topicForButtons, 'summary')}
              className="action-button summary-button"
            >
              Get Summary
            </button>
            <button
              onClick={() => sendMessage(topicForButtons, 'articles')}
              className="action-button articles-button"
            >
              Read Articles
            </button>
            <button
              onClick={() => sendMessage(topicForButtons, 'interview')}
              className="action-button interview-button"
            >
              Interview Questions
            </button>
            <button
              onClick={() => sendMessage(topicForButtons, 'quiz')}
              className="action-button quiz-button"
            >
              Generate Quiz
            </button>
          </div>
        )}

        {/* Chat Input */}
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask me anything about education..."
            value={currentPrompt}
            onChange={(e) => setCurrentPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading || quizData || showQuizReport} // Disable input when quiz or report is active
          />
          <button
            onClick={() => sendMessage(currentPrompt)}
            className="send-button"
            disabled={loading || quizData || showQuizReport} // Disable send when quiz or report is active
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;