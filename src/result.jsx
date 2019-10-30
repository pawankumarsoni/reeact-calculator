import React,{ PureComponent } from 'react';
import './result.css';

class Result extends PureComponent{
render(){
    console.log("Renderring Result");
    return ( 
        <div className="Result">
        <p> Result:  </p>
        <p>{ this.props.result }</p> 
        </div>
    );

}
    
}

export default Result;


// const Result = (props) => {
    
//         console.log("Render  Result");
//         return ( 
//             <div className="Result">
//             <p> Result:  </p>
//             <p>{ props.result }</p> 
//             </div>
//         );
    
        
//     }
    
//     export default React.memo(Result);
