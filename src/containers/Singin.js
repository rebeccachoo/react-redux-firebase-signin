import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import styled from "styled-components";

const FormAlignComponent = styled.div`
	display: flex;
	flex-direction: row;
	input {
		width: 200px;
		height: 40px;
		border: 1px solid grey;
		border-radius: 5px;
		padding: 10px;
		box-sizing: border-box;
	}
	button {
		background-color: white;
		border: 1px grey solid;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: 10px;
		cursor: pointer;
	}
	button:hover {
		margin-top: 1px;
	}
`;

class Signin extends Component {
	state = { email: "", password: "" };
	onChangeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	submitHandler = (event) => {
		event.preventDefault();
		this.props.onAuth(this.state.email, this.state.password);
	};
	render = () => {
		return (
			<form>
				<FormAlignComponent>
					<input
						type="text"
						name="email"
						value={this.state.email}
						onChange={this.onChangeHandler}
					/>
					<input
						type="text"
						name="password"
						value={this.state.password}
						onChange={this.onChangeHandler}
					/>
					<button onClick={this.submitHandler}>Submit</button>
				</FormAlignComponent>
			</form>
		);
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password)),
	};
};

export default connect(null, mapDispatchToProps)(Signin);
