let highlight = true;

export default function FirstComponent() {
  let styles = {};
  if (highlight){
   styles = {
    color: "red",
    backgroundColor: "green"
    }
  };
  return (
    <div styles={{styles}}>My First Component</div>
  )
}
