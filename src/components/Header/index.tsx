import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const isWideScreen = useBreakpointValue({ base: false, lg: true });
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

      {isWideScreen && <Search />}

      <Flex align="center" ml="auto">
        <Notification />
        <Profile showProfileInfo={isWideScreen} />
      </Flex>
    </Flex>
  );
}
