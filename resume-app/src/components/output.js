import React, { Component } from 'react'

class output extends Component {

    constructor() {
        super();

        this.state = {
            resume: null,


        };

    }

    componentDidMount() {

        const apiurl = 'http://localhost:3000/resume';
        fetch(apiurl).then(response => response.json()).then((result) => {
            console.log(result)

            this.setState({ resume: result })

        })
    }





    render() {
        console.log(this.state)
        return (
            <div>
                <h1>output</h1>
                {
                    this.state.resume ?
                    <div className="tab">
                        
                        <div className="edit">
                            {
                                this.state.resume.map((item, i) =>
                                    <div>
                                        <h1>{item.name}</h1>
                                        <h5>{item.address},state {item.state}<br></br>{item.city}<br></br>{item.email}</h5>

                                        <div className="summary">

                                            <h2>Summary</h2>
                            <p>{item.summary}</p>
                            <hr></hr>
                            <h2>Education</h2>
                            <p><b>{item.ten}</b>,{item.city},{item.state}</p>
                            <p><b>{item.twelve}</b>,{item.city},{item.state}</p>
                            <p><b>{item.collage}</b></p>
                            <hr></hr>


                            <h2>Hobbies & Intrests</h2>
                            <p>{item.hobbie}</p>
                            <hr></hr>
                            <h2>Skills</h2>
                            <p>{item.skill}</p>
                            <hr></hr>

                                        </div>



                                    </div>

                                )
                            }
                        </div>
                      
                        </div>

                        : <p>plzzzzz wait</p>
                }
                 
            </div>
           
        )
    }
}

export default output
