/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import Exercice1 from './src/components/Exercice1';
import TodoList from './src/components/todoList/TodoList';
import Rendu from './src/components/calculatrice/Rendu';
import Navigation from './src/components/navigation/Navigation';
import HomeNavigation from './src/components/exerciceNavigation/HomeNavigation';



AppRegistry.registerComponent(appName, () => HomeNavigation);
