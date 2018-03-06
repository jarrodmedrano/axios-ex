import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Slider from "react-viewport-slider";

const url = "https://salty-wordpress.herokuapp.com/wp-json/wp/v2/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverResponse: [],
      featuredImages: []
    };
  }

  async getData() {
    const res = await axios(`${url}posts?_embed`);
    const data = await res.data;
    this.setState({ serverResponse: data });
  }

  async getFeaturedImg(id) {}

  componentDidMount() {
    this.getData().catch(alert);
  }

  render() {
    return (
      <Slider>
        {this.state.serverResponse.map(function(item, id) {
          return (
            <Slider.Item
              className="has-overlay"
              style={{
                backgroundImage: `url(${
                  item._embedded["wp:featuredmedia"][0]["source_url"]
                })`,
                backgroundSize: "cover"
              }}
            >
              <div className="content">{item.title.rendered}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.excerpt.rendered
                }}
              />
            </Slider.Item>
          );
        }, this)}
      </Slider>
    );
  }
}

export default App;
