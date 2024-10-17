import { useState } from "react";
import { View, Modal, Button, StatusBar, StyleSheet } from "react-native";
import Header from "./components/header";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  const [modalVisible, setModalVisible] = useState(false);

  // Function to change the page
  const changePage = (pageName) => {
    setModalVisible(false);
    setPage(pageName);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#AA0002" />

      <Header openModal={() => setModalVisible(true)} />

      {/* Main content changes based on the page state */}
      {page === "list" ? <List /> : <Article />}

      {/* Modal for navigation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Button title="List" onPress={() => changePage("list")} />
          <Separator height={30} />
          <Button title="Article" onPress={() => changePage("article")} />
          <Separator height={30} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "#222222",
    padding: 30,
    flex: 1,
  },
});

export default App;