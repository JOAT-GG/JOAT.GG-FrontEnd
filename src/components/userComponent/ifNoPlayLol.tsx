import IfNoPlayLoLComponent from "@/components/userComponent/ifNoPlayLoLComponent";

const IfNoPlayLOL = () => {

  type Data = {
    dataName: string,
    data: string,
    color: string
  }

  const noLoLData:Data[] = [

    {
      dataName: '2024년 최저임금으로',
      data: '25,031,769원 벌기',
      color: 'text-purple-600'
    },
    {
      dataName: '3분카레',
      data: '58,431개 제조',
      color: 'text-blue-600'
    },
    {
      dataName: '수면',
      data: '365일 꿀잠',
      color: 'text-green-600'
    },
    {
      dataName: '책 읽기',
      data: '487권',
      color: 'text-green-200'
    },
    {
      dataName: '연애 할 수 있는 횟수',
      data: '0회',
      color: 'text-yellow-600'
    },
  ]

  return (
    <>
      <div className="mt-2 bg-gray-700 p-[16px] rounded-md w-[842px]">
        <div className="border-b-2 border-b-gray-800 pb-2 mb-2">
          <div className="text-gray-200 ">롤을 안 했더라면...</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {noLoLData.map(({dataName, data, color}, idx) => (
            <div key={idx}>
              <IfNoPlayLoLComponent
                dataName={dataName}
                data={data}
                color={color}
              />
            </div>
          ))}
          <div className="flex flex-row items-end mt-1 px-4 py-6 w-full bg-gray-950 rounded-md col-span-1">
              <div className="text-[18px] font-bold text-gray-400">새로운 컨텐츠 보기</div>

          </div>
        </div>
      </div>
    </>
  )
}

export default IfNoPlayLOL;
