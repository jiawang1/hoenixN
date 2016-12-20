import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import { SearchBar, Button, Carousel,Grid } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as actions from './actions';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,ScrollView,
  Image,
  Text,
  View
} from 'react-native';

const data = [
    {
        img:require('./../../image/television.png'),
        text:'电视',
    },
    {
        img:require('./../../image/latop.png'),
        text:'笔记本',
    },
    {
        img:require('./../../image/ipad.png'),
        text:'平板电脑',
    },
    {
        img:require('./../../image/smartphone.png'),
        text:'手机',
    },
    {
        img:require('./../../image/printer.png'),
        text:'打印机',
    },
    {
        img:require('./../../image/screen.png'),
        text:'显示屏',
    },
    {
        img:require('./../../image/headset.png'),
        text:'耳麦',
    },
    {
        img:require('./../../image/memory-card.png'),
        text:'内存卡',
    }
];

const data1 = [
    {
        img:{uri: 'https://facebook.github.io/react/img/logo_og.png'},
        text:'ThinkPad 轻薄系列E550(07TCD）15.6英寸笔记本电脑 (i5-5200U 4G 500G 2G独显 3D摄像头 JBL音箱 Win10）',
    },
    {
        img:require('./../../image/latop.png'),
        text:'笔记本',
    },
    {
        img:require('./../../image/ipad.png'),
        text:'平板电脑',
    },
    {
        img:require('./../../image/smartphone.png'),
        text:'手机',
    },
    {
        img:require('./../../image/printer.png'),
        text:'打印机',
    },
    {
        img:require('./../../image/screen.png'),
        text:'显示屏',
    },
    {
        img:require('./../../image/headset.png'),
        text:'耳麦',
    },
    {
        img:require('./../../image/memory-card.png'),
        text:'内存卡',
    }
];

 class HomeView extends Component{

    constructor(){
        super();
    }

    pressButon(){
        Actions.counter({from: 'Home'});
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <SearchBar placeholder="搜索"></SearchBar>
                <View style={styles.imageContainer}>
                    <Carousel style={styles.carousel} autoplay infinite> 
                        <Image style={styles.image} source={require('./../../image/sale_product_01_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_02_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_03_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_04_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_05_280x190.png')} />            
                    </Carousel>
                </View>
                <Grid data={data} columnNum={4}
                    renderItem={(dataItem, index) => (
                    <View style={{backgroundColor: '#fff', justifyContent: 'center',alignItems: 'center',height:103 }}>
                        <Image source={dataItem.img} />
                        <Text>{dataItem.text}</Text>
                    </View>  
                    )}
                />
                {/* 
                <View style={{height:40,backgroundColor: '#fff',alignItems: 'center'}}>
                    <Carousel vertical dots={false} autoplay infinite> 
                        <Text style={{height:40,paddingLeft:10}}>五星app改版啦</Text>
                        <Text style={{height:40,paddingLeft:10}}>圣诞好礼满1000减100</Text>
                        <Text style={{height:40,paddingLeft:10}}>小家电品类低至五折</Text>
                    </Carousel>
                </View>
                <Text>this should be the home page for Wuxing site</Text>
                */}
                <Grid data={data1} columnNum={2} hasLine={false}
                    renderItem={(dataItem, index) => (
                    <View style={{backgroundColor: '#fff', justifyContent: 'center',alignItems: 'center',height:103 }}>
                        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
                        <Text>{dataItem.text}</Text>
                    </View>  
                    )}
                />
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./../../image/logo.jpg')} />
                </View>
                <Button onClick={()=>{this.pressButon()}}>to counter</Button>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    marginTop: 54,
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'white',
  },
  itemText: {
    height: 200,
    lineHeight: 200,
  },
  image:{
    width: Dimensions.get('window').width,
  },
  imageContainer:{
    height: 180,
  }
});

export default connect(state=>({
    test:1
}))(HomeView);