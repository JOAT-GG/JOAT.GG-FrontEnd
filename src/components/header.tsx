import Link from "next/link";
import styled from "@emotion/styled";
import { cva, VariantProps } from "class-variance-authority";

const headerVariants = cva("", {
    variants: {
        size: {
            sm: "sm",
            md: "md",
            lg: "lg",
            xl: "xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

const StyledHeader = styled.header`
    display: flex;
    padding-top: 1rem;
`;

const StyledLink = styled(Link)`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #fff;
    text-decoration: none;
`;
export interface HeaderProps extends VariantProps<typeof headerVariants> {}
// className="flex flex-row max-w-7xl mt-4 m-[auto]"
const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledLink href="/">JOAT.GG</StyledLink>
            </StyledHeader>
        </>
    );
};

export default Header;
