import React,{ Component } from 'react';

class AppTitle extends Component{
render(){
    console.log("Renderring Title");
    return ( 
        <div>
        <h1>{this.props.appTitle}</h1>
        </div>
    );

}
    
}

export default AppTitle;