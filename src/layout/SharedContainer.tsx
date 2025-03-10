import * as React from 'react'
import { Box } from "@chakra-ui/react"

interface SharedContainerProps {
  bgColor: string,
  color?: string,
  py: string | string[] | number[],
  children: any,
}

const SharedContainer = ({ bgColor, color = "black", py, children }: SharedContainerProps) => {
  return (
    <Box
      bgColor={bgColor}
      color={color}
      w="100%"
    >
      <Box
        px={[6, 48]}
        py={py}
        mx="auto"
        maxW={"1512px"}
      >
        {children}
      </Box>      
    </Box>
  )
}

export default SharedContainer;