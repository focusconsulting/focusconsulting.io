import * as React from 'react'

import {
    Avatar,
    Box,
    Button,
    Link as ChakraLink,
    Divider,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import { HeadFC, Link, PageProps } from 'gatsby'

import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'
import { focusAreas } from './our-work'

const content = {
    heroTitle: 'About Us',
    heroDescription:
        'We are a minority-owned digital services company focused on projects with social impact.',
    sections: [
        {
            title: 'Our Story',
            description:
                'Focus was founded in 2019 to bring together a diverse set of industry and government experiences, and best-in-class digital services capabilities in agile software development, human-centered design, and DevSecOps. Our projects span work that addresses equity, healthcare, benefits, and learning across government and commercial clients.',
            backgroundColor: 'white',
        },
        {
            title: 'Core Values',
            description:
                'Our values guide both how we work with our colleagues and how we view our partnerships.',
            backgroundColor: 'gray.50',
            items: [
                {
                    title: 'Clarity and transparency',
                    description:
                        'Our jobs involve taking complicated topics and working to remove the ambiguity; our clients rely on us to work and communicate honestly and efficiently.',
                },
                {
                    title: 'Do the right thing',
                    description:
                        "We always come prepared, researching and documenting before raising topics with our clients.  We respect our clients' time by asking questions that get to the root of things faster. ",
                },
                {
                    title: 'Do what you say',
                    description:
                        'Our reputation with our clients is critical to our success as a business and that reputation is built by consistently delivering on what we promise to do.',
                },
                {
                    title: 'Exhibit a growth mindset',
                    description:
                        'The industry is constantly evolving, and in order to stay relevant we constantly grow our skill sets to serve current and future clients better.',
                },
            ],
        },
        focusAreas,
        {
            title: 'Core Team',
            description: 'Meet our diverse team of technologists.',
            backgroundColor: 'gray.50',
            customId: 'team',
        },
    ],
}

const team = [
    {
        name: 'Japhet Teshale',
        title: 'Software Engineer',
        photo: '/images/staff/japhet-teshale.png',
        department: 'engineering',
    },
    {
        name: 'Eyuel Abebe',
        title: 'Software Engineer',
        photo: '/images/staff/eyuel.webp',
        department: 'engineering',
    },
    {
        name: 'Ant Addis',
        title: 'CEO',
        photo: '/images/staff/anteneh-avatar-new-sm.png',
        link: 'https://www.linkedin.com/in/ant-addis',
        department: 'leadership',
    },
    {
        name: 'Kolawole Balegun',
        title: 'Software Engineer',
        photo: '/images/staff/kola.webp',
        department: 'engineering',
    },
    {
        name: 'Iverson Diles',
        title: 'Software Engineer',
        photo: '/images/staff/iverson-diles.webp',
        department: 'engineering',
    },
    {
        name: 'Michael Kalish',
        title: 'CTO',
        photo: '/images/staff/kalish-profile.webp',
        link: 'https://www.linkedin.com/in/mqkalish',
        department: 'leadership',
    },
    {
        name: 'Mike Liu',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Gabriel Dorsch',
        title: 'Software Engineer',
        photo: '/images/staff/gabriel.webp',
        department: 'engineering',
    },
    {
        name: 'Thu Pham',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Jack Wang',
        title: 'Software Engineer',
        photo: '/images/staff/jack-wang.webp',
        department: 'engineering',
    },
    {
        name: 'Kant Kodali',
        title: 'Software Engineer',
        photo: '/images/staff/kant_kodali.webp',
        department: 'engineering',
    },
    {
        name: 'Jamie Albinson',
        title: 'Software Engineer',
        photo: '/images/staff/jamie-albinson.webp',
        department: 'engineering',
    },
    {
        name: 'Yishak Yusuf',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Paul Toner',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Andrew Pham',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Bruk Abebe',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Shijit Dasgupta',
        title: 'Infrastructure Engineer',
        department: 'engineering',
    },
    {
        name: 'Nathan Stricker',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Antoine Fillinger',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Stephen Jordan',
        title: 'Software Engineer',
        department: 'engineering',
    },
    {
        name: 'Ahmed Saeed',
        title: 'QA Engineer',
        department: 'engineering',
    },
    {
        name: 'Sarah Parker',
        title: 'Product Manager',
        department: 'product',
    },
    {
        name: 'Mel Woldeyesus',
        title: 'Business Analyst',
        department: 'product',
    },
    {
        name: 'Tshering Yudon',
        title: 'Designer',
        photo: '/images/staff/tshering-yudon.webp',
        department: 'design',
    },
    {
        name: 'Jenn Snyder',
        title: 'Designer',
        department: 'design',
    },
    {
        name: 'Katherine Kelly',
        title: 'Designer',
        department: 'design',
    },
    {
        name: 'Upendra Jejjala',
        title: 'Product Manager',
        photo: '/images/staff/upendra-avatar.jpg',
        department: 'product',
    },
]

const AboutPage: React.FC<PageProps> = () => {
    const customRenderMap: any = {
        team: () => {
            return (
                <>
                    {['leadership', 'product', 'design', 'engineering'].map(
                        (dept: string) => (
                            <Box marginBottom="5">
                                <Heading marginBottom="10">
                                    {dept.charAt(0).toUpperCase() +
                                        dept.slice(1)}
                                </Heading>
                                <SimpleGrid
                                    columns={{ base: 2, md: 4 }}
                                    mb={{ base: 12, md: 12 }}
                                    spacing="10"
                                >
                                    {team
                                        .filter(
                                            (person) =>
                                                person.department == dept
                                        )
                                        .map((person) => {
                                            return (
                                                <Box>
                                                    <Avatar
                                                        name={person.name}
                                                        size={{
                                                            base: 'xl',
                                                            md: '2xl',
                                                        }}
                                                        mb={2}
                                                        src={person.photo}
                                                    />
                                                    {person.link ? (
                                                        <Box>
                                                            <ChakraLink
                                                                isExternal
                                                                textDecor={
                                                                    'underline'
                                                                }
                                                                href={
                                                                    person.link
                                                                }
                                                                fontSize={{
                                                                    base: 'xl',
                                                                    md: '2xl',
                                                                }}
                                                                fontWeight="semibold"
                                                                mb={1}
                                                            >
                                                                {person.name}
                                                            </ChakraLink>
                                                        </Box>
                                                    ) : (
                                                        <Text
                                                            fontSize={{
                                                                base: 'xl',
                                                                md: '2xl',
                                                            }}
                                                            fontWeight="semibold"
                                                            mb={1}
                                                        >
                                                            {person.name}
                                                        </Text>
                                                    )}
                                                    <Text
                                                        fontSize={{
                                                            base: 'lg',
                                                            md: 'xl',
                                                        }}
                                                    >
                                                        {person.title}
                                                    </Text>
                                                </Box>
                                            )
                                        })}
                                </SimpleGrid>
                                <Divider />
                            </Box>
                        )
                    )}
                </>
            )
        },
        'focus-areas': () => {
            return (
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
                        fontSize={{ base: '5xl', md: '7xl' }}
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
                        anchor={section.anchor}
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

export const Head: HeadFC = () => <SEO title="Focus - About" />
