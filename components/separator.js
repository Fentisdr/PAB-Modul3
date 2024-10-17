import { useState } from "react";
import { View, Modal, Button, TouchableOpacity, StyleSheet } from "react-native";

// Functional Component with props
const Separator = (props) => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  return (
    <View>
      {/* TouchableOpacity to allow interaction with the Separator */}
      <TouchableOpacity
        style={{ height: props.height }}
        onPress={() => setModalVisible(true)} // Open the modal on press
      >
        <View style={{ height: props.height }}></View>
      </TouchableOpacity>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    padding: 30,
    flex: 1,
    alignItems: "center",
  },
});

export default Separator;