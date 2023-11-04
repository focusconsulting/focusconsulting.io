import * as React from 'react'

import { Button, Heading, Link, Stack } from '@chakra-ui/react'
import { HeadFC, PageProps } from 'gatsby'

import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'Careers',
    heroDescription:
        'We are a small, distributed, and growing team of talented technologists. We put diversity & inclusion at the heart of our values and work. We’re building a company that helps the government be more accessible to its people.',
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
                        {content.heroTitle}
                    </Heading>
                }
                subHeading={content.heroDescription}
            />
            <Section title="Join the team." backgroundColor="white">
                <Stack align="start" spacing="4">
                    <Button
                        variant="link"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        textDecoration="underline"
                        as={Link}
                        isExternal
                        href="https://guiltless-jellyfish-358.notion.site/Focus-Consulting-Interview-Process-Fullstack-Engineer-fe06d8e8be854f38b466b6278ae82772"
                    >
                        Hiring Process
                    </Button>
                    <Button
                        variant="link"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        textDecoration="underline"
                        as={Link}
                        isExternal
                        href="https://angel.co/company/focus-consulting-1/jobs"
                    >
                        View Open Positions
                    </Button>
                </Stack>
            </Section>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="Focus - Careers" />
