import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Profile() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <InfoProfile />
        </View>
        <View>
          <Profile2 />
        </View>
        <View>
          <Profile3 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

const InfoProfile = () => {
  return (
    <View>
      <LinearGradient
        colors={['#8AB50C', '#2C816B']}
        start={{x: 1.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}
        style={{height: 270}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 30, marginLeft: 30}}>
            <Image
              source={require('../../Image/Avaprofile.png')}
              style={{width: 80, height: 80}}
            />
          </View>

          <View style={{marginTop: 30, marginLeft: 15, marginTop: 40}}>
            <Image
              source={require('../../Image/Infoprofile.png')}
              style={{width: 130, height: 60}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              width: windowWidth - 30,
              height: 105,
              borderRadius: 10,
            }}>
            <View>
              <View style={{flexDirection: 'row', padding: 10}}>
                <Image
                  source={require('../../Image/C.png')}
                  style={{width: 24, height: 24, resizeMode: 'center'}}
                />
                <Text style={{fontSize: 17, marginLeft: 5}}>0</Text>
              </View>
              <View style={{marginLeft: 5, padding: 5}}>
                <Image
                  source={require('../../Image/NapRcoin.png')}
                  style={{width: 139, height: 35, resizeMode: 'center'}}
                />
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                colors: '#E8E8E8',
              }}></View>

            <View>
              <View style={{flexDirection: 'row', padding: 10, marginLeft: -6}}>
                <Image
                  source={require('../../Image/P.png')}
                  style={{width: 24, height: 24, resizeMode: 'center'}}
                />
                <Text style={{fontSize: 17, marginLeft: 5}}>3400</Text>
              </View>
              <View style={{marginRight: 5, padding: 5}}>
                <Image
                  source={require('../../Image/KiemPoint.png')}
                  style={{width: 139, height: 35, resizeMode: 'center'}}
                />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const Profile2 = () => {
  return (
    <View>
      <View>
        <Image
          source={require('../../Image/ProfileDangky.png')}
          style={{
            width: 370,
            height: 65,
            resizeMode: 'center',
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 16}}>Mời bạn bè</Text>
          <Text style={{fontSize: 14}}>
            Giới thiệu càng nhiều, nhận quà càng to
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 16}}>Nhập mã giới thiệu</Text>
          <Text style={{fontSize: 14}}>
            Giới thiệu càng nhiều, nhận quà càng to
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

const Profile3 = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 17,
            marginTop: 15,
            marginLeft: 10,
            fontWeight: '600',
            color: '#101010',
          }}>
          Thông Tin Chung
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10,width: 260, marginLeft: -7,}}>
          <Text style={{fontSize: 16}}>Câu hỏi thường gặp</Text>
          <Text style={{fontSize: 14}}>
            Tìm kiếm câu trả lời
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10, width: 260, marginLeft: -7,}}>
          <Text style={{fontSize: 16}}>Đánh giá</Text>
          <Text style={{fontSize: 14}}>
            Đánh giá ứng dụng
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10, width: 260, marginLeft: -7,}}>
          <Text style={{fontSize: 16}}>Góp ý</Text>
          <Text style={{fontSize: 14}}>
            Góp ý , đề xuất cho dịch vụ
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10,marginLeft: 7,}}>
          <Text style={{fontSize: 16}}>Chính sách và điều khoản</Text>
          <Text style={{fontSize: 14}}>
            Các điều khoản và điều kiện sử dụng dịch vụ
          </Text>
        </View>
        <View style={{marginLeft: -21,}}>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10, width: 260, marginLeft: -7,}}>
          <Text style={{fontSize: 16}}>Về chúng tôi</Text>
          <Text style={{fontSize: 14}}>
            Liên hệ với chúng tôi 
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 17,
            marginTop: 15,
            marginLeft: 10,
            fontWeight: '600',
            color: '#101010',
          }}>
          Tài khoản
        </Text>
      </View>

      
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../../Image/Inb.png')}
            style={{width: 48, height: 48, resizeMode: 'center'}}
          />
        </View>
        <View style={{padding: 10, width: 260, marginLeft: -7,}}>
          <Text style={{fontSize: 16}}>Đăng xuất</Text>
          <Text style={{fontSize: 14}}>
           Đăng xuất dịch vụ
          </Text>
        </View>
        <View>
          <Image
            source={require('../../Image/Vectoricon.png')}
            style={{width: 50, height: 50, resizeMode: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};
