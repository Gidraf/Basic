import React from 'react';
import '../index.css';
import searchImage from '../img/search_image.png';
import userimage from '../img/avatar.png';

export const Forum = () => (
  <div>
    <div className>
      <a href="#">
        <button
          id="ask_question"
          onClick="open_model()"
          type="button"
          name="ask_questin"
        >
Ask Question
        </button>
      </a>
      <div className="search_form">
        <form action="index.html" method="post">
          <input
            type="search"
            name="search"
            placeholder="Search"
            defaultValue
          />
          <input
            id="search_btn"
            type="image"
            name="search"
            src={searchImage}
          />
        </form>
      </div>
    </div>
    <div className="clear" />
    <div className="side_navbar">
      <a href="#">
        <span>Home</span>
        <img src="../img/refresh_btn.png" alt />
      </a>
      <a href="#">
        <span>
All Questions
        </span>
      </a>
      <a href="#">
        <span>
Hot questions
        </span>
      </a>
    </div>
    <div className="container">
      <h2 id="forum_title">
Recently Asked Questions
      </h2>
      <div className="forum_content">
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <a href="#">
            <div className="user_image">
              <img src={userimage} alt />
            </div>
          </a>
          <a href="#">
            <span className="username">username</span>
            <br />
          </a>
          <span className="question_numbers">0</span>
          <span className="numbers_labels">votes</span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
I am a question click me to see my details
            </h3>
          </a>
        </div>
        <div className="clear" />
      </div>
    </div>
    <div className>
      <h4>Users</h4>
      <div className="right_sidebar">
        <div className="users">
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
          <div className="user_holder">
            <img src={userimage} alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="question_modal" className="hide">
      <form className action="index.html" method="post">
        <fieldset>
          <legend>
Ask Question
          </legend>
          <input
            type="text"
            name="title"
            placeholder="Questin title"
            defaultValue
          />
          <br />
          <textarea
            name="name"
            rows={10}
            placeholder="Question description"
            cols={80}
          />
        </fieldset>
        <button id="ask" type="button" name="button">Ask</button>
        <button
          id="cancel"
          onClick="close_modal()"
          type="button"
          name="button"
        >
Cancel
        </button>
      </form>
    </div>
  </div>

);
