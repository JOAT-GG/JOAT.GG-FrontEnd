import Skeleton from "@/components/skeleton";
import UserInfo from "@/components/userComponent/userInfo";
import UserTierData from "@/components/userComponent/userTierData";

const summoners = ({ params }: { params: { id: string }}) => {
  console.log('id',params.id)
  const tierData = [
    {
      Title: '솔로랭크',
      Tier: 'Grandmaster',
      LP: 335,
      Win: '137승 142패',
      Rate: '49%'
    },
    {
      Title: '자유랭크',
      Tier: 'Diamond',
      LP: 25,
      Win: '5승 2패',
      Rate: '70%'
    },

  ]
  return (
    <>
      <div className="max-w-7xl mt-10 m-[auto]">
        <UserInfo name={decodeURI(params.id)}/>
        {/*2줄로 나눔*/}
        <div className="mt-10 flex flex-col gap-3">
          {tierData.map(({Title,Tier,LP, Win, Rate},key:number) => (
              <UserTierData
                Title={Title}
                Tier={Tier}
                LP={LP}
                Win={Win}
                Rate={Rate}
              />
          ))}
        </div>
      </div>
    </>
  )
}
export default summoners;
