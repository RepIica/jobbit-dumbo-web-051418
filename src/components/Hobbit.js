import React from "react";
import { selectHobbit } from '../actions'

import { connect } from 'react-redux'

const Hobbit = props => {
  // console.log(props)
  return (
    <div className={props.selectedHobbit.id === props.hobbit.id ? 'card card-selected' : 'card'} onClick={() => props.selectHobbit(props.hobbit) }>
      <img alt={props.hobbit.name} src={props.hobbit.image_url} />
      <h3> Name: {props.hobbit.name} </h3>
      <h3> Title: {props.hobbit.title} </h3>
      <h3> Field: {props.hobbit.field} </h3>
      <h3> Seniority: {props.hobbit.seniority} </h3>
      <h3> Position: {props.hobbit.position} </h3>
      <h3> Key Skill: {props.hobbit.key_skill} </h3>
      <h3> Employment Type: {props.hobbit.employment_type} </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedHobbit: state.selectedHobbit
  }
}

export default connect(mapStateToProps, { selectHobbit })(Hobbit)
