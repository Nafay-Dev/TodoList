# React Native Todo List App

A simple yet functional Todo List application built with React Native and Expo.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Set due dates for tasks
- Visual indicators for overdue tasks
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
   git clone https://github.com/Nafay-Dev/TodoList.git
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

1. **Important**: Make sure you are in the TodoList directory:
   ```
   cd TodoList
   ```
   If you run commands from the parent directory, you will encounter "package.json not found" errors.

2. Start the development server:
   ```
   npx expo start
   ```

3. Once the server starts, you'll see a QR code in your terminal. You have several options to run the app:
   - **Mobile Device**: 
     - Install Expo Go app from App Store (iOS) or Play Store (Android)
     - Scan the QR code with your device's camera (iOS) or Expo Go app (Android)
   - **Web Browser**:
     - Press 'w' to open in web browser
   - **Android Emulator**:
     - Press 'a' to run on Android emulator (requires Android Studio)
   - **iOS Simulator**:
     - Press 'i' to run on iOS simulator (requires Xcode on macOS)

4. If you encounter any port conflicts, Expo will ask to use a different port. Accept this by pressing 'y'.

Note: The QR code will be displayed in your terminal. Make sure your mobile device and computer are on the same network for the best experience.

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
- Add reminders for upcoming tasks
- Implement drag-and-drop for reordering tasks
- Add animations for better UX

## License

MIT
