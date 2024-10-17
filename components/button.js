import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Modal, View, Button as RNButton } from "react-native";

// Functional Component with props
const Button = (props) => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  return (
    <View>
      {/* TouchableOpacity for Button */}
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          props.onPress(); // Executes the function passed through props
          setModalVisible(true); // Opens the modal
        }}
      >
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text>This is the Modal content!</Text>
          <RNButton title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    padding: 30,
    flex: 1,
    alignItems: "center",
  },
});

export default Button;