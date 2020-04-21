import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Robot extends Component {
    render() {
        const imageSource = {
            uri: "https://cms-i.autodaily.vn/du-lieu/2019/07/23/robot-linh-vat.JPG"
        };
        return(
            <Image source={ imageSource }
                    style={ {width: 112, height: 243} }
            >
            </Image>
        );
    } 
}