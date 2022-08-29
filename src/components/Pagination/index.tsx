import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        <PaginationButton isCurrent number={1} />
        <PaginationButton number={2} />
        <PaginationButton number={3} />
      </Stack>
    </Stack>
  );
}
