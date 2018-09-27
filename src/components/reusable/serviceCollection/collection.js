import React, { Component } from 'react';
import { IMAGE_PATH_EXTENDED } from '../../../config/';

class Collection extends Component{
  renderBox = (data) => {
    console.log(data);
    return(
      data.serviceCollection.entries.map((collect, i) => {
        console.log(collect);
        return(
          <div key={i} className="colum collg-4 colms-6 col-12">
            <div className="row">
              <div className="column collg-2 colms-2 col-2">
                <img alt={i} src={IMAGE_PATH_EXTENDED + collect.image.path} className="img" />
              </div>
              <div className="column collg-10 colms-10 col-10">
                <h6>{collect.title}</h6>
                <p>{collect.content}</p>
              </div>
            </div>
          </div>
        );
      })
    );
  }

  render(){
    const { data } = this.props

    return(
      <div className="row container-big">
        {this.renderBox(data)}
      </div>

    );
  }
}
export default Collection;
