import * as React from 'react'

import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { HeadFC, Link, PageProps } from 'gatsby'
import { MdOutlineDesignServices, MdScreenSearchDesktop } from 'react-icons/md'
import { TbBuilding, TbBuildingBank } from 'react-icons/tb'

import { FaCode } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { GiCongress } from 'react-icons/gi'
import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'How can we help?',
    heroDescription:
        'Let us help you unlock more value and impact from your digital services.',
    sections: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Research & Design',
                    description:
                        'Human-centered Design, Service Design, UX Research, UI Design, User Testing',
                    icon: MdOutlineDesignServices,
                },
                {
                    title: 'Engineering & Technology',
                    description:
                        'Technical Strategy, Web Development, Data Engineering, DevSecOps, Security & Privacy',
                    icon: FaCode,
                },
                {
                    title: 'Planning & Agile Delivery',
                    description: 'Program, Product & Project Management',
                    icon: MdScreenSearchDesktop,
                },
            ],
            backgroundColor: 'white',
            customId: 'services',
        },
        {
            title: 'Who We Work With',
            description:
                'We work across diverse industries and government to provide our deep expertise in digital services.',
            backgroundColor: 'gray.50',
            items: [
                {
                    title: 'Federal Government',
                    description:
                        'We bring our diverse technology expertise to modern digital services in the federal government.',
                    icon: GiCongress,
                    iconColor: 'green.700',
                },
                {
                    title: 'Local & State Government',
                    description:
                        'We strive to bring our experience in building benefits, equity and healthcare systems to similar initiatives in other cities and states.',
                    icon: TbBuildingBank,
                    iconColor: 'green.700',
                },
                {
                    title: 'Industry',
                    description:
                        'Our staff bring diverse experience working in various industries including healthcare, early education, higher and corporate education, finance.',
                    icon: TbBuilding,
                    iconColor: 'green.700',
                },
                {
                    title: 'Non-Profits & Civic Tech',
                    description:
                        'We have continued our teams dedication to supporting and participating in local civic tech and open source communities.',
                    icon: FiHeart,
                    iconColor: 'green.700',
                },
            ],
        },
        {
            title: "Let's Build Together",
            customId: 'work-with-us',
            backgroundColor: 'white',
        },
    ],
}

const AboutPage: React.FC<PageProps> = () => {
    const customRenderMap: any = {
        services: () => {
            return (
                <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
                    <Button
                        variant="solid"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        colorScheme="teal"
                        as={Link}
                        to="/about#expertise"
                    >
                        Learn About Our Expertise
                    </Button>
                    <Button
                        variant="solid"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        colorScheme="teal"
                        as={Link}
                        to="/our-work"
                    >
                        Examples of Our Work
                    </Button>
                </Stack>
            )
        },
        'work-with-us': () => {
            return (
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 12, md: 4 }}
                >
                    <Box>
                        <Heading fontSize="3xl" mb={4}>
                            Company Details
                        </Heading>
                        <Stack>
                            <Text fontSize="xl">
                                <b>DUNS #</b>: 117371487
                            </Text>
                            <Text fontSize="xl">
                                <b>UEI #</b>: DKGMKCMALNW6
                            </Text>
                            <Text fontSize="xl">
                                <b>CAGE CODE</b>: 8PXE3
                            </Text>
                        </Stack>
                    </Box>
                    <Box>
                        <Heading fontSize="3xl" mb={4}>
                            NAICS Codes
                        </Heading>
                        <Stack>
                            <Text fontSize="xl">
                                <b>541511</b>: Custom Computer Programming
                                Services
                            </Text>
                            <Text fontSize="xl">
                                <b>541512</b>: Computer Systems Design Services
                            </Text>
                            <Text fontSize="xl">
                                <b>518210</b>: Data Processing, Hosting, and Related Services
                            </Text>
                            <Text fontSize="xl">
                                <b>511210</b>: Software Publishers 
                            </Text>
                            <Text fontSize="xl">
                                <b>541519</b>: Other Computer Related Services
                            </Text>
                        </Stack>
                    </Box>
                    <Box>
                        <Heading fontSize="3xl" mb={4}>
                            Certifications
                        </Heading>
                        <Stack>
                            <Text fontSize="xl">
                                8(a) Business Development Program
                            </Text>
                            <Text fontSize="xl">
                                DC Certified Small Business Enterprise
                            </Text>
                            <Text fontSize="xl">
                                Massachusets Minority Small Business Enterprise
                            </Text>
                            <Text fontSize="xl">
                                Vermont Minority Small Business Enterprise
                            </Text>
                        </Stack>
                    </Box>
                </SimpleGrid>
            )
        },
    }

    return (
        <Layout>
            <Hero2
                heading={
                    <Heading
                        as="h1"
                        color="white"
                        fontSize={'7xl'}
                        fontWeight={700}
                        lineHeight={'120%'}
                        mb="6"
                    >
                        {content.heroTitle}
                    </Heading>
                }
                subHeading={content.heroDescription}
            />
            {content.sections.map((section) => {
                return (
                    <Section
                        title={section.title}
                        description={section.description}
                        backgroundColor={section.backgroundColor}
                        items={section.items}
                    >
                        {section.customId &&
                            customRenderMap[section.customId]()}
                    </Section>
                )
            })}
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - Services" />
