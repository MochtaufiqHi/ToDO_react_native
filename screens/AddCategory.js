import { Box, Button, Input, Text } from "native-base";

function AddCategory({ navigation }) {
  return (
    <Box
      display="flex"
      flex={1}
      bg="white"
      px={3}
      py={5}
      w={"100%"}
      alignItems="center"
    >
      <Box display="flex" w={"90%"} mt={5}>
        <Text fontWeight="bold" fontSize={30}>
          Add Category
        </Text>
        <Box display="flex" w={"100%"} mt={5}>
          <Input 
            w={"100%"}
            bg="muted.200"
            placeholder="Name"
            py={3}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            // value={}
            // onChangeText={(value) => handleChangeText("name", value)}
          />
          <Button
            w={"100%"}
            mt={5}
            bg="error.500"
            _hover={{ backgroundColor: "error.600"}}
            py={3}
            _text={{
              fontSize: "md",
              fontWeight: "bold"
            }}
            // onPress={(e) => handleSubmit.mutate(e)}
          >
            Add Category
          </Button>
        </Box>
        <Text fontWeight="bold" fontSize={30} mt={30}>
          List Category
        </Text>
        <Box>

        </Box>
      </Box>
    </Box>
  )
}

export default AddCategory