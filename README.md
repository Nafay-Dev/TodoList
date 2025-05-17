# React Native Todo List App

A simple yet functional Todo List application built with React Native and Expo.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Visual feedback for user interactions
- Clean and intuitive UI

## Screenshots

(Screenshots will be added here once the app is deployed)

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo Go app on your mobile device (for testing)

## Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd TodoList
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Running the App

1. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

2. Open the Expo Go app on your mobile device and scan the QR code displayed in the terminal.

3. Alternatively, press 'a' to run on an Android emulator or 'i' to run on an iOS simulator (requires Xcode on macOS).

## Project Structure

- `components/` - Contains all React components
  - `TodoList.tsx` - Main component that manages the todo list
  - `Todo.tsx` - Component for individual todo items
  - `AddTodo.tsx` - Form component for adding new todos
- `utils/` - Utility functions
  - `helpers.ts` - Contains utility functions like UUID generation

## Implementation Details

This app is built using the following technologies:

- **React Native** - Cross-platform mobile application framework
- **Expo** - Platform for making universal React applications
- **TypeScript** - For type safety
- **React Hooks** - For state management (useState)

## Future Improvements

- Add local storage persistence with AsyncStorage
- Add categories/tags for tasks
- Add due dates and reminders
- Implement drag-and-drop for reordering tasks
- Add animations for better UX

## License

MIT
