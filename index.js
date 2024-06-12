/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Exercice1 from './src/components/Exercice1';
import ListeCourse from './src/components/listeCourses/ListeCourse';
import Calculatrice from './src/components/calculatrice/Calculatrice';
import Rendu from './src/components/calculatrice/Rendu';


AppRegistry.registerComponent(appName, () => Rendu);
