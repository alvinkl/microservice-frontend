import * as React from 'react';
import { AppContext } from '../../interface/AppContext';

export class RoomsSearch extends React.Component<any, any> {
	static async getInitialProps(appContext: AppContext) {
		console.log('appContext', appContext);

		return {};
	}

	render() {
		// console.log(this.props);

		return (
			<div
				style={{
					backgroundColor: 'blue',
					display: 'inline-block',
					float: 'left',
					maxWidth: '50%',
				}}>
				<h1>Rooms Search</h1>
			</div>
		);
	}
}
