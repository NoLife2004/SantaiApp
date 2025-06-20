import React, { useState } from "react";
import {
Text,
TextInput,
Button,
StyleSheet,
SafeAreaView,
View
} from "react-native";

const Task = ({ navigation, route }) => {
    // Ambil data task yang dikirim dari Home (jika ada)
    const taskData = route.params?.taskData || {};

    const [task, setTask] = useState(taskData.task || "");
    const [date, setDate] = useState(taskData.date || "");
    const [status, setStatus] = useState(taskData.status || "Pending");

    const saveTask = () => {
        if (!task || !date) {
        alert("Task and date are required!");
        return;
        }

        const newTask = {
        id: taskData.id || Date.now().toString(), // Gunakan ID lama atau buat baru
        task,
        date,
        status,
        };

        // Kirim data kembali ke Home
        navigation.navigate("Home", { newTask });
    };

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Task Name:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={task}
            onChangeText={setTask}
        />

        <Text style={styles.label}>Date:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter date (e.g., Jul 20, 2023 at 9:00 AM)"
            value={date}
            onChangeText={setDate}
        />

        <Text style={styles.label}>Status:</Text>
        <TextInput
            style={styles.input}
            placeholder="Pending/Completed"
            value={status}
            onChangeText={setStatus}
        />

        <View style={styles.buttonContainer}>
            <Button 
            title="Cancel" 
            onPress={() => navigation.goBack()} 
            color="gray"
            />
            <Button 
            title="Save Task" 
            onPress={saveTask} 
            color="#0074FF"
            />
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    padding: 20 
},
label: { 
    marginTop: 15, 
    fontWeight: "bold", 
    fontSize: 16 
},
input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
},
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
}
});

export default Task;