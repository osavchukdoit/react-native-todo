import React from "react";
import { Image, View, StyleSheet } from "react-native";

export const ImagePlaceholder = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
});
