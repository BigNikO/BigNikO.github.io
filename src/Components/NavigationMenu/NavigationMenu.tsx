import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import navigationClasses from './navigation.tailwind';
import './NavigationMenu.css';

export interface NavigationMenuProps {
  setIsNavigating: (isNavigating: boolean) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ setIsNavigating }) => {
  const {
    mainContainer,
    sectionContent,
    siteName,
    sectionContainer,
  } = navigationClasses;

  const history = useHistory();

  const [menuContainerClass, setMenuContainerClass] = useState(
    'menu-container'
  );

  const onMenuToggle = useCallback(
    (e) => {
      const newClass = menuContainerClass.includes('hidden-menu')
        ? 'menu-container'
        : 'menu-container hidden-menu';
      setMenuContainerClass(newClass);

      if (newClass.includes('hidden-menu')) {
        setTimeout(() => {
          setIsNavigating(false);
        }, 400);
      } else {
        setIsNavigating(true);
      }

      switch (e.target.textContent) {
        case 'Home':
          history.push('/');
          break;
        case 'About':
          history.push('/about');
          break;
        case 'Articles':
          history.push('/articles');
          break;
        case 'Technologies':
          history.push('/technologies');
          break;
        default:
          break;
      }
    },
    [menuContainerClass, history, setIsNavigating]
  );

  return (
    <>
      <i
        className={
          !menuContainerClass.includes('hidden-menu')
            ? 'fas fa-times fa-lg menu-icon text-custom-contentBlue'
            : 'fas fa-bars fa-lg menu-icon text-custom-contentBlue'
        }
        onClick={onMenuToggle}
      />
      <div className={menuContainerClass}>
        <div className={mainContainer}>
          <div className={sectionContainer}>
            <div className={sectionContent} onClick={onMenuToggle}>
              {'Home'}
            </div>
            <div
              className={sectionContent + ' rounded-full '}
              onClick={onMenuToggle}
            >
              {'About'}
            </div>
          </div>
          <div className={siteName} onClick={onMenuToggle}>
            {'Nikola Radoychev'}
          </div>
          <div className={sectionContainer}>
            <div
              className={sectionContent + ' rounded-full '}
              onClick={onMenuToggle}
            >
              {'Articles'}
            </div>
            <div className={sectionContent} onClick={onMenuToggle}>
              {'Technologies'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
