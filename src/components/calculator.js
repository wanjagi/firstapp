import React from "react";
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";



class Calculator extends React.Component{
    constructor() { 
        super(); 
        // set our default state 
        this.state = { 
          question: '', 
          answer: ''
        } 
        // Bind our handleClick method (sets 'this' explicitly 
        // to refer to this component) We did this because 'this' 
        // would refer to the source of the click events 
        this.handleClick = this.handleClick.bind(this); 
    }


    handleClick(event) {
        const value = event.target.value;
    
        switch (value) {
            case "=": {
                if (this.state.question !== "") {
                    try {
                        const ans = eval(this.state.question);
                        this.setState({ answer: ans !== undefined ? ans : "Math Error", question: "" });
                    } catch (err) {
                        this.setState({ answer: "Math Error" });
                    }
                }
                break;
            }
    
            case "Clear": {
                this.setState({ question: "", answer: "" });
                break;
            }
    
            case "Delete": {
                const str = this.state.question;
                this.setState({ question: str.slice(0, -1) });
                break;
            }
    
            default: {
                this.setState((prevState) => ({ question: prevState.question + value }));
                break;
            }
        }
    }
    


    
    render(){
        
        return(
            <div className="frame">
                <CalculatorTitle value="Calculator"/>
                <div className="mainCalc">
                    <OutputScreen question={this.state.question} answer={this.state.answer}/>
                    <div className="button-row">
                        <Button label={"Clear"} handleClick = {this.handleClick}/>
                        <Button label={"Delete"} handleClick = {this.handleClick}/>
                        <Button label={"."} handleClick = {this.handleClick}/>
                        <Button label={"/"} handleClick = {this.handleClick}/>

                    </div>

                    <div className="button-row">
                        <Button label={"7"} handleClick = {this.handleClick}/>
                        <Button label={"8"} handleClick = {this.handleClick}/>
                        <Button label={"9"} handleClick = {this.handleClick}/>
                        <Button label={"*"} handleClick = {this.handleClick}/>

                    </div>

                    <div className="button-row">
                        <Button label={"4"} handleClick = {this.handleClick}/>
                        <Button label={"5"} handleClick = {this.handleClick}/>
                        <Button label={"6"} handleClick = {this.handleClick}/>
                        <Button label={"-"} handleClick = {this.handleClick}/>

                    </div>
                    <div className="button-row">
                        <Button label={"1"} handleClick = {this.handleClick}/>
                        <Button label={"2"} handleClick = {this.handleClick}/>
                        <Button label={"3"} handleClick = {this.handleClick}/>
                        <Button label={"+"} handleClick = {this.handleClick}/>

                    </div>
                    <div className="button-row">
                        <Button label={"0"} handleClick = {this.handleClick}/>
                        <Button label={"="} handleClick = {this.handleClick}/>
                    </div>

                </div>
            </div>
        );
    }
}
export default Calculator;