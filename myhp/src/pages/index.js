import Consult from "@/indexPageComponents/Consult";
import DetailIntroduce from "@/indexPageComponents/DetailIntroduce";
import MainPicture from "@/indexPageComponents/MainPicture";
import MenuBarLayout from "@/indexPageComponents/MenuBarLayout";
import Price from "@/indexPageComponents/Price";
import QnA from "@/indexPageComponents/QnA";
import RealEstate from "@/indexPageComponents/RealEstate";
import Review from "@/indexPageComponents/Review";

const Home = () => {
  return (
    <MenuBarLayout>
      <MainPicture />
      <RealEstate />
      <DetailIntroduce />
      <Review />
      <QnA />
      <Price />
      <Consult />
    </MenuBarLayout>
  );
}

export default Home;