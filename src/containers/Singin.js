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
			this.submitHandler(event);
		}
	};
	resetHandler = () => {
		this.setState({ email: "", password: "" });
	};
	render = () => {
		let errorMsg = "";
		let sucMsg = "";
		if (this.props.error) {
			errorMsg = this.props.error.message;
			console.log(errorMsg);
		}
		if (this.props.data) {
			sucMsg =
				"Sign up is successful. Sign in status will expire in " +
				parseInt(this.props.data) / 3600 +
				" hour.";
			// this.props.onAuthInit();
		}
		return (
			<div>
				<div style={{ height: "30px", color: "#D496A7" }}>
					{errorMsg}
					{sucMsg}
				</div>
				<div></div>
				<form>
					<FormAlignComponent>
						<TextField
							type="text"
							name="email"
							id="standard-basic"
							label="Standard"
							value={this.state.email}
							onChange={this.onChangeHandler}
							style={{ width: "200px" }}
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
			</div>
		);
	};
}
const mapStateToProps = (state) => {
	return {
		error: state.error,
		loading: state.loading,
		data: state.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password)),
		onAuthInit: () => dispatch(actions.authenticationInit()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
