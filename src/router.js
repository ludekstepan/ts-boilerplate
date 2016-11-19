
import Router5, { RouteNode, errorCodes, transitionPath, loggerPlugin, createRouter } from 'router5';

export default () => createRouter([
  { name: 'users',      path: '/users'},
  { name: 'users.view', path: '/list'},
  { name: 'users.list', path: '/view'}
]);
