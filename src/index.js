import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import './variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // colorScheme: 'dark',
        fontFamily: 'Quicksand, sans-serif',
        headings: { fontFamily: 'Ethnocentric, sans-serif' },
        colors: {
          'blue': ["#C7CEDC","#ACB8D1","#90A3CA","#728FC9","#517ACD","#2B65D9","#345FB6","#3A5A98","#3D5481","#3D4D6E"],
          'orange': ["#F3EBE5","#E8D5C4","#E4C1A2","#E7AE7B","#F29C50","#DD8C45","#C77E3E","#A97242","#8F6744","#7A5D44"],
          'pink': ["#FEFDFD","#EFDEE3","#E6BEC8","#E29BAE","#E67593","#F24976","#DC3F69","#C6395F","#A6405B","#8C4356"],
        },
        primaryShade: 5,
        components: {
          MenuItem: {
            defaultProps: { color: 'white' },
          },

          Button: {
            defaultProps: { radius: 'xl' },
          },

          Radio: {
            defaultProps: { color: 'orange'},
          }
        }
      }}
    >
      <App/>
      <Notifications/>
    </MantineProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
