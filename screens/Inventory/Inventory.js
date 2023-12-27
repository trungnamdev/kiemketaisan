import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import IconAnt from 'react-native-vector-icons/AntDesign';
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
export default function Inventory({ navigation }) {
    const [assetList, setAssetList] = useState([
        {
            mavattu:"CAMERA201911",
            ten:"He thong camera quan sat"
        },
        {
            mavattu:"DDTT201804",
            ten:"Dau doc thong tin FASTMA RFID"
        },
        {
            mavattu:"DDTT201804-1",
            ten:"Dau doc thong tin FASTNA FT880RFID"
        },
        {
            mavattu:"FILESERVER201903",
            ten:"File Server"
        },
        {
            mavattu:"HTCC201803",
            ten:"He thon chan cua tu bao om the, IC: kinh)"
        }
    ]);
    const [scanList, setScanList] = useState([]);
    const cameraRef = useRef(null);
    const device = useCameraDevice('back');

    const [hasPermission, setHasPermission] = useState(false);
    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'granted');
        })();
    }, []);
    const [widthHeadMTS, setWidthHeadMTS] = useState(150);
    const [widthHeadNAME, setWidthHeadNAME] = useState(200);
    const [widthHeadDP, setWidthHeadDP] = useState(100);
    const widthIDTS = useRef();
    const widthNameTS = useRef();
    const widthDPTS = useRef();
    useEffect(() => {

        widthIDTS?.current?.measure(async (x, y, measuredWidth, measuredHeight, pageX, pageY) => {
            setWidthHeadMTS(measuredWidth);
        });
        widthNameTS?.current?.measure((x, y, measuredWidth, measuredHeight, pageX, pageY) => {
            setWidthHeadNAME(measuredWidth);

        });
        widthDPTS?.current?.measure((x, y, measuredWidth, measuredHeight, pageX, pageY) => {
            setWidthHeadDP(measuredWidth);

        });
    }, [scanList]);

    // -----------------
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13',"code-128"],
        onCodeScanned: async (codes) => {
            if (!scanList?.some((item) => item?.mavattu == codes[0].value)) {
                let ma = assetList?.filter(v => v?.mavattu == codes[0].value);
                setScanList((prevList) => [...prevList, ma[0]]);
            }
        }
      })
    // -----------------
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ backgroundColor: 'white', paddingHorizontal: 10 }}>
                    <View style={{ height: 50, alignItems: 'center', flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }} style={{ height: 50, alignItems: 'center', flexDirection: 'row', }}><IconAnt name='left' size={20} color='#3186ff' />
                            <Text style={{ marginLeft: 5, color: '#3186ff' }}>Inventory</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    {device && hasPermission && <Camera
                        codeScanner={codeScanner}
                        style={{height:'100%',width:'100%'}}
                        device={device}
                        isActive={true}
                        ref={cameraRef}
                    />}

                </View>
                <View style={{ height: 400, flexDirection: 'column', marginTop: 20, paddingBottom: 40, }}>
                    <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'column' }}>
                        <View>
                            <View style={{ width: '100%', height: 40, flexDirection: 'row' }}>
                                <View style={{ justifyContent: 'center', fontWeight: 'bold', width: 50, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#ffffff', backgroundColor: '#dff6fe' }}></View>
                                <View style={{ justifyContent: 'center', fontWeight: 'bold', width: widthHeadMTS, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#ffffff', backgroundColor: '#dff6fe' }}><Text style={{ color: '#0f4686', fontWeight: 'bold' }}>Mã tài sản</Text></View>
                                <View style={{ justifyContent: 'center', fontWeight: 'bold', width: widthHeadNAME, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#ffffff', backgroundColor: '#dff6fe' }}><Text style={{ color: '#0f4686', fontWeight: 'bold' }}>Tên tiếng anh</Text></View>
                                <View style={{ justifyContent: 'center', fontWeight: 'bold', width: widthHeadDP, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#ffffff', backgroundColor: '#dff6fe' }}><Text style={{ color: '#0f4686', fontWeight: 'bold' }}>Đơn vị</Text></View>
                            </View>
                        </View>
                        <ScrollView nestedScrollEnabled={true}>
                            <View style={{ width: '100%', flexDirection: 'columns', justifyContent: 'center', }}>
                                {scanList?.reverse()?.map((value, index, array) => {
                                    return <View key={index} style={{ height: 40, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eef1f4', backgroundColor:index == 0 ? '#bfbfbf':'white' }}>
                                        <View style={{ justifyContent: 'center', fontWeight: 'bold', width: 50, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4', alignItems: 'center' }}><Text style={{ color: '#455665', fontWeight: 'bold' }}>{array?.length - index}</Text></View>
                                        <View ref={widthIDTS} style={{ justifyContent: 'center', fontWeight: 'bold', minWidth: widthHeadMTS, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4', }}><Text style={{ color: '#455665' }}>{value?.mavattu}</Text></View>
                                        <View ref={widthNameTS} style={{justifyContent: 'center', fontWeight: 'bold', minWidth: widthHeadNAME, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4' }}><Text style={{ color: '#455665' }}>{value?.ten}</Text></View>
                                        <View ref={widthDPTS} style={{ justifyContent: 'center', fontWeight: 'bold', minWidth: widthHeadDP, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4' }}><Text style={{ color: '#455665' }}>2F MAY</Text></View>
                                    </View>
                                })}
                            </View>
                        </ScrollView>
                    </ScrollView>
                    <View style={{ backgroundColor: '#dff6fe', height: 35, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#0f4686' }}>Row count: {scanList.length}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
