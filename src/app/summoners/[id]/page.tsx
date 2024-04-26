import UserInfo from "@/components/userComponent/userInfo";
import UserTierData from "@/components/userComponent/userTierData";
import UserDHM from "@/components/userComponent/userDHM";
import IfNoPlayLOL from "@/components/userComponent/ifNoPlayLol";

import TotalWinRate from "@/components/userComponent/jsonDataComponent/TotalWinRate";
import ChampionWinRate from "@/components/userComponent/jsonDataComponent/championWinRate";


const getWinRate = async () => {
  const res = await fetch('http://211.205.161.133:8080/api/v1/matchResult')
  const json = await res.json();
  return json;
}


const Summoners = async ({ params }: { params: { id: string }}) => {
  const { totalWinRate, championWinRate, positionWinRate } = await getWinRate();

  console.log('totalWinRate: ',totalWinRate)
  console.log('championWinRate: ',championWinRate)
  console.log('positionWinRate: ',positionWinRate)

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
        <div className="block mt-10">
          <div className="inline-block align-top mr-2 ">
            {tierData.map(({Title,Tier,LP, Win, Rate}) => (
                <UserTierData
                  key={Rate}
                  Title={Title}
                  Tier={Tier}
                  LP={LP}
                  Win={Win}
                  Rate={Rate}
                />
            ))}
          </div>
          <div className="inline-block align-top mt-2 ">
            <UserDHM />
            <div className="flex flex-row mt-2 bg-gray-700 p-[16px] rounded-md w-[842px]">
              <TotalWinRate totalWinRate={totalWinRate}/>
              <ChampionWinRate championWinRate={championWinRate} />
            </div>
            <IfNoPlayLOL />
          </div>
        </div>
      </div>
    </>
  )
}
export default Summoners;
