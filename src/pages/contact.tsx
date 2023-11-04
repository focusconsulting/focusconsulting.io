import * as React from 'react'

import { HeadFC, PageProps } from 'gatsby'

import { Heading } from '@chakra-ui/react'
import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'Let’s Connect',
    heroDescription:
        'We’d love to hear from you! We’ll start with the problem you’re trying to solve and go from there.',
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
            <Section title="Get In Touch">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeNQ75CAJzyQVOUKGMM_k6Zo03paPpeCdxPFdivUaM72jcceA/viewform?embedded=true"
                    width="640"
                    height="809"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                >
                    Loading…
                </iframe>
            </Section>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="Focus - Contact" />
