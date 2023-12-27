import { View, Text, ScrollView, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import RNDateTimePicker from '@react-native-community/datetimepicker'
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
export default function AssetList({ navigation }) {
    const [widthHeadMTS, setWidthHeadMTS] = useState();
    const [widthHeadNAME, setWidthHeadNAME] = useState();
    const [widthHeadDP, setWidthHeadDP] = useState();
    const [showDPK, setShowDPK] = useState(false);
    const [more, setMore] = useState(true);



    const widthIDTS = useRef();
    const widthNameTS = useRef();
    const widthDPTS = useRef();

    // 
    const [openBP, setOpenBP] = useState(false);
    const [valueBP, setValueBP] = useState(null);
    const [listBP, setListBP] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [openNTS, setOpenNTS] = useState(false);
    const [valueNTS, setValueNTS] = useState(null);
    const [listNTS, setListNTS] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [valueTS, setValueTS] = useState(null);
    const [valueDateS, setValueDateS] = useState(null);
    const [valueDateE, setValueDateE] = useState(null);


    // 
    //  timepicker
    const [indexSaveDPK, setIndexSaveDPK] = useState();

    const callPicker = async (index) => {
        setIndexSaveDPK(index);
        setShowDPK(true);
    }
    const onChangeDPK = async (event, selectedDate) => {
        if (Platform.OS !== 'ios') {
            await setShowDPK(false);
        }
        if (event.type == 'set') {
            switch (indexSaveDPK) {
                case 1:
                    setValueDateS(selectedDate);
                    break;
                case 2:
                    setValueDateE(selectedDate);
                    break;

            }
        }
    }
    // --------------
    useEffect(() => {

        widthIDTS.current.measure(async (x, y, measuredWidth, measuredHeight, pageX, pageY) => {
            setWidthHeadMTS(measuredWidth);
        });
        widthNameTS.current.measure((x, y, measuredWidth, measuredHeight, pageX, pageY) => {
            setWidthHeadNAME(measuredWidth);

        });
        widthDPTS.current.measure((x, y, measuredWidth, measuredHeight, pageX, pageY) => {
            setWidthHeadDP(measuredWidth);

        });
    }, []);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}>
                <View style={{ height: 50, alignItems: 'center', flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }} style={{ height: 50, alignItems: 'center', flexDirection: 'row', }}><IconAnt name='left' size={20} color='#3186ff' />
                        <Text style={{ marginLeft: 5, color: '#3186ff' }}>Asset List</Text>
                    </TouchableOpacity>
                </View>
                {more && <View style={{ marginTop: 10 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>Ngày nhập</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => { callPicker(1) }} style={{ backgroundColor: '#f6f6f6', width: '47%', height: 35, justifyContent: 'center', alignItems: 'center' }}><Text>{valueDateS == undefined ? '__/__/____' : moment(valueDateS).format('DD/MM/YYYY')}</Text></TouchableOpacity>
                            <Text>~</Text>
                            <TouchableOpacity onPress={() => { callPicker(2) }} style={{ backgroundColor: '#f6f6f6', width: '47%', height: 35, justifyContent: 'center', alignItems: 'center' }}><Text>{valueDateE == undefined ? '__/__/____' : moment(valueDateE).format('DD/MM/YYYY')}</Text></TouchableOpacity>
                        </View>
                    </View>
                    {/* <View style={{ width: '100%', marginTop: 5}}>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: '47%'}}>
                            <Text style={{ color: 'black' }}>Bộ phận</Text>
                            <TextInput style={{ width: '100%', height: 30, backgroundColor: '#f6f6f6',padding:0,paddingLeft: 3, }} value="TRUNG TÂM KHAI THÁC MẪU"/>
                        </View>
                        <View style={{ width: '47%' }}>
                            <Text style={{ color: 'black' }}>Nhóm tài sản</Text>
                            <TextInput style={{ width: '100%', height: 30, backgroundColor: '#f6f6f6',padding:0,paddingLeft: 3, }} value="Máy móc thiết bị trong công cụ dụng cụ"/>
                        </View>
                    </View>
                </View> */}
                    <View style={{ width: '100%', marginTop: 10, zIndex: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '100%' }}>
                                <Text style={{ color: 'black', fontSize: 14 }}>Bộ phận</Text>
                                {/* <TextInput style={{ marginTop: 5, width: '100%', height: 35, backgroundColor: '#f6f6f6', padding: 0, paddingLeft: 3, }} value="TRUNG TÂM KHAI THÁC MẪU" /> */}
                                <DropDownPicker
                                    style={{ marginTop: 5, width: '100%', minHeight: 35, backgroundColor: '#f6f6f6', padding: 0, paddingLeft: 3, borderWidth: 0 }}
                                    open={openBP}
                                    value={valueBP}
                                    items={listBP}
                                    setOpen={setOpenBP}
                                    setValue={(value) => {
                                        if (valueBP == value()) {
                                            setValueBP('')
                                        } else {
                                            setValueBP(value());
                                        }
                                    }}
                                    setItems={setListBP}
                                    placeholder="Chọn bộ phận"
                                    dropDownContainerStyle={{
                                        backgroundColor: "#ffffff",
                                        borderWidth: 2,
                                        borderColor: '#f6f6f6'
                                    }}
                                    selectedItemContainerStyle={{
                                        backgroundColor: "#f6f6f6"
                                    }}
                                    listMode="SCROLLVIEW"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 10, zIndex: 4 }}>
                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '100%' }}>
                                <Text style={{ color: 'black', fontSize: 14 }}>Nhóm tài sản</Text>
                                {/* <TextInput style={{ marginTop:5,width: '100%', height: 35, backgroundColor: '#f6f6f6',padding:0,paddingLeft: 3, }} value="TRUNG TÂM KHAI THÁC MẪU"/> */}
                                <DropDownPicker
                                    style={{ marginTop: 5, width: '100%', minHeight: 35, backgroundColor: '#f6f6f6', padding: 0, paddingLeft: 3, borderWidth: 0 }}
                                    open={openNTS}
                                    value={valueNTS}
                                    items={listNTS}
                                    setOpen={setOpenNTS}
                                    setValue={(value) => {
                                        if (valueBP == value()) {
                                            setValueNTS('')
                                        } else {
                                            setValueNTS(value());
                                        }
                                    }}
                                    setItems={setListNTS}
                                    placeholder="Chọn nhóm tài sản"
                                    dropDownContainerStyle={{
                                        backgroundColor: "#ffffff",
                                        borderWidth: 2,
                                        borderColor: '#f6f6f6'
                                    }}
                                    selectedItemContainerStyle={{
                                        backgroundColor: "#f6f6f6"
                                    }}
                                    listMode="SCROLLVIEW"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '100%' }}>
                                <Text style={{ color: 'black', fontSize: 14 }}>Tài sản</Text>
                                <TextInput style={{ marginTop: 5, width: '100%', height: 35, backgroundColor: '#f6f6f6', padding: 0, paddingLeft: 3, }} value={valueTS} placeholder='Nhập tài sản' />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 35, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '48%', height: 35, backgroundColor: '#dff6fe', borderRadius: 2, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#0f4686', fontWeight: 'bold' }}>Lấy dữ liệu</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '48%', height: 35, backgroundColor: '#dff6fe', borderRadius: 2, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#0f4686', fontWeight: 'bold' }}>Nhập dữ liệu scan</Text></TouchableOpacity>
                    </View>
                </View>}
                <TouchableOpacity onPress={() => { setMore(!more) }} style={{ paddingHorizontal: 10, backgroundColor: '#f6f6f6', width: '100%', height: 35, marginTop: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Search</Text>{more ? <IconMat name='expand-less' size={25} /> : <IconMat name='expand-more' size={25} />}
                </TouchableOpacity>
                <View style={{ height: 600, flexDirection: 'column', marginTop: 20, paddingBottom: 40, }}>
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
                                {[...Array(20)].map((value, index, array) => {
                                    return <View key={index} style={{ height: 40, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eef1f4' }}>
                                        <View style={{ justifyContent: 'center', fontWeight: 'bold', width: 50, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4', alignItems: 'center' }}><Text style={{ color: '#455665', fontWeight: 'bold' }}>{index + 1}</Text></View>
                                        <View ref={widthIDTS} style={{ justifyContent: 'center', fontWeight: 'bold', minWidth: 150, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4', }}><Text style={{ color: '#455665' }}>DS29003</Text></View>
                                        <View ref={widthNameTS} style={{ justifyContent: 'center', fontWeight: 'bold', minWidth: 200, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4' }}><Text style={{ color: '#455665' }}>May tan ode 10mm-YW-727E/F/R- bao gom he thong xuong nut tu dong 10mm)</Text></View>
                                        <View ref={widthDPTS} style={{ justifyContent: 'center', fontWeight: 'bold', minWidth: 150, height: '100%', paddingHorizontal: 10, borderRightWidth: 1.5, borderColor: '#eef1f4' }}><Text style={{ color: '#455665' }}>2F MAY</Text></View>
                                    </View>
                                })}
                            </View>
                        </ScrollView>
                    </ScrollView>
                    <View style={{ backgroundColor: '#dff6fe', height: 35, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#0f4686' }}>Row count: 20</Text>
                    </View>
                </View>
            </View>
            {showDPK && (
                Platform.OS === 'ios' ? <View style={{ position: 'absolute', zIndex: 100, width: '100%', height: 270, bottom: 30, backgroundColor: darkMode ? '#2c2c2e' : '#f2f2f2' }}>
                    <RNDateTimePicker
                        testID="dateTimePicker2"
                        value={new Date()}
                        mode='date'
                        is24Hour={true}
                        onChange={onChangeDPK}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        style={{ position: 'absolute', bottom: 30, width: '100%', backgroundColor: '#f2f2f2' }}
                        themeVariant={"light"}
                    />
                    <TouchableOpacity onPress={() => { setShowDPK(false) }} style={{ position: 'absolute', right: 10, top: 10, padding: 15, backgroundColor: darkMode ? '#323234' : '#e4e4e6', justifyContent: 'center', borderRadius: 10, alignItems: 'center' }}><Text style={{ color: darkMode ? 'white' : 'black' }} ><AntIcon name='close' size={20} /></Text></TouchableOpacity>
                </View> : <RNDateTimePicker
                    testID="dateTimePicker2"
                    value={new Date()}
                    mode='date'
                    is24Hour={true}
                    onChange={onChangeDPK}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    style={{ position: 'absolute', bottom: 30, width: '100%', backgroundColor: '#f2f2f2' }}
                    themeVariant={"light"}
                />
            )}
        </ScrollView>
    )
}