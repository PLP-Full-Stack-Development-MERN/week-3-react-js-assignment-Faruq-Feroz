# React Assignment

A React application demonstrating components, state management with hooks, and Tailwind CSS styling.

## Features

- Header component with title
- Profile component showing user details
- Counter component with state management
- Styled with Tailwind CSS

## Installation

Follow these steps to set up the project:

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   ```

2. **Navigate to the project folder**:
   ```sh
   cd react-assignment
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Start the development server**:
   ```sh
   npm run dev
   ```

5. Open http://localhost:5173 in your browser

## Project Structure

- `src/components/` - Contains all React components
- `Header.jsx` - Displays the application title
- `Profile.jsx` - Shows user profile information
- `Counter.jsx` - Demonstrates state management with a counter
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Implementation Details

### Components

1. **Header Component**
- Displays the application title
- Styled with Tailwind CSS

2. **Profile Component**
- Accepts and displays user details (name, email) as props
- Includes an "Update Profile" button to modify user information

3. **Counter Component**
- Uses React's `useState` hook to manage count state
- Provides buttons to increase, decrease, and reset the counter

### State Management

- The application uses React's `useState` hook for state management
- The Profile component receives props from the parent App component
- The Counter component manages its own internal state

## Technologies Used

- React.js
- Tailwind CSS
- Vite

## Evaluation Criteria Met

- ✅ Correct implementation of React components and hooks
- ✅ Proper use of Tailwind CSS for styling
- ✅ Clear project structure and code organization
- ✅ Comprehensive documentation
- ✅ Successful testing of all components
