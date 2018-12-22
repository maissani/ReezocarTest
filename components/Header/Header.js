import PropTypes from 'prop-types'

import './Header.scss'

const Header = ({ title, description }) => (
	<div className="header">
		<div className="showcase">
			<div className="title">{title}</div>
			<div className="description">{description}</div>
		</div>
	</div>
)

Header.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default Header
