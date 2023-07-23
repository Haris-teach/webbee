import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RNcard from '../components/RNcard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MachineCard from '../components/machineCard';
import {removeBullDozer, setNewArray} from '../redux/features/machineSlice';

interface Props {}

const BullDozer: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const {bullDozer, temp} = useSelector((state: any) => state.machineSlice);

  let machine = bullDozer[0];

  let keys = Object.values(machine);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <MachineCard index={index} />
      </View>
    );
  };

  const AddMachine = () => {
    dispatch(setNewArray(keys));
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={temp}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Add Machine" onPress={AddMachine} />
      </View>
    </ScrollView>
  );
};

BullDozer.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    height: hp(90),
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  flatListContainer: {
    justifyContent: 'space-between', // Align items in a column
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 4,
    padding: 5,
  },
});

export default BullDozer;
