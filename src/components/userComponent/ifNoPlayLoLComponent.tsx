const IfNoPlayLoLComponent = ({dataName, data, color}:{dataName:string, data:string, color:string}) => {
  return (
    <>
      <div className="mt-1 px-4 py-6 w-full bg-gray-800 rounded-md col-span-1">
          <div className="text-[18px] font-light text-gray-300">{dataName}</div>
          <div className={`text-[24px] font-bold ${color}`}>{data}</div>
      </div>
    </>
  )
}

export default IfNoPlayLoLComponent;
