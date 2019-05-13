import React,{Component} from 'react'
class Compteur extends Component{
        constructor(props){
        super(props);
        this.state={
        counter: 0
      };
      }

    incr=()=>{
        // let i= this.state.counter ;
        // i=++i;
    this.setState({counter: this.state.counter + 1 }) ;  
    }
    decr=()=>{
        // let d= this.state.counter ;
        // d=--d ;
        this.setState({counter: this.state.counter - 1}) ;
       
      }
    render(){
    return(
        <div>
            
            <button onClick={()=>this.incr()}>+</button>
            <button onClick={()=>this.decr()}>-</button>
            <h2>{this.state.counter.toString()}</h2>

            {/* <p>incrimentation:</p><h2>{this.state.inc}</h2>
          <button onClick={()=>this.incr()}>{this.props.fct}</button>
          <p>decrimentation:</p><h2>{this.state.counter.toString()}</h2>

          <button onClick={()=>this.decr()}>{this.props.fct}</button> */}

        </div>

);

    }
}
export default Compteur; 