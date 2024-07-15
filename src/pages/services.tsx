import * as React from 'react'

import { Box, Button, Divider, Heading, Icon, ListItem, SimpleGrid, Stack, Text, UnorderedList, VStack, Link as ChakraLink } from '@chakra-ui/react'
import { HeadFC, Link, PageProps } from 'gatsby'
import ReactMarkdown from 'react-markdown';

import { AiOutlineAlert } from "react-icons/ai";
import { MdOutlineDesignServices, MdScreenSearchDesktop, MdComputer, MdOutlineRocketLaunch, MdOutlineCloudUpload, MdOutlineLanguage } from 'react-icons/md'
import { TbBuilding, TbBuildingBank, TbBrandOpenSource, TbArrowGuide, TbUsersGroup } from 'react-icons/tb'
import { FaCode, FaBalanceScale, FaRegComments } from 'react-icons/fa'
import { FaChartLine, FaDownload } from "react-icons/fa6";
import { FiHeart } from 'react-icons/fi'
import { GiCongress } from 'react-icons/gi'
import { MdOutlinePolicy } from "react-icons/md";
import { TiFlowSwitch } from "react-icons/ti";
import { RiPassValidLine } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";

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
            title: 'Who We Work With',
            description:
                'We work across various levels of government and industries to provide our deep expertise in digital services.',
            backgroundColor: 'white',
            items: [
                {
                    title: 'Federal Government',
                    description:
                        'We bring our diverse technology expertise to modernization and greenfield projects at federal government agencies.',
                    icon: GiCongress,
                    iconColor: 'green.700',
                },
                {
                    title: 'Local & State Government',
                    description:
                        'We strive to bring our experience in building benefits, equity, and healthcare systems to similar initiatives in other states and cities.',
                    icon: TbBuildingBank,
                    iconColor: 'green.700',
                },
                {
                    title: 'Industry',
                    description:
                        'Our staff bring experience working in various industries including healthcare, early education, higher and corporate education, and workforce development.',
                    icon: TbBuilding,
                    iconColor: 'green.700',
                },
                {
                    title: 'Non-Profits & Civic Tech',
                    description:
                        'We are committed to continuing our support for local civic tech and open source communities.',
                    icon: FiHeart,
                    iconColor: 'green.700',
                },
            ],
        },
        {
            title: 'Services',
            description: 'Our services aim to identify program and user challenges, integrate user research and testing with policy expertise, and deliver digital services that meet program goals.',
            customContent: [
                {
                    title: 'Research & Design',
                    description: 'We lead our work with human-centered design and research to gain deep understanding of program needs.',
                    icon: FaCode,
                    expertise: [
                        'Human-Centered Design',
                        'Service Design',
                        'User Research',
                        'Usability Testing',
                    ],
                    how: [
                        {
                            text: 'Collaborate with **agency and community experts** to integrate policy with technology.',
                            icon: MdOutlinePolicy,
                        },
                        {
                            text: 'Create a **service blueprint** and **user journey maps** to gain deep insights into existing user and agency workflows.',
                            icon: TiFlowSwitch,
                        },                        
                        {
                            text: '**Equitable user recruitment** practices to ensure accessible systems for all users.',
                            icon: FaBalanceScale,
                        },
                        {
                            text: 'Develop detailed **research and testing plans** to engage various user profiles early through **interviews** and **clickable prototypes**.',
                            icon: MdComputer,
                        },
                        {
                            text: '**Rapid prototyping** and **usability testing** to identify application issues early.',
                            icon: RiPassValidLine,
                        },
                        {
                            text: '**Continuous usability testing** to enable incremental delivery post-launch.',
                            icon: MdOutlineRocketLaunch,
                        },
                    ]
                },
                {
                    title: 'Engineering & Technology',
                    description: 'Our pragmatic approach leverages our extensive experience to select the best technology tools for the job at hand.',
                    icon: FaCode,
                    expertise: [
                        'Systems that scale from pilot to millions of users',
                        'Government modernization or greenfield projects',
                        'Full-stack web application development',                        
                        'Working with large data sets',
                        'Cloud modernization (AWS, Azure, Google Cloud)',
                        'Cloud infrastructure as code',
                        'DevSecOps and site reliability',
                        'Automated QA'                        
                    ],
                    how: [
                        {
                            text: 'Use **well supported**, and preferably **open-source** tools to let our teams focus on program specific workflows sooner.',
                            icon: TbBrandOpenSource,
                        },
                        {
                            text: '**Deploy early to the cloud** with **robust CI/CD** to create environments for rapid iteration.',
                            icon: MdOutlineCloudUpload
                        },
                        {
                            text: '**Well-documented technical specs** and **APIs** to ease collaboration with product folks.',
                            icon: HiOutlineDocumentText
                        },
                        {
                            text: 'Use **design systems** and **application templates** to quickly build on top of shared standards that address accessibility.',
                            icon: MdOutlineDesignServices

                        },
                        {
                            text: 'Use **plain language** to communicate with clarity and simplify user workflows.',
                            icon: MdOutlineLanguage
                        },
                        {
                            text: 'Embed **system monitoring** and **security engineering** into development to consistently protect user privacy and policy compliance.',
                            icon: AiOutlineAlert
                        }
                    ]
                },
                {
                    title: 'Product & Agile Delivery',
                    description: 'Our product and project managers build stakeholder trust by consistently reducing delivery risk.',
                    expertise: [
                        'Agile Technology Planning and Delivery',
                        'Product Management',
                        'Project Management',
                        'Program Management'
                    ],
                    how: [
                        {
                            text: 'Conduct stakeholder **listening sessions** at kickoff to craft high value roadmaps.',
                            icon: FaRegComments
                        },
                        {
                            text: 'Define and track **success metrics** to make data-driven product decisions.',
                            icon: FaChartLine,
                        },
                        {
                            text: 'Work on **program unknowns** and a **simplified end-to-end workflow** first to de-risk delivery.',
                            icon: TbArrowGuide
                        },
                        {
                            text: '**Strong documentation culture** to work efficiently in an increasingly distributed world.',
                            icon: HiOutlineDocumentText
                        },
                        {
                            text: 'Foster a **one-team culture** across vendors and our stakeholders to move at velocity during implementation.',
                            icon: TbUsersGroup,
                        }
                    ]
                }
            ],
            customId: 'services',
            backgroundColor: 'green.50',
        },
        // {
        //     title: 'Services',
        //     items: [
        //         {
        //             title: 'Research & Design',
        //             description:
        //                 'Human-centered Design, Service Design, UX Research, UI Design, User Testing',
        //             icon: MdOutlineDesignServices,
        //         },
        //         {
        //             title: 'Engineering & Technology',
        //             description:
        //                 'Technical Strategy, Web Development, Data Engineering, DevSecOps, Security & Privacy',
        //             icon: FaCode,
        //         },
        //         {
        //             title: 'Planning & Agile Delivery',
        //             description: 'Program, Product & Project Management',
        //             icon: MdScreenSearchDesktop,
        //         },
        //     ],
        //     backgroundColor: 'white',
        // },
        // {
        //     title: 'Expertise',
        //     items: [
        //         {
        //             title: 'Software Engineering',
        //             description:
        //                 'We bring deep expertise in full-stack web development using agile development processes. Our staff have successfully built and maintained high complexity applications serving millions of users.',
        //         },
        //         {
        //             title: 'Research & Design ',
        //             description:
        //                 'We center our work on human-centered design and research to gain deep insights into user challenges and needs. We use user research and testing before and after feature launches to gain insights and make our work more valuable.',
        //         },
        //         {
        //             title: 'Data Engineering',
        //             description:
        //                 'Our teams have strong experience processing, transforming, integrating, and synthesizing large volumes of diverse data sets. We have a depth of experience working with healthcare data across government, insurers, and hospitals.',
        //         },
        //         {
        //             title: 'Product Management',
        //             description:
        //                 'Our product managers work with their design and research colleagues to understand customer needs, work with our stakeholders, and craft high value solutions. We make data-driven product decisions by defining and tracking success metrics within an agile development approach.',
        //         },
        //         {
        //             title: 'DevOps & Cloud Infrastructure',
        //             description:
        //                 'We develop and improve robust CI/CD processes that free up developers to focus on providing user value, accessibility, and privacy. We work across the cloud ecosystem (AWS, Azure, Google Cloud). We use infrastructure as code approach to consistently define our cloud resources with automated deploys.',
        //         },
        //         {
        //             title: 'Project & Program Management',
        //             description:
        //                 'Our project managers tie everything together by supporting our planning, stakeholder coordination, and delivery work. We use strong documentation and communication practices to work efficiently in an increasingly distributed world.',
        //         },
        //     ],
        //     backgroundColor: 'white',
        //     customId: 'expertise',
        //     anchor: 'expertise',
        // },        
        {
            title: "Let's Build Together",
            customId: 'work-with-us',
            backgroundColor: 'white',
        },
    ],
}

