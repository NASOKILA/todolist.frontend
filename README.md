# Introduction

Frontend url:
https://todolist-tumba-app.herokuapp.com/

Backend url:
https://todolistbackendtumba.azurewebsites.net/swagger/index.html

The app deployed to heroku.com, it's talking to an backend API deployed in an Azure App Service.
The backend API is connected to a SQL Server database which is deployed in Azure.
The Database has only the IP of the backend API in the firewall rules, meaning only that backend API can talk to that particular SQL database.

Both frontend and backend have environment variables. When we run the frontend locally it sends requests to http://localhost:44371.
So we need to make sure our backend API runs on that port.
When we run the Bakcend API locally it will connect to the local server instead of the real one, meaning it will talk only to the local database.

In addition, there is a docker image avaliable in https://hub.docker.com/ which can be used for other deployments

All unit tests are passing.

Application Pages:

1.  Login - User can login.
2.  Register - User can register.
3.  Home - The content changes for authenticated users.
4.  Create list - Creates a list (ONLY PAGE WHICK TALKS TO REDUX STORE).
5.  Edit list - Updates a list.
6.  Create item - Creates an item.
7.  Edit item - Updates an item.
8.  My lists - Shows all lists. Click on the accordon to view the items in the list.
9.  Shared - Shows all shared items.
10. Users - Shows all users, avaliable only for administrators. Uses Accordon.
11. Edit User - It can update a user's information, avaliable only for administrators.
12. Unauthorized - It shows in case a user is not authorized to see some content.
13. Not found - In case the page is not found.

Functionality:
There are 2 types of users: Regular user and Administrator.
To experience the full functionality of the app a user can register directly as an administrator.
An admin can view, update and delete all User, List and Items records.
A regular user can perform CRUD operations on Lists and Items, he also can see a shared page containing all shared items between other users.
On the /MyLists page, to view the existent items, just click on the list name.
Items can be manipulated directly from the /shared page.
There are authentication guards which take care of the authorization access of a users in the application.
After authentication the data is saved into Session Storage, other data related to the user is encrypted and placed into Local Storage.

# Getting Started

1. Install npm or yarn
2. Clone https://AtanasKambitov@dev.azure.com/AtanasKambitov/Todolist/_git/TodoList-Frontend
3. Open the TodoList-Frontend folder with vscode or another code editor.
4. Open a terminal in the poject folder where the "project.json" file is located.
5. Run "npn install" or "yarn insatll" to install all the dependencies.
6. Run "npm start" or "yarn start" to run the project.
7. (Optional) Run "npm test start" or "yarn test start" to run the tests.

# Build and Test

1. Run "npn install" or "yarn install" to install all the dependencies.
2. Run "npm start" or "yarn start" to start the project.
3. (Optional) Run "npm test start" or "yarn test start" to run the tests.

4. Or run it with docker command : docker run -p 3000:80 bg9212060000/react:todolist-frontend

# Libraries, frameworks and more

React Redux
React Hooks
Typescript
Sass
React Bootstrap
React Fontawasone
React Router
Jest & Enzyme
Test redux
Encryption & Decription of user data
Authorisation & Admininistration
Authentication and Admin Guards
Form validation
React Error Boundry
Global error handling
React Toastr
Docker Image in DockerHub => bg9212060000/react:todolist-frontend
Environment variables
Responsive mobile view

...

Notes:
Website has a responsive mobile view
CreateLists page saves the state in redux store

//TO do
Spinner
Lazy loading pages
