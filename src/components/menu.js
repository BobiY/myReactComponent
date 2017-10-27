import React,{ Component } from 'react';


export default class Option extends Component{
    constructor(props){
        super()
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            key:"",
            value:""
        }
    }
    
    handleClick(){
        const { key,value } = this.state;
        this.props.onclick(key,value);
    }

    render(){
        const { value,isSelected } = this.props;
        const claName = isSelected ? "option color" : "option"
        return (
            <li className = { claName } onClick = { this.handleClick }>
                <span>{ this.props.children }</span>
            </li>
        )
    }
    componentDidMount(){
        const { children,keys } = this.props;
        this.setState({
            key:keys,value:children
        })
    }
}











