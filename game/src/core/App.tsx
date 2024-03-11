import { APPProvider } from "./providers";
import Sections from '@/sections/components/index'

const App = () => {
  return (
    <APPProvider>
      <Sections />
    </APPProvider>
  );
};

export default App;
