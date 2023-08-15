export default function ETHead({textHead}) {
  return (
    <thead>
      <tr>
        {textHead.map((item, index) => {
          return <th key={index}>{item}</th>
        })}
      </tr>
    </thead>
  )
}
