import React from "react"
import './product.css'
import '../../App.css'
import '../product/productContent'
import BuyNFT from "../wallet/buyNFT";
import Footer from "../footer";

class ProductDetail extends React.Component {


  constructor(props, context) {
    super(props, context)
    const strs = window.location.href.split('/')
    this.state = global.products.find(item => item.id == strs[strs.length - 1])
    this.state.button_selected = false
    this.state.platform_selected_idx = 0
    this.state.platforms = ['DECENTRALAND', 'DIGIFUN DAO']
  }

  render() {
    return (
      <div>
        {/*<Header/>*/}
        <div className='product_item_frame'>
          <div className='product_item_frame_absolute'>
            <div className={this.state.cssDetail}>
              <img src={require('../../assets/' + this.state.imgPath).default} style={{width: this.state.width}}/>
            </div>
            <div className='product_item_photo_title'>{this.state.title}</div>
            <div className='product_item_icons'>
              <img src={require('../../assets/' + this.state.class).default}
                   className="product_item_icon1"/>
              <img src={require('../../assets/' + this.state.sex).default}
                   className="product_item_icon2"/>
            </div>
            <div className='product_desc' style={{marginTop: '140px'}}>
              DESCRIPTION
            </div>
            <div className='product_words' style={{marginTop: '140px'}}>
              {this.state.desc}
            </div>
            <div className='product_desc' style={{marginTop: '230px'}}>
              NETWORK
            </div>
            <div className='product_words' style={{marginTop: '230px'}}>
              {this.state.source}
            </div>
            <div className='product_desc' style={{marginTop: '295px'}}>
              PLATFORM
            </div>
            {
              this.state.platforms.map((item, index) => {
                  const leftPos = 600 + 160 * index
                  return (
                    <div className={index === this.state.platform_selected_idx ?
                      'product_platform_selected' : 'product_platform'}
                         style={{marginTop: '290px', marginLeft: leftPos + 'px'}}
                         onClick={() => {
                           this.setState({platform_selected_idx: index})
                         }}
                    >
                      {item}
                    </div>
                  )
                }
              )
            }
            <div className='product_desc' style={{marginTop: '360px'}}>
              PRICE
            </div>
            <div className='product_prize_icons'>
              <img src={require('../../assets/prize_icon.png').default}
                   className="product_content_detail_prize_icon"
                   style={{marginLeft: '0px'}}/>
              <span className="product_content_detail_prize_words">{this.state.prize}</span>
              {/*<span className='product_prize_split'>/</span>*/}
              {/*<img src={require('../../assets/prize_eth_icon.png').default}*/}
              {/*     className="product_content_detail_prize_icon"*/}
              {/*     style={{marginLeft: '38px'}}/>*/}
              {/*<span className="product_content_detail_prize_words_eth">{this.state.prize_eth}</span>*/}
            </div>
            {this.state.platform_selected_idx === 0 ?
              <a href={this.state.url}>
                <button className={this.state.button_selected === true ? "buy_button_selected" : "buy_button_empty"}
                        style={{cursor: 'pointer'}}
                        onMouseEnter={() => {
                          this.setState({button_selected: true})
                        }}
                        onMouseLeave={() => {
                          this.setState({button_selected: false})
                        }}>
                  <div className="buy_button_words">BUY</div>
                </button>
            </a>:<BuyNFT/>
            }

            <div className='product_photos'>
              <div className="product_history_frame">
                <div className='product_history_words'>
                  <div className='product_history_words_title'>Product Story</div>
                  <div className='product_history_words_content'>
                    {this.state.detail}
                  </div>
                  <div className='line0'/>
                  <img src={require('../../assets/story.svg').default} className='story_vector'/>
                </div>
                <img src={require('../../assets/' + this.state.imgPath).default} className='story_img'/>
              </div>
              <div className="line1"/>
              <div className="line2"/>
              <div className="product_details">Product Details</div>
              {/*<div className="product_detail_words">{this.state.detail}</div>*/}
              <div className="product_detail_photos">
                {this.state.detailPath.map(item => (
                  <img src={require('../../assets/' + item).default} style={{width: '100%'}}/>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ProductDetail;