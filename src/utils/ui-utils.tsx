import React from "react";
import { Avatar, Box, Link, Text } from "@chakra-ui/react"

export const renderAvatar = (name: string, title: string, photoUrl?: string, externalLink?: string, ) => {
  return (
    <Box>
      <Avatar
        name={name}
        size={{ base: 'xl', md: '2xl' }}
        mb={2}
        src={photoUrl}
      />
      { externalLink ? (
        <Box>
        <Link
          fontSize={{
            base: 'xl',
            md: '2xl',
          }}
          fontWeight="semibold"
          mb={1}
          href={externalLink}
          isExternal
          textDecor="underline"
        >
          {name}
        </Link>
        </Box>
      ) : (
        <Text
          fontSize={{
            base: 'xl',
            md: '2xl',
          }}
          fontWeight="semibold"
          mb={1}
        >
          {name}
        </Text>
      )}      
      <Text
        fontSize={{
          base: 'lg',
          md: 'xl',
        }}
      >
        {title}
      </Text>
    </Box>
  )
}