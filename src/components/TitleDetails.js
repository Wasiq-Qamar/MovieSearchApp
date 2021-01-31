import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const TtileDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      {item.image.url ? (
        <Image style={styles.image} source={{ uri: item.image.url }} />
      ) : (
        <Image
          style={styles.image}
          source={require("../../assets/filler-image.png")}
        />
      )}
      <Text style={styles.nameText}>{item.title}</Text>
      <Text style={styles.subText}>
        Released: {item.year}
        {item.runningTimeInMinutes
          ? ",   Duration: " + item.runningTimeInMinutes
          : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameText: {
    fontWeight: "bold",
  },
  subText: {},
});

export default TtileDetails;
