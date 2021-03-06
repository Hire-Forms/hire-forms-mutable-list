import React from "react";

import List from "hire-forms-list";
import Input from "hire-forms-input";

class MutableList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: ""
		};
	}

	handleInputChange(value) {
		this.setState({inputValue: value});
	}

	handleInputKeyDown(ev) {
		if (ev.keyCode === 13 && this.state.inputValue.length > 0) {
			this.props.values.push(this.state.inputValue);
			this.props.onChange(this.props.values);

			this.setState({inputValue: ""});
		}
	}

	handleChange(values) {
		this.props.onChange(values);
	};

	render() {
		return (
			<div className="hire-forms-mutable-list">
				<List
					editable={this.props.editable}
					onChange={this.handleChange.bind(this)}
					ordered={this.props.ordered}
					removable={this.props.removable}
					values={this.props.values} />
				<Input
					onChange={this.handleInputChange.bind(this)}
					onKeyDown={this.handleInputKeyDown.bind(this)}
					placeholder={this.props.placeholder}
					value={this.state.inputValue} />
			</div>
		);
	}
}

MutableList.defaultProps = {
	values: [],
	ordered: false
};

MutableList.propTypes = {
	editable: React.PropTypes.bool,
	onChange: React.PropTypes.func.isRequired,
	ordered: React.PropTypes.bool,
	placeholder: React.PropTypes.string,
	removable: React.PropTypes.bool,
	values: React.PropTypes.array
};

export default MutableList;