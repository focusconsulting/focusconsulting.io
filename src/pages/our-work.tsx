import * as React from 'react'

import { HeadFC, Link, PageProps } from 'gatsby'
import Hero2 from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import SectionNew from '../layout/SectionNew'

const focusAreaTags = [
    { title: 'Consular Services', color: 'blue' },
    { title: 'Taxpayer Systems', color: 'orange' },
    { title: 'Benefits', color: 'green' },
    { title: 'Healthcare', color: 'purple' },
    { title: 'Public Interest', color: 'teal' },
    { title: 'Workforce Development', color: 'pink' },
]

const capabilityTags = [
    { title: 'Modernization', color: 'blue' },
    { title: 'AI', color: 'orange' },
    { title: 'Security', color: 'green' },
    { title: 'Enterprise Data', color: 'purple' },
]

export const irsCIOProject = {
    title: 'IRS CIO Strategic Initiatives',
    subtitle: 'Sept 2024 - Present',
    tags: ['Taxpayer Systems', 'Modernization', 'AI', 'Enterprise Data'],
    description:
        'We are currently supporting the office of the CIO to help application and business teams adopt a product centric approach to development while providing technical guidance, prototypes and roadmaps to assist teams modernize their applications.  We’ve been embedded on the Intake team where we’ve provided key guidance as they modernize a legacy COBOL system. We are also serving an important integration role to make sure the variety of vendor teams and IRS staff are all operating from a shared set of code quality standards and operational guides.',
}

export const irsBeaconsProject = {
    title: 'IRS Digital Transformation',
    subtitle: 'Aug 2024 - Feb 2025',
    tags: ['Taxpayer Systems', 'Modernization'],
    description:
        ['Our team recently led an agency wide digital transformation initiative at the Internal Revenue Service. In the initial few months, we conducted interviews across agency divisions to identify key systemic obstacles to effective digital delivery. Outcomes from these interviews will result in a digital maturity assessment across key criteria, and a high-level living roadmap which includes the major activities to enable successful digital delivery.', 'As part of this contract, we also identified, selected, and implemented two “beacon” pilot projects that demonstrate visible improvements and new ways of working while incorporating the existing OneSDLC methodologies. These projects digitized the paper based W7 application form and improved compliance operations. We are developing impact and dynamic financial models to measure the value of the beacons.']
}

