import React, { Component, PropTypes } from 'react';
import Box from './Box';
import rocky from '../../Images/Rocky.svg'

class Player extends Component {    
    handleKeyDown = (e) => {
        let newDirection;
        
        switch(e.keyCode) {
            case 37:
                newDirection = { top: 0, left: -1 , dir: 'LEFT'};
                break;
            case 38:
                newDirection = { top: -1, left: 0 , dir: 'UP'};
                break;
            case 39:
                newDirection = { top: 0, left: 1, dir: 'RIGHT'};
                break;
            case 40:
                newDirection = { top: 1, left: 0, dir: 'DOWN' };
                break;
            default:
                return;
        }

        this.props.handlePlayerMovement(newDirection);
    }
    
    render() {        
        const { position: { top, left }} = this.props;
        const styleBox = {
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: top + 'px',
            left: left + 'px',
            transition: 'all 0.1s ease'
        }
        return (
            <img src={rocky} alt='a cat'  ref={ n => { this.player = n }} 
                style = {styleBox}
            />
        );
    }
    
    componentDidMount() {
        window.onkeydown = this.handleKeyDown;
    }
}

export default Player;