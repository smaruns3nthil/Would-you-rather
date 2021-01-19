# Would You Rather Project
This is React Nanodegree programs Second project, this is a Would you Rather APP, where a user can chose between two options for given would you rather question. This app has functionality to add new questions, login and also has a leaderboard.
The basic requirements for the project are node.js ,npm , terminal. The project was created from the starter template that was given with the project .
 

To get the application running :

* clone or download the project from git hub
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It contains all the dependencies.
├── public
│   ├── favicon.ico # React Icon,.
│   └── index.html 
└── src
    ├── actions # Contains all the actions
        ├──authedUser.js # Contains the actions for authedUsers. 
        ├──display.js # Contains the actions for display.
        ├──logout.js # Contains the actions for logout.
        ├──question.js # Contains the actions for questions.
        ├──shared.js # Contains the async action creators for users and questions.
        ├──users.js # Contains the actions for users.
    ├── components #  Contains all the components
        ├──css
            ├──App.css 
            ├──login.css
        ├──test
            ├──App.test.js
        ├──answered.js # Contains code to display results of poll
        ├──App.js # Contains all routes
        ├──error.js # Contains 404 page
        ├──home.js # Contains code for two views answered and unanswered.
        ├──leader.js # Contains leaderboaed
        ├──login.js # Contains code for logging in
        ├──nav.js # Contains code navigation
        ├──newQuestion.js # Contains code to create a new question
        ├──questionDetail.js # Contains code for displaying questions details
        ├──questionList.js # Contains code to list question on dashboard
        ├──unanswered.js # Contains code to select between two options
    ├── middleware # Contains all the middleware
        ├──index.js # Combines all middleware
        ├──logger.js # Contains code for logs
    ├── reducers # Contains all the reducers
        ├──authedUser.js # Contains code for authedUser Reducer
        ├──display.js # Contains code for display reducer
        ├──index.js # Contains root reducer
        ├──logout.js # Contains code for logout reducer
        ├──question.js # Contains code for Question Reducer
        ├──user.js # Contains code for user reducer
    ├── utils # Contains all the api connection
        ├──_DATA.js
        ├──api.js
    ├── index.css # Global styles..
    └── index.js # It is used for DOM rendering only.
```


On the homepage we have two categories of answered and unaswered questions, which arranged in order most recently created to oldest one. User can choose to anwer a poll or view the results. The user can also add new questions at /add, whenever a user add a new question or answers a question he climbs the leaderboard. The leaderboard is at /leaderboard, where it has the users with most questions asked and answered. There is also an Error page and a page to login to the app.
