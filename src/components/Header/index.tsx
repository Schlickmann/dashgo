import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      {!isWideScreen && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open Menu"
          mr="2"
        />
      )}
      <Logo />

      {isWideScreen && <Search />}

      <Flex align="center" ml="auto">
        <Notification />
        <Profile showProfileInfo={isWideScreen} />
      </Flex>
    </Flex>
  );
}
