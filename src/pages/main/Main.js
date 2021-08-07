import React, {Component} from 'react';
import {InfoConsumer} from "../../components/Context/context";
import Info from "../../components/info/info";

class Main extends Component {
    render (){
        return (

            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {value => {
                            return value.places.map(item => {
                                return <Info key={item.id} item={item}/>
                            })
                        }}
                    </InfoConsumer>
                </div>
            </div>
        )
    }
}

export default Main;
