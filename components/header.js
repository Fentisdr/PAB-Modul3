import { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Modal, Button } from "react-native";

// Functional Component with props
const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  return (
    <View style={styles.header}>
      {/* TouchableOpacity to open the Modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={require("../assets/menu.png")}
          style={{ width: 18, height: 18 }}
        />
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

      <View>
        <View style={styles.iconsView}>
          <Image
            source={require("../assets/facebook.png")}
            style={styles.icons}
          />
          <Image
            source={require("../assets/youtube.png")}
            style={styles.icons}
          />
          <Image
            source={require("../assets/twitter.png")}
            style={styles.icons}
          />
          <Image
            source={require("../assets/search.png")}
            style={styles.icons}
          />
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AA0002",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  iconsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    width: 36,
    height: 16,
    resizeMode: "contain",
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    padding: 30,
    flex: 1,
  },
});

export default Header;