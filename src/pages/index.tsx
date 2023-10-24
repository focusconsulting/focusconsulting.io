import * as React from 'react'

import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Center,
    Link as ChakraLink,
    Circle,
    HStack,
    Heading,
    Image,
    SimpleGrid,
    Square,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import {
    FaArrowRight,
    FaBolt,
    FaBrain,
    FaChevronRight,
    FaCode,
    FaLayerGroup,
    FaLightbulb,
    FaProjectDiagram,
} from 'react-icons/fa'
import { HeadFC, Link, PageProps } from 'gatsby'

import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import SbaLogo from '../components/sba-logo'

const whoWeWorkWithLogs = [
    'nj-logo.png',
    'mass-logo.png',
    'cms-logo.png',
    'cnhed-logo.svg',
    'cityblock-logo.svg',
    'healthcare-gov-logo.png',
    'aspire-logo.png',
    'cdc-logo.png',
]

const services = [
    {
        title: 'Design & Research',
        description:
            'We center our work on human-centered design and research to gain deep insights into user challenges and needs.',
        logo: <FaLightbulb color="white" size={'24px'} />,
    },
    {
        title: 'Engineering',
        description:
            'We bring deep expertise in full-stack web development using agile development processes. ',
        logo: <FaCode color="white" size={'24px'} />,
    },
    {
        title: 'Agile Delivery',
        description:
            'We bring deep expertise in full-stack web development using agile development process.',
        logo: <FaProjectDiagram color="white" size={'24px'} />,
    },
    {
        title: 'Product Management',
        description:
            'Our product managers work with their design and research colleagues to understand customer needs, work with our stakeholders, and craft high value solutions.',
        logo: <FaBolt color="white" size={'24px'} />,
    },
    {
        title: 'DevOps & Cloud Infrastructure',
        description:
            'We develop and improve robust CI/CD processes that free up developers to focus on providing user value, accessibility, and privacy.',
        logo: <FaLayerGroup color="white" size={'24px'} />,
    },
    {
        title: 'Subject Matter Expert',
        description:
            'Our projects span work that addresses equity, healthcare, benefits, and learning across government and commercial clients.',
        logo: <FaBrain color="white" size={'24px'} />,
    },
]

