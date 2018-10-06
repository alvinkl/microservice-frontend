import React = require('react');

export interface SkySearchState {}

export interface SkySearchProps {}

export class SkySearch extends React.Component<SkySearchProps, SkySearchState> {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div
				style={{
					display: 'block',
					height: 100,
					width: '100%',
					backgroundColor: 'red',
				}}>
				<h1>Hello World Sky Search</h1>
			</div>
		);
	}
}
