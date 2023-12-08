function Header({ imgName, name, job }) {
  return (
    <>
      <img src={imgName} alt="A sample" />
      <h1>{name}</h1>
      <h2>{job}</h2>
    </>
  )
}

export default Header
