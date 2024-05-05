# myApp 
# Project description
myApp is a serverless, progressive web application (PWA) with React using atest-driven development (TDD) technique. The application uses the Google 
Calendar API to fetch upcoming events.

## Feature 1: Filter Events By City
Scenario 1: **When** user hasn’t searched for a city, show upcoming events from all cities.
* **Given** user hasn’t searched for any city;
* **When** the user opens the app;
* **Then** the user should see a list of upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city.
* **Given** the main page is open;
* **When** user starts typing in the city textbox;
* **Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

Scenario 3: User can select a city from the suggested list.
* **Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
* **When** the user selects a city (e.g., “Berlin, Germany”) from the list;
* **Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details
Scenario 1: An event element is collapsed by default.
* **Given** the software interface includes event details that can be shown or hidden.
* **When** a user interacts with the collapsed event element.
* **Then** clicking on the collapsed event element or show details button will expand the event details, showing additional information.

Scenario 2: User can expand an event to see details.
* **Given** each event is initially displayed in an expanded state, showing detailed information.
* **When** a user clicking on show details button.
* **Then** the expanded event displays detailed information such as date, time, location, description, etc.

Scenario 3: User can collapse an event to hide details.
* **Given** users have the option to collapse an event to hide the details.
* **When** a user clicking on hide details button.
* **Then** the expanded event collapses, hiding the detailed information. The event element now displays only basic information.The "hide details" button may 
  change its label to "show details" or a similar indication to reflect the new state. Subsequently, the user may click on the "show details" button to 
  expand the event again and reveal the detailed information.

## Feature 3: Specify Number of Events
Scenario 1: **When** user hasn’t specified a number, 32 events are shown by default.
* **Given** a software interface where users can view events. The interface includes a feature to specify the number of events to be displayed. **When** the user 
  hasn't specified a number, the default setting is to display 32 events.
* **When** the user accesses the event viewing interface without specifying a specific number of events to display.
* **Then** the interface automatically loads and displays 32 events.

Scenario 2: User can change the number of events displayed.
* **Given** the interface includes a feature to filter events by city.
* **When** a user selects a city from the provided list of options.
* **Then** the list of events is updated to show only those events that are taking place in the selected city.

## Feature 4: Use the App **When** Offline
Scenario 1: Show cached data when there’s no internet connection.
* **Given** the application includes a caching mechanism to store previously accessed event data locally on the user's device.
* **When** the user opens the application while offline.
* **Then** it automatically switches to offline mode. The application accesses the cached data stored locally on the device, including event details, dates, 
  locations, and any other relevant information.

Scenario 2: Show error when user changes search settings (city, number of events).
* **Given** the application includes a feature to use the app when offline, utilizing cached data stored locally on the user's device.
* **When** a user attempts to change search settings, such as selecting a different city or adjusting the number of events to display.
* **Then** it displays an error message informing the user that search settings cannot be modified while offline.

## Feature 5: Add an App Shortcut to the Home Screen
Scenario 1: User can install the meet app as a shortcut on their device home screen.
* **Given** the device supports adding shortcuts to the home screen.
* **When** the user wants to add a shortcut for the Meet app to their device home screen.
* **Then** the user selects this option, and a shortcut for the Meet app is added to their device's home screen.

## Feature 6: Display Charts Visualizing Event Details
Scenario 1: Show a chart with the number of upcoming events in each city.
* **Given** the application includes a feature to display charts visualizing event details.
* **When** the user accesses the section of the application dedicated to displaying data visualizing event details.
* **Then** a chart is generated, displaying the number of upcoming events for each city. The chart may use different visual representations, such as bar charts, 
pie charts, or line graphs, to effectively communicate the information. Each city is represented on the chart, and the corresponding number of upcoming 
events is displayed.




## Serverless functions in myApp:
 In myApp serverless functions for authentication and access token generation, MyApp ensures secure and efficient access to public calendar events from the 
 Google Calendar API. Additionally, utilizing AWS Lambda as the cloud-service provider for these serverless functions enhances scalability and cost- 
 effectiveness, as resources are dynamically allocated based on demand, and the app only pays for the compute resources used during function execution.


# Installations:
* npm install --save-dev gh-pages
* npm install -g serverless
* npm install googleapis@^110.0.0 --save
* npm install http-server -g
* npm install --save @testing-library/user-event@14
* npm install jest-cucumber --save-dev
* npm install --save-dev puppeteer@18.1.0
* npm install --save atatus-spa

  
# Features
* React application
* Test-Driven Development (TDD) approach
* Integration with Google Calendar API
* OAuth2 authentication flow
* Serverless functions (AWS Lambda) for authorization server
* Code hosted in a Git repository on GitHub
* Responsive design for all screen sizes (including widths of 1920px and 320px)
* Passes Lighthouse’s Progressive Web App (PWA) checklist
* Works offline or in slow network conditions with a service worker
* Ability for users to install the app on desktop and add it to their home screen on mobile
* Deployed on GitHub Pages
* Implements an alert system using an Object-Oriented Programming (OOP) approach to show information to the user
* Utilizes data visualization
* Test coverage rate >= 90%
* Monitored using an online performance monitoring tool
  
#Technologies used:
* Serverless Backend: AWS Lambda,OAuth2 
* PWA: React for frontend development.
* Service Workers for offline support.
* Web App Manifest for add-to-home-screen prompt.
* Testing: Jest, Puppeteer.
* Deployed on GitHub Pages.
* Data Visualization: Recharts.


# Link to App
https://priyankareddy-nalla.github.io/myApp





  

















  

 


