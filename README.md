# IBM-PROJECT

## Step 1: Creating a root folder
-> Create a folder and open it in a code editor

## Step 2: Set up your react project
-> Open terminal window (in the code editor)
<pre>
cd folder-name
npx create-react-app app-name
cd app-name
npm install
npm install axios
npm install express nano body-parser cors
</pre>

In backend:
<pre>
cd backend
npm init -y
npm install express node-fetch
npm install express express-rate-limit
npm install dotenv
</pre>
-> Replace the app.js in the src folder with the uploaded app.js<br>

## Step 3: Set up the backend server
-> Add Backend/server.js to the root folder<br>
-> In the .env file make the following changes:<br>

In Line 1: Replace username, password of CouchDB database with your own, in the format: http://username:password@localhost:5984 <br>

In Line 2: Replace database name with your own pre-exisiting database name: const dbName = 'database-name'; <br>


<img width="183" alt="image" src="https://github.com/ray-yaa/IBM-PROJECT/assets/61823633/eaf5e4ec-eeb0-4d74-a641-cb3bf028284a">

<img width="183" alt="image" src="https://github.com/ray-yaa/IBM-PROJECT/assets/61823633/c397fde0-978e-4b94-8674-89dc3e98ebfe">

## Step 4: Execution
-> Split the terminal in the code editor (one for backend, one for frontend) 
<pre>
     cd folder-name
     cd app-name
</pre>
-> To execute the backend:
<pre>
    cd backend
    node server.js
</pre>
->To execute the front end: 
<pre>
    npm start
</pre>
