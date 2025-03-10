import * as React from 'react'

import {
    FaCode,
    FaShippingFast,
    FaPassport,
    FaFileInvoiceDollar,
    FaHandshake,
} from 'react-icons/fa'
import { MdOutlineChildFriendly, MdOutlineHealthAndSafety } from "react-icons/md";
import { TbClockDown } from "react-icons/tb";
import { HeadFC, PageProps } from 'gatsby';

import Hero2 from '../layout/Hero';
import Layout from '../layout/Layout';
import SectionNew from '../layout/SectionNew';
import { SEO } from '../components/seo';

export const approach = {
    label: 'Approach',
    title: 'A Focus on Program Outcomes',
    description:
        'We never lose sight of program outcomes for our agency partners and their users.',
    items: [
        {
            title: 'Reducing Burden',
            description:
                'We take our responsibility of building accessible government services for all users seriously. We center our work on **human-centered design and research** to gain deep insights into end user and agency staff needs.',
            icon: TbClockDown
        },
        {
            title: 'Bridging Policy, People, & Process',
            description:
                ' Our work involves translating complex government policy into effective services. We take a **Policy Integrated Delivery** approach to partner with stakeholders and SMEs to integrate their experience, process, and expertise with technical considerations for better program outcomes.',
            icon: FaHandshake,
        },
        {
            title: 'The Right Technology Tools',
            description:
                'We leverage our extensive technology delivery experience to select the best technology tools for the job at hand. This means using a mix of open source, COTS, custom development, and AI technology options to address your unique challenges.',
            icon: FaCode,
        },
        {
            title: 'Iterating at Velocity',
            description:
                'We prefer working in smaller launch cycles to quickly test, validate, and evolve priority digital service features. Our **senior staff**, **quick hiring process**, and repeatable **agile best practices** allow us to spin up lean teams to deliver critical MVP launches in a few months.',
            icon: FaShippingFast,
        },
    ],
    ctas: [
        { title: 'Learn about our Services', path: '/services' }
    ]
};

const content = {
    hero: {
        title: 'We partner with government to build highly **impactful** digital services.',
        subHeading:
            'We deliver impact by improving access to critical services, modernizing resilient systems, and iterating at velocity.',
        cta: 'Find out how',
    },
    ourWork: {
        label: 'Our Work',
        title: "Areas of expertise",
        description: "Our work spans projects across various federal and state government agencies.",
        items: [
            {
                title: 'Consular Services',
                description: 'At the *Department of State*, we are building the next generation **Online Passport Renewal** application that can be submitted in *under five minutes*.',
                icon: FaPassport,
                iconColor: 'teal.400'
            },
            {
                title: 'Taxpayer Systems',
                description: 'At the *IRS*, we are modernizing key taxpayer forms like **digitizing the W7**, improving **compliance operations**, and augmenting systems with **generative AI**.',
                icon: FaFileInvoiceDollar,
                iconColor: 'teal.400'
            },
            {
                title: 'Benefits Programs',
                description: "We helped launch the **Massachusetts Paid Family & Medical Leave** system, which has paid claimants over *$3 billion* since 2021. Currently supporting **Maine's Paid Leave** implementation, and modernizing **New Jersey's Unemployment Insurance** system.",
                icon: MdOutlineChildFriendly,
            },
            {
                title: 'Healthcare Services',
                description: "At the *CDC*, we're enhancing the pandemic era **test reporting system**. At *CMS* we are supporting the evolution of **HealthCare.gov** and supporting their **Infrastructure as a Service** initiative.",
                icon: MdOutlineHealthAndSafety,
            }
        ],
        ctas: [
            { title: 'See Details on our Work', path: '/our-work' }
        ]
    },
    approach,
    talent: {
        label: 'About Us',
        title: 'Talent to deliver Impact',
        description: 'We bring a unique set of industry expertise and best practices to government digital services.',
        ctas: [
            { title: 'Our Values & Culture', path: '/about' },
            { title: 'Join our Team ', path: '/careers' },
        ]
    }
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Hero2
                heading={content.hero.title}
                subHeading={content.hero.subHeading}
            />
            <SectionNew
                section={content.ourWork}
                backgroundColor="white"
            />
            <SectionNew
                section={content.approach}                
                backgroundColor="gray.50"
            />
            <SectionNew
                section={content.talent}                
                backgroundColor="white"
            />
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
