import { ethers } from "ethers";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import GImages from "~/assets/images/Home/Ghostscops";
import banner from "~/assets/images/Home/Ghostscops/banner.png";
import circleVideo from "~/assets/videos/Home/Ghostscops/circleVideo.webm";
import GButton from "~/components/Common/GButton";
import Colors from "~/constants/Colors";
import { FlexCenter, GImage, SizedBox } from "~/constants/Common.style";
import { SubTitle1 } from "~/constants/Typography";
import * as Styled from "./Ghostscops.style";

const Ghostscops = () => {
  async function mint() {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let abiCoder = ethers.utils.defaultAbiCoder;
    let contractAddress = "0x0994CD9820fb51FB834cEd89DCc75b54D1BAfcCa";
    let abi = require("../../../constants/data/ghostcops.json");
    let ghostcontract = new ethers.Contract(contractAddress, abi, provider);
    try {
      let rawTxn = await ghostcontract.populateTransaction.mintGhost({
        value: "0x470DE4DF820000"
      });
      let signedTxn = signer.sendTransaction(rawTxn);
      let reciept = (await signedTxn).wait();
      if (reciept) {
        console.log(
          "Transaction is successful!!!" + "\n" + "Transaction Hash:",
          (await signedTxn).hash +
            "\n" +
            "Block Number:" +
            (await reciept).blockNumber +
            "\n" +
            "Navigate to https://polygonscan.com/tx/" +
            (await signedTxn).hash,
          "to see your transaction"
        );
      } else {
        console.log("Error submitting transaction");
      }
    } catch (e) {
      console.log("Error Caught in Catch Statement: ", e);
    }
  }

  return (
    <Styled.Container id="ghostscops">
      <Styled.Banner>
        <GImage src={banner} alt="banner" />
      </Styled.Banner>

      <Styled.VideoWrapper>
        <video src={circleVideo} autoPlay muted playsInline loop></video>
      </Styled.VideoWrapper>

      <FlexCenter>
        <GButton
          width={350}
          height={80}
          filled={false}
          onClickHandler={() => {
            mint();
          }}
          bgColor={Colors.yellow}
          title={"do mint"}
        >
          <SubTitle1 color={Colors.yellow}>MINT NOW !!</SubTitle1>
        </GButton>
      </FlexCenter>
      <SizedBox height={50} />

      <Styled.CarouselWrapper>
        <OwlCarousel
          autoplay={true}
          items={5}
          loop
          margin={20}
          autoplayTimeout={500}
        >
          {GImages.map((item, index) => (
            <GImage src={item} alt="chat" key={index} />
          ))}
        </OwlCarousel>
      </Styled.CarouselWrapper>
    </Styled.Container>
  );
};

export default Ghostscops;
