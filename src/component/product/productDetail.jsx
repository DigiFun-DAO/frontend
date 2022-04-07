import React, { useMemo, useState } from "react"
import './product.css'
import '../../App.css'
import './productContent'
import BuyNFT from "../wallet/buyNFT";
import Transfer from "./transfer";
import Footer from "../footer";
import { platforms, products } from "./productContent"
import { mainColor } from "../../style";

export const ProductsLabel = (props) => {
  const { title, children } = props;
  return (
    <div style={{ display: "flex" }}>
      <div className="products-label-title">{title}</div>
      <div style={{ flex: 1, color: "#121127", fontWeight: 600, fontSize: 18 }}>{children}</div>
    </div>
  )
}

const ProductDetail = () => {
  const strs = window.location.href.split('/');
  const state = products?.find(item => item.id == strs[strs.length - 1]);
  const [platform_selected_idx, setSelect] = useState(0);
  const [idxs, setSelectIdxs] = useState([]);
  const img = useMemo(() => {
    if (idxs?.length > 0) return require(`../../assets/products/${state?.img}/parts/${platforms[platform_selected_idx]?.value}/${state.parts[idxs[idxs?.length - 1]]?.label}.png`).default
    return require(`../../assets/products/${state?.img}/${state?.img}.jpg`).default
  }, [idxs, state])

  return (
    <div>
      {/*<Header/>*/}
      <div className='product_item_frame'>
        <div className='product_item_frame_absolute'>
          <div className={state.cssDetail} style={{ background: "#944fdc" }}>
            <img src={img} style={{ width: "100%", maxHeight: "100%" }} />
          </div>
          <div className="product_item">
            <div className='product_item_photo_title'>{state.title}</div>
            <div className='product_item_icons'>
              <img src={require('../../assets/' + state.class).default}
                className="product_item_icon1" />
              &nbsp;
              <img src={require('../../assets/' + state.sex).default}
                className="product_item_icon2" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: 325, width: 590 }}>
              <ProductsLabel title="DESCRIPTION">{state.desc}</ProductsLabel>
              <ProductsLabel title="NETWORK">{state.source}</ProductsLabel>
              <ProductsLabel title="PLATFORM">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {platforms.map((item, index) => {
                    const isSelect = index === platform_selected_idx;
                    return (
                      <div
                        key={index}
                        style={{
                          border: `1px solid ${isSelect ? mainColor : "rgba(18, 17, 39, 0.56)"}`,
                          color: isSelect ? mainColor : "rgba(18, 17, 39, 0.56)",
                          padding: "5px 10px",
                          borderRadius: 5,
                          marginRight: 10,
                          cursor: isSelect ? "default" : "pointer",
                          fontWeight: 600
                        }}
                        onClick={() => {
                          setSelect(index);
                          if (index !== platform_selected_idx) setSelectIdxs([]);
                        }}
                      >
                        {item?.label}
                      </div>
                    )
                  })}
                </div>
              </ProductsLabel>
              <ProductsLabel title="CATEGORY">
                <div style={{ display: "flex", flexWrap: "wrap", height: 100, overflow: "auto", justifyContent: "flex-start" }}>
                  {state.parts.map((item, index) => {
                    const isSelect = idxs?.includes(index);
                    const isShow = item?.platform === platforms[platform_selected_idx]?.value
                    if (!isShow) return null

                    return (
                      <div
                        key={index}
                        style={{
                          border: `1px solid ${isSelect ? mainColor : "rgba(18, 17, 39, 0.56)"}`,
                          color: isSelect ? mainColor : "rgba(18, 17, 39, 0.56)",
                          padding: "0px 12px",
                          lineHeight: "24px",
                          height: 24,
                          borderRadius: 24,
                          margin: "0 3px 3px 0",
                          cursor: "pointer",
                          fontSize: 14
                        }}
                        onClick={() => {
                          if (isSelect) {
                            setSelectIdxs((pre) => {
                              const data = [...pre];
                              const i = data?.indexOf(index);
                              data.splice(i, 1);
                              return data
                            })
                          } else {
                            setSelectIdxs((pre) => ([...pre, index]))
                          }
                        }}
                      >
                        {item?.label?.split("-")?.join(" ")}
                      </div>
                    )
                  })}
                </div>
              </ProductsLabel>
              <ProductsLabel title="PRICE">
                <div className="flex-between" style={{ marginTop: -5 }}>
                  <div className='product_prize_icons'>
                    <img src={require('../../assets/prize_icon.png').default}
                      className="product_content_detail_prize_icon"
                      style={{ marginLeft: '0px', marginTop: 5 }} />
                    <span className="product_content_detail_prize_words">{idxs?.reduce((pre, next) => state?.parts[next]?.price + pre, 0)}</span>
                  </div>
                  <div className="button_group">
                    <BuyNFT ERC20={platforms[platform_selected_idx]?.ERC20} nids={idxs?.map(item=>state?.parts[item]?.nid)}/>
                    <Transfer groupName={state?.title}/>
                  </div>
                </div>
              </ProductsLabel>
            </div>
          </div>

          {/* 详情 */}
          <div className='product_photos'>
            <div className="product_history_frame">
              <div className='product_history_words'>
                <div className='product_history_words_title'>Product Story</div>
                <div className='product_history_words_content'>
                  {state.detail}
                </div>
                <div className='line0' />
                <img src={require('../../assets/story.svg').default} className='story_vector' />
              </div>
              <img src={require('../../assets/' + state.imgPath).default} className='story_img' />
            </div>
            <div className="line1" />
            <div className="line2" />
            <div className="product_details">Product Details</div>
            <div className="product_detail_photos">
              {state.detailPath.map((item, i) => (
                <img key={i} src={require('../../assets/' + item).default} style={{ width: '100%' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;