import { Box, Container, Heading, Text, Link as ChakraLink, Button, SimpleGrid } from "@chakra-ui/react";
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
            title: 'Human-Centered Design',
            description:
                'Our jobs involve taking complicated topics and working to remove the ambiguity; our clients rely on us to work and communicate honestly and efficiently.',
        },
        {
            title: 'Policy Integrated Delivery',
            description:
                "We always come prepared, researching and documenting before raising topics with our clients.  We respect our clients' time by asking questions that get to the root of things faster. ",
        },
        {
            title: 'Data Driven Insights',
            description:
                'Our reputation with our clients is critical to our success as a business and that reputation is built by consistently delivering on what we promise to do.',
        },
        {
            title: 'The Right Technology Tools',
            description:
                'The industry is constantly evolving, and in order to stay relevant we constantly grow our skill sets to serve current and future clients.',
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
          <Heading size="xl">Focus Nava JV</Heading>
        </Container>
      </Box>      
      <Box>
        <Hero
          heading={(
            <Heading
                as="h1"
                color="white"
                fontSize={'6xl'}
                fontWeight={700}
                lineHeight={'120%'}
                mb="6"
            >
              Impactful Digital Services
            </Heading>
          )}
          subHeading={
            <>We assemble strong teams across <ChakraLink isExternal href="https://focusconsulting.io" textDecor="underline">Focus</ChakraLink> and <ChakraLink textDecor="underline" isExternal href="https://navapbc.com">Nava PBC</ChakraLink> to deliver human-centered, high impact, and modern government digital services.</>
          }
          cta={
            <Button
                as={ChakraLink}
                href=""
                backgroundColor={'primary'}
                color={'white'}
                leftIcon={<FaDownload />}
            >
              Capability Statement
            </Button>
          }
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
            {renderAvatar('Rohan Bhobe', 'Partner', '/images/staff/anteneh-avatar-new-sm.png', 'https://www.linkedin.com/in/ant-addis')}
          </SimpleGrid>
          <Text fontSize="2xl">Focus Nava JV I LLC</Text> 
          <Text fontSize="xl">1015 15th St NW, Suite 600</Text>
          <Text fontSize="xl" mb={5}>Washington DC, 20005</Text>
          <Text fontSize="xl" fontWeight="semibold">contracts@focus-digital.io</Text>
        </Container>               
      </Box>
    </Box>
  )
}

export default FocusNavaJVPage;

export const Head: HeadFC = () => <SEO title="Focus Nava JV - Digital Services" />