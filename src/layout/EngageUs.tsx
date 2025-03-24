import * as React from 'react'
import { Box, Button, Heading, SimpleGrid, Stack, Text, Link as ChakraLink } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import { FaDownload } from 'react-icons/fa'

type EngageUsProps = {
  title: string
  engageUsItems: {
    title: string,
    list: string[]
  }[],
  capabilityStatementLink: string
}

export const EngageUs = ({ title, engageUsItems, capabilityStatementLink}: EngageUsProps) => {
  return (
    <Box>
        <Heading
            fontSize={['3xl', '4xl']}
            mb={[8, 8]}
        >                
            {title}
        </Heading>                    
        <SimpleGrid
            columns={[1, 3]}
            spacing={[8, 20]}
            mb={[4, 6]}
        >
            {engageUsItems.map((item: { title: string, list: string[]}) => (
                    <Box>
                        <Heading
                            fontSize={['2xl', '3xl']}
                            fontWeight={[600, 500]}
                            mb={[2, 3]}
                        >
                            {item.title}
                        </Heading>
                        <Stack spacing={[2, 3]}>
                            {item.list.map((display: string) => (
                                <Text fontSize={['lg', 'xl']}>
                                    <ReactMarkdown>{display}</ReactMarkdown>
                                </Text>                                    
                            ))}
                        </Stack>
                    </Box>
                )
            )}                    
        </SimpleGrid>
        <Button
            variant={["solid", "solid"]}
            size={["lg", "lg"]}
            fontSize={['xl', '2xl']}
            colorScheme="blue"
            as={ChakraLink}
            href={capabilityStatementLink}
            isExternal
            textDecoration="underline"
            leftIcon={<FaDownload />}
            mt={25}
        >
            Capability Statement 
        </Button>                    
    </Box> 
  )
}