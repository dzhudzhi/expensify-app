import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info id: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p> }
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Ooops</p>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true}info="There are the details" />, document.getElementById('app'));
