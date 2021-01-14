import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
var LAYERS = [
  {
    type: 'ArcGISTiledMapServiceLayer',
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer',
    username:'dothibienhoa',
    password:'dothibienhoa2020'

  },
  {
    type: 'ArcGISFeatureLayer',
    url: 'https://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/MTBENCHMARK2DATA2/FeatureServer/0'
  }
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
a = (e)=>{
 console.log(e)
}
  render() {
    return (
      <SafeAreaView>
        <Text> Home nghia </Text>
        {/* <Button onPress={()=>{ArcgisNghia.sampleMethod('123',2,this.a)}}>123</Button> */}
        {/* <RNMapViewNative
          layers={LAYERS} 
          ref={ref => this.ref = ref}
          style={{width:200,height:200}} /> */}
          <Text style={{width:200,height:200,backgroundColor:'#ff0000'}}>12312</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
