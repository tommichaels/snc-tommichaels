# Seven Sigms Group (SSG) Full-stack developer Assessment Test

### Primary Languages and Tools:
"This assessment by Seven Sigma Group (SSG) was for the Full-Stack Developer role. The documentation and supporting materials were of pristine quality, enabling me to implement all the required functionalities, along with some optional ones. This application showcases a Next.js full-stack solution that displays user details one at a time when selected, along with a timestamp indicating when the details were requested. Below are the core features of the application, along with a link to view it."










### Summary

#### Frontend Implementation:

1. **Button Selection Functionality**:
   - Implemented a feature where initially no buttons are selected.
   - When a button is clicked, it becomes selected, and if one is already selected, it can only be unselected by selecting another button.
<br>
<br>
<img align="center" alt="GitHub" width="100%" src="https://github.com/user-attachments/assets/ccf8b7c0-d092-4348-b6c3-072753a49f23" />
<br>
<br>

2. **API Call on Button Press**:
   - Implemented a function to call the API at `api/person?person={Person.PersonA}` when a button is pressed.
   - Managed various states including loading, handling multiple requests, and displaying success or error messages.

3. **UI Components**:
   - Created components to handle different UI states:
     - Skeleton loading components while the API request is in progress.
       <br>
       <br>
       <img align="center" alt="Git" width="100%" src="https://github.com/user-attachments/assets/5642c133-7459-4bc6-b073-76348349d8bb" />
       <br>
       <br>
     - A card component to display user information on a successful request.
     - An error message component to display when the request fails.
       <br>
      <br>
      <img align="center" alt="Node.js" width="100%" src="https://github.com/user-attachments/assets/e71956e4-290e-4517-ab00-e1efc16a6993" />
      <br>
      <br>
      

4. **React Context for Logging**:
   - Wrapped the app in a React Context that provides a boolean state `enableLogs`.
   - Made the `enableLogs` state and a callback to toggle it accessible throughout the app.

5. **Date and Time State**:
   - Added a state to hold the current date and time (`currentTime`), updating it every second.
   - Displayed the formatted time (`DD-MM-YYYY : hh:mm:ss`) in the UI.
   <br>
   <br>
  <img align="center" alt="GitHub" width="100%" src="https://github.com/user-attachments/assets/dbd053b4-8ae4-4b41-bf6d-cbae2779bbd3" />
  <br>
  <br>
  <img align="center" alt="JavaScript" width="100%" src="https://github.com/user-attachments/assets/6d690471-1fb7-40f5-80a4-d6a33485b998" />
  <br>
   <br>

6. **Custom Hook for Logging**:
   - Created a custom hook that logs the person details and the current `currentTime` state to the console when the person details change, provided `enableLogs` is true.
  <br>
  <br>
  <img align="center" alt="React" width="100%" src="https://github.com/user-attachments/assets/e9c71fea-7a31-40d1-ab2a-c0688e980a6b" />
  <br>
  <br>

#### Backend Implementation:

7. **Database Setup and Backend Update**:
   - Used Docker Compose and a Prisma schema to spin up a local PostgreSQL database.
   - Updated the seed script at `prisma/seed.ts` to create two mock users.
   - Modified the `getPersonFromDB` function to retrieve person details from the database using Prisma.

8. **Prisma Schema Update**:
   - Updated the Prisma schema to include a "Company" table that stores company names.
   - Established many-to-many relationships between Users and Companies.
   - Created necessary migration files for these changes.

9. **Deployment to Vercel**:
   - Deployed the app to Vercel with the main branch set as production and the develop branch as staging.
   - Utilized Vercel Postgres on a free Hobby plan for database hosting.

All the described features have been fully implemented.


