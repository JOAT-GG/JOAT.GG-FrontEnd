import styled from "@emotion/styled";
import {cva, VariantProps} from 'class-variance-authority'
import {Property} from "csstype";
import Flex = Property.Flex;


const flexContainerStyles = cva('flex', {
  variants: {
    direction: {
      row: 'flex-direction: row;',
      column: 'flex-direction: column;',
    },
    justifyContent: {
      start: 'justify-content: flex-start;',
      center: 'justify-content: center;',
      end: 'justify-content: flex-end;',
    },
    alignItems: {
      start: 'align-items: flex-start;',
      center: 'align-items: center;',
      end: 'align-items: flex-end;',
    },
  },
  compoundVariants: [
    {
      direction: 'row',
      justifyContent: 'start',
      alignItems: 'center',
      class: 'flex-row items-center justify-start',
    },
    // ... 다른 조합 추가 가능
  ],
  defaultVariants: {
    direction: 'row',
    justifyContent: 'start',
    alignItems: 'start',
  },
});

export interface FlexContainerProps extends VariantProps<typeof flexContainerStyles >{}

const StyledFlexContainer = styled.div`
  height: ${props => props.height || 'auto'};
  ${props => props.className && flexContainerStyles({ className: props.className })};
`;


const FlexContainer = ({direction, justifyContent,alignItems, ...props }:FlexContainerProps) => {


  return (
    <StyledFlexContainer className={flexContainerStyles({direction, justifyContent, alignItems})} {...props}>
      
    </StyledFlexContainer>
  )
}

export default FlexContainer
