import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import TaskList from './screens/TaskList';
import Auth from './screens/Auth';
import Menu from './screens/Menu';
import commonStyles from './commonStyles';
import AuthOrApp from './screens/Auth/AuthOrApp';

const menuConfig = {
  initialRouteName: 'Today',
  contentComponent: Menu,
  contentOptions: {
    labelStyle: {
      fontFamily: commonStyles.fontFamily,
      fontSize: 20,
      fontWeight: 'normal',

    },
    activeLabelStyle: {
      color: '#080',
      fontWeight: 'bold',
    },
  },
};

const menuRoutes = {
  Today: {
    name: 'Today',
    screen: props => <TaskList title="Hoje" daysAhead={0} {...props} />,
    navigationOptions: {
      title: 'Hoje',
    },
  },
  Tomorrow: {
    name: 'Tomorrow',
    screen: props => <TaskList title="Amanhã" daysAhead={1} {...props} />,
    navigationOptions: {
      title: 'Amanhã',
    },
  },
  Week: {
    name: 'Week',
    screen: props => <TaskList title="Semana" daysAhead={7} {...props} />,
    navigationOptions: {
      title: 'Semana',
    },
  },
  Month: {
    name: 'Month',
    screen: props => <TaskList title="Mês" daysAhead={30} {...props} />,
    navigationOptions: {
      title: 'Mes',
    },
  },
};

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

const mainRoutes = {
  Auth: {
    name: 'Auth',
    screen: Auth,
  },
  Home: {
    name: 'Home',
    screen: menuNavigator,
  },
  AuthOrApp: {
    name: 'AuthOrApp',
    screen: AuthOrApp,
  },
};
const mainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'AuthOrApp',
});
export default createAppContainer(mainNavigator);