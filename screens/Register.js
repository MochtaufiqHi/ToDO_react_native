import { Box, Button, Image, Input, Text } from "native-base";

const Register = ({navigation}) => {
  return (
    <Box display="flex" flex={1} alignItems="center" bg="white">
      <Image
        source={require("../assets/login.png")}
        width={275}
        height={275}
        alt="AuthLogin"
        marginTop={18}
        marginBottom={5}
      />
      <Box display="flex" w={"80%"}>
        <Text fontWeight="bold" fontSize={40}>
          Register
        </Text>
        <Box display="flex" w={"100%"} alignItems="center" mt={5}> 
          <Input 
            w={"100%"}
            bg="muted.200"
            placeholder="Email"
            py={2}
            keyboardType={"email-address"}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            my={2}
          />
          <Input 
            w={"100%"}
            bg="muted.200"
            placeholder="Name"
            py={2}
            fontSize={15}
            secureTextEntry={true}
            borderRadius="sm"
            borderColor="muted.500"
            my={2}
          />
          <Input 
            w={"100%"}
            bg="muted.200"
            placeholder="Password"
            py={2}
            fontSize={15}
            secureTextEntry={true}
            borderRadius="sm"
            borderColor="muted.500"
            my={2}
          />
          <Button
            w={"100%"}
            mt={5}
            bg="error.500"
            _hover={{backgroundColor: "error:600"}}
            py={3}
            _text={{
              fontSize: 'md',
              fontWeight: "bold"
            }}
          >
            Login
          </Button>
          <Text mt={4}>
            Join us before? 
            <Text
              color="danger.500"
              fontWeight="bold"
              mx={4}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Register;