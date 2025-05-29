

export default function FirstComponent({
  showAsHeading = false,
  text = ""
}) {
  let node = null

  if (showAsHeading) {
     node =  <h1>{text}</h1>
  } else {
    node =  <p>{text}</p>
  };
  
  return <div>{node}</div>

}