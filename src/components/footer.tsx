import styled from "@emotion/styled";

const StyledFooter = styled.footer`
    height: 100px;
    margin-bottom: 90px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="text-[28px] text-gray-400 font-bold opacity-[70%]">JOAT.GG</div>
            <div className="text-[18px] text-gray-600 font-bold">uahannam</div>
        </StyledFooter>
    );
};

export default Footer;
