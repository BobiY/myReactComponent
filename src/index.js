import React from 'react';
import { render } from 'react-dom';
import Yselect from './components/select';
import './style/index.css'

class Select extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return (<div> 
            <Yselect />
                </div> )
        
    }
}



render(<Select />,document.getElementById('app'))