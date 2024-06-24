import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const DisabledTooltipWrapper = ({ children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div style={{ display: 'inline-block', cursor: 'not-allowed' }}>
            {React.cloneElement(children, { disabled: true })}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Futura Implementação</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default DisabledTooltipWrapper
