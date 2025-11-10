import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProviders } from './context/AppProviders';
import MainLayout from './components/templates/MainLayout';
import HomePage from './pages/Home/HomePage';
import CultureDirectoryPage from './pages/CultureDirectory/CultureDirectoryPage';
import MapPage from './pages/Map/MapPage';
import EventsPage from './pages/Events/EventsPage';
import CommunityPage from './pages/Community/CommunityPage';
import ProfilePage from './pages/Profile/ProfilePage';
import { ROUTES } from './constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProviders>
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            } />
            <Route path={ROUTES.CULTURE_DIRECTORY} element={
              <MainLayout>
                <CultureDirectoryPage />
              </MainLayout>
            } />
            <Route path={ROUTES.MAP} element={
              <MainLayout>
                <MapPage />
              </MainLayout>
            } />
            <Route path={ROUTES.EVENTS} element={
              <MainLayout>
                <EventsPage />
              </MainLayout>
            } />
            <Route path={ROUTES.COMMUNITY} element={
              <MainLayout>
                <CommunityPage />
              </MainLayout>
            } />
            <Route path={ROUTES.PROFILE} element={
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            } />
          </Routes>
        </Router>
      </AppProviders>
    </QueryClientProvider>
  );
}

export default App;
