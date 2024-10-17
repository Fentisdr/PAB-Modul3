import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

// Dummy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
  },
  // ... (data lainnya)
];

// Functional Component
const List = () => {
  const [modalVisible, setModalVisible] = useState(false); // State for Modal visibility
  const [selectedItem, setSelectedItem] = useState(null); // State for the selected item

  // Arrow Function with destructured argument
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.view}
        onPress={() => {
          setSelectedItem(item); // Set selected item
          setModalVisible(true); // Open the modal
        }}
      >
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Modal Component */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Image source={{ uri: selectedItem.image }} style={styles.image} />
            <Text style={styles.text}>{selectedItem.title}</Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: '100%',
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    padding: 30,
    flex: 1,
    alignItems: "center",
  },
});

export default List;