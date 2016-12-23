import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar, Button, Carousel, Grid, TabBar, Flex } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    TouchableOpacity, ScrollView, TouchableHighlight,
    Image,
    Text,
    View,
} from 'react-native';

const data = [
    {
        img: require('./../../image/television.png'),
        text: '电视',
    },
    {
        img: require('./../../image/latop.png'),
        text: '笔记本',
    },
    {
        img: require('./../../image/ipad.png'),
        text: '平板电脑',
    },
    {
        img: require('./../../image/smartphone.png'),
        text: '手机',
    },
    {
        img: require('./../../image/printer.png'),
        text: '打印机',
    },
    {
        img: require('./../../image/screen.png'),
        text: '显示屏',
    },
    {
        img: require('./../../image/headset.png'),
        text: '耳麦',
    },
    {
        img: require('./../../image/memory-card.png'),
        text: '内存卡',
    }
];

const data1 = [
    {
        img: { uri: 'http://m.360buyimg.com/n12/jfs/t3247/279/3074453513/51884/dc637ab1/57eb7e1dN47558c9e.jpg!q70.jpg' },
        text: '格力（GREE）正1.5匹 变频 品圆 冷暖 壁挂式空调 KFR-35GW/(35592)FNhDa-A3',
    },
    {
        img: require('./../../image/latop.png'),
        text: '笔记本',
    },
    {
        img: require('./../../image/ipad.png'),
        text: '平板电脑',
    },
    {
        img: require('./../../image/smartphone.png'),
        text: '手机',
    },
    {
        img: require('./../../image/printer.png'),
        text: '打印机',
    },
    {
        img: require('./../../image/screen.png'),
        text: '显示屏',
    },
    {
        img: require('./../../image/headset.png'),
        text: '耳麦',
    },
    {
        img: require('./../../image/memory-card.png'),
        text: '内存卡',
    }
];

class HomeView extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };

    }
    pressButon() {
        Actions.counter({ from: 'Home' });
    }
    toDetail() {
        Actions.productDetail({ from: 'Home' });
    }
    renderContent(pageText) {
        return (
            <View style={{ backgroundColor: 'white', height: 100 }}>
                <View style={{ paddingTop: 60 }}><Text>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</Text></View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <SearchBar placeholder="搜索"></SearchBar>
                </View>
                <View style={styles.imageContainer}>
                    <Carousel autoplay infinite>
                        <Image style={styles.image} source={require('./../../image/sale_product_01_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_02_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_03_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_04_280x190.png')} />
                        <Image style={styles.image} source={require('./../../image/sale_product_05_280x190.png')} />
                    </Carousel>
                </View>
                <Grid data={data} columnNum={4}
                    renderItem={(dataItem, index) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: 103 }}>
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
                
                <Grid data={data1} columnNum={2} hasLine={false}
                    renderItem={(dataItem, index) => (
                    <View style={{backgroundColor: '#fff',alignItems: 'center',height:500 }}>
                        <Image style={{width:150,height:150}} source={dataItem.img} />
                        <Text ellipsizeMode='tail' numberOfLines={1}>{dataItem.text}</Text>
                    </View>  
                    )}
                />
                */}
                <Flex wrap='wrap'>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.leftItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3778/245/902901777/147756/5b1618be/5817f014N6710b01e.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>海信（Hisense）LED55EC520UA 55英寸 VIDAA3 14核 炫彩4K智能电视(黑色)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.rightItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3415/166/1887465515/142495/edec4024/5837a76bN90915d39.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>星星（XingXing）BCD-840 四门冰箱厨房商用冰柜冷藏冷冻不锈钢冰箱</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.leftItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3133/14/1568885205/215983/d5a5af0/57cfb628N297332ea.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>海尔（Haier) EG8014HB39GU1 8公斤变频洗烘一体滚筒洗衣机 蒸汽熨防皱烘干 智能APP控制</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.rightItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3247/279/3074453513/51884/dc637ab1/57eb7e1dN47558c9e.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>格力（GREE）正1.5匹 变频 品圆 冷暖 壁挂式空调 KFR-35GW/(35592)FNhDa-A3</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.leftItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t1012/326/1264711423/73166/b202b27e/558d18b0N081671be.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>苏泊尔（SUPOR)电水壶电热水壶SWF17E18C</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.rightItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3049/136/680986292/330725/ecf8a235/57bd16e0Ndd9bd687.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>福库(CUCKOO)高压电饭煲CCRP-G1066SR 5L</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.leftItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3688/69/1802602634/147382/3376d896/5837e7aeN705ea793.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>炊大皇不粘炒锅34cm无烟炒锅电磁炉通用CKN4634BF赠送木铲</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.rightItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t2689/124/1013402652/86711/20377466/57315f6cNe3cd05dd.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>九阳（Joyoung）豆浆机免滤快速制浆1300ml（可制作米糊）DJ13B-D08EC</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.leftItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3301/16/1615084619/137077/bc52150e/57d0c513Nd51ff9a3.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>Apple iPhone 7 (A1660) 32G 玫瑰金色 移动联通电信4G手机</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.rightItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t4042/336/485174131/112786/cbfa499e/5851f4ecN397534ba.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>华为(HUAWEI) Mate9 Pro 4G手机 双卡双待 琥珀金 全网通(4GB RAM+64GB ROM)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.leftItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t3049/267/321414843/238650/70df281e/57b12a70N8c7a9741.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#F8F8F8' onPress={() => { this.toDetail() } }>
                        <View style={styles.rightItem}>
                            <Image style={{ width: 175, height: 175 }} source={{ uri: 'http://m.360buyimg.com/n12/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg!q70.jpg' }} />
                            <Text ellipsizeMode='tail' numberOfLines={1}>Beats Solo2 Wireless 头戴式耳机 - 黑色 蓝牙无线 带麦 MHNG2PA/A</Text>
                        </View>
                    </TouchableHighlight>
                </Flex>
                <Button onClick={() => { this.pressButon() } }>to cart</Button>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                    <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
                </View>
                {/*
                <TabBar
                    style={{position:'absolute',bottom:20}}
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                    title="生活"
                    key="生活"
                    icon={ require('./../../image/television.png') }
                    selectedIcon={require('./../../image/television.png')}
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'blueTab',
                        });
                    }}
                    data-seed="logId"
                    >
                    {this.renderContent('生活')}
                    </TabBar.Item>
                    <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                    title="口碑"
                    key="口碑"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'redTab',
                        });
                    }}
                    data-seed="logId1"
                    >
                    {this.renderContent('口碑')}
                    </TabBar.Item>
                    <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    title="朋友"
                    key="朋友"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'greenTab',
                        });
                    }}
                    >
                    {this.renderContent('朋友')}
                    </TabBar.Item>
                    <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
                   selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
                    title="我的"
                    key="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'yellowTab',
                        });
                    }}
                    >
                    {this.renderContent('我的')}
                    </TabBar.Item>
                </TabBar>
                 */}
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        marginTop: 20,
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
    image: {
        width: Dimensions.get('window').width,
    },
    imageContainer: {
        height: 180,
    },
    leftItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginRight: 2,
        marginBottom: 4,
        height: 200,
        padding: 5,
        width: (Dimensions.get('window').width - 4) / 2,
    },
    rightItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: 2,
        marginBottom: 4,
        height: 200,
        padding: 5,
        width: (Dimensions.get('window').width - 4) / 2,
    }
});

export default connect(state => ({
    test: 1
}))(HomeView);