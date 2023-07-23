import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
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
  removeBullDozer,
  removeMachine,
  updateKeyValue,
} from '../redux/features/machineSlice';

interface Props {
  title: String;
  properties: Object;
  key: String;
}

const MachineCard: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {index} = props;
  const {temp} = useSelector(state => state.machineSlice);

  const keyValuePairs = Object.entries(temp[index]);

  const deleteBullDozer = () => {
    let tem = temp.filter((i, ind) => ind != index);

    dispatch(removeBullDozer(tem));
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    console.log(date);
  };

  return (
    <View style={styles.container}>
      {keyValuePairs.map(([key, value]) => {
        return (
          <RNInput
            textInput={{
              label: `${key}`,
              mode: 'outlined',
              onFocus: () => {
                if (key == 'Date') setShowDatePicker(true);
              },
              value: key == 'Date' ? moment(date).format('DD-mm-yyyy') : '',
            }}
          />
        );
      })}

      <TouchableOpacity style={styles.removeBtnStyle} onPress={deleteBullDozer}>
        <Image
          source={require('../../assets/images.jpeg')}
          style={styles.removeImageStyle}
          resizeMode="contain"
        />
        <Text style={styles.removeTextStyle}>Remove</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

MachineCard.defaultProps = {};

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

export default MachineCard;
