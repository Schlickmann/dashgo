import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileInfo: boolean;
}

export function Profile({ showProfileInfo = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileInfo && (
        <Box mr="4" textAlign="right">
          <Text>Juliani</Text>
          <Text color="gray.300" fontSize="small">
            juliani@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Juliani Schlickmann"
        src="https://github.com/schlickmann.png"
      />
    </Flex>
  );
}
