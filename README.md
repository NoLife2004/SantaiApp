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
│   └── Task.js        # Main screen with add a task functionality
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
import React, { useState, useEffect } from "react";
import { 
View, Text, TextInput, SafeAreaView, StyleSheet, 
FlatList, ActivityIndicator, TouchableOpacity 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation, route }) => {
const [search, setSearch] = useState("");
const [tasks, setTasks] = useState([]);
const [isLoading, setIsLoading] = useState(true);

// Load initial data + handle new task dari Task screen
useEffect(() => {
    const initialTasks = [
    { id: "1", task: "Buy groceries", date: "Jul 20, 2023 at 9:00 AM", status: "Pending" },
    // More tasks...
    ];

    setTasks(initialTasks);
    setIsLoading(false);

    // If there is a new tash from the Task Screen
    if (route.params?.newTask) {
    setTasks(prev => [...prev, route.params.newTask]);
    }
}, [route.params]);

const filteredTasks = tasks.filter(item => 
    item.task.toLowerCase().includes(search.toLowerCase())
);

if (isLoading) {
    return (
    <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4cd964" />
        <Text style={{ marginTop: 12 }}>Loading...</Text>
    </SafeAreaView>
    );
}

return (
    <SafeAreaView style={styles.container}>
    <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
        <>
            <Text style={styles.title}>To Do List</Text>
            <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            />
        </>
        }
        renderItem={({ item }) => (
        <TouchableOpacity 
            style={styles.taskItem}
            onPress={() => navigation.navigate('Task', { taskData: item })}
        >
            <View style={{ flex: 1 }}>
            <Text style={styles.taskTitle}>{item.task}</Text>
            <Text style={styles.taskDate}>{item.date}</Text>
            </View>
            <View style={styles.rightSide}>
            <View style={[
                styles.statusBadge,
                item.status === "Completed" ? styles.completed : styles.pending,
            ]}>
                <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
            </View>
        </TouchableOpacity>
        )}
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
![Screenshot_20250620_085505_Expo_Go](https://github.com/user-attachments/assets/c44a6977-61d9-44b5-a714-0fe4389ccfd6)
![Screenshot_20250620_085455_Expo_Go](https://github.com/user-attachments/assets/c4d47b68-a78e-49dd-beaa-0105d5b55078)

## Future Improvements
1. **Local Storage**: Save tasks using `AsyncStorage` or a database.
2. **Dark Mode**: Implement a dark/light theme toggle.
3. **Task Filtering**: Filter tasks by status (Pending/Completed).

## License
This project is open-source and available under the MIT License.
