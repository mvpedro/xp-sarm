import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type DisabledTooltipWrapperProps = React.PropsWithChildren<{}>

const DisabledTooltipWrapper: React.FC<DisabledTooltipWrapperProps> = ({
  children,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div style={{ display: 'inline-block', cursor: 'not-allowed' }}>
            {React.cloneElement(children as React.ReactElement, {
              disabled: true,
            })}
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
