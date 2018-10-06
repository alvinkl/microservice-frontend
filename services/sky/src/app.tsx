import * as React from 'react';
import { hydrate } from 'react-dom';
import { SkySearch } from './Search';

// export const search = hydrate(<SkySearch />, document.querySelector('#fragment-sky-root'));

export class SkyMainApp extends React.Component<any, any> {
	render() {
		// const { children } = this.props;
		return (
			<div>
				sky main app
				<div>children</div>
			</div>
		);
	}
}
