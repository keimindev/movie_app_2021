class App extends React.Component{
    // put some info which you want to change
    state = {
      count:0
    };
   add = () =>{
    this.setState({ count: 1 });
  
   };
   minus = () =>{
    this.setState({ count : -1 });
   };
  
   render(){
     return (
       <div>
        <h1>Im a class Component {this.state.count}</h1>;
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
       </div>
     )
   }
  }