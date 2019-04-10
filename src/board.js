import React, { Component } from 'react';

const board = [
    [{position: 'a1', value: 'X'},{position: 'a2', value: 'X'},{position: 'a3', value: 'X'},{position: 'a4', value: 'X'},{position: 'a5', value: 'X'},{position: 'a6', value: 'X'},{position: 'a7', value: 'X'},{position: 'a8', value: 'X'}],
    [{position: 'b1', value: 'X'},{position: 'b2', value: 'X'},{position: 'b3', value: 'X'},{position: 'b4', value: 'X'},{position: 'b5', value: 'X'},{position: 'b6', value: 'X'},{position: 'b7', value: 'X'},{position: 'b8', value: 'X'}],
    [{position: 'c1', value: 'X'},{position: 'c2', value: 'X'},{position: 'c3', value: 'X'},{position: 'c4', value: 'X'},{position: 'c5', value: 'X'},{position: 'c6', value: 'X'},{position: 'c7', value: 'X'},{position: 'c8', value: 'X'}],
    [{position: 'd1', value: 'X'},{position: 'd2', value: 'X'},{position: 'd3', value: 'X'},{position: 'd4', value: 'X'},{position: 'd5', value: 'X'},{position: 'd6', value: 'X'},{position: 'd7', value: 'X'},{position: 'd8', value: 'X'}]

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
            
            <div>
              {board.map(row => <div classname='horizontal-row'>{row.map(column => <div classname='horizontal-row'>{column.position}</div>)}</div>)
        }
            </div>
          </div>
        );
    }
}