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
    SimpleGrid,
    Link as ChakraLink,
    VStack
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdOutlineDesignServices, MdScreenSearchDesktop, MdComputer, MdOutlineRocketLaunch, MdOutlineCloudUpload, MdOutlineLanguage } from 'react-icons/md'
import { TbBuilding, TbBuildingBank, TbBrandOpenSource, TbArrowGuide, TbUsersGroup } from 'react-icons/tb'
import { FaCode, FaBalanceScale, FaRegComments } from 'react-icons/fa'
import { FaChartLine, FaDownload } from "react-icons/fa6";
import { FiHeart } from 'react-icons/fi'
import { GiCongress } from 'react-icons/gi'
import { Link } from 'gatsby'
import SharedContainer from './SharedContainer'
import ReactMarkdown from 'react-markdown'
import { EngageUs } from './EngageUs'

const content = {
    title: "Let's Build Together",
    tagline: "Impactful Digital Services",
    workWithUsItems: [        
        {
            title: 'NAICS Codes',
            list: [
                '**541511**: Custom Computer Programming Services',
                '**541512**: Computer Systems Design Services',
                '**518210**: Data Processing, Hosting, and Related Services',
                '**511210**: Software Publishers ',
                '**541519**: Other Computer Related Services',
            ]
        },
        {
            title: 'Set Asides',
            list: [
                '8(a) Business Development Program',
                'DC Certified Business Enterprise (CBE)',
                'Massachusets Minority Small Business Enterprise',
                'Vermont Minority Small Business Enterprise'
            ]
        },
        {
            title: 'Contracting Details',
            list: [
                '**DUNS**: 117371487',
                '**UEI**: DKGMKCMALNW6',
                '**CAGE**: 8PXE3',
            ]
        }
    ],
    capabilityStatementLink: "https://drive.google.com/file/d/1wT2xWFwjAdaMEpi2K8TnEs6O9vkADmzO/view?usp=sharing",
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
        {
            title: 'Contact Us',
            path: 'mailto:hello@focusconsulting.io'
        }
    ],
    tagLine: 'Impactful Digital Services',
    businessName: 'Focus Consulting LLC',
    businessAddress1: '1015 15th St NW, Suite 600',
    businessAddress2: 'Washington, DC 20005',
    copyright: 'Focus Consulting, LLC. All rights reserved.',
}

const Footer = () => {
    const renderCompanyContactAndNav = () => {
        const renderNav = () => {
            return (
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
                                fontSize={['lg', 'xl']}
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
            )
        }

        const renderLogoAndTagline = () => {
            return (
                <Box
                    mb={[8, 12]}
                >
                    <Image height={['auto', '35px']} width={['100px', 'auto']} src="/images/index/focus-logo-no-background.png" />
                    <Heading
                        fontSize={['2xl', '3xl']}
                        fontWeight={[500]}
                        mt={[2, 4]}                        
                    >
                        {content.tagline}
                    </Heading>
                </Box>
            )
        }

        const renderAddressAndCopyright = () => {
            return (                  
                <Box>
                    <Box
                        fontSize={['md', 'md']}
                        lineHeight={7}
                        mb={[6, 8]}
                    >
                        <Text>{content.businessName}</Text>
                        <Text>{content.businessAddress1}</Text>
                        <Text>{content.businessAddress2}</Text>
                    </Box>
                    <Text fontSize={['md', 'md']}>&copy; Focus 2025. All rights reserved.</Text>
                </Box>                
            )
        }

        return (
            <>
                {renderLogoAndTagline()}
                {renderNav()}
                {renderAddressAndCopyright()}
            </>
        )
    }

    return (
        <SharedContainer bgColor="sectionHero.dark" color="white" py={[16, 20]}>
            <EngageUs
                title={content.title}
                engageUsItems={content.workWithUsItems}
                capabilityStatementLink={content.capabilityStatementLink}
            />
            {renderCompanyContactAndNav()}            
        </SharedContainer>
    )
}

export default Footer
