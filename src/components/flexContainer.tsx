import styled from "@emotion/styled";
import { cva, VariantProps } from "class-variance-authority";

// cva를 사용하여 FlexContainer의 direction 변형을 정의합니다.
const flexVariant = cva("", {
    variants: {
        direction: {
            row: "row",
            "row-reverse": "row-reverse",
            column: "column",
            "column-reverse": "column-reverse",
        },
        justify: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
        },
        align: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            baseline: "baseline",
            stretch: "stretch",
        },
        wrap: {
            wrap: "wrap",
            "wrap-reverse": "wrap-reverse",
            nowrap: "nowrap",
        },
    },
    defaultVariants: {
        direction: "row",
        justify: "start",
        align: "stretch",
        wrap: "nowrap",
    },
});

// cva로부터 반환된 변형을 styled-components에서 사용합니다.
const StyledFlexContainer = styled.div<VariantProps<typeof flexVariant>>`
    display: flex;

    ${({ direction }) => direction && `flex-direction: ${direction};`}
    ${({ justify }) => justify && `justify-content: ${justify};`}
    ${({ align }) => align && `align-items: ${align};`}
    ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`;
interface flexProps extends VariantProps<typeof flexVariant> {
    children: React.ReactNode;
}

const FlexContainer = ({ children, direction, justify, align, wrap, ...props }: flexProps) => {
    return (
        <>
            <StyledFlexContainer direction={direction} justify={justify} align={align} wrap={wrap} {...props}>
                {children}
            </StyledFlexContainer>
        </>
    );
};

export default FlexContainer;
