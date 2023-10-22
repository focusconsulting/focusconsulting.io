import * as React from 'react'

import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    HStack,
    Heading,
    IconButton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { Link } from 'gatsby'

const content = {
    contactText: 'Get In Touch',
    contactButton: 'Contact',
    tagLine: 'Build Better Software',
    nav: [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Services',
            path: '/services',
        },
        {
            title: 'Our Work',
            path: '/our-work',
        },
        {
            title: 'Careers',
            path: '/careers',
        },
    ],
    businessName: 'Focus Consulting, LLC',
    businessAddress1: '1629 K St NW Suite 300',
    businessAddress2: 'Washington, DC 20006',
    copyright: 'Focus Consulting, LLC. All rights reserved.',
}

const Footer = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Box bg="sectionHero.dark" as="footer" px="16" py="80px">
            <HStack justifyContent={'space-between'} mb="8">
                <Text
                    fontWeight={700}
                    fontSize={'48px'}
                    lineHeight={'100%'}
                    color={'primary'}
                >
                    focus
                </Text>
                <Box
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={400}
                    lineHeight={'150%'}
                >
                    <Text>Focus Consulting, LLC</Text>
                    <Text>1629 K St NW Suite 300</Text>
                </Box>
            </HStack>
            <HStack spacing={8} mb="8">
                {content.nav.map((navLink) => {
                    return (
                        <Button
                            color={'white'}
                            fontSize={'20px'}
                            fontWeight={500}
                            lineHeight={'28px'}
                            as={Link}
                            to={navLink.path}
                            variant="link"
                        >
                            {navLink.title}
                        </Button>
                    )
                })}
            </HStack>
            <HStack
                fontSize={'20px'}
                fontWeight={400}
                lineHeight={'150%'}
                color={'white'}
            >
                <Text>2023 Focus Consulting, LLC. All rights reserved</Text>
            </HStack>
        </Box>
    )
}

export default Footer
