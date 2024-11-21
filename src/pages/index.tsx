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
    'irs-logo.png',
    'dos-logo.png',
]

const content = {
    sectionHero: {
        title: 'Impactful Digital Services',
        subHeading:
            'We build human-centered and high value government digital services that scale.',
        cta: 'Find out how',
    },
    sectionWhoWeWorkWith: {
        title: 'Who we work with',
    },
    sectionServices: {
        title: 'A Focus on Program Outcomes',
        subHeading:
            'We never lose sight of program outcomes for our agency partners and their users.',
        services: [
            {
                title: 'Human-Centered Design',
                description:
                    'We take our responsibility of building accessible government services for all users seriously. We center our work on human-centered design and research to gain deep insights into user needs and challenges.',
                logo: <FaLightbulb color="white" size={'24px'} />,
            },
            {
                title: 'Policy Integrated Delivery',
                description:
                    'Our work involves translating complex government policy into user-friendly services. We partner with stakeholders and experts to integrate policy expertise with technical considerations for better program outcomes.',
                logo: <FaBrain color="white" size={'24px'} />,
            },
            {
                title: 'The Right Technology Tools',
                description:
                    'We leverage our extensive technology delivery experience to select the best technology tools for the job at hand. This means using mature, well-tested, and preferably open source tools, allowing our teams to focus on program specific workflows sooner.',
                logo: <FaCode color="white" size={'24px'} />,
            },
        ],
    },
    sectionAbout: {
        title: 'Diverse Perspectives',
        subHeading:
            'As a minority-owned company, we are committed to bringing diverse backgrounds and experiences to government digital services.',
        sba: "We're Small Business Administration (SBA) 8(a) Certified.",
        dccbe: "We're based in DC and certified as a Small Business Enterprise (SBE) and Disadvantaged Business Enterprise (DBE).",
        mambe: 'Massachusets and Boston Minority Business Enterprise (MBE) certified.',
        mdmbe: 'Maryland SBE and DBE certified.',
        vtdbe: 'Vermont DBE certified.',
        dsc: (
            <>
                Part of the{' '}
                <ChakraLink
                    isExternal
                    textDecor={'underline'}
                    href="https://digitalservicescoalition.org/#/"
                >
                    Digital Services Coalition
                </ChakraLink>
                , a collection of agile technology and design firms that serve
                the government
            </>
        ),
    },
    sectionContactUs: {
        title: 'Have any questions?',
        subHeading: "We'd love to hear from you!",
        cta: 'Contact us',
    },
}

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
                    >
                        {content.sectionHero.title}
                    </Heading>
                }
                subHeading={content.sectionHero.subHeading}
                image={
                    <Image src="/images/index/homepage-ux-collab.png"></Image>
                }
                cta={
                    <Button
                        as={Link}
                        to="/services"
                        backgroundColor={'primary'}
                        color={'white'}
                    >
                        {content.sectionHero.cta} &nbsp; <FaArrowRight />
                    </Button>
                }
            />
            <Box as="section" backgroundColor={'white'} py="section.md">
                <Center
                    color={'black'}
                    fontSize={24}
                    lineHeight={'32px'}
                    fontWeight={600}
                    mb={16}
                >
                    {content.sectionWhoWeWorkWith.title}
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
                                    src={`/images/index/${logo}`}
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
                py="section.lg"
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
                                {content.sectionServices.title}
                            </Heading>
                            <Text
                                fontWeight={400}
                                lineHeight={'28px'}
                                fontSize={'18px'}
                                align="center"
                            >
                                {content.sectionServices.subHeading}
                            </Text>
                        </Box>
                    </Center>
                    <Box px={['0', '8']}>
                        <SimpleGrid
                            px={['0', '11']}
                            columns={[1, 3]}
                            spacing={10}
                            margin={'auto'}
                            mb={50}
                        >
                            {content.sectionServices.services.map((service) => (
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

                        <Stack
                            justify="center"
                            px={['0', '11']}
                            spacing="5"
                            margin={'auto'}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <Button
                                variant="solid"
                                fontSize={{ base: '2xl', md: '2xl' }}
                                size="lg"
                                colorScheme="blue"
                                as={Link}
                                to="/services"
                            >
                                Services & Expertise
                            </Button>
                            <Button
                                variant="solid"
                                size="lg"
                                fontSize={{ base: '2xl', md: '2xl' }}
                                colorScheme="blue"
                                as={Link}
                                to="/our-work"
                            >
                                Examples of Our Work
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box
                as="section"
                w={'100%'}
                backgroundColor={'white'}
                py="section.lg"
            >
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
                                {content.sectionAbout.title}
                            </Heading>
                            <Text
                                fontWeight={400}
                                lineHeight={'28px'}
                                fontSize={'18px'}
                                align={'center'}
                            >
                                {content.sectionAbout.subHeading}
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
                                    {content.sectionAbout.sba}
                                </Text>
                            </Box>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing={16}
                            align={'start'}
                            mb="8"
                        >
                            <Box minW="200px">
                                <Image
                                    w="100px"
                                    src="images/index/dc-cbe-logo.png"
                                />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    fontWeight={400}
                                    lineHeight={'150%'}
                                >
                                    {content.sectionAbout.dccbe}
                                </Text>
                            </Box>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing={16}
                            align={'start'}
                            mb="8"
                        >
                            <Box minW="200px">
                                <Image
                                    w="100px"
                                    src="images/index/ma-sdo-logo.png"
                                />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    fontWeight={400}
                                    lineHeight={'150%'}
                                >
                                    {content.sectionAbout.mambe}
                                </Text>
                            </Box>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing={16}
                            align={'start'}
                            mb="8"
                        >
                            <Box minW="200px">
                                <Image
                                    w="100px"
                                    src="images/index/md-dot-logo.png"
                                />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    fontWeight={400}
                                    lineHeight={'150%'}
                                >
                                    {content.sectionAbout.mdmbe}
                                </Text>
                            </Box>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing={16}
                            align={'start'}
                            mb="8"
                        >
                            <Box minW="200px">
                                <Image
                                    w="100px"
                                    src="images/index/vt-logo.png"
                                />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    fontWeight={400}
                                    lineHeight={'150%'}
                                >
                                    {content.sectionAbout.vtdbe}
                                </Text>
                            </Box>
                        </Stack>
                        <Stack direction={['column', 'row']} spacing={16}>
                            <Box>
                                <Image
                                    minW="200px"
                                    src="/images/index/homepage-dsc-logo.png"
                                />
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    fontWeight={400}
                                    lineHeight={'150%'}
                                >
                                    {content.sectionAbout.dsc}
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box
                as="section"
                w={'100%'}
                backgroundColor={'white'}
                py="section.lg"
            >
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
                                    {content.sectionContactUs.title}
                                </Heading>
                                <Text color={'white'} mb="8">
                                    {content.sectionContactUs.subHeading}
                                </Text>
                                <Button
                                    outlineColor={'white'}
                                    color="white"
                                    backgroundColor={'blue.800'}
                                    as={Link}
                                    to={'/contact'}
                                >
                                    {content.sectionContactUs.cta} &nbsp;{' '}
                                    <FaChevronRight />
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
