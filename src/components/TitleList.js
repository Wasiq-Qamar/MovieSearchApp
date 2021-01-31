import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TtileDetails from "./TitleDetails";

const TitleList = ({ results, listTitle }) => {
  const navigation = useNavigation();

  return results !== null ? (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {listTitle} ({results.length})
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Title Show", {
                  name: item.title,
                  id: item.id.slice(7, -1),
                })
              }
            >
              <TtileDetails item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 15,
  },
  container: {
    marginBottom: 10,
  },
});

export default TitleList;
