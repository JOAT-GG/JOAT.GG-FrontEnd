type TierType = {
  Title: string
  Tier: string
  LP: number
  Win: string
  Rate: string
}

const UserTierData = ({Title, Tier, LP, Win, Rate}:TierType) => {
  console.log(Title,Tier,LP,Win,Rate)
  return (
    <div className="p-[14px] bg-gray-700 w-1/3 rounded-xl">
        <div className="text-white mb-3 pl-2">{Title}</div>
        <div className="flex flex-row">
          <div className="flex flex-row gap-[20px]">
            <div className="w-[65px] h-[65px] rounded-full bg-white" ></div>
            <div>
              <div className="text-white text-xl font-bold">{Tier}</div>
              <div className="text-gray-400 text-[14px]">{LP}LP</div>

              <div className="flex flex-row gap-5">
                <div className="text-[14px] text-gray-400">{Win}</div>
                <div className="text-[14px] text-gray-400">승률{Rate}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserTierData;
