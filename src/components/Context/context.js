import React, {Component} from 'react'
import { placeInfo, reviews, detailInfo, news} from "../../data";

const InfoContext = React.createContext();



class InfoProvider extends Component {

    state = {
        places: placeInfo,
        reviews, detailInfo, news

    }

    render (){
        return (
            <InfoContext.Provider value={{
                places: this.state.places,
                reviews: this.state.reviews,
                detailInfo: this.state.detailInfo,
                news: this.state.news
            }}>
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;


export { InfoProvider, InfoConsumer };
