import React,{ Component } from "react";
import SelectWarp from "./selectWarp";

export default class Yselect extends Component{
    constructor(props){
        super();
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.showMeuns = this.showMeuns.bind(this);
        this.state = {
            borderStyle:"select-setion",
            showMeun:false,
            childrenKeys:[],
            inputValue:"",
            renderOption:[],
            isShow:false
        }
    }

    handleBlur(){  // 失去焦点的操作
        this.onBlur = setTimeout( () => {
            this.setState({
                borderStyle:"select-setion"
            })
            this.showMeuns(false)  
        },100 )      
    }

    handleFocus(){  // 获取焦点的操作
        this.getFocus()
        this.showMeuns(true);
    }
    
    arrowClick(){  // 点击右侧箭头的操作
        this.handleFocus();
    }



   getFocus(){  // 获取焦点的操作
        clearTimeout( this.onBlur )
        this.setState({
            borderStyle:"select-setion select-setion-focus",
            isShow:false
        })
        this.refs.input.focus() 
   }

   handleChange(e){  // input 值的变化根据值得变化去改变输入框的值

      let value = e.target.value;
      const option = this.arr.filter( ( val ) => val.props.children.indexOf( value ) != -1 )
       this.setState({
           inputValue:value,
           renderOption:option
       })
   }
   
   showMeuns(showMeun){  // 控制菜单开和闭
       this.setState({
            showMeun
       })
   }

    handleClick(key,value){ // 选择下拉框对应选项是的操作
        clearTimeout( this.onBlur )
        this.refs.input.focus();
        this.setState({
            inputValue:value,
            borderStyle:"select-setion select-setion-focus",
            isShow:true
        })
        this.refs.input.focus() 
        this.showMeuns(false)
    }
    
    noneClick(){
        this.setState({
            isShow:false
        })
        this.refs.input.focus() 
    }
    


    componentWillMount(){
        const that = this,arr = [];
        this.arr = [];
        this.props.children.map( val => {
            arr.push( val.key );
            this.arr.push( val )
        } )
        this.setState({
            childrenKeys:arr,
            renderOption:this.props.children
        })
    }

    render(){
        let { borderStyle,showMeun } = this.state;
        let isShow = showMeun ? "isShow menu" : "isNone menu";
        let isSelsct = false;
        let obj = {
            opacity: !this.state.isShow ? 1 : 0
        }
        const children = React.Children.map(this.state.renderOption, (child,index) => {
            isSelsct = false;
           if(child.props.children === this.state.inputValue){
                isSelsct = true;
           }
            return React.cloneElement(child, 
                {
                    keys: this.state.childrenKeys[index],
                    onclick:this.handleClick,
                    focus:this.handleFocus,
                    isSelected:isSelsct
                }
            )
         }
        );
        return (
                <div className = { borderStyle } onFocus = { this.handleFocus } onBlur = { this.handleBlur } >
                    <input className = "input" ref = "input" value = { this.state.inputValue } onChange = { this.handleChange.bind(this) } style = {obj}/>
                    {
                        this.state.isShow ? <div className = "text" onClick = { this.noneClick.bind(this) }>{ this.state.inputValue }</div> : null
                    }
                    <span className = "input -value"></span>
                    <span className = "select-arrow" onClick = { this.arrowClick.bind(this) }></span>
                    <ul className = {isShow}>
                        { children }
                    </ul>
                </div>
                
        )
    }
}


