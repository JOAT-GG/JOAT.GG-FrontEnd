const summoners = (props) => {
  const {id} = props.params
  console.log('props',id)
  return (
    <>
      <h1>소환사id: {id}</h1>
    </>
  )
}
export default summoners;
