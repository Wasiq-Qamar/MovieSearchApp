import React, { useState } from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useTitles from "../hooks/useTitles";
import TitleList from "../components/TitleList";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [searchApi, results, errorMsg] = useTitles();

  const filterResults = (filterKey) => {
    if (filterKey === "recent") {
      const toReturn = results.filter((result) => {
        return (
          result.year > 2000 &&
          (result.titleType === "movie" || result.titleType === "tvSeries")
        );
      });
      return toReturn.length > 0 ? toReturn : null;
    } else {
      const toReturn = results.filter((result) => {
        return result.titleType === filterKey;
      });
      return toReturn.length > 0 ? toReturn : null;
    }
  };

  console.log(results);

  return (
    <>
      <SearchBar
        name={name}
        onChangeName={setName}
        onSubmit={() => searchApi(name)}
      />
      {errorMsg ? <Text>Error: {errorMsg}</Text> : null}
      {results ? (
        <ScrollView>
          <TitleList
            results={filterResults("recent")}
            listTitle="Most Recent"
          />
          <View style={styles.seperator}></View>
          <TitleList
            results={filterResults("tvSeries")}
            listTitle="Tv Series"
          />
          <View style={styles.seperator}></View>
          <TitleList results={filterResults("movie")} listTitle="Movies" />
        </ScrollView>
      ) : (
        <Text style={styles.error}>No Results Found</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontWeight: "bold",
    alignSelf: "center",
  },
  seperator: {
    borderBottomWidth: 1,
    marginLeft: 15,
    borderColor: "#808080",
    marginBottom: 10,
  },
});

export default HomeScreen;