const IndexPage: React.FC<PageProps> = () => {
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
                        _after={{
                            content: 'url("/images/index/homepage-swish.svg")',
                            pos: 'relative',
                            top: '-25px',
                            left: '110px',
                            hideBelow: 'md',
                        }}
                    >
                        Let's build better software
                    </Heading>
                }
                subHeading={
                    'We build human-centered and high value digital services that scales.'
                }
                image={<Image src="/images/index/homepage-image.png"></Image>}
                cta={
                    <Button
                        as={Link}
                        to="/services"
                        backgroundColor={'primary'}
                        color={'white'}
                    >
                        Find out how &nbsp; <FaArrowRight />
                    </Button>
                }
            />
            <Box as="section" backgroundColor={'white'} py="80px">
                <Center
                    color={'black'}
                    fontSize={24}
                    lineHeight={'32px'}
                    fontWeight={600}
                    mb={16}
                >
                    Who we work with
                </Center>
                <Box>
                    <SimpleGrid
                        columns={[1, 4]}
                        spacing={10}
                        w={['container.xs', 'container.md']}
                        margin={'auto'}
                    >
                        {whoWeWorkWithLogs.map((logo) => (
                            <Square>
                                <Image
                                    w={'160px'}
                                    h={'72px'}
                                    src={`/images/${logo}`}
                                />
                            </Square>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
            <Box
                as="section"
                w={'100%'}
                backgroundColor={'gray.50'}
                py="112px"
                px={['8', '0']}
            >
                <Box
                    as="section"
                    w={['container.xs', 'container.xl']}
                    margin={'auto'}
                >
                    <Center mb={14}>
                        <Box w={'container.md'}>
                            <Heading
                                as="h2"
                                fontSize={'5xl'}
                                fontWeight={700}
                                lineHeight={'130%'}
                                textAlign={'center'}
                                mb="6"
                            >
                                Delivering impact for government and industry
                            </Heading>
                            <Text
                                fontWeight={400}
                                lineHeight={'28px'}
                                fontSize={'18px'}
                            >
                                We work with our partners to provide a variety
                                of services to deliver impactful outcomes.
                            </Text>
                        </Box>
                    </Center>
                    <Box px={['0', '8']}>
                        <SimpleGrid
                            px={['0', '48px']}
                            columns={[1, 3]}
                            spacing={10}
                            margin={'auto'}
                        >
                            {services.map((service) => (
                                <Card p="8">
                                    <CardHeader p="0" mb={'3'}>
                                        <Circle
                                            size={'40px'}
                                            background="icon.red"
                                            mb={5}
                                        >
                                            {service.logo}
                                        </Circle>
                                        <Heading
                                            fontSize={'20px'}
                                            lineHeight={'28px'}
                                            fontWeight={600}
                                        >
                                            {service.title}
                                        </Heading>
                                    </CardHeader>
                                    <CardBody p="0">
                                        <Text
                                            fontSize={'16px'}
                                            lineHeight={'26px'}
                                        >
                                            {service.description}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
            <Box as="section" w={'100%'} backgroundColor={'white'} py="112px">
                <Box
                    as="section"
                    w={['container.xs', 'container.xl']}
                    margin={'auto'}
                >
                    <Box margin={'auto'} px="8">
                        <Box
                            w={['container.xs', 'container.md']}
                            margin={'auto'}
                            mb="14"
                        >
                            <Heading
                                as="h2"
                                fontSize={'5xl'}
                                fontWeight={700}
                                lineHeight={'130%'}
                                textAlign={'center'}
                                mb="6"
                            >
                                Minority-owned digital service
                            </Heading>
                            <Text
                                fontWeight={400}
                                lineHeight={'28px'}
                                fontSize={'18px'}
                                align={'center'}
                            >
                                We are a minority-owned software digital
                                services company focused on bringing about
                                social impact.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        w={['container.xs', 'container.md']}
                        margin={'auto'}
                        px="8"
                    >
                        <Stack
                            direction={['column', 'row']}
                            spacing={16}
                            align={'start'}
                            mb="8"
                        >
                            <Box>
                                <SbaLogo />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    fontWeight={400}
                                    lineHeight={'150%'}
                                >
                                    We're Small Business Administration (SBA)
                                    8(a) Certified.
                                </Text>
                            </Box>
                        </Stack>
                        <Stack direction={['column', 'row']} spacing={16}>
                            <Box>
                                <Image
                                    minW="200px"
                                    src="images/homepage-dsc-logo.png"
                                />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    fontWeight={400}
                                    lineHeight={'150%'}
                                >
                                    Part of the{' '}
                                    <ChakraLink
                                        isExternal
                                        textDecor={'underline'}
                                        href="https://digitalservicescoalition.org/#/"
                                    >
                                        Digital Services Coalition
                                    </ChakraLink>
                                    , a collection of agile technology and
                                    design firms that serve—or aspire to
                                    serve—the government
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box as="section" w={'100%'} backgroundColor={'white'} py="112px">
                <Box
                    w={['container.xs', '1038px']}
                    margin={'auto'}
                    backgroundColor={'blue.800'}
                    borderRadius={['0px', '29px']}
                >
                    <Box py="20" px="106px">
                        <Center>
                            <VStack>
                                <HStack mb="48px">
                                    <Image
                                        maxW={'90px'}
                                        pos={'relative'}
                                        left={'25px'}
                                        src="/images/index/homepage-contact-us-left.png"
                                    />
                                    <Image
                                        maxW={'116px'}
                                        pos={'relative'}
                                        top={'-5px'}
                                        zIndex={100}
                                        src="/images/index/homepage-contact-us-middle.svg"
                                    />
                                    <Image
                                        maxW={'90px'}
                                        pos={'relative'}
                                        right={'25px'}
                                        src="/images/index/homepage-contact-us-right.svg"
                                    />
                                </HStack>
                                <Heading as="h4" color="white" mb="6">
                                    Have any questions?
                                </Heading>
                                <Text color={'white'} mb="8">
                                    Yorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                                <Button
                                    outlineColor={'white'}
                                    color="white"
                                    backgroundColor={'blue.800'}
                                    as={Link}
                                    to={'/contact'}
                                >
                                    Contact us &nbsp; <FaChevronRight />
                                </Button>
                            </VStack>
                        </Center>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
