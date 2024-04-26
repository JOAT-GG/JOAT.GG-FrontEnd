'use client'



import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);




const TotalWinRate =  ({totalWinRate}:{totalWinRate: { wins:number, looses:number, rate:number }}) => {
  console.log('totalWinRate',totalWinRate)

  const CenterTextPlugin = {
    id: 'centerTextPlugin',
    beforeDraw: (chart) => {
      const { ctx, chartArea: { left, right, top, bottom, width, height } } = chart;
      ctx.save();
      ctx.font = '18px sans ';
      ctx.fillStyle = 'rgba(54, 162, 235, 0.8)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${totalWinRate.rate}%`, width / 2, 160 / 2);
      ctx.restore();
    }
  }


  const data = {
    datasets: [
      {
        data: [totalWinRate.wins, totalWinRate.looses],
        cutout: '70%',
        backgroundColor: [
          'rgb(39,158,240)',
          'rgb(251,59,99)',

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {

      centerTextPlugin: CenterTextPlugin
    }
  };

  return (
    <>
      <div className="flex flex-col">
          <span className="text-center text-sm text-gray-400">{totalWinRate.wins+totalWinRate.looses}전 {totalWinRate.wins}승 {totalWinRate.looses}패</span>
          <Doughnut data={data} options={options} width={150} height={150} plugins={[CenterTextPlugin]} />
      </div>
    </>
  )
}

export default TotalWinRate ;
// interface Match {
//   match_id: string;
//   win: boolean;
//   date: string;
//   champion: string;
//   position: string;
// }
// interface ChampionWinRates {
//   [champion: string]: string;
// }
//
// interface PositionWinRates {
//   [position: string]: string
// }
//
// const winRateJson = [
//   {
//     "match_id": "KR_7041307770",
//     "win": true,
//     "date": "2024-04-23 13:45:18",
//     "champion": "Sejuani",
//     "position": "JUNGLE"
//   },
//   {
//     "match_id": "KR_7041234339",
//     "win": false,
//     "date": "2024-04-23 13:02:11",
//     "champion": "XinZhao",
//     "position": "JUNGLE"
//   },
//   {
//     "match_id": "KR_7037591300",
//     "win": false,
//     "date": "2024-04-20 15:51:31",
//     "champion": "Gwen",
//     "position": "JUNGLE"
//   },
//   {
//     "match_id": "KR_7037297606",
//     "win": true,
//     "date": "2024-04-20 13:37:19",
//     "champion": "Gwen",
//     "position": "JUNGLE"
//   },
//   {
//     "match_id": "KR_7037016692",
//     "win": false,
//     "date": "2024-04-20 11:15:30",
//     "champion": "Nidalee",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7036976578",
//     "win": false,
//     "date": "2024-04-20 10:51:56",
//     "champion": "Ashe",
//     "position": "MIDDLE"
//   },
//   {
//     "match_id": "KR_7034541267",
//     "win": false,
//     "date": "2024-04-18 14:33:52",
//     "champion": "Elise",
//     "position": "JUNGLE"
//   },
//   {
//     "match_id": "KR_7032304831",
//     "win": true,
//     "date": "2024-04-16 14:40:30",
//     "champion": "Sejuani",
//     "position": "JUNGLE"
//   },
//   {
//     "match_id": "KR_7030996380",
//     "win": true,
//     "date": "2024-04-15 13:03:53",
//     "champion": "XinZhao",
//     "position": "JUNGLE"
//   },
//   {
//     "match_id": "KR_7028584520",
//     "win": true,
//     "date": "2024-04-13 16:59:03",
//     "champion": "Aphelios",
//     "position": "MIDDLE"
//   },
//   {
//     "match_id": "KR_7028560153",
//     "win": false,
//     "date": "2024-04-13 16:38:20",
//     "champion": "DrMundo",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7028520473",
//     "win": true,
//     "date": "2024-04-13 16:15:10",
//     "champion": "Singed",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7028465829",
//     "win": true,
//     "date": "2024-04-13 15:46:34",
//     "champion": "Vladimir",
//     "position": "MIDDLE"
//   },
//   {
//     "match_id": "KR_7022826804",
//     "win": true,
//     "date": "2024-04-09 16:54:36",
//     "champion": "Rakan",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7022806317",
//     "win": false,
//     "date": "2024-04-09 16:35:02",
//     "champion": "Blitzcrank",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7022761295",
//     "win": true,
//     "date": "2024-04-09 16:07:17",
//     "champion": "Pyke",
//     "position": "TOP"
//   },
//   {
//     "match_id": "KR_7022586775",
//     "win": true,
//     "date": "2024-04-09 14:42:12",
//     "champion": "Ezreal",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7020223472",
//     "win": true,
//     "date": "2024-04-07 15:04:37",
//     "champion": "Elise",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7018320915",
//     "win": false,
//     "date": "2024-04-06 13:41:26",
//     "champion": "Viego",
//     "position": "NONE"
//   },
//   {
//     "match_id": "KR_7018268722",
//     "win": false,
//     "date": "2024-04-06 13:16:10",
//     "champion": "Belveth",
//     "position": "NONE"
//   }
// ]
//
//
// //최근 20경기 승률 계산
//
// const calWinRate = (matches: Match[]) => {
//   const totalMatches = matches.length;
//   const wins = matches.filter(match => match.win).length
//   const winRate = (wins / totalMatches) * 100;
//   return winRate.toFixed(2)
// }
//
// const winRate= calWinRate(winRateJson);
// console.log('최근 20경기 승률', winRate)
//
// //20경기 챔피언 별 승률 계산하기
// const calChampionWinRate = (matches:Match[]):ChampionWinRates => {
//   const championWins: { [champion: string]: number } = {};
//   const championMatches: { [champion: string]: number } = {};
//
//   matches.forEach(match => {
//     const { champion, win } = match;
//     championWins[champion] = (championWins[champion] || 0) + (win ? 1 : 0);
//     championMatches[champion] = (championMatches[champion] || 0) + 1;
//   });
//
//   const championWinRates: ChampionWinRates = {};
//   Object.keys(championWins).forEach(champion => {
//     const wins = championWins[champion];
//     const totalMatches = championMatches[champion];
//     championWinRates[champion] = ((wins / totalMatches) * 100).toFixed(2);
//   });
//
//   return championWinRates;
// }
// const championWinRates = calChampionWinRate(winRateJson);
//
// //포지션별 승률
// const calPositionWinRate = (matches: Match[]):PositionWinRates => {
//   const positionWins: { [position:string]: number} = {};
//   const positionMatches: { [position: string] : number } ={};
//
//   matches.forEach(match => {
//     const { position, win } = match;
//     positionWins[position] = (positionWins[position] || 0) + (win ? 1 : 0);
//     positionMatches[position] = (positionMatches[position] || 0) + 1;
//   });
//
//   const positionWinRates: PositionWinRates = {};
//   Object.keys(positionWins).forEach(position => {
//     const wins = positionWins[position];
//     const totalMatches = positionMatches[position];
//     positionWinRates[position] = ((wins / totalMatches) * 100).toFixed(2);
//   });
//
//   return positionWinRates;
// }
//
// const positionWinRates = calPositionWinRate(winRateJson);
//
//
//
//
// console.log('챔피언 별 승률:', championWinRates);
// console.log('포지션 별 승률:', positionWinRates);
