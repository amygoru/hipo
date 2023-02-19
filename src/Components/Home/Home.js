import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';

const Home = () => {
  const [img, setImg] = useState()
  function GetData() {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        setImg(response.data.products)
      })
  }
  useEffect(() => {
    GetData()
  }, [1])
  console.log(img)
  return (
    <>
      <div id="app" data-v-app="">
        <div data-v-68d7bcd4="" className="indexs">
        <Header/>
          <div data-v-68d7bcd4="" className="index_title">
            <p data-v-68d7bcd4="" className="top_title">Welcome Back</p>
            <p data-v-68d7bcd4="" className="bot_title">Quality Guarantee</p>
          </div>
          {/* <div data-v-68d7bcd4="" className="swiper_box">
          <div
            data-v-68d7bcd4=""
            style={{height: '515px'}}
            className="my-swipe van-swipe"
          >
            <div className="van-swipe__track">
              <div className="slideshow-container">
                <div className="slides">
                  <img
                    src="./apnamalls_files/1.9475514e.jpg"
                    alt="one"
                    className="pic outleft"
                    name="1"
                  /><img
                    src="./apnamalls_files/2.9ccf49a9.jpg"
                    alt="two"
                    className="pic inleft"
                    name="2"
                  /><img
                    src="./apnamalls_files/3.db9aaf50.jpg"
                    alt="three"
                    className="pic"
                    name="3"
                  /><img
                    src="./apnamalls_files/4.099e07d0.jpg"
                    alt="four"
                    className="pic"
                    name="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <div data-v-68d7bcd4="" className="index_list">
            <div data-v-68d7bcd4="" className="list_content">
              <ul data-v-68d7bcd4="" className="list_ul">

                {img?.map((item) => {
                  return (
                    <>
                      <li data-v-68d7bcd4="" className="list_li">
                        <ol data-v-68d7bcd4="">
                          <b>{item.title}</b>
                          <div data-v-68d7bcd4="" className="list_img_box">
                            <div
                              data-v-68d7bcd4=""
                              className="list_img"
                              style={{ backgroundImage: `url(${item.images[0]})` }}

                            ></div>
                          </div>
                          <div data-v-68d7bcd4="" className="van-multi-ellipsis--l3 info">
                            {item.description}
                          </div>
                          <p data-v-68d7bcd4="" className="price">₹{item.price}</p>
                        </ol>
                      </li>
                    </>
                  )

                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
