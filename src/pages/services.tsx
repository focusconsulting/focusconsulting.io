import * as React from 'react'

import {
    Box,
    Button,
    Link as ChakraLink,
    Divider,
    Heading,
    Icon,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
    UnorderedList,
    VStack,
} from '@chakra-ui/react'
import { FaBalanceScale, FaCode, FaDatabase, FaDigitalTachograph, FaRegComments, FaRobot, FaShieldAlt } from 'react-icons/fa'
import { FaChartLine, FaDownload } from 'react-icons/fa6'
import { HeadFC, Link, PageProps } from 'gatsby'
import {
    MdComputer,
    MdOutlineCloudUpload,
    MdOutlineDesignServices,
    MdOutlineLanguage,
    MdOutlineRocketLaunch,
    MdScreenSearchDesktop,
} from 'react-icons/md'
import {
    TbArrowGuide,
    TbBrandOpenSource,
    TbBuilding,
    TbBuildingBank,
    TbUsersGroup,
} from 'react-icons/tb'

import { AiOutlineAlert } from 'react-icons/ai'
import {
    MdComputer,
    MdOutlineCloudUpload,
    MdOutlineDesignServices,
    MdOutlineLanguage,
    MdOutlineRocketLaunch,
    MdScreenSearchDesktop,
} from 'react-icons/md'
import {
    TbArrowGuide,
    TbBrandOpenSource,
    TbBuilding,
    TbBuildingBank,
    TbUsersGroup,
} from 'react-icons/tb'

import { AiOutlineAlert } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { GiCongress } from 'react-icons/gi'
import Hero2 from '../layout/Hero'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import Layout from '../layout/Layout'
import { MdOutlinePolicy } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import { RiPassValidLine } from 'react-icons/ri'
import { MdOutlinePolicy } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import { RiPassValidLine } from 'react-icons/ri'
import { SEO } from '../components/seo'
import Section from '../layout/Section'
import SectionNew from '../layout/SectionNew'
import { TiFlowSwitch } from 'react-icons/ti'
import { approach } from './index'

const content = {
    hero: {
        title: 'Services',
        description:
            'Let us help you unlock more value and impact from your digital services.',
    },
    approach: {
        title: 'Our Approach',
        description: approach.description,
        items: approach.items
    },
    capabilities: {
        title: 'Capabilities',
        description:
            'We bring a strong set of capabilities to modern digital services delivery.',
        items: [
            {
                title: 'Digital Modernization',
                description:
                    'We have deep expertise modernizing legacy systems by **building next versions in parallel** or **enhancing live systems in place**. In each case, our approach prioritizes de-risking delivery by addressing end-to-end integration challenges first.',
                icon: FaDigitalTachograph,
                ctas: [
                    {
                        title: 'See Modernization Projects',
                        path: '/our-work?filter=modernization',
                    },
                ],
            },
            {
                title: 'AI & Emerging Technologies',
                description:
                    'Our staff bring varied experience in **machine learning**, **large language models (LLMs)**, and **generative AI**. In our current work we are using AI to assist users with application forms, language translations, fraud detection, and increasing development velocity.',
                icon: FaRobot,
                ctas: [
                    {
                        title: 'See AI Supported Projects',
                        path: '/our-work?filter=ai',
                    },
                ],
            },
            {
                title: 'Security & Compliance',
                description:
                    'We embed security into every stage of the software development lifecycle, ensuring compliance and resilience from day one. With a **zero-trust approach**, we safeguard systems while enabling secure, efficient delivery of mission-critical software.',
                icon: FaShieldAlt,
                ctas: [
                    {
                        title: 'See Security Case Studies',
                        path: '/our-work?filter=security',
                    },
                ],
            },
            {
                title: 'Enterprise Data',
                description:
                    'We specialize in building and scaling ETL processes that streamline data integration, ensuring reliable, high-quality insights. Our expertise in **data management and governance** enables secure, compliant, and efficient data operations for government agencies.',
                icon: FaDatabase,
                ctas: [
                    {
                        title: 'See Data Pipeline Case Studies',
                        path: '/our-work?filter=data',
                    },
                ],
            },
        ],
    },
    services: {
        title: 'Services',
        description:
            'Our services aim to identify program and user challenges, integrate user research and testing with policy expertise, and deliver digital services that meet program goals.',
        servicesList: [
            {
                title: 'Research & Design',
                description:
                    'We lead our work with human-centered design and research to gain deep understanding of program needs.',
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
                ],
            },
            {
                title: 'Engineering & Technology',
                description:
                    'Our pragmatic approach leverages our extensive experience to select the best technology tools for the job at hand.',
                icon: FaCode,
                expertise: [
                    'Systems that scale from pilot to millions of users',
                    'Government modernization or greenfield projects',
                    'Full-stack web application development',
                    'Working with large data sets',
                    'Cloud modernization (AWS, Azure, Google Cloud)',
                    'Cloud infrastructure as code',
                    'DevSecOps and site reliability',
                    'Automated QA',
                ],
                how: [
                    {
                        text: 'Use **well supported**, and preferably **open-source** tools to let our teams focus on program specific workflows sooner.',
                        icon: TbBrandOpenSource,
                    },
                    {
                        text: '**Deploy early to the cloud** with **robust CI/CD** to create environments for rapid iteration.',
                        icon: MdOutlineCloudUpload,
                    },
                    {
                        text: '**Well-documented technical specs** and **APIs** to ease collaboration with product folks.',
                        icon: HiOutlineDocumentText,
                    },
                    {
                        text: 'Use **design systems** and **application templates** to quickly build on top of shared standards that address accessibility.',
                        icon: MdOutlineDesignServices,
                    },
                    {
                        text: 'Use **plain language** to communicate with clarity and simplify user workflows.',
                        icon: MdOutlineLanguage,
                    },
                    {
                        text: 'Embed **system monitoring** and **security engineering** into development to consistently protect user privacy and policy compliance.',
                        icon: AiOutlineAlert,
                    },
                ],
            },
            {
                title: 'Product & Agile Delivery',
                description:
                    'Our product and project managers build stakeholder trust by consistently reducing delivery risk.',
                expertise: [
                    'Agile Technology Planning and Delivery',
                    'Product Management',
                    'Project Management',
                    'Program Management',
                ],
                how: [
                    {
                        text: 'Conduct stakeholder **listening sessions** at kickoff to craft high value roadmaps.',
                        icon: FaRegComments,
                    },
                    {
                        text: 'Define and track **success metrics** to make data-driven product decisions.',
                        icon: FaChartLine,
                    },
                    {
                        text: 'Work on **program unknowns** and a **simplified end-to-end workflow** first to de-risk delivery.',
                        icon: TbArrowGuide,
                    },
                    {
                        text: '**Strong documentation culture** to work efficiently in an increasingly distributed world.',
                        icon: HiOutlineDocumentText,
                    },
                    {
                        text: 'Foster a **one-team culture** across vendors and our stakeholders to move at velocity during implementation.',
                        icon: TbUsersGroup,
                    },
                ],
            },
        ],
    },
}

