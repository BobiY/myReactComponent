import React,{ Component } from 'react';

class Option extends Component{
    constructor(props){
        super()
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            key:"",
            value:""
        }
    }
    
    handleClick(){
        console.log("click")
    }

    render(){
        const { value } = this.props;
        return (
            <li className = "option" onClick = { this.handleClick }>
                <span>{ value.value }</span>
            </li>
        )
    }
    componentDidMount(){
        const { value,key } = this.props.value;
        this.setState({
            key,value
        })
    }
}






export default class Menu extends Component{
    constructor(props){
        super()
    }
    
    renderOption(){
        const arr = [];
        for( let i = 0; i< 10; i++ ){
            arr[i] = {
                key:i,
                value:`我是${i}`
            }
        }

        return  arr.map( ( val ) => <Option key = { val.key } value = { val } /> )
    }
    
    render(){
        const { show } = this.props;
        return (
            <div className = "menu" style = {{ display:show }}>
                <ul>
                    { this.renderOption() }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        //console.log(this.refs.option)
    }
}


