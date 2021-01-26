## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Env file
Please follow the .env_example file and fill in the API key that I've provided in a secure manner.
```
touch .env
```

### Date
Monday, January 25, 2021. 

### Location of deployed application
I tried to host the application frontend on Netlify and the backend on Heroku. I came across a CORS issue and decided to turn in my application locally. 

### Time spent
6 hours. 

### Assumptions made
Here is a list of assumptions I've made while creating the application: 
- The api returns in metric units (temperature in Celcius)
- The four fields that a user would like to see are the description of weather, temperature, wind speed and humidity according to Google's weather report as a reference point.
- The user wants to see the current temperature, not the hourly data or temperature range.
 
### Shortcuts/Compromises made
Currently, the application throws an error if the user decides to enter in abbreviated cities and provinces. In the real-world application, I would implement an autocomplete feature in the input field so there is more control to what data should be sent in the request. I also assumed that the user wants to see a JSON object in the frontend, in a real-world application I would use more time to understand what the user wants to see before implementation. 

I've implemented a couple of unit tests. In the real-world application I would want to also implement some end-to-end tests. 

### Stretch goals attempted
If applicable, use this area to tell us what stretch goals you attempted. What went well? What do you wish you could have done better? If you didn't attempt any of the stretch goals, feel free to let us know why.

The two stretch goals I implemented in this application was building a UI and fetching weather data from the '​https://openweathermap.org/current​' API. I didn't attempt the authentication to the service because I was not sure about the user model, and would want clarification before working on it. 

### Instructions to run assignment locally
I've included the project setup and command in the first two sections of the README.

If you use Postman to create a request: 
1. /GET request to http://localhost:3001/
2. Key: city
3. Value: *your city input*

If you want an example cURL request: 
curl -X GET 'http://localhost:3001/?city=Vancouver'

Or you can run 'npm run serve' in the weatherAPI directory and enter your input there. 

### What did you not include in your solution that you want us to know about?
I have considered end-to-end and unit tests as I was developing. I tried to implement these within the 4 - 6 hour timeframe. Testing is an area that I am constantly practicing and working to implement into my code daily. 

### Other information about your submission that you feel it's important that we know if applicable.
For my tech stack, I chose Javascript and Express. I chose this stack because I am the most comfortable with it, and that Javascript can be either used as object-oriented programming or functional programming. I believe the strong points of using Javascript are the open source community for feedback, the flexibility of JS, and cross-browser usability. In my experience some weaknesses in Javascript are difficulty with asyncronicity and security due to code being executed on the client-side. 

### Your feedback on this technical challenge
Have feedback for how we could make this assignment better? Please let us know.