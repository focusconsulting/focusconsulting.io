import * as React from 'react'

import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    useBreakpointValue,
} from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

const content = {
    nav: [
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
    ],
}

const Header = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Box as="section" backgroundColor="sectionHero.dark" w="100%">
            <Box as="nav" padding={[0, '8']}>
                <Container maxW="7xl">
                    <HStack spacing="20" justify="space-between">
                        <Link to="/">
                            <Heading
                                fontSize="5xl"
                                fontWeight="700"
                                color="primary"
                            >
                                focus
                            </Heading>
                        </Link>
                        {isDesktop ? (
                            <ButtonGroup variant="link" spacing="7">
                                {content.nav.map((navLink) => {
                                    return (
                                        <Button
                                            as={Link}
                                            to={navLink.path}
                                            fontSize="2xl"
                                            fontWeight="500"
                                            color="white"
                                            variant="link"
                                            line-height="32px"
                                        >
                                            {navLink.title}
                                        </Button>
                                    )
                                })}
                            </ButtonGroup>
                        ) : (
                            <Menu closeOnSelect={true}>
                                <MenuButton
                                    aria-label="Menu"
                                    as={IconButton}
                                    variant="ghost"
                                    color="white"
                                    size="sm"
                                    cursor="pointer"
                                    fontSize="3xl"
                                    icon={<FiMenu />}
                                />
                                <MenuList minW="240px" color="black">
                                    <MenuGroup>
                                        {content.nav.map((navLink) => (
                                            <MenuItem
                                                as={Link}
                                                to={navLink.path}
                                            >
                                                {navLink.title}
                                            </MenuItem>
                                        ))}
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        )}
                    </HStack>
                </Container>
            </Box>
            <Helmet htmlAttributes={{ lang: 'en' }} />
        </Box>
    )
}

export default Header
