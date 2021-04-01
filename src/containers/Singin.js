import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

const FormAlignComponent = styled.div`
	display: flex;
	flex-direction: row;
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
	handleKeyPress = (event) => {
		if (event.key === "Enter") {
			console.log("enter press here! ");
		}
	};
	render = () => {
		return (
			<form>
				<FormAlignComponent>
					<TextField
						type="text"
						name="email"
						id="standard-basic"
						label="Standard"
						value={this.state.email}
						onChange={this.onChangeHandler}
					/>
					<TextField
						id="standard-basic"
						label="Standard"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.onChangeHandler}
						onKeyPress={this.handleKeyPress}
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={this.submitHandler}
					>
						Submit
					</Button>
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
