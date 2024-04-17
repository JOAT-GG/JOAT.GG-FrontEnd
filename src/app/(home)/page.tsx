import Image from "next/image";
import Logo from '../../img/JOAT_LOGO.png'
import searchIco from '../../img/icons8-수색.svg'
const Home = () => {
  return (
    <>
     <div className="my-[156px] mx-[82px]  flex flex-col justify-center items-center gap-8">
       <Image src={Logo} alt="로고" width={500} height={500} />
       <div className="flex flex-row w-[560px] h-[60px] gap-4 rounded py-2 pl-2 pr-[21px] bg-white">
         <div className="flex flex-row items-center gap-[20px] bg-gray-50 pl-[14px] py-[13px] pr-[12px]">
           <div className="text-[14px] font-semibold">KR</div>
           <div className="rotate-90">></div>
         </div>
         <input className=" w-full enabled:focus:outline-none" />
         <Image src={searchIco} alt="검색" width={22} height={22} />
       </div>
     </div>
    </>
  )
}


export default Home;
