# Hello-World-Social-Media-Platform

Hello World Deployed site: https://coruscating-meerkat-b20bc0.netlify.app/

Being one of my first complete MERN projects right after learning the stack, I wanted to go for something that has a lot of things implemented, so I tried to add a variety of libraries such as Redux, MUI, styling, etc., along with a secure backend that takes care of user management and login signup, that is implemented using JWT authentication.

For Frontend:
It is a simple and responsive UI that has light mode and dark mode implementations like commercial social media apps, where user login-signup, can upload posts, interact with other users' posts, etc.
-> Redux (global state management) <br>
-> Formik (form handling)
-> React-Dropzone (for uploading media)
-> MUI icons (general purpose icons like switching between dark mode and light mode, likes, etc.)

For Backend:
It focuses on smooth interaction with MongoDB, which is a NoSQL database that stores user information like hashed passwords and post-data, and provides routes to the frontend and send and recieve relevant data.\
-> BCrypt (encryption)
-> Multer (form handling for files)
-> MongoDB (database)
-> Helmet (security from threats like Cross-Site-Scripting)
-> Morgan (middleware to handle http requests and errors)
-> CORS (prevent backend access from unwanted sites)
