class MiComponente extends React.Component{
  render(){
    return(
      <div>
        <h2>primer app {this.props.name}</h2>
        </div>
    )
  }
}




const element = <h1>Hello, world</h1>;

ReactDOM.render(
       <MiComponente name=". Esta es la primera app ..." />,
    document.getElementById('jareina')
  );