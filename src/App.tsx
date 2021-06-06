import { ThemeProvider } from '@material-ui/styles';
import { MenuAppBar } from './components/navigation/menu-app-bar';
import { Login } from './components/security/login';
import { SignUp } from './components/security/sign-up';
import { theme } from './theme/theme';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </ThemeProvider>
  
  );
}

export default App;
