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
    Image,
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
    businessAddress1: '716 Roxboro Pl NW',
    businessAddress2: 'Washington, DC 20011',
    copyright: 'Focus Consulting, LLC. All rights reserved.',
}

const Footer = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Box bg="sectionHero.dark" as="footer" px={[8, 16]} py="80px">
            <Stack
                direction={['column', 'row']}
                justifyContent={'space-between'}
                mb="8"
            >
                <Image height={['auto', '35px']} width={['100px', 'auto']} src="/images/index/focus-logo-no-background.png" />
                {/* <Text
                    fontWeight={700}
                    fontSize={'48px'}
                    lineHeight={'100%'}
                    color={'primary'}
                >
                    focus
                </Text> */}
                <Box
                    hideBelow={'md'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={400}
                    lineHeight={'150%'}
                >
                    <Text>{content.businessName}</Text>
                    <Text>{content.businessAddress1}</Text>
                    <Text>{content.businessAddress2}</Text>
                </Box>
            </Stack>
            <Stack
                direction={['column', 'row']}
                spacing={8}
                mb="8"
                alignItems={'start'}
            >
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
                            textDecor="underline"
                        >
                            {navLink.title}
                        </Button>
                    )
                })}
            </Stack>
            <Stack
                direction={['column', 'row']}
                fontSize={'20px'}
                fontWeight={400}
                lineHeight={'150%'}
                color={'white'}
            >
                <Box
                    hideFrom={'md'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={400}
                    lineHeight={'150%'}
                >
                    <Text>{content.businessName}</Text>
                    <Text>{content.businessAddress1}</Text>
                    <Text>{content.businessAddress2}</Text>
                </Box>
                <Text>2023 Focus Consulting, LLC. All rights reserved</Text>
            </Stack>
        </Box>
    )
}

export default Footer
