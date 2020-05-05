import React, { Component } from 'react';
var ques = [
    {
        statement: 'What is the current year?',
        name:'year',
        options: [2020,2021,2022,2023],
        ans: 2020,
    },
    {
        statement: 'What is the current Month?',
        name:'month',
        options: ['June', 'July', 'May','August'],
        ans: 'May',
    }
]
class Question extends Component{
    state = {
        current : 0,
        total: 1,
        selected: null,
    }

    nextHandler = () => {
        let update = this.state.current  + 1;
        this.setState({
            current: update,
        })
    }

    backHandler = () => {
        let update = this.state.current - 1;
        this.setState({
            current: update,
        })
    }

    submitHandler = () => {
        alert('Submitted');
    }

    handleChange = (event) => {
        this.setState({
            selected: event.target.value,
        }, () => {console.log(this.state.selected)});
    }

    showAns = () => {
       let ans = [];
       for(var i = 0; i < ques.length; i++){
       ans.push(ques[i].ans);
       }
        alert("answers : ".concat(ans));
    }

    render(){
        const option = ques[this.state.current].options.map((item, index) =>{
        return <div key={index}>
                <input name="group" defaultChecked={false} onChange={this.handleChange} value={item} type='radio'/>{item}
            </div>
        })
        return( 
            <div>
                <div>
                    {
                        ques[this.state.current].statement
                    }
                </div>
                <div>
                    {
                        option
                    }
                </div>
                {
                    this.state.current != this.state.total ? 
                    <button onClick={this.nextHandler}>Next</button> :
                    <React.Fragment>
                        <button onClick={this.submitHandler}>Submit</button>
                        <button onClick={this.backHandler}>Previous</button>
                        <button onClick={this.showAns}>Show Ans</button>
                    </React.Fragment>   
                }
                {
                    this.state.selected == null ?
                    <div>Please Select</div>
                    :
                    <div>
                        {this.state.selected == ques[this.state.current].ans ? 'Correct' : 'wrong'}
                    </div>
                }
    
            </div>
        )
    }
}

export default Question;