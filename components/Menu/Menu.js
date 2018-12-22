import PropTypes from 'prop-types'

import './Menu.scss'

const Menu = ({ title }) => (
	<div className="menu">
		<div className="logo">
			<img src="~/../static/img/logo-header-nobaseline.svg" alt={title} />
		</div>
	</div>
)

Menu.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Menu
