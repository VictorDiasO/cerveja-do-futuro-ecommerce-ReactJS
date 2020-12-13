import React, { Component } from 'react';

export default class OurProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {value: 'Hellooo!'};
      }
    
      render() {
        return (
          <div className="oi">
            {this.state.value}
          </div>
        );
      }
}