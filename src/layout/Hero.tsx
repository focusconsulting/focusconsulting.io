import { Box, Button, Container, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import SharedContainer from './SharedContainer'
import { Link } from 'gatsby'

type HeroProps = {
    heading: string
    subHeading: string
    image?: ReactNode
    ctas?: { title: string, path: string }[]
}

export default ({ heading, subHeading, image, ctas }: HeroProps) => {
    const renderCtas = () => {
        const renderCta = (cta: any) => {
          return (
            <Button
                color="teal.800"
                backgroundColor="teal.100"
                borderColor="teal.100"
                fontSize={['xl', '2xl']}
                size={['lg', 'lg']}
                fontWeight={600}
                as={Link}
                to={cta.path}
                variant="outline"
                _hover={{ textDecor: "underline" }}
            >
                {cta.title}
            </Button>
          )
        }
    
        if (ctas === undefined || ctas.length === 0) {
          return null;
        }
    
        return (
          <Stack direction={['column', 'row']} spacing={[6, 8]}>
            {ctas.map((cta: any) => renderCta(cta))}
          </Stack>
        );
    }

    return (
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
                        className="hero-body"
                    >
                        <ReactMarkdown>{subHeading}</ReactMarkdown>
                    </Text>
                    {renderCtas()}
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
    
}
