# React User Management App

## Overview

This project is a React-based application that manages user information and todo list, utilizing an API to fetch and manipulate data. The main features include:

- **Search Functionality:** Users can search by name or email.
- **User Management:** Display user details and allow for updating and deleting user data.
- **Todo Management:** View and manage todo list associated with each user.

## Features

1. **Search Users:**
   - Real-time search functionality to filter users by name or email.

2. **User Details:**
   - Displays detailed information about each user.
   - Update or delete user details.

3. **Todos:**
   - View todos associated with a user.
   - Add new todos.
   - Mark todos as completed.

## Project Structure

- **`MaincComp.js`**: The main component that handles fetching data and managing the list of users.
- **`UserComp.js`**: A component responsible for displaying and managing individual user data.
- **`OtherDataComp.js`**: A child component used to display additional user-related data.
- **`TodosComp.js` & `ChildTodosComp.js`**: Components for handling user-specific tasks (todos).
- **`utils.js`**: Contains reusable functions for API requests.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ofekoOren/React-Project.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## API Endpoints

The application utilizes the following API endpoints:

- **Users API:** `https://jsonplaceholder.typicode.com/users`
- **Todos API:** `https://jsonplaceholder.typicode.com/todos`
- **Posts API:** `https://jsonplaceholder.typicode.com/posts`


### to Generalizing the API URLs

If you want to connect the app to your own API, replace these URLs in the `MaincComp.js` (or other relevant files) with your own:

```javascript
const UsersUrl = 'https://your-api.com/users';
const PostUrl = 'https://your-api.com/posts';
const TodosUrl = 'https://your-api.com/todos';
```

### Adjusting Data Fields

Make sure the data fields (like `id`, `name`, `email`, `address`, etc.) match your API's response. If your API returns different field names or structures, you'll need to update the components accordingly.

## How to Use

1. **Search for Users:** Use the search bar to find users by name or email.
2. **View User Details:** Click on a user’s ID to view detailed information.
3. **Manage Todos:** Use the Add button to add new todos, or view existing todos and mark them as complete.

## Contributing

Feel free to fork the repository, make changes, and submit pull requests. Contributions are welcome!
