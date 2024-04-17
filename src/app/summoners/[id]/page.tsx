const summoners = (props) => {
  const {id} = props.params
  console.log('props',id)
  return (
    <div className="max-w-7xl m-[auto]">
      <h1 className='text-white'>소환사id: {id}</h1>
    </div>
  )
}
export default summoners;
