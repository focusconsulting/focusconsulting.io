import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type HeroProps = {
    heading: ReactNode
    subHeading: String
    image?: ReactNode
    cta?: ReactNode
}

export default ({ heading, subHeading, image, cta }: HeroProps) => (
    <Box as="section" backgroundColor="sectionHero.dark">
        <Container
            centerContent
            py="section.md"
            minW={['container.xs', 'container.xl']}
        >
            <Flex justifyContent={'space-between'} w="100%">
                <Box w={['100%', '620px']}>
                    {heading}
                    <Text
                        color="white"
                        lineHeight={'32px'}
                        fontWeight={500}
                        fontSize={'24px'}
                        mb="10"
                    >
                        {subHeading}
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
        </Container>
    </Box>
)
