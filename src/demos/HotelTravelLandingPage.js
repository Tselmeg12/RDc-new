import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/headers/light.js";

import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";


import Blog from "components/blogs/PopularAndRecentBlogPosts.js";


import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Blog />


   
  
   
   
    <Footer />
  </AnimationRevealPage>
);
