import * as React from 'react'

import { HeadFC, PageProps } from 'gatsby'

import { SEO } from '../components/seo'
import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import SectionNew from '../layout/SectionNew'

const content = {
    hero: {
        title: 'Open source, AI-first tools to accelerate government digital services.',
        description:
            'Focus Labs is our research and development (R&D) practice with an emphasis on open source, artificial intelligence (AI), and emerging technologies.',
    },
    tools: {
        title: 'Tools',
        items: [
            {
                title: 'Formspec',
                description: 'Build AI-assisted, complex forms in an afternoon.',
                link: 'https://formspec.org/',
            },
            {
                title: 'Django Cotton USWDS',
                description: 'USWDS components as Django Cotton templates.',
                link: 'https://github.com/focusconsulting/django-cotton-uswds',
            },
        ],
    },
}

const FocusLabsPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Hero2
                heading={content.hero.title}
                subHeading={content.hero.description}
            />
            <SectionNew
                section={content.tools}
                backgroundColor="gray.50"
            />
        </Layout>
    )
}

export default FocusLabsPage

export const Head: HeadFC = () => <SEO title="Focus - Focus Labs" />
