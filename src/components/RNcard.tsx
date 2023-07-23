import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RNInput from './RNInput';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAttribute,
  deleteObjKey,
  removeMachine,
  updateKeyValue,
} from '../redux/features/machineSlice';

interface Props {
  title: String;
  properties: Object;
}

const RNcard: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const {title, properties, index} = props;
  const {allMachines} = useSelector(state => state.machineSlice);

  const keyValuePairs = Object.entries(allMachines[index]);

  const MiniBtnUI = () => {
    const temp = ['Text', 'CheckBox', 'Date', 'Number'];

    return (
      <>
        {temp.map(i => {
          return (
            <>
              <MenuOption onSelect={() => AddAttribute(i)}>
                <Text>{i}</Text>
              </MenuOption>
              <View style={{borderWidth: 0.3, borderColor: 'black'}} />
            </>
          );
        })}
      </>
    );
  };

  const removeCard = () => {
    let temp = allMachines.filter((i, ind) => ind != index);
    dispatch(removeMachine(temp));
  };

  const AddAttribute = i => {
    dispatch(addAttribute({i, index}));
  };

  const onDelete = key => {
    dispatch(deleteObjKey({index, key}));
  };

  const onHandelChange = (text, key) => {
    dispatch(updateKeyValue({index, key, text}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title.toUpperCase()}</Text>

      {keyValuePairs.map(([key, value]) => {
        return (
          <RNInput
            textInput={{
              label: `${key}`,
              onChangeText: text => onHandelChange(text, key),
              mode: 'outlined',
              value: value,
            }}
            deleteIcon={true}
            onDelete={() => onDelete(key)}
          />
        );
      })}

      <Menu>
        <MenuTrigger>
          <View style={styles.triggerStyle}>
            <Text style={styles.attributeStyle}>Add attributes</Text>
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.optionStyle}>
          {MiniBtnUI()}
        </MenuOptions>
      </Menu>
      <TouchableOpacity style={styles.removeBtnStyle} onPress={removeCard}>
        <Image
          source={require('../../assets/images.jpeg')}
          style={styles.removeImageStyle}
          resizeMode="contain"
        />
        <Text style={styles.removeTextStyle}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

RNcard.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: wp(5),
  },
  titleStyle: {
    fontSize: wp(6),
    color: 'red',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  triggerStyle: {
    width: '100%',
    backgroundColor: 'blue',
    height: hp(3),
    borderRadius: wp(1),
  },
  attributeStyle: {color: 'white', alignSelf: 'center'},
  optionStyle: {
    width: wp(30),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp(2),
  },
  removeBtnStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  removeImageStyle: {width: wp(5), height: wp(5)},
  removeTextStyle: {fontSize: wp(5), color: 'black'},
});

export default RNcard;
