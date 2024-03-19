import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

const MainScreen = ({navigation}) => {
  const device = useCameraDevice('back'); // Specify the camera device type (e.g., 'back' or 'front')
  const camera = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      const microphonePermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);

      if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED && microphonePermission === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera and microphone permissions granted');
      } else {
        console.log('Camera and/or microphone permissions denied');
      }
    } catch (error) {
      console.error('Error checking permissions:', error);
    }
  };

  const startRecording = async () => {
    if (camera.current && !isRecording) {
      try {
        await camera.current.startRecording({
          onRecordingFinished: (video) => console.log(video),
          onRecordingError: (error) => console.error(error)
        });
        console.log('Recording started');
        setIsRecording(true);
      } catch (error) {
        console.error('Error starting recording:', error);
        setIsRecording(false);
      }
    }
  };

  const stopRecording = async () => {
    if (camera.current && isRecording) {
      try {
        await camera.current.stopRecording();
        console.log('Recording stopped');
        setIsRecording(false);
      } catch (error) {
        console.error('Error stopping recording:', error);
        setIsRecording(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view1}>
        <Text style={styles.heading}>Camera Capture</Text>
        <View style={styles.camera}>
          <Camera
            ref={(ref) => (camera.current = ref)}
            style={styles.cameraPreview}
            device={device}
            isActive={true}
            video={true} // <-- Add video prop
            audio={true} // <-- Add audio prop
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity onPress={isRecording ? stopRecording : startRecording} style={styles.button}>
            <Text style={styles.text}>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity onPress={()=>navigation.navigate('Main1')} style={styles.button2}><Text style={styles.text}>Translate1</Text></TouchableOpacity>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button2}><Text style={styles.text}>Log Out</Text></TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen:{
    display:'flex',
    flexDirection:'column',
    height:'100%'
  },
  view1:{
    flex:7,
  },
  view2:{
    flex:1,
    alignItems:'end'
  },
  buttonView:{
    display:'flex',
    alignItems:'flex-end',
  },
  heading:{
    color:'#222',
    fontSize:20,
    textAlign:'center',
    paddingVertical:10,
  },
  button:{
    backgroundColor:'#223',
    margin:10,
    width:200,
    padding:5,
    borderRadius:10,
  },
  button2:{
    backgroundColor:'#222',
    margin:10,
    marginVertical:20,
    marginHorizontal:20,
    padding:10,
    borderRadius:10,
  },
  text:{
    color:"#fff",
    textAlign:'center',
    fontSize:16,
  },
  camera:{
    width:'100%',
    height:300,
  },
  cameraPreview: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MainScreen;





