import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  Compteur from './Compteur/Compteur.js';

class App extends Component  {
  constructor(props){
    super(props);
  this.state={
    RIP:"**** **** **** **** ",
    Name:"folen" ,
    Date:12/5 ,
    incr:0,
  };
}




  render() {

    this.change = () => {
      
    
      let r=document.getElementById("rip").value ;
      let d=document.getElementById("date").value ;
      let n=document.getElementById("name").value ;
       
    if ((r!="")||(d!="")||(n!="")){
      let I=this.state.incr +1
       
       this.setState({incr:I})
    }
    
    
   if (r==""){
    alert("le RIP est vide");
  
    }
    else if ((r.length<16)||(r.length>16)) {

      alert("the RIP must be 16 characters")
    }
    else{
      r=r.slice(0,4)+" "+r.slice(4,8)+" "+r.slice(8,12)+" "+r.slice(12,16)
      this.setState({ RIP: r  });
    }
    
      
       
        if (d!==""){
        d=d[0]+d[1]+"/"+d[2]+d[3];
        this.setState({ Date: d });
        }

        if  (n.length>=20) {

          alert("the name must be less than 20 characters")
        }
        else 
        {
          this.setState({ Name: n });
        
        
        }

    
      }
  return (
    <div className="head">
      <div className="App">
        <p style={{textAlign:"right",fontFamily:"bold", color:"white", fontSize:"20px" }}>Company Name</p>
        <div className="sim">
        
        <img style={{width:"50px" , height:"30px"}} src="https://t3.ftcdn.net/jpg/00/76/54/60/500_F_76546001_fEMIgXIZEYF5HiNXwXzP0gI83FFCQSqv.jpg"/>
         </div>
        <p style={{textAlign:"left", color:"white"}}>{this.state.RIP}</p>
        <p style={{textAlign:"right", color:"white"}}>{this.state.Date}</p>
      
        <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeTCdFfB8m4qd71qfSocmbZeEBQg1WspYAr8cMqB1ZDm2z3cp"/>

        <p style={{/*varticalAlign:"sub" ,*/ color:"white"}}>{this.state.Name}</p>
        
      
       </div>  
      
            <div class="input-group input-group-lg" style={{marginTop:"15px"}}>
            <center>
              <input type="text" id="rip" class="form-control" placeholder="RIP" name="search"/><br/>
              <input type="text" id="date" class="form-control" placeholder="xx/yy" name="search"/><br/>
              <input type="text" id="name" class="form-control" placeholder="Name" name="search"/><br/>
              <button type="button" class="btn btn-primary" onClick={()=>this.change()}>Change</button>
              </center>
              <p>le nombre de changement est {this.state.incr}</p> 

           </div>
           <div>
       <Compteur />
       </div>
   
    </div>
  );
  }
}


export default App;
