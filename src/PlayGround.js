import React from 'react';
import Draggable from 'react-draggable';
import './PlayGround.css';
import Box from './components/Box.js'; 
import AddParentButton from './components/AddParentButton.js';


class PlayGround extends React.Component {
  constructor (props) {
    super(props)
    this.createBox = this.createBox.bind(this)
    this.state = {
      boxes: 1
    }
  }

  getChildBox(currBoxNum, totalBoxes) {
    if (currBoxNum >= totalBoxes) {
      return null;
    }

    return <Box 
              boxNum={currBoxNum}
              style={this.dims[currBoxNum]}>
                {this.getChildBox(currBoxNum + 1, totalBoxes)}
            </Box>
  }

  createBox() {
    this.setState({
      boxes: this.state.boxes + 1
    });

    this.dims.unshift({
      height: this.dims[0].height + 75,
      width: this.dims[0].width + 75
    })
  };

  dims = [
    {
      height: 150,
      width: 150
    },
  ]

  render () {
    return (
      <div id="playground">
        <Box 
          style={this.dims[(this.currBoxNum -1) || 0 ]} 
          boxNum={this.currBoxNum}>
          {this.getChildBox(1, this.state.boxes)}
        </Box>
        <AddParentButton clickHandler={this.createBox}/>
      </div>
    );
  }
}

export default PlayGround;
