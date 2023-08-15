export default function ETFoot({textFoot}) {
  return (
    <thead>
      <tr>
        {textFoot.map((item, index) => {
          return <th key={index}>{item}</th>
        })}
      </tr>
    </thead>
  )
}
