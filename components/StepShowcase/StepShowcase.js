import PropTypes from 'prop-types'

import './StepShowcase.scss'

const StepShowcase = ({ steps }) => (
	<div className="stepshowcase">
		<div className="setps">
			{steps.map((step, identifier) => (
				<div key={identifier} className="step">
					<div className="identifier">{step.id}</div>
					<div className="name">{step.name}</div>
					<ul className="checkpoints">
						{step.checkpoints.map((checkpoint, index) => (
							<li key={index}>{checkpoint}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	</div>
)

StepShowcase.propTypes = {
	steps: PropTypes.array.isRequired,
}

export default StepShowcase