const AboutPage: React.FC<PageProps> = () => {
    const renderApproach = () => {

    }

    const customRenderMap: any = {
        services: (customContent: any[]) => {
            return (
                <Box>
                    {
                        customContent.map((item: any) => {
                            return (
                                <Box mb={25}>
                                    <Heading fontSize={{ 'base': '3xl', 'md': '3xl' }} fontWeight="semibold" mb={2}>{item.title}</Heading>
                                    <Divider mb={[3, null, 5]} />
                                    <SimpleGrid columns={[1, null, 2]} spacing={5}>
                                        <Box>
                                            <Text fontSize="2xl" mb={5}>{item.description}</Text>
                                            <Text fontSize="lg" color="teal" fontWeight="semibold" mb={[2, null, 3]}>Expertise</Text>
                                            <UnorderedList fontSize="xl">
                                                {item.expertise.map((exp: any) => (<ListItem>{exp}</ListItem>))}                                    
                                            </UnorderedList>
                                        </Box>
                                        <Box>
                                            <Text fontSize="lg" color="teal" fontWeight="semibold" mb={[2, null, 3]}>Approach</Text>
                                            <VStack width="100%">
                                                {item.how.map((how: any) => {
                                                    return (
                                                        <Box display="flex" bgColor="white" borderRadius={6} border="1px" borderColor="gray.200" width="100%" p={3}>
                                                            <Box alignSelf="center" mb={{ base: 1, md: 1 }}><Icon as={how.icon || FaCode} boxSize={{ base: 6, md: 6 }} color="teal" mr={5} /></Box>
                                                            <Text><ReactMarkdown>{how.text}</ReactMarkdown></Text>
                                                        </Box>
                                                    )
                                                })}
                                            </VStack>
                                        </Box>
                                    </SimpleGrid>
                                </Box>
                            )
                        })
                    }
                    <Divider mb={25}/>
                    <Box>
                        <Button
                            variant="solid"
                            size="lg"
                            fontSize={{ base: '2xl', md: '2xl' }}
                            colorScheme="blue"
                            as={Link}
                            to="/our-work"
                        >
                            See Examples of Our Work
                        </Button>
                    </Box>
                </Box>
            )            
        },
        // services: () => {
        //     return (
        //         <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
        //             <Button
        //                 variant="solid"
        //                 fontSize={{ base: '2xl', md: '2xl' }}
        //                 colorScheme="teal"
        //                 as={Link}
        //                 to="/about#expertise"
        //             >
        //                 Learn About Our Expertise
        //             </Button>
        //             <Button
        //                 variant="solid"
        //                 fontSize={{ base: '2xl', md: '2xl' }}
        //                 colorScheme="teal"
        //                 as={Link}
        //                 to="/our-work"
        //             >
        //                 Examples of Our Work
        //             </Button>
        //         </Stack>
        //     )
        // },
        expertise: () => {
            return (
                <Button
                    variant="solid"
                    fontSize={{ base: '2xl', md: '2xl' }}
                    colorScheme="blue"
                    as={Link}
                    to="/our-work"
                >
                    See Examples of Our Work
                </Button>
            )
        },
        'work-with-us': () => {
            return (
                <Box>                    
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
                    <Button
                        variant="solid"
                        size="lg"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        colorScheme="blue"
                        as={ChakraLink}
                        href="https://drive.google.com/file/d/1wT2xWFwjAdaMEpi2K8TnEs6O9vkADmzO/view?usp=sharing"
                        isExternal
                        rightIcon={<FaDownload />}
                        mt={25}
                    >
                        Capability Statement 
                    </Button>                    
                </Box>                
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
                            customRenderMap[section.customId](section.customContent)}
                    </Section>
                )
            })}
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - Services" />
