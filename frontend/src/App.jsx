import { useEffect } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

import LoadingSpinner from './components/LoadingSpinner';

import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage";
import EmailVerification from "./pages/EmailVerification";

import DashboardPage from "./pages/DashboardPage";
import LandingPage from './pages/LandingPage';
import BranchLocator from './pages/BranchLocator';

import SwedBank from './pages/SwedBank';
import SidebarD from './components/SidebarD';

// Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  
  if(!isAuthenticated) {
    return <Navigate to = "/login" replace />;
  }
  
  if(user.isVerified) {
    return <Navigate to = "/verify-email" replace />;
  }
  
  return children;

};

// Redirect authenticated users to home page only
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  
  if( isAuthenticated && user.isVerified ) {
    return <Navigate to = "/" replace />;
  }
  
  return children;

};

function App() {

  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect (() => {
    checkAuth()
  }, [checkAuth])

  if(isCheckingAuth) return <LoadingSpinner />;

  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user);

  return (
    <div className="min-h-screen bg-[#E66B2D] flex flex-col">  

      <Routes>
        <Route 
          path='/' 
          element = {
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
        }/>
      
        <Route 
          path='/signup' 
          element = { 
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
        } />
  
        <Route 
          path='/login' 
          element = {
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
        } />
      
        <Route path='/verify-email' element={<EmailVerification />} />


        <Route path='/home' element={<LandingPage />} />
        <Route path='/branch-locator' element={<BranchLocator />} />


        <Route path='/swedbank' element={<SwedBank />} />

        <Route path='/sidebard' element={<SidebarD />} />


      </Routes>

      <Toaster />
      
    </div>
  );
};

export default App;

