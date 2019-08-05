import React from 'react';
import { connect } from 'react-redux';
import { setLoaded } from '../actions';

const WelcomeComponent = (props) => {
  setTimeout(() => {
    props.setIsLoaded();
  }, 5000);
  return (
    <div className="welcome-screen">
        <svg className={props.isAnimating ? '' : 'logo-loaded'} width="100vw" height="100vh" viewBox="0 0 100 100">
          <path stroke="#009688"
                strokeLinecap="round"
                id={props.isAnimating ? 'loading-logo' : ''}
                className='spade-path'
                d="M 50 75
                  L 62.5 75
                  L 50 50
                  C 62.5 75 125 62.5 50 25
                  M 50 75
                  L 37.5 75
                  L 50 50
                  C 37.5 75 -25 62.5 50 25
                  "
            />
        </svg>
      </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setIsLoaded: () => dispatch(setLoaded())
    }
  }

const mapStateToProps = state => ({ isAnimating: state.isAnimating });
export const Welcome = connect(mapStateToProps, mapDispatchToProps)(WelcomeComponent);