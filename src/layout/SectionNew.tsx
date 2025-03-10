import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Circle,
  Card,
  CardHeader,
  CardBody,
  Button,
  ResponsiveValue,
  HStack,
  Tag,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Icon } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import SharedContainer from './SharedContainer'
import { Link } from 'gatsby'

type Section = {
  label?: string;
  title: string,
  description?: string,
  items?: { title: string, subtitle?: string, description?: string | string[], icon? : any, tags?: string[] }[],
  tagsCategories?: { category: string, tags: { title: string, color: string}[] }[]
  ctas?: { title: string, path: string }[],
}

interface MainProps {
  section: Section,  
  backgroundColor?: string,
  anchor?: string;
  columns?: number[],
  children?: any,
}

const SectionNew = ({ section, backgroundColor, anchor, columns = [1, 2], children }: MainProps) => {
  const { label, title, description, items, tagsCategories, ctas } = section;

  const tagVariants = ["solid", "subtle", "outline"];

  const renderSectionItemIcon = (value: any) => {
    if (!value.icon) {
      return null;
    }

    return (
      <Circle
          size={['35px', '40px']}
          background="icon.red"          
      >
        <Icon
          as={value.icon}
          color="white"
          boxSize={[4, 5]}
        />
      </Circle>
    )
  }

  const renderSectionItemTags = (tags: any[] | undefined) => {
    if (!tags || !tagsCategories) {
      return null;
    }    

    return (
      <HStack spacing="3">
          {tags.map((tagName) => {
            const category = tagsCategories?.find(category => category.tags.find(tag => tag.title === tagName));
            const variant = category ? tagVariants[tagsCategories.indexOf(category)] : "subtle";
            const color = category ? category.tags?.find(tag => tag.title === tagName)?.color : "gray";

            return (
              <Tag
                  variant={variant}
                  colorScheme={color}
              >
                  {tagName}
              </Tag>
            )
          })}
      </HStack>
    )
  }

  const renderSectionItem = (value: any) => {
    return (
      <Card p="8">

        <CardHeader p="0" mb={[1, 2]}>
          {renderSectionItemIcon(value)}
          {renderSectionItemTags(value.tags)}
          <Heading
            fontSize={['2xl', '3xl']}
            fontWeight={[500, 400]}
            mt={[2, 3]}            
          >
            {value.title}
          </Heading>
          {value.subtitle && <Heading
              fontSize={['md', 'lg']}
              fontWeight={600}
              color="gray.600"
              mt={[1, 2]}
            >                
              {value.subtitle}
            </Heading>}
        </CardHeader>        

        <CardBody p="0">
          {Array.isArray(value.description) ? (
            <Stack direction="column" spacing={{ base: 6, md: 6 }}>
              {value.description.map((paragraph: any) => (
                <Text fontSize={["md", "md"]} lineHeight="7"><ReactMarkdown>{paragraph}</ReactMarkdown></Text>
              ))}
            </Stack>
          ) : (
            <Text fontSize={["md", "md"]} lineHeight="7"><ReactMarkdown>{value.description}</ReactMarkdown></Text>
          )}
        </CardBody>        

        {/* {value.bulletPoints && (
          <UnorderedList fontSize="xl">
            {value.bulletPoints.map(bulletPoint => <ListItem>{bulletPoint}</ListItem>)}
          </UnorderedList>
        )}                    */}
      </Card>      
    );
  }

  const renderItems = () => {
    if (items === undefined || items.length === 0) {
      return null;
    }

    return items.map((value) => {
      return renderSectionItem(value);
    });
  }

  const renderCtas = () => {
    const renderCta = (cta: any) => {
      return (
        <Button
            color="teal.800"
            backgroundColor="teal.100"
            borderColor="teal.100"
            fontSize={['xl', '2xl']}
            size={['lg', 'lg']}
            fontWeight={600}
            as={Link}
            to={cta.path}
            variant="outline"
        >
            {cta.title}
        </Button>
      )
    }

    if (ctas === undefined || ctas.length === 0) {
      return null;
    }

    return (
      <Stack direction={['column', 'row']} spacing={[6, 8]} justify={["center", "left"]}>
        {ctas.map((cta: any) => renderCta(cta))}
      </Stack>
    );
  }

  const props: any = {};
  if (anchor) {
    props["id"] = anchor;
  }  
  return (    
    <SharedContainer bgColor={backgroundColor || 'gray.50'} py={[10, 16]}>
      <Box mb={[8, 12]} textAlign={["center", "left"]} {...props}>
        {label && <Text mb={[1, 2]} fontSize={['sm']} color="gray.600" fontWeight={600}>{label.toUpperCase()}</Text> }
        <Heading
          fontSize={['4xl', '5xl']}
          mb={[1, 2]}
        >                
          {title}
        </Heading>            
        {description && <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" w={["100%", "60%"]}><ReactMarkdown>{description}</ReactMarkdown></Text>}            
      </Box>
      {items && (
        <Box mb={{ base: 8, md: 12}}>
          <SimpleGrid columns={columns} spacing={[6, 8]} margin={'auto'}>
            {renderItems()}
          </SimpleGrid>
        </Box>          
      )}          
      <Box mb={{ base: 8, md: 12}}>
        {children}
      </Box>
      {renderCtas()}
    </SharedContainer>
  )
}

export default SectionNew;