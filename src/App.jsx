import React from 'react';
import { Component } from 'react';
import Result from './result.jsx';
import KeyPad from './KeyPad.jsx';
import cssClass from './App.css';
import AppTitle from './AppTitle.jsx';

class App extends Component {


    state = {
        result: ""
    };

    isOp = (op) => {
        if (op === '/' || op === '*' || op === '+' || op === '-')
            return true;
        return false;
    }

    onClick = (e) => {
        if (e === "=") {
            this.resultDisplay();
        } else if (e === "AC") {
            this.reset();
        } else if (e === "CE") {
            this.backspace();
        } else {

            let result = this.state.result;
            let last_ch = "";
            if (result.length > 0) {
                last_ch = result[result.length - 1];
            }
            if (e === '.') {
                if (last_ch === '.') {
                    this.setState({ result: this.state.result });
                } else if (this.isOp(last_ch)) {
                    this.setState({ result: this.state.result + '0' + e });
                } else {
                    this.setState({ result: this.state.result + e });
                }
            } else if (this.isOp(e)) {
                if (last_ch === '.' || this.isOp(last_ch)) {
                    const new_result = this.state.result.slice(0, -1);
                    this.setState({ result: new_result });
                } else {
                    this.setState({ result: this.state.result + e });
                }
            } else {
                this.setState({ result: this.state.result + e });
            }



        }

    }

    resultDisplay = (e) => {


        try {
            let result = this.state.result;
            let last_ch = result[result.length - 1];
            if (last_ch === '.' || this.isOp(last_ch)) {
                let res = eval(this.state.result.slice(0, -1));
                this.setState({ result: String(res) });

            } else {
                let res = eval(this.state.result);
                this.setState({ result: String(res) });
            }


        } catch (e) {
            this.setState({
                result: "error"
            })

        }


    }

    reset = () => {
        this.setState({ result: "" });
    }

    backspace = () => {
        let new_result = this.state.result.slice(0, -1);
        this.setState({ result: new_result });
    }

    render() {
        return ( 
            <div className={cssClass.App}>
                
                <AppTitle appTitle={this.props.appTitle}/>
                <Result result = { this.state.result }/> 
                <KeyPad onClick = { this.onClick }/> 
            </div>
        );
    }
}



export default App;