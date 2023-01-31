import {render} from '@testing-library/react';
import { Component } from 'react';
import check from './check.jpg';


export class PackingList extends Component{

    state= {
        userInput: "",
        packingList: []
    }

    onChangeEvent (e) {
        this.setState({ userInput:e})
    }

    addItem(input){
        if (input=== ''){
            alert ('Please enter an item')
        }
        else{
            let listArray = this.state.packingList;
            listArray.push (input)
            this.setState({packingList: listArray, userInput: ""})
        }
    }

    deleteItem(){
        let listArray = this.state.packingList;
        listArray= [];
        this.setState ({packingList: listArray})
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle ('crossed');
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='container'>
                        <input type="text"
                        placeholder='THINGS TO PACK...'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value = {this.state.userInput}/>
                    </div>
                    <div className='container'>
                        <button onClick = {() => this.addItem (this.state.userInput)} className="btn add">ADD</button>
                    </div>
                    <ul>
                        {this.state.packingList.map((item,index) =>
                        <li onClick= {this.crossedWord} key={index} alt="check">
                            <img src={check} width="30px" height="40px" alt="box"/>{item} </li>
                            )}
                    </ul>
                    <div className='container'>
                        <button onClick={() => this.deleteItem()} className="btn delete"> CLEAR</button>
                    </div>
                </form>
            </div>
        )
    }
}