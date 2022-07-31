import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class ImageTextMenu extends Component {
    static defaultProps = {
        imageSource: require("../../assets/baby.png"),
        title: '이유식'
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity>
                <Image source={this.props.imageSource}
                    style={{
                        resizeMode: "contain",
                        width: 100
                    }}
                />
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
