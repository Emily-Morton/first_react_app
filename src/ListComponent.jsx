export default function ListComponent({ data = []}) {
  return (
    <ul>
      {data.map(({name, age, _id}) => <li key={_id}>{name} ({age})</li>)}
    </ul>
  )
}