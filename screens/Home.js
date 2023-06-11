import { Box, Input, Menu, Text } from "native-base";

function Home({ navigation }) {
  return (
    <Box display="flex" flex={1} alignItems="center" bg="white">
      <Box display="flex" flexDirection="row" w={"85%"}  mt={10} mb={5}>
        {/* profile */}
        <Box flex={1} justifyContent="center" mx={2}>
            <Text>
              Hi Radif
            </Text>
            <Text fontSize={15} color="error.500">
              Lists
            </Text>
        </Box>
        {/* profile */}

        <Box flex={1}  justifyContent="center" alignItems="flex-end" mx={2}>
          {/* <Menu> */}

          {/* </Menu> */}
        </Box>
      </Box>
      {/* filter */}
      <Box display="flex" w={"85%"} flexDirection="column">
        <Box display="flex" flexDirection="row" w={"100%"}>
          <Input
            w={"100%"}
            bg="muted.500"
            placeholder="Search List..."
            py={3}
            fontSize={15}
            borderRadius="sm"
            backgroundColor="muted.500"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Home;