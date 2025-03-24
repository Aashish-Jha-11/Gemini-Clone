import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.body.className = isDarkTheme ? "light-theme" : "dark-theme"; 
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div className="nav-right">
          <img src={assets.user} alt="user-avatar" className="user-avatar" />
          <div className="theme-toggle" onClick={toggleTheme}>
            <img
              src={isDarkTheme ? assets.sun_icon : assets.moon_icon}
              alt="theme-icon"
              className="theme-icon"
            />
          </div>
        </div>
      </div>
      <div className={`main-container ${isDarkTheme ? "dark-theme" : ""}`}>
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello , Dev </span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Suggest Some Place To Visit In India.")
                }
              >
                <p>Suggest Some Place To Visit In India.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Explain the process of photosynthesis in simple terms"
                  )
                }
              >
                <p>Explain the process of photosynthesis in simple terms</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "How do you create a responsive navbar using CSS and JavaScript?"
                  )
                }
              >
                <p>
                  How do you create a responsive navbar using CSS and
                  JavaScript?
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  handleCardClick(
                    "What are some essential skills for becoming a front-end developer?"
                  );
                }}
              >
                <p>
                  What are some essential skills for becoming a front-end
                  developer?
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(event) => setInput(event.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={(event) => {
                if (event.key === "Enter" && input) {
                  onSent();
                }
              }}
            />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            {input ? (
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            ) : null}
          </div>
          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy & Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