const AboutPage: React.FC<PageProps> = () => {
    const renderServices = () => {
        return (
            <Box>
                {content.services.servicesList.map((item: any) => {
                    return (
                        <Box mb={[12, 16]}>
                            <Heading
                                fontSize={['2xl', '3xl']}
                                fontWeight="semibold"
                                mb={2}
                            >
                                {item.title}
                            </Heading>
                            <Divider mb={[3, null, 5]} />
                            <SimpleGrid columns={[1, null, 2]} spacing={5}>
                                <Box>
                                    <Text fontSize={['lg', 'xl']} mb={5}>
                                        {item.description}
                                    </Text>
                                    <Text
                                        fontSize={['md', 'lg']}
                                        color="teal"
                                        fontWeight="semibold"
                                        mb={[2, null, 3]}
                                    >
                                        Expertise
                                    </Text>
                                    <UnorderedList fontSize={['lg', 'xl']}>
                                        {item.expertise.map((exp: any) => (
                                            <ListItem>{exp}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </Box>
                                <Box>
                                    <Text
                                        fontSize={['md', 'lg']}
                                        color="teal"
                                        fontWeight="semibold"
                                        mb={[2, null, 3]}
                                    >
                                        Approach
                                    </Text>
                                    <VStack width="100%">
                                        {item.how.map((how: any) => {
                                            return (
                                                <Box
                                                    display="flex"
                                                    bgColor="white"
                                                    borderRadius={6}
                                                    border="1px"
                                                    borderColor="gray.200"
                                                    width="100%"
                                                    p={3}
                                                >
                                                    <Box
                                                        alignSelf="center"
                                                        mb={{ base: 1, md: 1 }}
                                                    >
                                                        <Icon
                                                            as={
                                                                how.icon ||
                                                                FaCode
                                                            }
                                                            boxSize={{
                                                                base: 6,
                                                                md: 6,
                                                            }}
                                                            color="teal"
                                                            mr={5}
                                                        />
                                                    </Box>
                                                    <Text>
                                                        <ReactMarkdown>
                                                            {how.text}
                                                        </ReactMarkdown>
                                                    </Text>
                                                </Box>
                                            )
                                        })}
                                    </VStack>
                                </Box>
                            </SimpleGrid>
                        </Box>
                    )
                })}
                <Divider mb={25} />
                <Box>
                    <Button
                        variant="solid"
                        size="lg"
                        fontSize={{ base: 'xl', md: '2xl' }}
                        colorScheme="blue"
                        as={Link}
                        to="/our-work"
                    >
                        See Examples of Our Work
                    </Button>
                </Box>
            </Box>
        )
    }

    return (
        <Layout>
            <Hero2
                heading={content.hero.title}
                subHeading={content.hero.description}
            />
            <SectionNew section={content.approach} backgroundColor="gray.50" />
            <SectionNew
                section={content.capabilities}
                backgroundColor="white"
            />
            <SectionNew section={content.services} backgroundColor="green.50">
                {renderServices()}
            </SectionNew>
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - Services" />

// sections: [
//     {
//         title: 'Who We Work With',
//         description:
//             'We work across various levels of government and industries to provide our deep expertise in digital services.',
//         backgroundColor: 'white',
//         items: [
//             {
//                 title: 'Federal Government',
//                 description:
//                     'We bring our diverse technology expertise to modernization and greenfield projects at federal government agencies.',
//                 icon: GiCongress,
//                 iconColor: 'green.700',
//             },
//             {
//                 title: 'Local & State Government',
//                 description:
//                     'We strive to bring our experience in building benefits, equity, and healthcare systems to similar initiatives in other states and cities.',
//                 icon: TbBuildingBank,
//                 iconColor: 'green.700',
//             },
//             {
//                 title: 'Industry',
//                 description:
//                     'Our staff bring experience working in various industries including healthcare, early education, higher and corporate education, and workforce development.',
//                 icon: TbBuilding,
//                 iconColor: 'green.700',
//             },
//             {
//                 title: 'Non-Profits & Civic Tech',
//                 description:
//                     'We are committed to continuing our support for local civic tech and open source communities.',
//                 icon: FiHeart,
//                 iconColor: 'green.700',
//             },
//         ],
//     },
// ],
