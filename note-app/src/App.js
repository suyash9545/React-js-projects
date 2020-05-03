import React,{Component} from 'react';
import './App.css';
import Note from './components/note'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       noteText:'',
       notes:[],
    }
  }
  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }
  addOnClick(){
    if(this.state.noteText==='') {return false}
    let noteArr =this.state.notes;//to push the text 
     noteArr.push(this.state.noteText);
    this.setState({noteText:''});

/*     this.textInput.focus();

 */  }
  handleKeyPress=(event)=>{
    if(event.key === 'Enter'){
      let noteArr =this.state.notes;
    noteArr.push(this.state.noteText);
    this.setState({noteText:''});
/*     this.textInput.focus();
 */
    }
  }
 
  deleteNote(index){
    let noteArr =this.state.notes;
    noteArr.splice(index, 1);
    this.setState({notes:noteArr})
  }
  render(){
    let notes = this.state.notes.map((val,key)=>{
      return <Note key={key} text={val}
      deleteMethod={()=>this.deleteNote(key)}/>
    })
   
    return (
     
      <div className="container">
        <div className="header">React Note Application</div>
        {notes}
        <div className="btn" onClick={this.addOnClick.bind(this)}>+</div>
       <input type="text"
       ref={((input)=>{this.textInput = input})}
       className="textInput " value={this.state.noteText}
       onChange={noteText=>this.updateNoteText(noteText)}
       onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }
  }
  

export default App;
