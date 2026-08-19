function Welcome(props) {
  // console.log(props)
  // return <h2>Welcome, Andrew!</h2>;
  return <h2>Welcome, {props.name} aka {props.alias}!</h2>;
}

export default Welcome;