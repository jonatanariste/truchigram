import React from "react";
import Post from "./component-post";
import firebase from "firebase/app";
import "firebase/database";
import Loading from "./component-loading";

class FeedContent extends React.Component {
  state = {
    data: [],
    loading: null
  };
  componentDidMount() {
    this.setState({
      data: [
        {
          avatar:
            "https://lh3.googleusercontent.com/-0Be0kMvq83o/AAAAAAAAAAI/AAAAAAAAADw/DPClJzUcTrY/photo.jpg",
          nombre: "Escuela DevRock",
          pic:
            "https://firebasestorage.googleapis.com/v0/b/truchigram.appspot.com/o/fotos%2FFlyers-Completos.png?alt=media&token=c19ddcdd-9e2b-4893-a652-e969944fbc27",
          txt: "Ultimo Dev Rock Podcast :) "
        },
        {
          avatar:
            "https://lh3.googleusercontent.com/-5n_RO4d2faw/AAAAAAAAAAI/AAAAAAAACBw/gzBUz33i2LI/photo.jpg",
          nombre: "Ceci Escamilla Gigirey",
          pic:
            "https://firebasestorage.googleapis.com/v0/b/truchigram.appspot.com/o/fotos%2Fprevia%20hs.jpg?alt=media&token=e3da74d7-add5-4045-a531-60d18a79cc09",
          txt: "Se viene el HOT SALE en Talleres a Color"
        },
        {
          avatar:
            "https://lh5.googleusercontent.com/-R7EVYqUSM6k/AAAAAAAAAAI/AAAAAAAAc2k/B785irxFDrE/photo.jpg",
          nombre: "Jeremías Figueroa",
          pic:
            "https://firebasestorage.googleapis.com/v0/b/truchigram.appspot.com/o/fotos%2Fphoto5102793831006447627.jpg?alt=media&token=db4a3655-1c8f-482a-bf00-5aebdb7fbd9e",
          txt: "Chusmeando truchigram\nVamos con el curso de Firebase 🔥🙌🏾"
        }
      ]
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <br />
        <br />
        <br />
        <br />
        {this.state.data
          .map((item, i) => {
            return (
              <Post
                key={i}
                txt={item.txt}
                nombre={item.nombre}
                avatar={item.avatar}
                pic={item.pic}
              />
            );
          })
          .reverse()}
      </React.Fragment>
    );
  }
}

export default FeedContent;
