import React, { useCallback } from 'react';
import './Footer.css';
import { ReactComponent as NodeJsIcon } from '../../../images/node.svg';
import { ReactComponent as JavaScriptIcon } from '../../../images/javascript.svg';
import { ReactComponent as ReactIcon } from '../../../images/react.svg';
import { ReactComponent as ReduxIcon } from '../../../images/redux.svg';
import { ReactComponent as GraphQLIcon } from '../../../images/graphql.svg';
import { ReactComponent as SequalizeIcon } from '../../../images/sequelize.svg';
import { ReactComponent as AngularIcon } from '../../../images/angular.svg';
import { ReactComponent as TailwindIcon } from '../../../images/tailwind.svg';
import { ReactComponent as PostgresIcon } from '../../../images/postgres.svg';
import { ReactComponent as MongoIcon } from '../../../images/mongo.svg';
import { ReactComponent as TypeScriptIcon } from '../../../images/typescript.svg';
import { ReactComponent as DotnetIcon } from '../../../images/dotnet.svg';
import { ReactComponent as PythonIcon } from '../../../images/python.svg';
import { ReactComponent as CSSIcon } from '../../../images/css.svg';
const avatarUrl = '/avatar.jpg';

export interface FooterProps {}

const socialItemClass =
  'flex justify-center items-center font-bold h-8 w-8 rounded-full cursor-pointer bg-custom-contentBlue text-white ';

const sectionTitleClass = 'text-custom-contentBlue font-bold ml-2';

const sectionDivider = 'border-1 bg-custom-contentBlue h-0.5 w-1/2 ml-2';

const iconClass = 'w-8 h-8 ml-2 mt-2 sm:mt-0';

const Footer: React.FC<FooterProps> = () => {
  const onIconCLick = useCallback((e) => {
    const { classList } = e.target;

    if (classList.contains('fa-cat')) {
      window.open('https://radoychev.info');
    } else if (classList.contains('fa-github')) {
      window.open('https://github.com/BigNikO');
    } else if (classList.contains('fa-linkedin-in')) {
      window.open('https://www.linkedin.com/in/nikola-radoychev-b375b1141/');
    } else if (classList.contains('fa-bitbucket')) {
      window.open('https://bitbucket.org/BigNik0/');
    }
  }, []);

  return (
    <div className="flex flex-col bg-custom-darkBlue max-w-5xl mx-auto border-l-8 border-r-8 border-yellow-400 footer-container">
      <div className="flex flex-1 flex-col sm:flex-row">
        <div className="flex-1">
          <div className={sectionTitleClass}>{'Short info'}</div>
          <div className={sectionDivider} />
          <div className="flex flex-wrap space-x-2 m-2">
            <img
              src={avatarUrl}
              alt="bigniko"
              className="h-12 w-12 rounded-full"
            />
            <div className="text-white font-mono">
              <div>{'Nikola Radoychev'}</div>
              <div>{'JavaScript Developer'}</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className={sectionTitleClass}>{'Interested in'}</div>
          <div className={sectionDivider} />
          {/* <div className="flex flex-wrap space-x-2 m-2"> */}
          <div className="flex flex-wrap space-x-2 m-2 sm:grid-cols-7 sm:gap-2 sm:grid">
            <JavaScriptIcon className={iconClass} />
            <TypeScriptIcon className={iconClass} />
            <ReactIcon className={iconClass} />
            <ReduxIcon className={iconClass} />
            <NodeJsIcon className={iconClass} />
            <GraphQLIcon className={iconClass} />
            <SequalizeIcon className={iconClass} />
            <AngularIcon className={iconClass} />
            <TailwindIcon className={iconClass} />
            <PostgresIcon className={iconClass} />
            <MongoIcon className={iconClass} />
            <PythonIcon className={iconClass} />
            <DotnetIcon className={iconClass} />
            <CSSIcon className={iconClass} />
          </div>
        </div>
      </div>
      <div className="flex flex-col border-custom-contentBlue w-full h-16 border-t-2 opacity-85 text-white justify-between items-center sm:flex-row sm:h-12">
        <div className="flex space-x-2 pt-3 sm:pt-0 sm:ml-4">
          <i
            className={
              socialItemClass + 'fas fa-cat hover:bg-custom-hoverOrange'
            }
            onClick={onIconCLick}
          />
          <i
            className={socialItemClass + 'fab fa-github hover:bg-black'}
            onClick={onIconCLick}
          />
          <i
            className={
              socialItemClass + 'fab fa-linkedin-in hover:bg-custom-linkedIn'
            }
            onClick={onIconCLick}
          />
          <i
            className={
              socialItemClass + 'fab fa-bitbucket hover:bg-custom-bitBucket'
            }
            onClick={onIconCLick}
          />
        </div>
        <div className="mr-4 ml-4 font-bold text-xs">
          &#169; {'Nikola Radoychev '} {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
