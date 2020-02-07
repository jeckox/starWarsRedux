import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import {getLinkCharacter} from '../../utils/links';
import './Character.css';


const MiniCharacter = ({character}) => {
	const urlTo = getLinkCharacter(character.id);

	return <div className="people-element"><Link to={urlTo}><Chip label={character.name} clickable /></Link></div>;
};

MiniCharacter.propTypes = {
	character: PropTypes.object
};
export default MiniCharacter;
