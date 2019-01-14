import React, { Component } from 'react';
import {  View, Text, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';

export default class ListUserComponent extends Component {

  static propTypes = {
      users: PropTypes.array.isRequired
  };

  render() {
      console.log("PROPS: ", this.props.users);
    return (
        <FlatList
        data={ this.props.users }
        keyExtractor={(item) => item.index}
        renderItem={
            (item) => {
                console.log('user lol', item)
                const user = item.item;
                return(
                    <View style={styles.itemView}>
                    <Text style={styles.itemList}>{user.nome} {user.sobrenome}</Text>
                </View>
                )
            }
        }
        />
    );
  }
}

const styles = StyleSheet.create({
    itemView: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center'
      },
      itemList: {
        padding: 10,
        fontSize: 18,
        height: 44,
        marginTop: 20,
        marginLeft: 12
      },
});



// {this.props.users.map((user, index) => {
//     return (
//         <View key={index}>
//             <Text style={styles.itemList}>{user.nome}</Text>
//             <Text style={styles.itemList}>{user.sobrenome}</Text>
//         </View>
//     )
// })}