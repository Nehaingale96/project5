

import Project3 from "./project3/register/Main"
import { FirstProvider } from "./project3/register/pages/Context";

function App() {
  return (
    <div>
       
        <FirstProvider>
        <Project3/>
        </FirstProvider>
    </div>
  );
}

export default App;
