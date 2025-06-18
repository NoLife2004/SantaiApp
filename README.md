# README for SantaiApp - To Do List Application

## Overview
SantaiApp is a simple to-do list application built with React Native. The app helps users manage their tasks with features like task listing, status tracking (Pending/Completed), and a search functionality. The project follows a step-by-step guide from a React Native tutorial.

## Features
- **Task Management**: View, add, and track tasks with status (Pending/Completed).
- **Search Functionality**: Filter tasks by typing in the search bar.
- **Responsive UI**: Clean and user-friendly interface with proper spacing and styling.
- **Icons**: Uses icons from `@expo/vector-icons` for better visual cues.
- **FlatList**: Efficient rendering of tasks using React Native's `FlatList` component.

## Prerequisites
Before running the project, ensure you have the following installed:
1. **Node.js**: Download and install from [https://nodejs.org/en/](https://nodejs.org/en/).
2. **Expo Go**: Install the Expo Go app on your mobile device from the [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) or [App Store](https://apps.apple.com/app/expo-go/id982107779).

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd SantaiApp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```
4. Scan the QR code displayed in the terminal using the Expo Go app on your mobile device.

## Project Structure
```
SantaiApp/
├── assets/            # Static files like images or fonts
├── node_modules/      # Dependencies
├── pages/             # UI components
│   └── Home.js        # Main screen with to-do list functionality
├── App.js             # Main entry point of the application
├── app.json           # Configuration file for the app
├── index.js           # Entry point where the app is rendered
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Key Code Snippets
### Home.js
The main screen of the app includes:
- A title and search bar (`TextInput`).
- A list of tasks rendered using `FlatList`.
- Styling for tasks, status badges, and separators.

```javascript
import React from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const tasks = [
  { id: "1", task: "Buy groceries", date: "Jul 20, 2023 at 9:00 AM", status: "Pending" },
  // More tasks...
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>To Do List</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              onChangeText={(text) => console.log(text)}
            />
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.taskTitle}>{item.task}</Text>
              <Text style={styles.taskDate}>{item.date}</Text>
            </View>
            <View style={styles.rightSide}>
              <View
                style={[
                  styles.statusBadge,
                  item.status === "Completed" ? styles.completed : styles.pending,
                ]}
              >
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color="#888" />
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

// Styles omitted for brevity (refer to the project files for details)
export default Home;
```

## Styling
The app uses `StyleSheet.create` for consistent and maintainable styling. Key styles include:
- `container`: Ensures the layout fills the screen.
- `title`: Large, bold text for the app title.
- `taskItem`: Flexbox layout for each task row.
- `statusBadge`: Color-coded badges for task status (Pending/Completed).

## Screenshots
![WhatsApp Image 2025-06-18 at 08 01 30_e1677eaf](https://github.com/user-attachments/assets/190053e1-79f0-469d-a998-e17904026929)


## Future Improvements
1. **Add Task Functionality**: Allow users to add new tasks.
2. **Local Storage**: Save tasks using `AsyncStorage` or a database.
3. **Dark Mode**: Implement a dark/light theme toggle.
4. **Task Filtering**: Filter tasks by status (Pending/Completed).

## License
This project is open-source and available under the MIT License.
