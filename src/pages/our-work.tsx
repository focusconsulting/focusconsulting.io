import * as React from 'react'

import {
    Box,
    Button,
    Link as ExternalLink,
    HStack,
    Heading,
    Icon,
    IconButton,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react'
import { FaEquals, FaExternalLinkAlt } from 'react-icons/fa'
import { HeadFC, Link, PageProps } from 'gatsby'
import {
    MdBabyChangingStation,
    MdLocalHospital,
    MdOutlineSchool,
} from 'react-icons/md'

import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'
import SectionNew from '../layout/SectionNew'

const focusAreaTags = [
    { title: 'Consular Services', color: 'blue' },
    { title: 'Taxpayer Systems', color: 'orange' },
    { title: 'Benefits', color: 'green' },
    { title: 'Healthcare', color: 'purple' },
    { title: 'Public Interest', color: 'cyan' },
    { title: 'Other', color: 'gray' },
]

const capabilityTags = [
    { title: 'Modernization', color: 'blue' },
    { title: 'AI', color: 'orange' },
    { title: 'Security', color: 'green' },
    { title: 'Enterprise Data', color: 'purple' },
]

const projects = [
    {
        title: 'Online Passport Renewal',
        tags: ['Consular Services', 'Modernization', 'Security'],
        description:
            '',
        link: 'https://reportstream.cdc.gov/',
    },
    {
        title: 'Massachusetts Paid Family and Medical Leave',
        tags: ['Benefits', 'Healthcare', 'AI'],
        description: [
            'PFML was a new legislatively mandated state project that kicked off in January 2020 to provide Massachusetts residents the ability to apply for and receive payment for family and medical leave. Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava PBC) and other stakeholders to staff project teams across product, engineering, DevOps and technical support.',
            'Our staff led delivery of various critical product and engineering milestones including the payments workflow, department of revenue data processing, approval workflow integration, and core API and cloud architecture. This work required coordination across numerous department agencies and vendor teams.',
            'Since its launch in 2021, the program has paid over **$3 billion** in leave benefits.',
        ],
        link: 'https://paidleave.mass.gov/oauth-start/',
    },
    {
        title: 'IRS Digital Transformation',
        tags: ['Taxpayer Systems', 'Modernization'],
        description:
            '',
        link: 'https://reportstream.cdc.gov/',
    },
    {
        title: 'IRS CIO Strategic Initiatives',
        tags: ['Taxpayer Systems', 'Modernization', 'AI', 'Enterprise Data'],
        description:
            '',
        link: 'https://reportstream.cdc.gov/',
    },
    {
        title: 'Maine Paid Leave',
        tags: ['Benefits', 'Healthcare', 'AI'],
        description:
            '',
        link: 'https://reportstream.cdc.gov/',
    },
    {
        title: 'CDC ReportStream',
        tags: ['Healthcare', 'Enterprise Data'],
        description:
            'As part of the pandemic response, the CDC was tasked with improving how Covid test results were reported and delivered to public health agencies. A key part of that effort was the ReportStream tool, which was responsible for receiving, routing and delivering Covid test results. Since then, we’ve worked alongside our partners to augment the application to support sending and receiving any kind of test results or test orders as well as delivering this data in a wide variety of health specifications including HL7 and FHIR.',
        link: 'https://reportstream.cdc.gov/',
    },
    {
        title: 'New Jersey Unemployment Insurance',
        tags: ['Benefits', 'Modernization'],
        description:
            'Our staff works with stakeholders to update and improve the experience and workflow when applying for unemployment insurance in New Jersey.',
        link: 'https://nj.gov/labor/myunemployment/before/about/howtoapply/applyonline.shtml',
    },
    {
        title: 'Simpler Grants.gov',
        tags: ['Healthcare', 'Public Interest', 'Modernization'],
        description:
            '',        
    },
    {
        title: 'Healthcare Marketplace',
        tags: ['Healthcare', 'Benefits'],
        description:
            'Our staff have experience in key engineering leadership roles on HealthCare.gov and MyMedicare.gov projects. Currently supporting the evolution of healthCare.gov application and education sites.',
        link: 'https://www.healthcare.gov/',
    },
    {
        title: 'Infrastructure as a Service',
        tags: ['Healthcare', 'Benefits'],
        description:
            '',        
    },
    {
        title: 'Preventive Medicaid',
        tags: ['Healthcare', 'Enterprise Data'],
        description: [
            'Supporting a commercial partner providing preventive care for medicaid patients across various states. Our client works with insurance providers to identify and treat patients with preventable hospitalization risk.',
            'Focus provides agile software development services across various engineering and cloud infrastructure teams. We are currently supporting implementation of the next iteration of their data pipeline platform and infrastructure. Focus engineers are also building the client application that allows care providers to effectively provide preventive care using various patient data.',
        ],
        link: 'https://www.cityblock.com',
    },    
    {
        title: 'DC Housing Insights',
        tags: ['Other'],
        description:
            'This open source tool provides housing advocates and government officials with insights on the state of affordable housing in Washington, DC. The project started as a Code for DC / CNHED / Greater DC initiative. The tool overlays multiple local and national data sources on top of an interactive map with various filter toggles to better visualize the data.',
        link: 'http://housinginsights.org/#',
    },
    {
        title: 'Marriott Learning Platform',
        tags: ['Other'],
        description:
            'We built regional and organization wide internal learning and development platforms that emphasized up-skilling and competency based career growth for staff.',
        link: 'https://www.marriott-ld.com/mda',
    },
    {
        title: 'Skills-Based Talent Platform',
        tags: ['Other'],
        description:
            'Building a next generation talent marketplace platform that uses well defined and industry aligned job competency maps to more accurately match job seekers with employers.',
        link: 'https://aspireability.io/',
    },
]

const content = {
    hero: {
        title: 'Our Work',
        description: 'We focus on projects that drive meaningful impact. Success means delivering efficient services that improve access to critical programs, reduce the burden of users and agency staff, improve health outcomes, and streamline access to benefits.'
    },
    projects: {
        title: 'Projects',
        items: projects,
        tagsCategories: [
            {
                category: 'Focus Areas',
                tags: focusAreaTags
            },
            {
                category: 'Capabilities',
                tags: capabilityTags
            }
        ]
    }
}



const AboutPage: React.FC<PageProps> = () => {    

    return (
        <Layout>
            <Hero2
                heading={content.hero.title}
                subHeading={content.hero.description}
            />
            <SectionNew
                section={content.projects}                
                backgroundColor="white"
            />
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - Our Work" />