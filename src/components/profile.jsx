import React from 'react';
import searchImage from '../img/search_image.png';
import userimage from '../img/avatar.png';


const Profile = () => (
  <div>
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
              src="static/css/img/search_image.png"
              defaultValue
            />
          </form>
        </div>
      </div>
      <div className="clear" />
      <div className="side_navbar">
        <div className="user_info">
          <img
            id="user_account_image"
            src="static/css/img/avatar.png"
            alt
          />
          <div className="clear" />
          <div className="user_names">
            <span>Username</span>
            <br />
            <span>
0 questions
            </span>
            <br />
            <span>
0 answers
            </span>
          </div>
          <form className action="index.html" method="post">
            <select
              id="sort_by"
              className
              name
              onChange="call javascript method for sorting"
            >
              <option className value>
All Questions
              </option>
              <option value>
Recently Asked
              </option>
              <option value>
Most Answered
              </option>
            </select>
          </form>
        </div>
      </div>
      <div className="container" />
      <div className="forum_content">
        <div className="question_holder">
          <div className="user_image">
            <img src="static/css/img/avatar.png" alt />
          </div>
          <span className="username">username</span>
          <br />
          <span className="question_numbers">
0 Answers
          </span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
sed do eiusmod tempor inckjvkfjlv sfdjdkjsflsdn djfguifr jfdjfkwd Lorem ipsum dolor sit amet, consectetur adipisicing ollit anim id est laborum.
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <div className="user_image">
            <img src="static/css/img/avatar.png" alt />
          </div>
          <span className="username">username</span>
          <br />
          <span className="question_numbers">
0 Answers
          </span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
sed do eiusmod tempor inckjvkfjlv sfdjdkjsflsdn djfguifr jfdjfkwd Lorem ipsum dolor sit amet, consectetur adipisicing ollit anim id est laborum.
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <div className="user_image">
            <img src="static/css/img/avatar.png" alt />
          </div>
          <span className="username">username</span>
          <br />
          <span className="question_numbers">
0 Answers
          </span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
sed do eiusmod tempor inckjvkfjlv sfdjdkjsflsdn djfguifr jfdjfkwd Lorem ipsum dolor sit amet, consectetur adipisicing ollit anim id est laborum.
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <div className="user_image">
            <img src="static/css/img/avatar.png" alt />
          </div>
          <span className="username">username</span>
          <br />
          <span className="question_numbers">
0 Answers
          </span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
sed do eiusmod tempor inckjvkfjlv sfdjdkjsflsdn djfguifr jfdjfkwd Lorem ipsum dolor sit amet, consectetur adipisicing ollit anim id est laborum.
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <div className="user_image">
            <img src="static/css/img/avatar.png" alt />
          </div>
          <span className="username">username</span>
          <br />
          <span className="question_numbers">
0 Answers
          </span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
sed do eiusmod tempor inckjvkfjlv sfdjdkjsflsdn djfguifr jfdjfkwd Lorem ipsum dolor sit amet, consectetur adipisicing ollit anim id est laborum.
            </h3>
          </a>
        </div>
        <div className="clear" />
        <div className="question_holder">
          <div className="user_image">
            <img src="static/css/img/avatar.png" alt />
          </div>
          <span className="username">username</span>
          <br />
          <span className="question_numbers">
0 Answers
          </span>
          <br />
          <span className="time">
2/2/2018 @ 11:00 am
          </span>
          <div className="clear" />
          <a href="question.html">
            <h3 className="question_header">
sed do eiusmod tempor inckjvkfjlv sfdjdkjsflsdn djfguifr jfdjfkwd Lorem ipsum dolor sit amet, consectetur adipisicing ollit anim id est laborum.
            </h3>
          </a>
        </div>
        <div className="clear" />
      </div>
    </div>
    <div className>
      <div className="right_sidebar">
        <div className="users">
          <div className="user_holder">
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
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
            <img src="static/css/img/avatar.png" alt />
            <a href="#">Username</a>
            <span>
0 questions
            </span>
            <span>
0 answers
            </span>
          </div>
          <div className="clear" />
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

export default Profile;
