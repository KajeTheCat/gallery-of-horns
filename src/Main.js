
import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "./data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row sm={1} md={2} lg={3} xl={4} >
          {beastData.map((beastObj, idx) => (
            <HornedBeast beast={beastObj} key={idx} />
          ))}
        </Row>
        <HornedBeast titleBanana={beastData[0].title} img_url={beastData[0].image_url} descrp={beastData[0].description}/>
        <HornedBeast titleBanana={beastData[1].title} img_url={beastData[1].image_url} descrp={beastData[1].description}/>
        <HornedBeast titleBanana={beastData[2].title} img_url={beastData[2].image_url} descrp={beastData[2].description}/>
        <HornedBeast titleBanana={beastData[3].title} img_url={beastData[3].image_url} descrp={beastData[3].description}/>
        <HornedBeast titleBanana={beastData[4].title} img_url={beastData[4].image_url} descrp={beastData[4].description}/>
        <HornedBeast titleBanana={beastData[5].title} img_url={beastData[5].image_url} descrp={beastData[5].description}/>
        <HornedBeast titleBanana={beastData[6].title} img_url={beastData[6].image_url} descrp={beastData[6].description}/>
        <HornedBeast titleBanana={beastData[7].title} img_url={beastData[7].image_url} descrp={beastData[7].description}/>
        <HornedBeast titleBanana={beastData[8].title} img_url={beastData[8].image_url} descrp={beastData[8].description}/>
        <HornedBeast titleBanana={beastData[9].title} img_url={beastData[9].image_url} descrp={beastData[9].description}/>
        <HornedBeast titleBanana={beastData[10].title} img_url={beastData[10].image_url} descrp={beastData[10].description}/>
        <HornedBeast titleBanana={beastData[11].title} img_url={beastData[11].image_url} descrp={beastData[11].description}/>
      </Container>
    );
  }
}

export default Main;