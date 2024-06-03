import { Route, Routes,BrowserRouter ,Link} from "react-router-dom";
import Twitter from "./twitter";
import Insta from "./instagram";
import Navbar from "./navbar";
import Home from './home'
import Facebook from "./facebook";
import Whatsapp from "./whatsapp";
import Instagramdm from "./instagramdm";



const Error = () => {
  return (
    <div>
      <div style={{textAlign:'center'}}>
       <h1 style={{color:'red',fontWeight:'bolder'}}>404</h1>
        <br />
        <h2 style={{ textTransform: "capitalize" }}>Page not found</h2>
        <Link to='/'>Go to home page</Link>
      </div>
    </div>
  );
};


function App() {
  return (
       <BrowserRouter>
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/insta" element={<Insta />} />
          <Route path="/fb" element={<Facebook />} />
          <Route path="/instadm" element={<Instagramdm />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
          <Route exact path="/*" element={<Error />} />
       </Routes>
       </BrowserRouter>
  );
}

export default App;
