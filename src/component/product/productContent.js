import React from "react";
import './product.css';
import '../../App.css';
import Footer from "../footer";
import { useNavigate } from 'react-router-dom';

//export const aggregatorAddress = "0xCEC5168cd1DFA9b5Fbe44fE8960E0acd22A57F52"
export const aggregatorAddress = "0xEed89F6728E1c5E1B685ba6BC87335F8fAe4200b"
export const MANA = "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4";
export const DAI = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";

//test
export const USDT = "0x575239873D4EEcf855033cA1aeE96D1DC6325009";
//export const USDT = "0x308a6B4974264Ddc9e1a51C32A081a8ec507b675";

export const PLATFORMS_ENUM = {
  DCL: "dcl",
  CV: "cv",
}

export const platforms = [
  { value: PLATFORMS_ENUM.DCL, label: "Decentraland", address: "0x9B0A93EA49955a5ef1878c1a1e8f8645d049e597", ERC20: USDT, ERC20Symbol: "USDT" },
  { value: PLATFORMS_ENUM.CV, label: "Cryptovoxels", address: "0x9eA07c5Ee61e82993B0544CEcEcaDeDD3C9F0fA1", ERC20: USDT, ERC20Symbol: "USDT" },
  //{ value: "sb", label: "Sandbox", address: "", ERC20: "" },
]

