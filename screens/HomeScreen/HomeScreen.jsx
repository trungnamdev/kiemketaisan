import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import IconEnt from 'react-native-vector-icons/Entypo';



export default function HomeScreen({navigation}) {
  const [lang, setlang] = useState('vi');
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 15, flexDirection: 'column', alignItems: 'center' }}>
      <View style={{ width: '100%' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Inventory System</Text>
        <Text style={{ fontSize: 14, color: '#bbbbbd', marginTop: 5 }}>{moment().format('DD/MM/YYYY HH:mm:ss')}</Text>
      </View>
      <View style={{ width: '100%', marginTop: 30, }}>
        <View style={{ width: '100%', height: 100, justifyContent: 'space-between', flexDirection: 'row' }}>
          
          <TouchableOpacity onPress={()=>{
             navigation.navigate('AssetList');
          }} style={{ width: '49%', height: '100%', backgroundColor: '#ff886a', borderRadius: 10, padding: 8, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <IconFA name={'list-alt'} color='#fcf8f8' size={25} />
              </View>
              <View style={{ width: 25, height: 25, backgroundColor: '#ff9578', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <IconEnt name={'dots-three-horizontal'} color='#fcf8f8' size={18} />
              </View>

            </View>
            <View style={{ width: '100%', height: 22 }}>
              <Text style={{ color: '#fcfcfa', fontWeight: '500' }}>Asset management</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
             navigation.navigate('Inventory');
          }} style={{ width: '49%', height: '100%', backgroundColor: '#46c860', borderRadius: 10, padding: 8, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <IconMat name={'production-quantity-limits'} color='#fcf8f8' size={25} />
              </View>
              <View style={{ width: 25, height: 25, backgroundColor: '#56da6f', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <IconEnt name={'dots-three-horizontal'} color='#fcf8f8' size={18} />
              </View>

            </View>
            <View style={{ width: '100%', height: 22 }}>
              <Text style={{ color: '#fcfcfa', fontWeight: '500' }}>Inventory</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 100, justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '49%', height: '100%', backgroundColor: '#4b6ac6', borderRadius: 10, padding: 8, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <IconOct name={'report'} color='#fcf8f8' size={25} />
              </View>
              <View style={{ width: 25, height: 25, backgroundColor: '#5c7bd9', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <IconEnt name={'dots-three-horizontal'} color='#fcf8f8' size={18} />
              </View>

            </View>
            <View style={{ width: '100%', height: 22 }}>
              <Text style={{ color: '#fcfcfa', fontWeight: '500' }}>Report</Text>
            </View>
          </View>
          {/* <View style={{ width: '49%', height: '100%', backgroundColor: '#46c860', borderRadius: 10, padding: 8,flexDirection:'column',justifyContent:'space-between' }}>
            <View style={{width:'100%',height:30,flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{width:30,height:30,justifyContent:'center',alignItems:'center'}}>
                <IconOct name={'report'} color='#fcf8f8' size={25}/>
              </View>
              <View style={{width:25,height:25,backgroundColor:'#56da6f',borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                <IconEnt name={'dots-three-horizontal'} color='#fcf8f8' size={18}/>
              </View>
              
            </View>
            <View style={{width:'100%',height:22}}>
              <Text style={{color:'#fcfcfa',fontWeight:'500'}}>Report</Text>
            </View>
          </View> */}
        </View>

      </View>

      {/*  */}
      <View style={{ position: 'absolute', bottom: 30, width: '100%', marginTop: 20, height: 30, justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{ width: '47%', height: '100%', borderRadius: 5, padding: 15, }}>

        </View>
        <View style={{ width: '47%', height: '100%', backgroundColor: 'white', flexDirection: 'row', borderRadius: 5, overflow: 'hidden',borderWidth: 0.5,borderColor: '#d1d0d9', }}>
          <TouchableOpacity onPress={() => {
            setlang('vi');
          }} style={{ width: '50%', height: '100%', flexDirection: 'row', backgroundColor: lang == 'vi' ? '#d1d0d9' : '#fbf9ff', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '50%', aspectRatio: 1, borderRadius: 50, overflow: 'hidden', marginRight: 5, }}>
              <Image source={require('../../assets/images/vi.png')} style={{ width: '100%', height: '100%' }} />
            </View>
            <Text style={{ fontWeight: 'bold', color:  'black', fontSize: 12 }}>VI</Text>
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: '#f2f2f2' }}></View>
          <TouchableOpacity onPress={() => {
            setlang('en');
          }} style={{ width: '50%', height: '100%', backgroundColor: lang == 'en' ? '#d1d0d9' : '#fbf9ff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '50%', aspectRatio: 1, borderRadius: 50, overflow: 'hidden', marginRight: 5, }}>
              <Image source={require('../../assets/images/en.png')} style={{ width: '100%', height: '100%' }} />
            </View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 12 }}>EN</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
    </View>
  )
}