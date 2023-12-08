import Card from './Card'

function Section({ name, content }) {
  return (
    <Card>
      <h3>{name}</h3>
      <hr />
      <p>{content}</p>
    </Card>
  )
}

export default Section
