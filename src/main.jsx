import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'
import RouteGuardContext from './contextAPI/RouteGuardContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='878500817919-iv92kkdou94cbp70m402p1sh9boh4o90.apps.googleusercontent.com'>
        <ShareContext>
          <RouteGuardContext>
             <App />
          </RouteGuardContext>
        </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
