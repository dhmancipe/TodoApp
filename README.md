# TodoApp
TodoApp challenge
TODO APP Documentation
Architecture and Technology Choices
This Todo application has been built with a modern stack to provide a scalable, maintainable, and efficient solution. The architecture is designed with a focus on modularity and scalability, ensuring that the application can easily be extended in the future.
Core Technologies:
React: A component-based JavaScript library for building the user interface. React ensures that the application is both interactive and performant, with features like virtual DOM for efficient re-rendering.
Vite: A fast build tool and development server. Vite was chosen to improve the development experience with fast hot module replacement and optimized bundling.
Redux: State management is handled using Redux, which ensures a centralized store for managing the application's state, making it easier to scale as the app grows.
MUI (Material-UI): A robust component library that provides ready-to-use React components with Material Design principles. It helps in rapidly developing a polished user interface with minimal styling effort.
Axios: A promise-based HTTP client used to fetch external data, such as news articles from the NewsAPI.
Testing Library & Jest: For testing the components and Redux state management, we use Jest alongside React Testing Library. This combination allows for unit and integration tests to ensure the reliability of the application.


How the Application Meets Enterprise Readiness?
1. Core Business Functionality:
The Todo application provides the following functionality:
Add, Edit, and Delete Todo Items: Users can easily manage their tasks by adding, editing, and deleting todo items.
Change Status: Todo items can be moved through different statuses: "Todo", "Doing", or "Done". When changing a Todo item’s status to "Done", the application includes an approval step (i.e., a confirmation modal), adhering to the business rule.
User-Friendly View: The application displays Todo items in a user-friendly way, with filtering and grouping by status, ensuring ease of use.
2. Performance:
Efficient Rendering: React’s virtual DOM allows for efficient updates to the UI without unnecessary re-renders. This optimizes performance by ensuring only the necessary changes are rendered.
State Management: Redux is used for state management, ensuring that updates to the state are handled in a predictable manner, reducing unnecessary re-renders.
3. Maintainability:
Modular Code Structure: The application follows a component-based architecture, with each functionality encapsulated in individual components. This makes it easier to maintain and extend.
Reusability: Components are designed to be reusable. For example, the TodoItem component can be reused for displaying each Todo task with minimal modifications.
Clear Separation of Concerns: The code follows the principle of separation of concerns, with UI components separated from business logic and state management.
4. Scalability:
Design for Growth: The app is designed to scale by implementing modular components and a central state management solution with Redux. As requirements grow (e.g., more complex business logic or additional features), the current structure will be easy to extend.
Handling Large Datasets: To ensure that large datasets can be efficiently handled, further optimization techniques such as pagination, infinite scrolling, and server-side rendering (SSR) can be added.
5. Security:
Axios: The use of Axios ensures secure HTTP requests, and additional security measures like HTTPS are recommended when deploying the app.
6. Reliability:
User Feedback: The application provides clear feedback to the user, such as error messages when the user exceeds the character limit for Todo items  creation or edition.

Clone and run the TodoApp repository locally
Prerequisites:
Ensure you have Node.js (version 14 or higher) and Git installed on your system.
Clone the Repository:
Open your terminal or command prompt and run the following command to clone the repository:
git clone https://github.com/dhmancipe/TodoApp.git
Navigate to the Project Directory:
After cloning, go to the project directory:
cd TodoApp
Install Dependencies:
Install the required dependencies by running:
npm install
Run the Development Server:
Start the development server with the following command:
npm run dev
The application will be accessible at http://localhost:5173 in your browser.
Ensure You're on the Master Branch:
Make sure you are on the master branch by checking out the correct branch:
git checkout master
To test the app, follow these steps:
	npm test or npm run test

 Developed by: 
Diego Mancipe
phone: +57 320 2599374
git:https://github.com/dhmancipe
linkedin: https://www.linkedin.com/in/elmancipe/





