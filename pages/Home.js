import React from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tasks = [
    { id: "1", task: "Buy groceries", date: "Jul 20, 2023 at 9:00 AM", status: "Pending" },
    { id: "2", task: "Finish homework", date: "Jul 21, 2023 at 6:30 PM", status: "Pending" },
    { id: "3", task: "Call mom", date: "Jul 22, 2023 at 12:00 PM", status: "Pending" },
    { id: "4", task: "Go for a run", date: "Jul 23, 2023 at 7:00 AM", status: "Pending" },
    { id: "5", task: "Read a book", date: "Jul 19, 2023 at 6:00 PM", status: "Completed" },
    { id: "6", task: "Write a blog post", date: "Jul 19, 2023 at 8:00 PM", status: "Completed" },
    { id: "7", task: "Attend a meeting", date: "Jul 25, 2023 at 10:00 AM", status: "Pending" },
    { id: "8", task: "Clean the house", date: "Jul 17, 2023 at 2:00 PM", status: "Completed" },
    { id: "9", task: "Practice playing guitar", date: "Jul 26, 2023 at 4:00 PM", status: "Pending" },
    { id: "10", task: "Pay bills", date: "Jul 27, 2023 at 3:00 PM", status: "Pending" },
    { id: "11", task: "Plan weekend trip", date: "Jul 28, 2023 at 11:00 AM", status: "Completed" },
    { id: "12", task: "Update resume", date: "Jul 29, 2023 at 2:30 PM", status: "Pending" },
    { id: "13", task: "Buy birthday gift", date: "Jul 30, 2023 at 5:00 PM", status: "Pending" },
    { id: "14", task: "Fix bicycle", date: "Jul 31, 2023 at 9:00 AM", status: "Completed" },
    { id: "15", task: "Water plants", date: "Aug 1, 2023 at 7:00 AM", status: "Pending" },
    { id: "16", task: "Organize desk", date: "Aug 2, 2023 at 4:00 PM", status: "Completed" },
    { id: "17", task: "Learn React Native", date: "Aug 3, 2023 at 10:00 AM", status: "Pending" },
    { id: "18", task: "Schedule dentist", date: "Aug 4, 2023 at 1:00 PM", status: "Pending" },
    { id: "19", task: "Backup files", date: "Aug 5, 2023 at 3:00 PM", status: "Completed" },
    { id: "20", task: "Meditate", date: "Aug 6, 2023 at 8:00 AM", status: "Pending" },
];

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
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
                        <Ionicons name="chevron-forward" size={20} color="#888" />
                        </View>
                    </View>
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
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 10,
        marginTop: 25,
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