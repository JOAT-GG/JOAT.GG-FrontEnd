"use client";

import Image from "next/image";
import Logo from "../img/JOAT_LOGO.png";
import searchIco from "../img/icons8-수색.svg";
import FlexContainer from "@/components/flexContainer";
import styled from "@emotion/styled";

const StyledDivSearchBox = styled.div`
    margin: 80px 82px 0 82px;
    display: flex;
    align-items: center;
    width: 560px;
    height: 60px;
    gap: 1rem;
    border-radius: 0.25rem;
    padding: 8px 21px 8px 8px;
    background-color: #fff;
`;

const StyledCountriesBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #f5f5f5;
    padding: 13px 12px 13px 14px;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    &:focus,
    &:enabled {
        border: none;
        outline: none;
    }
`;

// .enabled\:focus\:outline-none:focus:enabled {
//     outline: 2px solid transparent;
//     outline-offset: 2px;
// }
const Home = () => {
    return (
        <>
            <FlexContainer direction="column" align="center">
                <Image src={Logo} alt="로고" width={400} height={400} />
                <StyledDivSearchBox>
                    <StyledCountriesBox>
                        <div className="text-[14px] font-semibold">KR</div>
                        <div className="rotate-90">{">"}</div>
                    </StyledCountriesBox>
                    <StyledInput />
                    <Image src={searchIco} alt="검색" width={22} height={22} />
                </StyledDivSearchBox>
            </FlexContainer>
        </>
    );
};

export default Home;

{
    /* <div className="mt-[156px] mx-[82px]  flex flex-col justify-center items-center gap-8">
    <Image src={Logo} alt="로고" width={500} height={500} />
    <StyledDiv>
        <div className="flex flex-row items-center gap-[20px] bg-gray-50 pl-[14px] py-[13px] pr-[12px]">
            <div className="text-[14px] font-semibold">KR</div>
            <div className="rotate-90">{">"}</div>
        </div>
        <input className=" w-full enabled:focus:outline-none" />
        <Image src={searchIco} alt="검색" width={22} height={22} />
    </StyledDiv>
</div>; */
}
