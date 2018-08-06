import React from "react";
import { connect } from 'react-redux'
import { updateHobbit } from '../actions'

class EditHobbit extends React.Component {

  state = {
    name: this.props.selectedHobbit.name,
    title: this.props.selectedHobbit.title,
    key_skill: this.props.selectedHobbit.key_skill
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedHobbit.id !== this.props.selectedHobbit.id) {
      this.setState ({
        name: this.props.selectedHobbit.name,
        title: this.props.selectedHobbit.title,
        key_skill: this.props.selectedHobbit.key_skill
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted form')
    this.props.updateHobbit({...this.state, id: this.props.selectedHobbit.id})
  }

  render() {
    console.log(this.state)
    return (
      <div style={{ textAlign: "center" }}>
        <div> </div>
        <form onSubmit={this.handleSubmit}>
          <h5> Name: {this.state.name} </h5>
          <label>
            Title
          </label>
          <input name="title" value={this.state.title} onChange={this.handleChange}/>
          <label>
            Key Skill
          </label>
          <input name="key_skill" value={this.state.key_skill} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedHobbit: state.selectedHobbit
  }
}
const mapDispatchToProps = (dispatch) => {
  updateHobbit: (hobbit) => {dispatch(updateHobbit(hobbit))}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditHobbit)
