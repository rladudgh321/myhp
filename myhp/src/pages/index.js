import Consult from "@/components/index/Consult";
import MainPicture from "@/components/index/MainPicture";
import DetailIntroduce from "@/components/index/DetailIntroduce";
import AppLayout from "@/AppLayout";
import Price from "@/components/index/Price";
import QnA from "@/components/index/QnA";
import RealEstate from "@/components/index/RealEstate";
import Review from "@/components/index/Review";
import Strength from "@/components/index/Strength";

const Home = () => {
  return (
    <AppLayout>
      <MainPicture />
      <RealEstate />
      <DetailIntroduce />
      <Strength />
      <Review />
      <QnA />
      <Price />
      <Consult />
    </AppLayout>
  );
}

export default Home;