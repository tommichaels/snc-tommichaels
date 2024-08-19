# Seven Sigms Group (SSG) Full-stack developer Assessment Test

### Primary Languages and Tools:
This assessment by Seven Sigma Group (SSG) was for the Full-Stack Developer role. The documentation and supporting materials were of pristine quality, enabling me to implement all the required functionalities, along with some optional ones. This application showcases a Next.js full-stack solution that displays user details one at a time when selected, along with a timestamp indicating when the details were requested. Below are the core features of the application, along with a link to view it.

### Summary

### Frontend Implementation:

#### Check out the app [here!](https://snc-tommichaels.vercel.app/)

1. **Button Selection Functionality**:
   - I implemented a feature where initially no buttons are selected.
   - Also When a button is clicked, it becomes selected, and if one is already selected, it can only be unselected by selecting another button.
<br>
<br>
<img align="center" alt="GitHub" width="100%" src="https://github.com/user-attachments/assets/ccf8b7c0-d092-4348-b6c3-072753a49f23" />
<br>
<br>

2. **API Call on Button Press**:
   - I implemented a function to call the API to fetch the user details of a person when a button is pressed.
   - I also properly managed various states including loading, handling multiple requests, and displaying success or error messages.

3. **UI Components**:
   - I created components to handle different UI states:
     - I also added a keleton loading component to display while the API request is in progress.
       <br>
       <br>
       <img align="center" alt="Git" width="100%" src="https://github.com/user-attachments/assets/5642c133-7459-4bc6-b073-76348349d8bb" />
       <br>
       <br>
     - I also implemeted a card component to display user information on a successful request and an error message component to display when the request fails.
       <br>
      <br>
      <img align="center" alt="Node.js" width="100%" src="https://github.com/user-attachments/assets/e71956e4-290e-4517-ab00-e1efc16a6993" />
      <br>
      <br>
      

4. **React Context for Logging**:
   - I wrapped the app in a React Context that provides a boolean state `enableLogs` and made the `enableLogs` state and a callback to toggle it accessible throughout the app.

5. **Date and Time State**:
   - I also added a state to hold the current date and time (`currentTime`), updating it every second and displayed the formatted time (`DD-MM-YYYY : hh:mm:ss`) in the UI.
   <br>
   <br>
  <img align="center" alt="GitHub" width="100%" src="https://github.com/user-attachments/assets/dbd053b4-8ae4-4b41-bf6d-cbae2779bbd3" />
  <br>
  <br>
  <img align="center" alt="JavaScript" width="100%" src="https://github.com/user-attachments/assets/6d690471-1fb7-40f5-80a4-d6a33485b998" />
  <br>
   <br>

6. **Custom Hook for Logging**:
   - I created a custom hook that logs the person details and the current `currentTime` state to the console when the person details change, provided `enableLogs` is true.
  <br>
  <br>
  <img align="center" alt="React" width="100%" src="https://github.com/user-attachments/assets/e9c71fea-7a31-40d1-ab2a-c0688e980a6b" />
  <br>
  <br>

#### Backend Implementation:

7. **Database Setup and Backend Update**:
   - I used Docker Compose and a Prisma schema to spin up a local PostgreSQL database.
   - I also updated the seed script at `prisma/seed.ts` to create two mock users.
   - Then I modified the `getPersonFromDB` function to retrieve person details from the database using Prisma.

8. **Prisma Schema Update**:
   - I updated the Prisma schema to include a "Company" table that stores company names.
   - I established many-to-many relationships between Users and Companies.
   - And I created necessary migration files for these changes.

9. **Deployment to Vercel**:
   - Finally, I deployed [the app](https://snc-tommichaels.vercel.app/) to Vercel with the main branch set as production and the develop branch as staging.
All the described features have been fully implemented.


