/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Button,
    TextInput,
  FlatList,
    Image
} from 'react-native';

export default class rnapp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '欢迎 来到 reactnative',
      pageX: 0,
      pageY: 0,
      items: [
        {id: '111', name: '电脑', price: 100},
        {id: '222', name: '键盘', price: 100},
        {id: '333', name: '鼠标', price: 100},
      ]
    }
  }

  press() {
    this.setState({
      message: 'Good bye'
    })
  }

  delItem(item) {
    let newItems = [...this.state.items];
    let position = newItems.indexOf(item);

    newItems.splice(position, 1);

    this.setState({
      items: newItems
    })

  }

  ResponderMove(event) {
    console.log(event);
    this.setState({
      pageX: event.pageX,
      pageY: event.pageY
    })
  }

  render() {
    const items = this.state.items;
    return (
      <View style={styles.container}>

        {
          items.map((item, index) => {
            return (
                <View  key={item.id} style={styles.row}>
                  <Text>{item.name}, {item.price}</Text>
                  <Button onPress={e => this.delItem(item)} title="删除" />
                </View>
            )
          })
        }


        <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <View><Text>{item.key}</Text></View>}
        />

        <Text style={styles.welcome}>
          { this.state.message }
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="修改信息"
         onPress={e => this.press()} />

        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}

        />
          <Image
              style={{width: 200, height: 100}}
              source={ {uri: 'https://www.baidu.com/img/bd_logo1.png'} }
          />
        <View
            style={{
              flexDirection: "row",
              height: 100,
              padding: 20
            }}
            onResponderMove={this.ResponderMove.bind(this)}
        >
          <View style={{ backgroundColor: "blue", flex: 0.3 }} />
          <View style={{ backgroundColor: "red", flex: 0.5 }} />
          <Text>{this.state.pageX}, {this.state.pageY}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnapp', () => rnapp);
