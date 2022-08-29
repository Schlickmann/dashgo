import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Juliani</Text>
        <Text color="gray.300" fontSize="small">
          juliani@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Juliani Schlickmann"
        src="https://github.com/schlickmann.png"
      />
    </Flex>
  );
}
