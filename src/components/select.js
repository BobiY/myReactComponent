import React,{ Component } from "react";
import Menu from "./menu";


export default class Yselect extends Component{
    constructor(props){
        super();
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {
            borderStyle:"select-setion",
            showMeun:false
        }
    }

    handleBlur(){
        this.setState({
            borderStyle:"select-setion",
            showMeun:false
        })
    }

    handleFocus(){
        this.setState({
            borderStyle:"select-setion select-setion-focus",
            showMeun:true
        })
    }

    render(){
        let { borderStyle,showMeun } = this.state
        return (
            <div className = { borderStyle } >
                <input className = "input" onBlur = {this.handleBlur} onFocus = { this.handleFocus }/>
                <span className = "input -value"></span>
                <span className = "select-arrow"></span>
                <Menu show = { showMeun ? "block" : "none" }/>
            </div>
        )
    }
}