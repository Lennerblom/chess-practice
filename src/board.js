import React, { Component } from 'react';
import Rook from './pieces/rook';

const board = [
    [{position: 'h1', value: <Rook/>, color: 'white'},{position: 'h2', value: 'X', color: 'gray'},{position: 'h3', value: 'X', color: 'white'},{position: 'h4', value: 'X', color: 'gray'},{position: 'h5', value: 'X', color: 'white'},{position: 'h6', value: 'X', color: 'gray'},{position: 'h7', value: 'X', color: 'white'},{position: 'h8', value: 'X', color: 'gray'}],
    [{position: 'g1', value: 'X', color: 'gray'},{position: 'g2', value: 'X', color: 'white'},{position: 'g3', value: 'X', color: 'gray'},{position: 'g4', value: 'X', color: 'white'},{position: 'g5', value: 'X', color: 'gray'},{position: 'g6', value: 'X', color: 'white'},{position: 'g7', value: 'X', color: 'gray'},{position: 'g8', value: 'X', color: 'white'}],
    [{position: 'f1', value: 'X', color: 'white'},{position: 'f2', value: 'X', color: 'gray'},{position: 'f3', value: 'X', color: 'white'},{position: 'f4', value: 'X', color: 'gray'},{position: 'f5', value: 'X', color: 'white'},{position: 'f6', value: 'X', color: 'gray'},{position: 'f7', value: 'X', color: 'white'},{position: 'f8', value: 'X', color: 'gray'}],
    [{position: 'e1', value: 'X', color: 'gray'},{position: 'e2', value: 'X', color: 'white'},{position: 'e3', value: 'X', color: 'gray'},{position: 'e4', value: 'X', color: 'white'},{position: 'e5', value: 'X', color: 'gray'},{position: 'e6', value: 'X', color: 'white'},{position: 'e7', value: 'X', color: 'gray'},{position: 'e8', value: 'X', color: 'white'}],
    [{position: 'd1', value: 'X', color: 'white'},{position: 'd2', value: 'X', color: 'gray'},{position: 'd3', value: 'X', color: 'white'},{position: 'd4', value: 'X', color: 'gray'},{position: 'd5', value: 'X', color: 'white'},{position: 'd6', value: 'X', color: 'gray'},{position: 'd7', value: 'X', color: 'white'},{position: 'd8', value: 'X', color: 'gray'}],
    [{position: 'c1', value: 'X', color: 'gray'},{position: 'c2', value: 'X', color: 'white'},{position: 'c3', value: 'X', color: 'gray'},{position: 'c4', value: 'X', color: 'white'},{position: 'c5', value: 'X', color: 'gray'},{position: 'c6', value: 'X', color: 'white'},{position: 'c7', value: 'X', color: 'gray'},{position: 'c8', value: 'X', color: 'white'}],
    [{position: 'b1', value: 'X', color: 'white'},{position: 'b2', value: 'X', color: 'gray'},{position: 'b3', value: 'X', color: 'white'},{position: 'b4', value: 'X', color: 'gray'},{position: 'b5', value: 'X', color: 'white'},{position: 'b6', value: 'X', color: 'gray'},{position: 'b7', value: 'X', color: 'white'},{position: 'b8', value: 'X', color: 'gray'}],
    [{position: 'a1', value: 'X', color: 'gray'},{position: 'a2', value: 'X', color: 'white'},{position: 'a3', value: 'X', color: 'gray'},{position: 'a4', value: 'X', color: 'white'},{position: 'a5', value: 'X', color: 'gray'},{position: 'a6', value: 'X', color: 'white'},{position: 'a7', value: 'X', color: 'gray'},{position: 'a8', value: 'X', color: 'white'}],  
    
];

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            view: true,
            
        }
    }

  newGame = () => {
      //set up the board by loading the pieces into the state values
      //need to make and import in each of the pieces
      //the matrix will be available for the pieces to compare their positions against for when they move.
      board[0].value = Rook;
  }

    render() {
        return (
          <div>
            <h2>chess board</h2>
            <div>
              {board.map(row => 
              <div>{row.map(column => 
              <div className='horizontal-row' placeholder={column.position} style={{background: column.color}}>{column.value}
              </div>)}
              </div>)
        }
            </div>
            <Rook/>
            <button onclick={this.newGame}>start</button>
          </div>
        );
    }
}