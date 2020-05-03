import React, {Component} from 'react'

class welcome extends Component{
    render()
    {
    return <h1>class {this.props.name} {this.props.hero}</h1>
        
    }//using this we cas access the props followwing with the name //
}
export default welcome;