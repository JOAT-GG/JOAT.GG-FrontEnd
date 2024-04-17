const summoners = ({ params }: { params: { id: string }}) => {
  console.log('id',params.id)
  return (
    <div className="max-w-7xl m-[auto]">
      <h1 className='text-white'>소환사 id:{params.id}</h1>
    </div>
  )
}
export default summoners;
