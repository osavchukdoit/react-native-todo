import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { MainLayout } from "./src/MainLayout";
import { TodoState } from "./src/context/todo/TodoState";
import { ScreenState } from "./src/context/screen/ScreenState";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/store";
import { View } from "react-native";
import { AppButton } from "./src/components/ui/AppButton";
import { decrement, increment, reset } from "./src/reducers/counterSlice";
import { Counter } from "./src/components/Counter";

const loadApplication = async () => {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      {/*<Counter />*/}
      <MainLayout />
    </Provider>
  );

  // return (
  //   <ScreenState>
  //     <TodoState>
  //       <MainLayout />
  //     </TodoState>
  //   </ScreenState>
  // );
};

export default App;
