# FormEase-Backend 🗃️🌐
The FormEase-Backend repository is the robust Express.js backend application that powers the FormEase application. Developed using Node.js and MongoDB, this backend leverages the power of MERN stack technologies. It incorporates essential security features such as JWT tokens and bcrypt hashing for password storage, ensuring the integrity and confidentiality of user data. The repository provides well-defined endpoints for user authentication, enabling smooth and secure user sign-up and login processes. Additionally, FormEase-Backend facilitates seamless application form submission by users, with endpoints dedicated to handling CRUD operations for individual application forms. Mongoose, a MongoDB object modeling tool, is employed to define the data schema and create the data model, ensuring efficient and organized data management within the MongoDB database. FormEase-Backend serves as the backbone of the FormEase application, ensuring a reliable and secure backend infrastructure for users to navigate, submit application forms, and perform necessary CRUD operations.

## Tech-Stack
1. Node JS
2. Express JS
3. MongoDB Atlas
4. Mongoose
5. Json Web Token (JWT)
6. Bcrypt

## API - End-Points 🌐
### 1. Authentication - Signup : /auth/v1/signup 🕺
The /auth/v1/signup endpoint is designed to facilitate the user registration process. It allows clients to sign up by providing essential user information such as name, email, and password. Upon successful registration, the user data is stored securely in the database, and a new user account is created.<br>

**HTTP Method : POST**<br>
**Request Parameter**<br>
1. Name : String
2. Email : String
3. Password : String

**Custom Middlewares**
1. AuthDataCheck : Ensures that the request contains all the necessary data (name, email, and password) before proceeding with the signup process.
2. EmailCheck :  Verifies that the provided email address is unique within the database, preventing duplicate user registrations.
3. PasswordCheck : Verifies that the provided password meets certain strength criteria to enhance the security of user accounts.
<br><br>

### 2. Authentication - Login : /auth/v1/login 🔐
The /auth/v1/login endpoint facilitates user authentication by allowing clients to log in using their email and password. Upon successful verification of the provided credentials, the endpoint generates a JSON Web Token (JWT) and returns it to the client. This token can be used for subsequent authorized API requests.<br>

**HTTP Method : POST**<br>
**Request Parameter**<br>
1. Email : String
2. Password : String

# 🚀🚀 Launching Soon... 🚀🚀