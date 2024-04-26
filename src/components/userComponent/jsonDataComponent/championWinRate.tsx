'use client'

const ChampionWinRate = ({championWinRate}:{championWinRate: { name:string, rate:number }}) => {
  console.log('props',championWinRate)
  const sortedChampionWinRate = championWinRate.sort((a, b) => b.rate - a.rate);
  const top3ChampionWinRate = sortedChampionWinRate.slice(0, 3);
  console.log(top3ChampionWinRate);
  return (
    <>
      <div className="flex flex-col">

      </div>
    </>
  )
}

export default ChampionWinRate;
