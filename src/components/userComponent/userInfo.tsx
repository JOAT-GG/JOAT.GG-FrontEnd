import Image from "next/image";
import Logo from '@/img/JOAT_LOGO.png'
interface Props {
  name: string;
}

const UserInfo = ({name}:{name:string}) => {
  return (
    <>
      <div className="flex flex-row gap-[15px]">
        <div className="w-[100px] h-[100px] border-2 rounded-2xl">
          <Image src={Logo} alt='로고' width={200} height={200} />
        </div>
        <h1 className="text-[24px] font-bold text-white">{name}</h1>
      </div>
      {/*todo: 좋아요 싫어요 넣기.*/}
    </>
  )
}

export default UserInfo
