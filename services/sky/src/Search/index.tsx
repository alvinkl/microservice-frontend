import * as React from 'react';

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
					display: 'inline-block',
					height: 100,
					maxWidth: '50%',
					backgroundColor: 'red',
					float: 'left',
				}}>
				<h1>Hello World Sky Search</h1>
			</div>
		);
	}
}
