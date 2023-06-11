import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Welcome from "./screens/Welcome";
import Login from "./screens/login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import AddCategory from "./screens/AddCategory";
import AddList from "./screens/AddList";
import DetailList from "./screens/DetailList";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddCategory" component={AddCategory} />
          <Stack.Screen name="AddList" component={AddList} />
          <Stack.Screen name="DetailList" component={DetailList} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
