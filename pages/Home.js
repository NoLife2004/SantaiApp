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
    { id: "2", task: "Finish homework", date: "Jul 21, 2023 at 6:30 PM", status: "Pending" },
    ];

    setTasks(initialTasks);
    setIsLoading(false);

    // Jika ada task baru dari Task screen
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

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
},
loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
},
title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
},
searchInput: {
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
},
taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
},
separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
},
taskTitle: {
    fontSize: 16,
    fontWeight: "600",
},
taskDate: {
    color: "#555",
    marginTop: 4,
},
statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
},
statusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
},
pending: {
    backgroundColor: "#f90",
},
completed: {
    backgroundColor: "#4caf50",
},
rightSide: {
    flexDirection: "row",
    alignItems: "center",
},
});

export default Home;