This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

This project was bootstrapped with create-react-app 
###Tech/framework
--NodeJS
--PostgreSQL

npm installed dependencies

-massive( connect to postgresql database)
-express
-express-session
-dotenv( securing connection string,port,session_secret)
-bcrypt ( securing user data password ) 

### Features

Features in this project are user registration with bcrypt
login, event creation and tracking of user page_views & login successes & failures
using nodeJS-Express modular pattern with postgreSQl database.

### Folder structure

3 main Folders 
1)Database - With PostgreSQl queries
2)Server - Contains the massive,express,express-session endpoints  w/ 2 controller files an
adminCtrl for user data accessibility ( Authorized employees only)
authCtrl for authentication of user 
3)Dotenv file to secure port , connection string and session secret data placed in .ignore file to not make public

### Returns a JSON object containg cookie data,user data,page views and login successes & failures for all user 
JSON Example :
{
    "cookie": {
        "originalMaxAge": 864000000,
        "expires": "2020-07-10T02:39:39.530Z",
        "httpOnly": true,
        "path": "/"
    },
    "user": {
        "user_id": 6,
        "email": "ron@gmail.com",
        "phone": "4567890000",
        "created_date": "2020-06-30T06:00:00.000Z"
    },
    "page_views": 2,
    "allLoginFailures": [
        {
            "count": "3"
        }
    ],
    "loginSuccess": [
        {
            "count": "1"
        }
    ]
}




