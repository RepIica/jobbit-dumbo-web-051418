import React from "react";
import Hobbit from "./Hobbit";
import EditForm from "./EditForm";
import { getHobbits } from "../actions"

import hobbitsData from '../data/hobbit_data'
import { connect } from 'react-redux'


class HobbitContainer extends React.Component {

  componentDidMount () {
    //this is where I'd want to fetch to api
    // dispatch an action
    this.props.getHobbits(hobbitsData)
  }

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit hobbit={hobbit} key={hobbit.id}/>;
    });
    return (
      <div>
        <div className="App-logo">Jobbit</div>
        <EditForm />
        <div className="hobbitsContainer">{hobsWithJobs}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hobbits: state.hobbits
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getHobbits: (data) => {dispatch(getHobbits(data))}
//   }
// }

export default connect(mapStateToProps, { getHobbits })(HobbitContainer)