/* global.products = [
  {
    id: 0,
    isGroup: false,
    imgPath: "product1.png",
    detailPath: ["product1_detail1.png", "product1_detail2.png", "product1_detail3.png", "product1_detail4.png", "product1_detail5.png"],
    title: "Evil Snowman1",
    url: "https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/0",
    source: "Polygon",
    prize: 25,
    prize_eth: 2,
    class: "class_head.png",
    sex: "sex_all.svg",
    desc: "The Evil Snowman's head colour is dominated by scarlet red and silver gray, punctuated by dark gray glowing eyes.",
    width: "50%",
    css: "product_content_img_frame",
    cssDetail: "product_item_photo",
    detail: "Evil snowman is a funny and scary guy, it attracts you with its round body and lovely appearance, but it may bite off your head when you are not paying attention to it. Evil snowman was born on a dim night just right after Halloween night. He was woken up by the kids' noises while going trick or treating. But kids have noticed that he is a funny and at the same time a scary guy by its appearance. With it´s rounded shape, no one thinks he's scary at all, however, we all need to be careful because he will bite poeple's head when they are not paying attention to it."
  },
  {
    id: 1,
    isGroup: false,
    imgPath: "product2.png",
    detailPath: ["product2_detail1.png", "product2_detail2.png", "product2_detail3.png", "product2_detail4.png", "product2_detail5.png"],
    title: "Evil Snowman2",
    url: "https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/1",
    source: "Polygon",
    prize: 25,
    prize_eth: 2,
    class: "class_dress.svg",
    sex: "sex_all.svg",
    desc: "Snowman's body shape is made of 3 dark snowballs making it a spherical body shape that's why many kids likes him. Moreover he wears a very lovely red scarf making it look with a bit more contrast.",
    width: "55%",
    css: "product_content_img_frame",
    cssDetail: "product_item_photo",
    detail: "Evil snowman is a funny and scary guy, it attracts you with its round body and lovely appearance, but it may bite off your head when you are not paying attention to it. Evil snowman was born on a dim night just right after Halloween night. He was woken up by the kids' noises while going trick or treating. But kids have noticed that he is a funny and at the same time a scary guy by its appearance. With it´s rounded shape, no one thinks he's scary at all, however, we all need to be careful because he will bite poeple's head when they are not paying attention to it."
  },
  {
    id: 2,
    isGroup: false,
    imgPath: "product3.png",
    detailPath: ["product3_detail1.png", "product3_detail2.png", "product3_detail3.png", "product3_detail4.png", "product3_detail5.png"],
    title: "R·G YEARning1",
    url: "https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/0",
    source: "Polygon",
    prize: 50,
    prize_eth: 2,
    class: "class_dress.svg",
    sex: "sex_male.svg",
    desc: "On the upper part of the wearable it has some traditional design elements such as high necklines and wide sleeves in yellow, blue and white.",
    width: "80%",
    css: "product_content_img_frame",
    cssDetail: "product_item_photo",
    detail: "YEARning wearable is DigiFun's first NFT collection being sold in Decentraland . It was designed by our group designer R.G. R.G explains that his inspiration in this wearable design came from Japaneese 15th century´s Ninjia and also Japanese Haori style. With a touch of fashion tailoring, YEARning wearable became our first release. "
  },
  {
    id: 3,
    isGroup: false,
    imgPath: "product4.png",
    detailPath: ["product4_detail1.png", "product4_detail2.png", "product4_detail3.png", "product4_detail4.png", "product4_detail5.png"],
    title: "R·G YEARning2",
    url: "https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/1",
    source: "Polygon",
    prize: 50,
    prize_eth: 2,
    class: "class_pants.png",
    sex: "sex_male.svg",
    desc: "On the lower part of the wearable is a pinched styled loose, same as the upper part it is also amber yellow and azure so that the colour matches with the upper part.",
    width: "65%",
    css: "product_content_img_frame",
    cssDetail: "product_item_photo",
    detail: "YEARning wearable is DigiFun's first NFT collection being sold in Decentraland . It was designed by our group designer R.G. R.G explains that his inspiration in this wearable design came from Japaneese 15th century´s Ninjia and also Japanese Haori style. With a touch of fashion tailoring, YEARning wearable became our first release."
  },
  {
    id: 4,
    isGroup: false,
    imgPath: "product5.png",
    detailPath: ["product5_detail1.png", "product5_detail2.png", "product5_detail3.png", "product5_detail4.png", "product5_detail5.png"],
    title: "Ice Shadow1",
    url: "https://market.decentraland.org/contracts/0x9b0a93ea49955a5ef1878c1a1e8f8645d049e597/items/0",
    source: "Polygon",
    prize: 9,
    prize_eth: 2,
    class: "class_head.png",
    sex: "sex_male.svg",
    desc: "A white light cross on Helmet with flashes and devil horns",
    width: "100%",
    css: "product_content_img_frame_normal",
    cssDetail: "product_item_photo_normal",
    detail: "Ice Shadow was born with super abilities, his parents have mutated with a bat, causing it to have some human sized mat black wings, being able to fly as fast as speed of light. But because he was born in a super ice research laboratory, he is able to manipulate ice and cold by freezing all the water around him, this ability is mainly to maintain his body temperature as he can´t survive in normal temperature conditions. Because he needs to be living in extremely cold temperatures, he wants to convert our meta world into a freeze planet that’s why everyone also knows him as the devil of ice. "
  },
  {
    id: 5,
    isGroup: false,
    imgPath: "product6.png",
    detailPath: ["product6_detail1.png", "product6_detail2.png", "product6_detail3.png", "product6_detail4.png", "product6_detail5.png"],
    title: "Ice Shadow2",
    url: "https://market.decentraland.org/contracts/0x9b0a93ea49955a5ef1878c1a1e8f8645d049e597/items/1",
    source: "Polygon",
    prize: 10,
    prize_eth: 2,
    class: "class_dress.svg",
    sex: "sex_male.svg",
    desc: "A cloak and body supported by ice",
    width: "50%",
    css: "product_content_img_frame_normal",
    cssDetail: "product_item_photo_normal",
    detail: "Ice Shadow was born with super abilities, his parents have mutated with a bat, causing it to have some human sized mat black wings, being able to fly as fast as speed of light. But because he was born in a super ice research laboratory, he is able to manipulate ice and cold by freezing all the water around him, this ability is mainly to maintain his body temperature as he can´t survive in normal temperature conditions. Because he needs to be living in extremely cold temperatures, he wants to convert our meta world into a freeze planet that’s why everyone also knows him as the devil of ice. "
  },
  {
    id: 6,
    isGroup: true,
    imgPath: "product7.png",
    detailPath: ["product6_detail1.png", "product6_detail2.png", "product6_detail3.png", "product6_detail4.png", "product6_detail5.png"],
    title: "Ice Shadow",
    url: "https://market.decentraland.org/contracts/0x9b0a93ea49955a5ef1878c1a1e8f8645d049e597/items/1",
    source: "Polygon",
    prize: 19,
    prize_eth: 2,
    class: "class_dress.svg",
    sex: "sex_male.svg",
    desc: "A cloak and body supported by ice",
    width: "50%",
    css: "product_content_img_frame_normal",
    cssDetail: "product_item_photo_normal",
    detail: "Ice Shadow was born with super abilities, his parents have mutated with a bat, causing it to have some human sized mat black wings, being able to fly as fast as speed of light. But because he was born in a super ice research laboratory, he is able to manipulate ice and cold by freezing all the water around him, this ability is mainly to maintain his body temperature as he can´t survive in normal temperature conditions. Because he needs to be living in extremely cold temperatures, he wants to convert our meta world into a freeze planet that’s why everyone also knows him as the devil of ice. "
  }
] */

