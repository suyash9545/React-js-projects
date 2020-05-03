import React, {Component} from 'react'
import './myStyle.css'

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'Welcome Visiter'
        }
    }

    changemessage()
    {
        this.setState({
            message:''
        })
    }
    show()
    {
        this.setState({
            message:'Welcome Visiter'
        })
    }
    render()
    {
    return(

        <div>
            <h1>{this.state.message}</h1>
            <button className='primary' onClick= {() => this.changemessage()}>Hide</button>
            <button className='primary' onClick= {() => this.show()}>Show</button>


        </div>
    )
        
    }//using this we cas access the props followwing with the name //
}
export default Message;