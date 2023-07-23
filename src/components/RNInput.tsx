import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
  textInput: Object;
  deleteIcon: any;
  onDelete: () => void;
}

const RNInput: React.FC<Props> = ({textInput, deleteIcon, onDelete}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <TextInput
        {...textInput}
        style={{
          width: deleteIcon ? '85%' : '100%',
          height: hp(5),
          marginVertical: hp(1),
          color: 'black',
        }}
      />

      {deleteIcon ? (
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={onDelete}>
          <Image
            source={require('../../assets/images.jpeg')}
            style={{width: wp(5), height: wp(5)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

RNInput.defaultProps = {
  textInput: {
    lable: 'Email',
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default RNInput;
