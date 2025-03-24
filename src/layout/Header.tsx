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
    Image,
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
import SharedContainer from './SharedContainer'

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
        {
            title: 'Careers',
            path: '/careers',
        },
        {
            title: 'Contact Us',
            path: 'mailto:hello@focusconsulting.io'
        }
    ],
}

const Header = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <SharedContainer bgColor="sectionHero.dark" py={[4, 8]}>
            <HStack spacing="20" justify="space-between">
                <Link to="/">
                    {/* <Heading
                        fontSize="5xl"
                        fontWeight="700"
                        color="primary"
                    >
                        focus
                    </Heading> */}
                    <Image height={{ base: '35px', md: '50px' }} src="/images/index/focus-logo-no-background.png" />
                </Link>
                {isDesktop ? (
                    <ButtonGroup variant="link" spacing="7">
                        {content.nav.map((navLink) => {
                            return (
                                <Button
                                    as={Link}
                                    to={navLink.path}
                                    fontFamily="heading"
                                    fontSize="22px"
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
            <Helmet htmlAttributes={{ lang: 'en' }} />
        </SharedContainer>
    )
}

export default Header
