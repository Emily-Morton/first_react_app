

export default function SecondComponent({
  firstName = "mate",
  age = 1
  }) {
  return (
  <>
  <div>My name is {firstName}, I am {age} years old </div>
    <img src="https://www.rover.com/blog/wp-content/uploads/2019/10/tuxie-960x540.jpg" alt="cat" width={300}></img>
  </>
  )
}
