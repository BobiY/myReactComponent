import React,{ Component } from "react";
import Menu from "./menu";

// 协调下拉菜单和输入框的组件
export default class SelectWarp extends Component{
    constructor(props){
        super()
    }
   
    render(){
        const { MenuShow } = this.props;
        return (
            <div>
                {this.props.children}
                <Menu show = { MenuShow ? "block" : "none" }/>
            </div>
        )
    }
}