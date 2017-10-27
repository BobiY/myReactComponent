import React from 'react';
import { render } from 'react-dom';
import Yselect from './components/select';
import Option from "./components/menu";
import './style/index.css'
import Image from './image/timg.jpg'
class Select extends React.Component{
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

        return  arr.map( ( val ) => <Option key = { val.key }>{ val.value }</Option> )
    }

    render(){
        return (<div> 
            <Yselect >
            { this.renderOption() }
            </Yselect >
                </div> )
        
    }
}



render(<Select />,document.getElementById('app'))