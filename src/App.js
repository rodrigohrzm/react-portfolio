import './App.css';
import { LinksPresentation } from './pages/LinksPresentation'
import { LinksWebdemo } from './pages/webdemo/LinksWebdemo'
import { LinksDashboard } from './pages/dashboard/LinksDashboard'

function App() {
  return (
    <>
      <LinksPresentation />
      <LinksWebdemo />
      <LinksDashboard />
    </>
  );
}

export default App;