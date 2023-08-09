

import Project3 from "./project3/register/Main"
import Register from "./project3/register/Register";
import { FirstProvider } from "./project3/register/pages/Context";
import Loginpage from "./project3/register/pages/Loginpage";

function App() {
  return (
    <div>
       
        <FirstProvider>
        <Project3/>
        </FirstProvider>
        {/* <Register/>
        <Loginpage/> */}
    </div>
  );
}

export default App;
