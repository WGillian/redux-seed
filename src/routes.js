import Learning from './containers/learning'

export const routes = [{ path: 'learning', component: Learning }]

export default {
  path: '/',
  component: Learning,
  indexRoute: { component: Learning },
  childRoutes: routes,
}
