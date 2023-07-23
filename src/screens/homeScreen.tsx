import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import RNcard from '../components/RNcard';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAll,
  setAllBullDoser,
  setAllMachines,
  setMachinebyName,
} from '../redux/features/machineSlice';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {}

const homeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [isSelect, setIsSelect] = useState('');

  const {allMachines} = useSelector(state => state.machineSlice);

  const onPress = () => {
    let obj = {
      Category: 'Category',
    };
    dispatch(setAllMachines(obj));
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <RNcard title={item.Category} index={index} />
      </View>
    );
  };

  const SetMachineByName = name => {
    setIsSelect(name);
    dispatch(setMachinebyName(name));
    navigation.navigate('BullDozer');
  };
  const GetAll = () => {
    dispatch(getAll(0));
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={allMachines}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={styles.btnContainer}>
        <Text>{`${isSelect} is selected`}</Text>
        <Button title="Add Machine" onPress={onPress} />
        {allMachines.map(i => {
          return (
            <Button
              title={i.Category}
              onPress={() => SetMachineByName(i.Category)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

homeScreen.defaultProps = {};

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

export default homeScreen;