export const products = [
  {
    id: 0,
    isGroup: true,
    img: "damoying",
    imgPath: "product7.png",
    detailPath: ["product6_detail1.png", "product6_detail2.png", "product6_detail3.png", "product6_detail4.png", "product6_detail5.png"],
    title: "Ice Shadow",
    url: "https://market.decentraland.org/contracts/0x9b0a93ea49955a5ef1878c1a1e8f8645d049e597/items/1",
    source: "Polygon",
    prize: 19,
    prize_eth: 2,
    parts: [{
      label: "helmet",
      price: 9,
      nid: 0,
      platform: PLATFORMS_ENUM.DCL
    }, {
      label: "upper-body",
      price: 10,
      nid: 1,
      platform: PLATFORMS_ENUM.DCL
    }, {
      label: "head",
      price: 2,
      nid: 10,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "chest",
      price: 2,
      nid: 11,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "upper-left-wing",
      price: 2,
      nid: 12,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "lower-left-wing",
      price: 2,
      nid: 13,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "upper-right-wing",
      price: 2,
      nid: 14,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "lower-right-wing",
      price: 2,
      nid: 15,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "leg",
      price: 2,
      nid: 16,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "right-base",
      price: 2,
      nid: 17,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "left-base",
      price: 3,
      nid: 18,
      platform: PLATFORMS_ENUM.CV
    }],
    class: "class_dress.svg",
    sex: "sex_male.svg",
    desc: "A cloak and body supported by ice",
    width: "50%",
    css: "product_content_img_frame_normal",
    cssDetail: "product_item_photo",
    detail: "Ice Shadow was born with super abilities, his parents have mutated with a bat, causing it to have some human sized mat black wings, being able to fly as fast as speed of light. But because he was born in a super ice research laboratory, he is able to manipulate ice and cold by freezing all the water around him, this ability is mainly to maintain his body temperature as he can´t survive in normal temperature conditions. Because he needs to be living in extremely cold temperatures, he wants to convert our meta world into a freeze planet that’s why everyone also knows him as the devil of ice. "
  },
  {
    id: 1,
    isGroup: true,
    img: "snowman2",
    imgPath: "product1.png",
    detailPath: ["product1_detail1.png", "product1_detail2.png", "product1_detail3.png", "product1_detail4.png", "product1_detail5.png"],
    title: "Evil Snowman",
    url: "https://market.decentraland.org/contracts/0x622a009f894bf7c6ba069a31217be23f327e95de/items/0",
    source: "Polygon",
    prize: 25,
    parts: [{
      label: "head",
      price: 9,
      nid: 0,
      platform: PLATFORMS_ENUM.DCL
    }, {
      label: "upper-body",
      price: 10,
      nid: 1,
      platform: PLATFORMS_ENUM.DCL
    }, {
      label: "head",
      price: 2,
      nid: 10,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "upper-body",
      price: 2,
      nid: 11,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "lower-body",
      price: 2,
      nid: 12,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "right-hand",
      price: 2,
      nid: 13,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "left-hand",
      price: 2,
      nid: 14,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "left-foot",
      price: 2,
      nid: 15,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "right-foot",
      price: 2,
      nid: 16,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "lower-tail",
      price: 2,
      nid: 17,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "upper-tail",
      price: 3,
      nid: 18,
      platform: PLATFORMS_ENUM.CV
    }],
    prize_eth: 2,
    class: "class_head.png",
    sex: "sex_all.svg",
    desc: "The Evil Snowman's head colour is dominated by scarlet red and silver gray, punctuated by dark gray glowing eyes.",
    width: "50%",
    css: "product_content_img_frame",
    cssDetail: "product_item_photo",
    detail: "Evil snowman is a funny and scary guy, it attracts you with its round body and lovely appearance, but it may bite off your head when you are not paying attention to it. Evil snowman was born on a dim night just right after Halloween night. He was woken up by the kids' noises while going trick or treating. But kids have noticed that he is a funny and at the same time a scary guy by its appearance. With it´s rounded shape, no one thinks he's scary at all, however, we all need to be careful because he will bite poeple's head when they are not paying attention to it."
  },
  {
    id: 2,
    isGroup: true,
    img: "renzhe",
    imgPath: "product3.png",
    detailPath: ["product3_detail1.png", "product3_detail2.png", "product3_detail3.png", "product3_detail4.png", "product3_detail5.png"],
    title: "R·G YEARning",
    url: "https://market.decentraland.org/contracts/0xc2c1efd454d4e8c5f91477f63abc53fae74d2ed3/items/0",
    source: "Polygon",
    prize: 50,
    parts: [{
      label: "upper-body",
      price: 9,
      nid: 0,
      platform: PLATFORMS_ENUM.DCL
    }, {
      label: "lower-body",
      price: 10,
      nid: 1,
      platform: PLATFORMS_ENUM.DCL
    }, {
      label: "head",
      price: 2,
      nid: 10,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "body",
      price: 2,
      nid: 11,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "belt",
      price: 2,
      nid: 12,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "right-hand",
      price: 2,
      nid: 13,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "left-hand",
      price: 2,
      nid: 14,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "right-leg",
      price: 2,
      nid: 15,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "left-leg",
      price: 2,
      nid: 16,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "left-foot",
      price: 2,
      nid: 17,
      platform: PLATFORMS_ENUM.CV
    }, {
      label: "right-foot",
      price: 3,
      nid: 18,
      platform: PLATFORMS_ENUM.CV
    }],
    prize_eth: 2,
    class: "class_dress.svg",
    sex: "sex_male.svg",
    desc: "On the upper part of the wearable it has some traditional design elements such as high necklines and wide sleeves in yellow, blue and white.",
    width: "80%",
    css: "product_content_img_frame",
    cssDetail: "product_item_photo",
    detail: "YEARning wearable is DigiFun's first NFT collection being sold in Decentraland . It was designed by our group designer R.G. R.G explains that his inspiration in this wearable design came from Japaneese 15th century´s Ninjia and also Japanese Haori style. With a touch of fashion tailoring, YEARning wearable became our first release. "
  },
]
class ProductContentList extends React.Component {
  routerTo(v) {
    this.props.navigate(`/product/detail/${v.id}`, { state: v })
  }

