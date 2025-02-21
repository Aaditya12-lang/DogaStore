import { useState } from "react";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Alert from "./pages/History";
import Profile from "./pages/Profile";
import Calls from "./pages/Calls";
// import Privacy from "./";
import BottomBar from './mycomponents/Bottombar'
import EmptyIndicator from "./mycomponents/EmptyIndicator";
import {Stack} from "./mycomponents/Stack";
import Upload from "./pages/Upload";
import History from "./pages/History";
import Privacy from "./subpages/Privacy";
import UploadingHistory from "./subpages/UploadingHistory";
import Subscription from "./subpages/Subscription";
import TermsConditions from "./subpages/TermsConditions";
import Editprofile from "./subpages/Editprofile";


// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/uploading_history' element={<UploadingHistory/>}/>
        <Route path='/terms-conditions' element={<TermsConditions/>}/>
        <Route path='/editprofile' element={<Editprofile/>}/>
      </Routes>
     
    </>
  );
}

export default App;
