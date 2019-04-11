import React, { Component } from 'react';

const board = [
    [{position: 'h1', value: 'X', color: 'white'},{position: 'h2', value: 'X', color: 'black'},{position: 'h3', value: 'X', color: 'white'},{position: 'h4', value: 'X', color: 'black'},{position: 'h5', value: 'X', color: 'white'},{position: 'h6', value: 'X', color: 'black'},{position: 'h7', value: 'X', color: 'white'},{position: 'h8', value: 'X', color: 'black'}],
    [{position: 'g1', value: 'X', color: 'black'},{position: 'g2', value: 'X', color: 'white'},{position: 'g3', value: 'X', color: 'black'},{position: 'g4', value: 'X', color: 'white'},{position: 'g5', value: 'X', color: 'black'},{position: 'g6', value: 'X', color: 'white'},{position: 'g7', value: 'X', color: 'black'},{position: 'g8', value: 'X', color: 'white'}],
    [{position: 'f1', value: 'X', color: 'white'},{position: 'f2', value: 'X', color: 'black'},{position: 'f3', value: 'X', color: 'white'},{position: 'f4', value: 'X', color: 'black'},{position: 'f5', value: 'X', color: 'white'},{position: 'f6', value: 'X', color: 'black'},{position: 'f7', value: 'X', color: 'white'},{position: 'f8', value: 'X', color: 'black'}],
    [{position: 'e1', value: 'X', color: 'black'},{position: 'e2', value: 'X', color: 'white'},{position: 'e3', value: 'X', color: 'black'},{position: 'e4', value: 'X', color: 'white'},{position: 'e5', value: 'X', color: 'black'},{position: 'e6', value: 'X', color: 'white'},{position: 'e7', value: 'X', color: 'black'},{position: 'e8', value: 'X', color: 'white'}],
    [{position: 'd1', value: 'X', color: 'white'},{position: 'd2', value: 'X', color: 'black'},{position: 'd3', value: 'X', color: 'white'},{position: 'd4', value: 'X', color: 'black'},{position: 'd5', value: 'X', color: 'white'},{position: 'd6', value: 'X', color: 'black'},{position: 'd7', value: 'X', color: 'white'},{position: 'd8', value: 'X', color: 'black'}],
    [{position: 'c1', value: 'X', color: 'black'},{position: 'c2', value: 'X', color: 'white'},{position: 'c3', value: 'X', color: 'black'},{position: 'c4', value: 'X', color: 'white'},{position: 'c5', value: 'X', color: 'black'},{position: 'c6', value: 'X', color: 'white'},{position: 'c7', value: 'X', color: 'black'},{position: 'c8', value: 'X', color: 'white'}],
    [{position: 'b1', value: 'X', color: 'white'},{position: 'b2', value: 'X', color: 'black'},{position: 'b3', value: 'X', color: 'white'},{position: 'b4', value: 'X', color: 'black'},{position: 'b5', value: 'X', color: 'white'},{position: 'b6', value: 'X', color: 'black'},{position: 'b7', value: 'X', color: 'white'},{position: 'b8', value: 'X', color: 'black'}],
    [{position: 'a1', value: 'X', color: 'black'},{position: 'a2', value: 'X', color: 'white'},{position: 'a3', value: 'X', color: 'black'},{position: 'a4', value: 'X', color: 'white'},{position: 'a5', value: 'X', color: 'black'},{position: 'a6', value: 'X', color: 'white'},{position: 'a7', value: 'X', color: 'black'},{position: 'a8', value: 'X', color: 'white'}],
    
    
    
    
    
    
    
];

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            view: true,
            
        }
    }



    render() {
        return (
          <div>
            <h2>chess board</h2>
            <button onClick={this.everyOther}>try</button>
            <div>
              {board.map(row => 
              <div>{row.map(column => 
              <div className='horizontal-row' style={{background: column.color}}>{column.position}
              </div>)}
              </div>)
        }
            </div>
          </div>
        );
    }
}