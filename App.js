import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/Canvas';

const App = React.createClass({
	render() {
		return (
			<div>
				<Canvas />
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

export default App;