  render() {
    return (
      <div className="product_content_frame">
        {/*<Header/>*/}
        <div className="product_content" hidden={false}>
          <div className="product_content_words">
            <div className="product_content_words_title">Our products</div>
            <div className="product_content_words_comment">
              The creative products of DigiFun are the result of the collective wisdom of the community.
            </div>
          </div>
          <div className="product_card_frame">
            {products?.map((item, idx) => (
              <div key={idx} onClick={() => this.routerTo(item)}>
                <div className="product_card">
                  <img src={require(`../../assets/products/${item?.img}/${item?.img}.jpg`).default} 
                  style={{ width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}/>
                  <div className="product_content_detail_comments">
                    <div className="product_content_detail_comments_intro">
                      <div className="product_content_detail_comments_intro_title">{item.title}</div>
                      <div className="product_content_detail_comments_intro_source">{item.source}</div>
                      <img src={require('../../assets/' + item.class).default}
                        className="product_content_detail_comments_intro_class" />
                      <img src={require('../../assets/' + item.sex).default}
                        className="product_content_detail_comments_intro_sex" />
                      <img src={require('../../assets/prize_icon.png').default}
                        className="product_content_detail_prize_icon" />
                      <span className="product_content_detail_prize_words">{item.prize}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

function ProductContent(props) {
  let navigate = useNavigate();
  return <ProductContentList {...props} navigate={navigate} />
}

export default ProductContent;