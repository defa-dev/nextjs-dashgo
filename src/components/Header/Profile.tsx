import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Defacio</Text>
          <Text color="gray.200" fontSize="small">
            phelipe2208@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Felipe Defacio"
        src="https://github.com/defa-dev.png"
      />
    </Flex>
  );
}
