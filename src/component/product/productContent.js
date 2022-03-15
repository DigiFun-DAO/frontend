import React from "react";
import './product.css';
import '../../App.css'
import Header from "../header";
import Footer from "../footer";
import {useNavigate} from 'react-router-dom';

global.products = [
  {
    id: 0,
    imgPath: "product1.png",
    detailPath: ["product1_detail1.png", "product1_detail2.png", "product1_detail3.png", "product1_detail4.png", "product1_detail5.png"],
    title: "Evil Snowman",
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
    imgPath: "product2.png",
    detailPath: ["product2_detail1.png", "product2_detail2.png", "product2_detail3.png", "product2_detail4.png", "product2_detail5.png"],
    title: "Evil Snowman",
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
    imgPath: "product3.png",
    detailPath: ["product3_detail1.png", "product3_detail2.png", "product3_detail3.png", "product3_detail4.png", "product3_detail5.png"],
    title: "R·G YEARning",
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
    imgPath: "product4.png",
    detailPath: ["product4_detail1.png", "product4_detail2.png", "product4_detail3.png", "product4_detail4.png", "product4_detail5.png"],
    title: "R·G YEARning",
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
    imgPath: "product5.png",
    detailPath: ["product5_detail1.png", "product5_detail2.png", "product5_detail3.png", "product5_detail4.png", "product5_detail5.png"],
    title: "Ice Shadow",
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
    imgPath: "product6.png",
    detailPath: ["product6_detail1.png", "product6_detail2.png", "product6_detail3.png", "product6_detail4.png", "product6_detail5.png"],
    title: "Ice Shadow",
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
]

class ProductContentList extends React.Component {
  routerTo(v) {
    this.props.navigate(`/product/detail/${v.id}`, {state: v})
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
            {global.products.map((item, idx) => (
              <div onClick={() => this.routerTo(item)}>
                <div className="product_card">
                  <div className={item.css}>
                    <img src={require('../../assets/' + item.imgPath).default} width={item.width}/>
                  </div>
                  <div className="product_content_detail_comments">
                    <div className="product_content_detail_comments_intro">
                      <div className="product_content_detail_comments_intro_title">{item.title}</div>
                      <div className="product_content_detail_comments_intro_source">{item.source}</div>
                      <img src={require('../../assets/' + item.class).default}
                           className="product_content_detail_comments_intro_class"/>
                      <img src={require('../../assets/' + item.sex).default}
                           className="product_content_detail_comments_intro_sex"/>
                      <img src={require('../../assets/prize_icon.png').default}
                           className="product_content_detail_prize_icon"/>
                      <span className="product_content_detail_prize_words">{item.prize}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

function ProductContent(props) {
  let navigate = useNavigate();
  return <ProductContentList {...props} navigate={navigate}/>
}

export default ProductContent;