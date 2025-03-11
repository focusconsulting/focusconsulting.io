import { Box, Container, Heading, Text, Link as ChakraLink, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { HeadFC, Link, PageProps } from 'gatsby'
import { SEO } from '../components/seo'
import React from "react";
import Hero from "../layout/Hero";
import Section from "../layout/Section";
import { FaDownload } from "react-icons/fa";
import { renderAvatar } from "../utils/ui-utils";

const sections = [
  {
    title: 'Expertise',
    backgroundColor: 'white',
    items: [
        {
          title: 'A Focus on Program Outcomes',
          description:
              'We define clear success metrics to measure success of priority program goals. We proactively identify and mitigate risks throughout the agile development process, so you know we’ll build the right thing, on time and on budget.',
        },
        {
            title: 'Human-Centered Design',
            description:
                'We take our responsibility of building accessible government services for all users seriously. We center our work on human-centered design and research to gain deep insights into user needs and challenges.',
        },
        {
            title: 'Policy Integrated Delivery',
            description:
                "Our work involves translating complex government policy into user-friendly services. We partner with stakeholders and experts to integrate policy expertise with technical considerations for better program outcomes.",
        },        
        {
            title: 'The Right Technology Tools',
            description:
                'We leverage our extensive technology delivery experience to select the best technology tools for the job at hand. This means using mature, well-tested, and preferably open source tools, allowing our teams to focus on program specific workflows sooner.',
        },
    ],
  },
  {
    title: 'Let’s Build Together',
    backgroundColor: 'gray.50',
    items: [
        {
            title: 'Set-Asides',
            bulletPoints: [
              '8(a) Business Development Program',
              'DC Certified Small Business Enterprise',
              'Massachusets Minority Small Business',
              'Vermont Disadvantaged Small Business',
            ],
        },
        {
            title: 'NAICS Codes',
            bulletPoints: [
              '511210: Software Publishers ',
              '518210: Data Processing, Hosting, and Related Services',
              '541511 Custom Computer Programming Services (primary)',
              '541512 Computer Systems Design Services ',
              '541519 Other Computer Related Services',
            ]
        },
        {
            title: 'Company Profile',
            bulletPoints: [
              'SAM UEI: S1ZFC39UHSY1',
              'CAGE Code: 9VDB4',
              'DUNS #: 119264428'
            ]
        },
    ],  
  },
]

const FocusNavaJVPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Box py={5}>
        <Container minW={['container.xs', 'container.xl']} justifyContent="flex-start">
          {/* <Heading size="xl">Focus Nava JV</Heading> */}
          <Image height={{ base: '35px', md: '50px' }} src="/images/index/focus-nava-logo.png" />
        </Container>
      </Box>      
      <Box>
        <Hero
          heading="Impactful Digital Services"
          subHeading="We assemble strong teams across [Focus](https://focusconsulting.io) and [Nava PBC](https://navapbc.com) to deliver human-centered, high impact, and modern government digital services."
          // cta={
          //   <Button
          //       as={ChakraLink}
          //       href="https://drive.google.com/file/d/1eOEd1TeQ-hyGi_5xa_AHj9SXemTcld2k/view?usp=sharing"
          //       backgroundColor={'primary'}
          //       color={'white'}
          //       rightIcon={<FaDownload />}
          //       isExternal
          //   >
          //     Capability Statement
          //   </Button>
          // }
        />  
      </Box>
      {sections.map((section) => {
          return (
              <Section
                  title={section.title}
                  // description={section.description}
                  backgroundColor={section.backgroundColor}
                  items={section.items}
                  // anchor={section.anchor}
              > </Section>
          )
      })}
      <Box as="section" py={{ base: 16, md: 12}} bgColor="#316A50" color="white">
        <Container minW={['container.xs', 'container.xl']} justifyContent="flex-start">
          <Heading marginBottom="10">Leadership</Heading>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            mb={{ base: 12, md: 12 }}
            spacing="10"
          >
            {renderAvatar('Ant Addis', 'President', '/images/staff/anteneh-avatar-new-sm.png', 'https://www.linkedin.com/in/ant-addis')}
            {renderAvatar('Rohan Bhobe', 'Partner', '/images/staff/rohan-avatar.jpeg', 'https://www.linkedin.com/in/rbhobe')}
          </SimpleGrid>
          <Text fontSize="2xl">Focus Nava JV I LLC</Text> 
          <Text fontSize="xl">1015 15th St NW, Suite 600</Text>
          <Text fontSize="xl" mb={5}>Washington DC, 20005</Text>          
          <Text fontSize="xl" fontWeight="semibold">jv@focus-digital.io</Text>
        </Container>               
      </Box>
    </Box>
  )
}

export default FocusNavaJVPage;

export const Head: HeadFC = () => <SEO title="Focus Nava JV - Impactful Government Digital Services" />