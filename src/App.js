import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import AboutUs from "./pages/AboutUs";
import Subsidiaries from "./pages/Subsidiaries/Subsidiaries";
import Media from "./pages/Media";
import CanaryFoundation from "./pages/CanaryFoundation";
import Careers from "./pages/Careers";
import Job from "../src/components/Careersfolder/Job";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (    
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/what-we-do" component={WhatWeDo} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/subsidiaries" component={Subsidiaries} />
          <Route path="/media" component={Media} />
          <Route path="/canary-foundation" component={CanaryFoundation} />
          <Route path="/careers" component={Careers} />
          <Route path="/job" component={Job} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
