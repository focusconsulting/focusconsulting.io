import * as React from 'react'

import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Center,
    Circle,
    Container,
    Flex,
    HStack,
    Heading,
    Image,
    SimpleGrid,
    Spacer,
    Square,
    Text,
    VStack,
} from '@chakra-ui/react'
import { FaArrowRight, FaChevronRight, FaCode } from 'react-icons/fa'
import { HeadFC, PageProps } from 'gatsby'

import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import SbaLogo from './sba-logo'

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
        logo: <FaCode color="white" size={'24px'} />,
    },
    {
        title: 'Design & Research',
        description:
            'We center our work on human-centered design and research to gain deep insights into user challenges and needs.',
        logo: <FaCode color="white" size={'24px'} />,
    },
    {
        title: 'Design & Research',
        description:
            'We center our work on human-centered design and research to gain deep insights into user challenges and needs.',
        logo: <FaCode color="white" size={'24px'} />,
    },
    {
        title: 'Design & Research',
        description:
            'We center our work on human-centered design and research to gain deep insights into user challenges and needs.',
        logo: <FaCode color="white" size={'24px'} />,
    },
    {
        title: 'Design & Research',
        description:
            'We center our work on human-centered design and research to gain deep insights into user challenges and needs.',
        logo: <FaCode color="white" size={'24px'} />,
    },
    {
        title: 'Design & Research',
        description:
            'We center our work on human-centered design and research to gain deep insights into user challenges and needs.',
        logo: <FaCode color="white" size={'24px'} />,
    },
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Box as="section" backgroundColor="sectionHero.dark">
                <Container centerContent py="80px" minW="container.xl">
                    <Flex justifyContent={'space-between'} w="100%">
                        <Box w="620px">
                            <Heading
                                as="h1"
                                color="white"
                                fontSize={'7xl'}
                                fontWeight={700}
                                lineHeight={'120%'}
                                mb="6"
                                _after={{
                                    content:
                                        'url("/images/homepage-swish.svg")',
                                    pos: 'relative',
                                    top: '-25px',
                                    left: '110px',
                                }}
                            >
                                Let's build better software
                            </Heading>
                            <Text
                                color="white"
                                lineHeight={'32px'}
                                fontWeight={500}
                                fontSize={'24px'}
                                mb="10"
                            >
                                We build human-centered and high value digital
                                services that scales.
                            </Text>
                            <Button backgroundColor={'primary'} color={'white'}>
                                Find out how &nbsp; <FaArrowRight />
                            </Button>
                        </Box>
                        <Spacer />
                        <Box w="532px">
                            <Image src="/images/homepage-image.png"></Image>
                        </Box>
                    </Flex>
                </Container>
            </Box>
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
                        columns={4}
                        spacing={10}
                        w={'container.md'}
                        margin={'auto'}
                    >
                        {whoWeWorkWithLogs.map((logo) => (
                            <Square>
                                <Image src={`/images/${logo}`} />
                            </Square>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
            <Box as="section" w={'100%'} backgroundColor={'gray.50'} py="112px">
                <Box as="section" w={'container.xl'} margin={'auto'}>
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
                    <Box px="8">
                        <SimpleGrid
                            px={'48px'}
                            columns={3}
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
                <Box as="section" w={'container.xl'} margin={'auto'}>
                    <Box margin={'auto'} px="8">
                        <Box w="container.md" margin={'auto'} mb="14">
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
                    <Box w="container.md" margin={'auto'} px="8">
                        <HStack spacing={16} align={'start'} mb="8">
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
                        </HStack>
                        <HStack spacing={16}>
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
                                    Part of the Digital Services Coalition, a
                                    collection of agile technology and design
                                    firms that serve—or aspire to serve—the
                                    government
                                </Text>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </Box>
            <Box as="section" w={'100%'} backgroundColor={'white'} py="112px">
                <Box
                    w="1038px"
                    margin={'auto'}
                    backgroundColor={'blue.800'}
                    borderRadius={'29px'}
                >
                    <Box py="20" px="106px">
                        <Center>
                            <VStack>
                                <HStack mb="48px">
                                    <Image
                                        maxW={'90px'}
                                        pos={'relative'}
                                        left={'25px'}
                                        src="/images/homepage-contact-us-left.png"
                                    />
                                    <Image
                                        maxW={'116px'}
                                        pos={'relative'}
                                        top={'-5px'}
                                        zIndex={100}
                                        src="/images/homepage-contact-us-middle.svg"
                                    />
                                    <Image
                                        maxW={'90px'}
                                        pos={'relative'}
                                        right={'25px'}
                                        src="/images/homepage-contact-us-right.svg"
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
