import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``

export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  //Recommended: Only 2 Items
  const popularPosts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg",
      title: "ЭР геэкологи-2019 төслийн багийнхан хээрийн ажилдаа гарав",
      description:
        "Эрдэнэс Үндэсний судалгаа хөгжлийн төв ХХК-ийн төслийн багийнхан хээрийн ажлаар төслийн талбайд ажиллаа.",
      authorName: "Д.Энхмаа",
      authorProfile: "Мэдээ бэлтгэсэн судлаач",
      url: "https://medium.com/@info_39407/aff792b93ba4"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg",
      title: "Төвийн судлаачид БНХАУ-ын нүүрсний уурхайд зочиллоо",
      description:
        "ЭҮСХТөвийн төлөөлөл БНХАУ-ын Нүүрсний уурхайд зочилж, уурхайн олборлолтын үйл ажиллагаа, нүүрс баяжуулах технологийн талаар туршлага судалллаа. ",
      authorName: "Б.Чинзориг",
      authorProfile: "Мэдээ бэлтгэсэн судлаач",
      url: "https://medium.com/@info_39407/a86782a3a6df"
    }
  ];

  const recentPosts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Ажлын үр дүнгийн хэлэлцүүлэг боллоо",
      authorName: "Бэлтгэсэн: Б.Ариунзаяа",
      url: "https://info-39407.medium.com/2019-09-20-21f18c9ab68c"
    },
    {
      postImageSrc:
        "https://info-39407.medium.com/2019-09-05-8db32c8351e1",
      title: "БНХАУ-ын Шэнжөү группын төлөөлөл айлчиллаа",
      authorName: "Бэлтгэсэн: Б.Ариунзаяа",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://info-39407.medium.com/%D0%B1%D0%B0%D1%8F%D1%80-%D0%B1%D0%BE%D0%BB%D0%BB%D0%BE%D0%BE-d0b2065ad6df",
      title: "Баяр боллоо",
      authorName: "Бэлтгэсэн: Б.Ариунзаяа",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Эрдэнэт хотын геоэкологи, гидрогеологийн судалгааны ажлыг эхлүүллээ",
      authorName: "Бэлтгэсэн: Б.Ариунзаяа",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80",
      title: "2020 оны анхны томилолт боллоо",
      authorName: "Бэлтгэсэн: Б.Ариунзаяа",
      url: "https://timerse.com"
    },
  ]

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>Хамгийн их уншигдсан</Heading>
            <PostsContainer>
              {popularPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    <AuthorImage src={post.authorImageSrc} />
                    <AuthorNameAndProfession>
                      <AuthorName>{post.authorName}</AuthorName>
                      <AuthorProfile>{post.authorProfile}</AuthorProfile>
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>Сүүлийн үеийн мэдээлэл</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
