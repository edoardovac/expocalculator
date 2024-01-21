import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [result, setResult] = useState("Insert two numbers");
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const plusOperation = () => {
    if (isNaN(first + second)) {
      setResult("One of the addends is not a number, insert two numbers");
    } else {
      setResult("Result is: " + (first + second));
    }
  };

  const minusOperation = () => {
    if (isNaN(first + second)) {
      setResult("One of the minuends is not a number, insert two numbers");
    } else {
      setResult("Result is: " + (first - second));
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{result}</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <TextInput
          inputMode="numeric"
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setFirst(text * 1)}
        />
      </View>
      <View>
        <TextInput
          inputMode="numeric"
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setSecond(text * 1)}
        />
      </View>
      <View style={styles.buttons}>
        <Button onPress={plusOperation} title="+"></Button>
        <Button onPress={minusOperation} title="-"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
  },
});
