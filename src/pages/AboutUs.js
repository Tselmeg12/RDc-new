import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Erdenes</Subheading>}
        heading="Бидний алсын хараа."
        buttonRounded={false}
       
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="БИДНИЙ ЭРХЭМ ЗОРИЛГО"
        description="Эрдэм шинжилгээ судалгааны үр дүнд үндэслэсэн шийдлийг гаргах, нэвтрүүлэх, мэдлэгт суурилсан дэвшилтэт техник, технологийг эрхэмлэсэн шинжлэх ухааны төв байхад оршино."
        buttonRounded={false}
   
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="Бидний үнэт зүйлс"
        description="Монгол Улсад дэвшилтэт технологийн судалгаа шинжилгээ, туршилтын үйлдвэрлэлийг хөгжүүлэх, оюуны багтаамжтай өндөр технологийг нутагшуулах, инженерингийг хөгжүүлэх, судлаачдын мэдлэг оюуныг улсын хөгжилд тус нэмэр оруулах юм."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Судалгаа шинжилгээнд суурилна",
            description: "Аливаа асуудлыг шинжилгээ судалгааны үр дүнд тулгуурлаж, чанартай  гүйцэтгэнэ."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Бид оюуны өмчийг хүндлэнэ",
            description: " Олон улсын эрдэм шинжилгээ судалгааны хамтын ажиллагааг эрхэмлэнэ"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Найдвартай хамтын ажилгаа",
            description: "Харилцан ашигтай хамтын ажиллагаа, чанарыг эрхэмлэнэ"
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
