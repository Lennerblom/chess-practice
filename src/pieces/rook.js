import React from 'react';
import Pieces from './pieces';

export default class Rook extends Pieces {
    constructor(props){
        super(props);
        this.state = {
            image: 'Rk'
        }
    }
    render() {
        return (
            <div>{this.state.image}</div>
            
        );
    }
}
