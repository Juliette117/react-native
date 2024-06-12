/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import Exercice1 from './src/components/Exercice1';
import TodoList from './src/components/todoList/TodoList';
import Calculatrice from './src/components/calculatrice/Calculatrice';

AppRegistry.registerComponent(appName, () => Calculatrice);
