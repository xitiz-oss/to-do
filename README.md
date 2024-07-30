<h1 align="center" id="title">Retro To-Do List App</h1>

<p id="description">This repository is an attempt to initiate the idea of full-stack development by creating a To-Do list with a retro-style UI. The frontend is built with React and styled using Tailwind CSS while the backend APIs are powered by Django.</p>

<h2>Project Screenshots:</h2>


<img width="1624" alt="Screenshot 2024-07-27 at 12 24 21" src="https://github.com/user-attachments/assets/e1d6a5a0-fb24-41de-bbdb-b2b468083ef8">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Retro Style UI: A visually appealing retro-style design using React and Tailwind CSS.
*   Productivity Enhancement

  
  
<h2>MATLAB Code</h2>
```
% Creating the body for the warning/ alert
alertBody = 'GAS LEAKAGE DETECTED\nPlease attend to the situation before it
becomes hazardous'

% Creating the subject for the warning/ alert
alertSubject = 'WARNING!!!'

% API key for ThingSpeak alerts which is essential for authentication
alertApiKey = 'TAKEMfbs/F8Snn7maXk';

% Set the address for the HTTTP call
alertUrl="https://api.thingspeak.com/alerts/send";

% creating a JSON message with subject and body
jsonMessage = sprintf(['{"subject": "%s","body": "%s"}'], alertSubject,alertBody)

% weboptions creates an options object for HTTP request
% the API key and the type of content is specified
options = weboptions("HeaderFields",{'Thingspeak-Alerts-API-Key', alertApiKey;
'Content-Type','application/json'});

% webwrite sends an HTTP POST request ot the specified URL(alertUrl) with JSON
message and options
result = webwrite(alertUrl, jsonMessage, options);
```


<h2>💻 Built with</h2>

Technologies used in the project:

*   Frontend: React Tailwind CSS
*   Backend: Django Django REST Framework
*   API Integration: Axios for handling API requests

<h2>🚀 Future Works</h2>

This repo is still under development and features will be added progressively.
