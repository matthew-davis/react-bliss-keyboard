import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getMenuName, TMenuProps } from './MenusUtils';
import './Menus.css';

export const Menus = (props: TMenuProps): React.ReactElement => {
  const { menuState, language } = props;

  return (
    <div id={'menuWrapper'}>
      <FontAwesomeIcon className={'menuIcon'} icon={faBars} />
      {getMenuName(menuState, language)}
    </div>
  );
};
