# Lab 12.2 Server to Server Communication 

## Overview

In this lab we created a server using node.js and express.js.  Data was then fetched from an API and transformed to include only the random fact.

## Features

Activity Tasks

Task 1: Project Setup

    1. If you are starting a new project, create a directory, cd into it, and run npm init -y.
    2. Install the necessary packages: express and axios.

        npm install express axios

Task 2: Create the Express Server

    1. Create a file named server.js.
    2. Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.

Task 3: Create the API Route

    1. In server.js, create a new GET route at the path /api/fun-fact.
    2. This route will be responsible for fetching the data and sending it to the client.

Task 4: Fetch from an External API

    1. For this lab, we will use the Useless Facts API , which provides random facts and requires no API key. The endpoint for a random fact is https://uselessfacts.jsph.pl/api/v2/facts/random.
    2. Inside your /api/fun-fact route handler, use axios to make a GET request to this URL.
    3. Remember to use async/await and wrap your API call in a try...catch block to handle potential errors.

Task 5: Handle and Respond with Data

    1. If the axios request is successful, the response data from the Useless Facts API will look something like this:

    {
    "id": "d046f554-9430-4113-9528-56455147814b",
    "text": "A standard deck of cards is a calendar...",
    "source": "djtech.net",
    "source_url": "http://www.djtech.net/humor/useless_facts.htm",
    "language": "en",
    "permalink": "https://uselessfacts.jsph.pl/api/v2/facts/d046f554-9430-4113-9528-56455147814b"
    }
    2. Your API should not send this entire object to the client. Instead, extract only the text of the fact.
    3. Send a JSON response back to the client in the following format:

    {
    "fact": "A standard deck of cards is a calendar..."
    }
    4. If the request fails (i.e., the catch block is executed), send an appropriate error response, such as a 500 status code and a JSON object like { "error": "Could not fetch fun fact" }.

## Tools

- HTML
- JavaScript
- Node.js
- Express.js

## Reflection Questions

1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

Reformatting the data removes unnecessary data from view.  This task simplifies the experience, allowing focus on important data points. 

2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?

This method allows for better security, so the client does not see sensitive information.  It also provides a message that is more user-friendly for the end-user.

3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?

To get a different language, you could simple add a language query to the endpoint in server.js.