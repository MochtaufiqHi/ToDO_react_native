import { Image, View, Text, Button } from "native-base";
import React from "react"

const Welcome = ({navigation}) => {
  return (
    <>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image 
        source={require("../assets/home.png")}
        style={{
          width: 300,
          height: 200
        }}
        alt="Home Icon"
        my={5}
      />
      <Image 
        source={require("../assets/way.png")}
        style={{
          width: 244,
          height: 44
        }}
        alt="Ways Todo"
      />
      <Text style={{textAlign:'center', justifyContent:'center' }} width={80} my={5}>Write your activity and finish your activity.
Fast, Simple and Easy to Use</Text>
    <Button
       bg="error.500"
       _hover={{ backgroundColor: "error.600" }}
       py={3}
       _text={{
         fontSize: "md",
         fontWeight: "bold",
       }}
       width={80}
       onPress={() => navigation.navigate("Login")}
    >
      Login
    </Button>
    <Button
       bg="muted.500"
       _hover={{ backgroundColor: "error.600" }}
       py={3}
       _text={{
         fontSize: "md",
         fontWeight: "bold",
       }}
       width={80}
       my={5}
       onPress={() => navigation.navigate("Register")}
    >
      Register
    </Button>
    <Button
       bg="muted.500"
       _hover={{ backgroundColor: "error.600" }}
       py={3}
       _text={{
         fontSize: "md",
         fontWeight: "bold",
       }}
       width={80}
       onPress={() => navigation.navigate("Home")}
    >
      Home
    </Button>
    <Button
       bg="muted.500"
       _hover={{ backgroundColor: "error.600" }}
       py={3}
       _text={{
         fontSize: "md",
         fontWeight: "bold",
       }}
       width={80}
       onPress={() => navigation.navigate("AddCategory")}
    >
      Add Category
    </Button>
    <Button
       bg="muted.500"
       _hover={{ backgroundColor: "error.600" }}
       py={3}
       _text={{
         fontSize: "md",
         fontWeight: "bold",
       }}
       width={80}
       onPress={() => navigation.navigate("AddList")}
    >
      Add List
    </Button>
    <Button
       bg="muted.500"
       _hover={{ backgroundColor: "error.600" }}
       py={3}
       _text={{
         fontSize: "md",
         fontWeight: "bold",
       }}
       width={80}
       onPress={() => navigation.navigate("DetailList")}
    >
      Detail List
    </Button>
    </View>
    </>
  )
}

export default Welcome;