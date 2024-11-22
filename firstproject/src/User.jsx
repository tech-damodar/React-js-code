export function User (props) {
    console.log(props.name)
  return (
    <div className="user">
        <h1>{props.name}</h1>
        <h2>B.Tech</h2>
        <p>rahul is a full stake developer</p>
    </div>
  )
}

//user(12)
