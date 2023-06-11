import { Box, Button, Text } from "native-base";

function DetailList({route, navigation}) {
  return (
    <Box display="flex" flex={1} alignItems="center" bg="white"> 
      <Box
        bg="amber.100"
        w={"90%"}
        p={10}
        borderRadius={10}
        display="flex"
        flexDirection="row"
        mx={5}
        my={5}
      >
        <Box flex={2}>

        <Text>
          List Name
        </Text>
        <Text>
          List Description
        </Text>
        <Text>
          Font Awesome
        </Text>
        </Box>
      </Box>
      <Box flex={1}>
        <Box 
          p={1}
          borderRadius={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="amber.400"
        >
          <Text color="white" fontWeight="bold">
            Category Name
          </Text>
        </Box>
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button 
            bg="muted.200"
            // borderRadius={"100%"}
            _hover={{backgroundColor: "muted.300"}}
            _passed={{ backgroundColor: "muted.400"}}
            mt={2}
            w={50}
            h={50}
            // onPress={(e) => handleUpdateIsDone(e, list?._id, list?.is_done)}
          >

          </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default DetailList;