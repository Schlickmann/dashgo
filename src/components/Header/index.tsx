import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <Search />

      <Flex align="center" ml="auto">
        <Notification />
        <Profile />
      </Flex>
    </Flex>
  );
}
