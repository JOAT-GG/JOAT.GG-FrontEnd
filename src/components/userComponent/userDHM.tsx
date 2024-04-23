const userDHM =
  {
    Date: 135,
    Hour: 3237,
    Min : 194220
  }


const UserDHM = async () => {
  return (
    <>
      <div className=" bg-gray-700 p-[16px] rounded-md w-[842px]">
        <div className="border-b-2 border-b-gray-800 pb-2 mb-2">
          <div className="text-gray-200 " >내가 롤을 이렇게 했다니 이럴리 없다...</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="mt-1 p-4  w-full bg-purple-500 rounded-md col-span-2">
            <div className="text-white font-semibold text-2xl ">
              {userDHM.Date}
              <div className="text-[18px] font-light text-gray-200">일</div>
            </div>
          </div>
          <div className="mt-1 p-4 w-full bg-gray-800 rounded-md col-span-1">
            <div className="text-white font-semibold text-2xl ">
              {userDHM.Hour.toLocaleString()}
              <div className="text-[18px] font-light text-gray-200">시간</div>
            </div>
          </div>
          <div className="mt-1 p-4 w-full bg-gray-800 rounded-md col-span-1">
            <div className="text-white font-semibold text-2xl ">
              {userDHM.Min.toLocaleString()}
              <div className="text-[18px] font-light text-gray-200">분</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDHM;
