import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { getFeatured, getGenres, getReleases } from "../../../services/get";
import { getToken } from "../../../services/post";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount() {
    getToken().then(async (token) => {
      Promise.all([
        getFeatured(token),
        getGenres(token),
        getReleases(token)
      ]).then((results) => {
        console.log(results);
        this.setState({
          playlists: results[0],
          categories: results[1],
          newReleases: results[2]
        });
      });
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