const projects = [
    {
        title: 'Online Passport Renewal',
        subtitle: 'April 2024 - Present',
        tags: ['Consular Services', 'Modernization', 'Security'],
        description:
            "Focus is supporting the Department of State and United States Digital Service launch the third iteration of their online passport renewal pilot system. Focus is leading the engineering implementation that leans heavily on recent user research and design to improve on previous versions. We are using a pilot approach to fully build and launch a mobile-first, accessible, US web design system based, fully integrated renewal application system in six months. As part of this effort, we are also putting the first systems into the cloud for the Department's consular division.",
        link: 'https://travel.state.gov/content/travel/en/passports/have-passport.html',
    },
    {
        title: 'Massachusetts Paid Family and Medical Leave',
        subtitle: 'Dec 2019 - Present',
        tags: ['Benefits', 'Healthcare', 'AI'],
        description: [
            'PFML was a new legislatively mandated state project that kicked off in January 2020 to provide Massachusetts residents the ability to apply for and receive payment for family and medical leave. Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava PBC) and other stakeholders to staff project teams across product, engineering, DevOps and technical support.',
            'Our staff led delivery of various critical product and engineering milestones including the payments workflow, department of revenue data processing, approval workflow integration, and core API and cloud architecture. This work required coordination across numerous department agencies and vendor teams.',
            'Since its launch in 2021, the program has paid over **$3 billion** in leave benefits.',
        ],
        link: 'https://paidleave.mass.gov/oauth-start/',
    },    
    irsCIOProject,
    {
        title: 'Minnesota Paid Leave',
        subtitle: 'Jan 2025 - Present',
        tags: ['Benefits', 'Healthcare', 'AI'],
        description:
            'We are currently supporting the full implementation of the Minnesota Paid Leave program. With the upcoming launch in Jan 2026, our team is moving at speed to conduct user research, and design and implement support for multiple leave types. We are developing the end to end workflow from scratch including the claimant portal, employer portal, and adjudication system.',
        link: 'https://info.paidleave.mn.gov/',
    },
    irsBeaconsProject,
    {
        title: 'New Jersey Unemployment Insurance',
        tags: ['Benefits', 'Modernization'],
        description:
            'Our staff is supporting the large modernization effort of the NJ unemployment insurance program. The strain of pandemic era unemployment claims triggered the modernization effort, which also introduced increase in fraudulent schemes. Our team is collaborating with multiple vendors and working closely with agency stakeholders to update and improve the experience and workflow for applicants, while updating the legacy mainframe system to use modern APIs.',
        link: 'https://nj.gov/labor/myunemployment/before/about/howtoapply/applyonline.shtml',
    },
    {
        title: 'CDC ReportStream',
        tags: ['Healthcare', 'Enterprise Data'],
        description:
            'As part of the pandemic response, the CDC was tasked with improving how Covid test results were reported and delivered to public health agencies. A key part of that effort was the ReportStream tool, which was responsible for receiving, routing and delivering Covid test results. Since then, we’ve worked alongside our partners to augment the application to support sending and receiving any kind of test results or test orders as well as delivering this data in a wide variety of health specifications including HL7 and FHIR.',
        link: 'https://reportstream.cdc.gov/',
    },
    {
        title: 'Simpler Grants.gov',
        tags: ['Healthcare', 'Public Interest', 'Modernization'],
        description:
            'This [open source](https://wiki.simpler.grants.gov/get-involved/get-involved) project is a modernization effort of the the current Grants.gov website and backend systems. It aims to make seeking grants and completing applications seamless and intuitive for grant-eligible organizations, while streamling publishing and monitoring for grantor agencies. Focus is supporting the design and implementation effort.', 
        link: 'https://simpler.grants.gov/'
    },
    {
        title: 'Healthcare Marketplace',
        tags: ['Healthcare', 'Benefits'],
        description:
            'Our staff has experience in key product and engineering leadership roles on HealthCare.gov and MyMedicare.gov projects. We are currently supporting a suite of education tools that help consumers get help shop for healthcare plans and understand their coverage options.',
        link: 'https://www.healthcare.gov/',
    },
    {
        title: 'CMS Infrastructure as a Service',
        tags: ['Healthcare', 'Security'],
        description:
            'In 2018, the Centers for Medicare and Medicaid Services (CMS) embarked on a multi-year effort to modernize the Medicare Fee for Service (FFS) shared systems used to process Medicare fee-for-service claims. As part of this effort, the Operations and System Reliability Engineering (OSRE) team was created to lead this program in the areas of DevSecOps, Infrastructure support, and technical coordination with all Application Development Organization (ADO) teams. This ongoing project defined and applied common infrastructure and site reliability practices across multiple development teams ensuring each team has autonomy while maintaining standards. Focus is providing Infrastructure Engineering and Security Documentation services.',        
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
        tags: ['Public Interest'],
        description:
            'This [open source](https://github.com/focusconsulting/housing-insights) tool provides housing advocates and government officials with insights on the state of affordable housing in Washington, DC. The project started as a Code for DC / CNHED / Greater DC initiative. The tool overlays multiple local and national data sources on top of an interactive map with various filter toggles to better visualize the data. Focus is supporting the ongoing hosting, data update,  and feature development needs for this project.',
        link: 'http://housinginsights.org/#',
    },
    {
        title: 'Marriott Learning Platform',
        tags: ['Workforce Development'],
        description:
            'We built regional and organization wide internal learning and development platforms that emphasized up-skilling and competency based career growth for staff.',
        link: 'https://www.marriott-ld.com/mda',
    },
    {
        title: 'Skills-Based Talent Platform',
        tags: ['Workforce Development'],
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
                columns={[1, 2]}
                invisibleCard={true}
            />
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - Our Work" />