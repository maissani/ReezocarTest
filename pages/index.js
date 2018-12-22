import 'isomorphic-fetch'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import StepShowcase from '../components/StepShowcase/StepShowcase'

import 'semantic-ui-css/semantic.min.css'
import './index.scss'

class Index extends React.Component {
	static async getInitialProps({ store }) {
		return {
			websiteName: 'reezocar',
			title: "LOA (OU LEASING D'OCCASION)",
			description:
				"VOUS PROFITEZ DE LOYERS MINI DÉFIANTS TOUTE CONCURRENCE GRÂCE À LA LOA D'OCCASION !",
			steps: [
				{
					id: 1,
					name: 'Au début du contrat',
					checkpoints: [
						'Définissez cotre loyer mensuel',
						'Avec ou sans apport',
					],
				},
				{
					id: 2,
					name: 'PENDANT LA DURÉE DU CONTRAT',
					checkpoints: ["Payez uniquement l'usage et non la possession"],
				},
				{
					id: 3,
					name: 'A LA FIN DU CONTRAT',
					checkpoints: ['Devenez propriétaire', 'Changez de véhicule'],
				},
			],
		}
	}

	render() {
		const { title, description, websiteName, steps } = this.props
		return (
			<div>
				<Menu title={websiteName} description={description} />
				<div className="main">
					<Header title={title} description={description} />
					<StepShowcase steps={steps} />
				</div>
			</div>
		)
	}
}

Index.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	websiteName: PropTypes.string.isRequired,
	steps: PropTypes.array.isRequired,
}

export default connect()(Index)
