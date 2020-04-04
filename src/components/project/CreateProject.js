import React, { Component } from 'react'
import {createProject} from "../../store/actions/projectActions"
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom'

 class CreateProject extends Component {

    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state )
        this.props.history.push('/');
    }

    

    render() {

        const { auth } = this.props;
        if(!auth.uid){
            return(
                <Redirect to="signin"/>
            )
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5>New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title" >Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content" >Content</label>
                        <input type="text" id="content" className="materalize-textarea" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn btn-lighten-1">Save Project</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) =>  dispatch(createProject(project)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);