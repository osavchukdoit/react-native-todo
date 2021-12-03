import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { TodoInput } from "../components/TodoInput";
import { TodoItem } from "../components/TodoItem";
import { THEME } from "../theme";
import { TodoContext } from "../context/todo/todoContext";
import { AppLoader } from "../components/ui/AppLoader";
import { AppText } from "../components/ui/AppText";
import { AppButton } from "../components/ui/AppButton";

export const MainScreen = () => {
  const { todos, fetchTodos, loading, error } = useContext(TodoContext);

  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - 2 * THEME.PADDINGS.HORIZONTAL
  );

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

  const emptyContent = (
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        source={require("../../assets/no-items.png")}
      />
    </View>
  );

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get("window").width - 2 * THEME.PADDINGS.HORIZONTAL;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <AppText style={styles.error}>{error}</AppText>
        <AppButton
          onPress={loadTodos}
          color={THEME.COLORS.YELLOW}
          textColor={THEME.COLORS.BLACK}
          style={styles.tryAgainBtn}
        >
          Try again
        </AppButton>
      </View>
    );
  }

  return (
    <View>
      <ImagePlaceholder />
      <View>
        <TodoInput />
        <View style={{ width: deviceWidth }}>
          <FlatList
            data={todos}
            ListEmptyComponent={emptyContent}
            renderItem={({ item, index, separators }) => (
              <TodoItem todoItem={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 20,
    color: THEME.COLORS.DANGER,
  },
  tryAgainBtn: {
    paddingVertical: 20,
  },
});
