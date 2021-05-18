import api from "./api";

export const getFeatured = async (token) => {
  try {
    const res = await api().get("/browse/featured-playlists", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data.playlists.items;
  } catch (err) {
    console.log(err);
  }
};

export const getGenres = async (token) => {
  try {
    const res = await api().get("/browse/categories", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data.categories.items;
  } catch (err) {
    console.log(err);
  }
};

export const getReleases = async (token) => {
  try {
    const res = await api().get("/browse/new-releases", {
      headers: { Authorization: `Bearer ${token}` }
    });

    return res.data.albums.items;
  } catch (err) {
    console.log(err);
  }
};
