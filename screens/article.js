import React, { useState } from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  Alert,
} from "react-native";
import Separator from "../components/separator";

// Functional Component
const Article = () => {
  const [modalVisible, setModalVisible] = useState(false); // State for Modal visibility

  // Arrow Function
  const buttonHandler = () => {
    setModalVisible(true); // Show Modal when button is pressed
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/logo-telkom-university-surabaya-color-300x133.png?lossy=2&strip=1&webp=1",
        }}
        style={styles.logo}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Solusi Inovatif Penurunan Angka Stunting, Mahasiswa Telkom University
          Sabet Penghargaan di Innovillage 2023
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Innovillage-2023-1200x600.jpeg?lossy=2&strip=1&webp=1",
          }}
          style={styles.mainImage}
        />
        <Separator height={10} />
        <Text>
          <Text style={{ fontWeight: "bold" }}>Surabaya, Maret 2024</Text> -
          Gelombang kebanggaan kembali datang bagi Telkom University Surabaya...
        </Text>
        <Separator height={10} />
        <Button title="Share" onPress={buttonHandler} />
        <Separator height={70} />

        {/* Modal Component */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Share this article with others!</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  logo: {
    height: 100,
    resizeMode: "contain",
    marginVertical: 15,
  },
  titleView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#eeeeee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainImage: {
    height: 220,
    resizeMode: "contain",
  },
  content: {
    padding: 15,
  },
  modalView: {
    marginTop: 150,
    marginHorizontal: 30,
    padding: 35,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Article;