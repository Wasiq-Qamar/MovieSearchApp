import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import imdb from "../api/imdb";

const TitleList = ({ route }) => {
  const id = route.params.id;
  const [results, setResults] = useState(null);

  const getImages = async (id) => {
    try {
      const response = await imdb.get("/get-images", {
        params: {
          tconst: id,
          limit: 25,
        },
      });
      setResults(response.data.images);
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong");
    }
  };

  useEffect(() => {
    getImages(id);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.url }} style={styles.image} />
              <Text style={styles.caption}>{item.caption}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 370,
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  container: {
    padding: 20,
    backgroundColor: "#F8F9F9",
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderColor: "#808080",
    marginBottom: 10,
  },
  caption: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default TitleList;
