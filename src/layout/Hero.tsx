import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import SharedContainer from './SharedContainer'

type HeroProps = {
    heading: string
    subHeading: string
    image?: ReactNode
    cta?: ReactNode
}

export default ({ heading, subHeading, image, cta }: HeroProps) => (
    <SharedContainer bgColor="sectionHero.dark" py="section.md">
            <Flex justifyContent={'space-between'} w="100%">
                <Box w={['100%', '620px']} color="white">
                    <Heading                        
                        fontSize={['4xl', '5xl']}
                        fontWeight={600}
                        lineHeight={'120%'}
                        mb="6"
                    >
                        <ReactMarkdown>{heading}</ReactMarkdown>
                    </Heading>
                    <Text
                        lineHeight={8}
                        fontSize={['lg', 'xl']}
                        mb="10"
                    >
                        <ReactMarkdown>{subHeading}</ReactMarkdown>
                    </Text>
                    {cta}
                </Box>
                <Spacer />
                {image && (
                    <Box w="532px" hideBelow={'md'}>
                        {image}
                    </Box>
                )}
            </Flex>
    </SharedContainer>
)
