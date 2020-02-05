import React, { Component } from 'react';
/* eslint-disable */
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';




const getList = gql`
  {
      getMetrics
  }
`
console.log(getList)



class List extends Component {
  
  render() {
    var data = this.props.data;
    if(data.loading) {
      return (<div>Loading List</div>)
    } else {
       data.getMetrics.map(lists => {
    return (
<LineChart   width={600} height={300} data={lists}
    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
<XAxis dataKey={this.props.data.getMetrics}/>
<YAxis/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend />
<Line type="monotone" dataKey="waterPresure" stroke="#8884d8" activeDot={{r: 8}}/>
<Line type="monotone" dataKey="hhhhhh" stroke="#82ca9d" />
</LineChart>
      )
    })
  }
 }
 
}  


export default graphql(getList)(List);
