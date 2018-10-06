import * as React from 'react';
import { hydrate } from 'react-dom';
import { SkySearch } from './search';

// export const search = hydrate(<SkySearch />, document.querySelector('#fragment-sky-root'));

class SkyMainApp extends React.Component<any, any> {
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

export default SkyMainApp;
