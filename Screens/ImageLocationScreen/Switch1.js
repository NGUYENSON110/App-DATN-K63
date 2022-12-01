import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Switch1 = ({ DetailsEx }) => {
  const navigation = useNavigation();
  
  const Data = [
    {
      name: "Nhà Thờ Đức Bà",
      imageurl: "https://statics.vinpearl.com/NH%C3%80-TH%E1%BB%9C-%C4%90%E1%BB%A8C-B%C3%80-1_1660297328.jpg",
      description: "Ngoài các khu vui chơi dành cho gia đình và trẻ em, Vinpearl Land còn có Công viên nước Vinpearl. Với các đường trượt có độ dốc lớn nhất là 21.5m, khu vực giải trí này thường phục vụ những du khách ưa thích cảm giác mạnh. Trong đó, một đoạn Hang Rùng Rợn dài 56m cũng sẽ làm thoả mãn niềm đam mê thám hiểm của nhiều du khách trẻ tuổi. Hơn nữa, nơi này còn thu hút du khách bởi rạp chiếu phim 4D hoành tráng.",
      food: [
        {
          name: "Bánh Mì Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091709/blog/erykuinxdtlo280gxm2d.webp",
        },
        {
          name: "Xôi Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091731/blog/y8udm7xbqa6j76jrieq5.webp",
        },
        {
          name: "Hải Sản - Ốc Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091748/blog/p63pe9h0ch1hjaxbbkp8.webp",
        },
        {
          name: "Bánh Canh Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091766/blog/gulkyim0opnfqmavzztn.webp",
        },
        {
          name: "Bún Mắm Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091784/blog/jcuwl0pxdu2ru743aiip.webp",
        },
        {
          name: "Lẩu Thái Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091803/blog/le1xmyyshfhkwk81dnmw.webp",
        },
        
      ]
    },
    {
      name: "Dinh Độc Lập",
      imageurl: "https://statics.vinpearl.com/dinh-doc-lap%20(3)_50w_1660295162.jpg",
      description: "Địa điểm du lịch này có trên 20.000 mẫu vật của 4.000 loại sinh vật biển được lưu giữ, sưu tầm và nuôi dưỡng trong nhiều năm. Đặc biệt, đây còn là nơi trưng bày một bộ xương cá voi khổng lồ có chiều dài gần 26m, cao 3m với 48 đốt sống đã được phục chế rất đầy đủ. Du khách đến đây sẽ được tham quan khu thí nghiệm, ngắm các sinh vật lạ và biết thêm nhiều điều về cuộc sống của các loài sinh vật ở biển.",
      food: [
        {
          name: "Bánh Mì Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091709/blog/erykuinxdtlo280gxm2d.webp",
        },
        {
          name: "Xôi Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091731/blog/y8udm7xbqa6j76jrieq5.webp",
        },
        {
          name: "Hải Sản - Ốc Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091748/blog/p63pe9h0ch1hjaxbbkp8.webp",
        },
        {
          name: "Bánh Canh Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091766/blog/gulkyim0opnfqmavzztn.webp",
        },
        {
          name: "Bún Mắm Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091784/blog/jcuwl0pxdu2ru743aiip.webp",
        },
        {
          name: "Lẩu Thái Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091803/blog/le1xmyyshfhkwk81dnmw.webp",
        },
      ]
    },
    {
      name: "Chợ Bến Thành",
      imageurl: "https://statics.vinpearl.com/cho_ben_thanh_01-1_1660295185.jpeg",
      description: "Đến với đảo Hòn Mun là đến với làn nước xanh trong, bát ngát, đến với những bãi san hô phong phú và đầy màu sắc. Với sự phong phú trong hệ sinh thái như vậy, đảo Hòn Mun đã được Quỹ Động vật hoang dã thế giới đánh giá là khu vực đa dạng sinh vật biển bậc nhất Việt Nam.",
      food: [
        {
          name: "Bánh Mì Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091709/blog/erykuinxdtlo280gxm2d.webp",
        },
        {
          name: "Xôi Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091731/blog/y8udm7xbqa6j76jrieq5.webp",
        },
        {
          name: "Hải Sản - Ốc Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091748/blog/p63pe9h0ch1hjaxbbkp8.webp",
        },
        {
          name: "Bánh Canh Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091766/blog/gulkyim0opnfqmavzztn.webp",
        },
        {
          name: "Bún Mắm Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091784/blog/jcuwl0pxdu2ru743aiip.webp",
        },
        {
          name: "Lẩu Thái Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091803/blog/le1xmyyshfhkwk81dnmw.webp",
        },
      ]
    }
    ,{
      name: "Landmark 81",
      imageurl: "https://statics.vinpearl.com/to%C3%A0n%20c%E1%BA%A3nh%20%20Vinpearl%20Luxury%20Landmark%2081_1660295251.jpg",
      description: "Đảo Hòn Tằm nằm cách thành phố Nha Trang 7 km, là một điểm du lịch Nha Trang, trải nghiệm nhất định bạn phải ghé qua khi tới với thành phố. Đảo Hòn Tằm đẹp mộng mơ với những hàng dừa chạy dọc trên bãi biển xanh ngát. ",
      food: [
        {
          name: "Bánh Mì Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091709/blog/erykuinxdtlo280gxm2d.webp",
        },
        {
          name: "Xôi Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091731/blog/y8udm7xbqa6j76jrieq5.webp",
        },
        {
          name: "Hải Sản - Ốc Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091748/blog/p63pe9h0ch1hjaxbbkp8.webp",
        },
        {
          name: "Bánh Canh Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091766/blog/gulkyim0opnfqmavzztn.webp",
        },
        {
          name: "Bún Mắm Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091784/blog/jcuwl0pxdu2ru743aiip.webp",
        },
        {
          name: "Lẩu Thái Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091803/blog/le1xmyyshfhkwk81dnmw.webp",
        },
      ]
    }
    ,{
      name: "Nhà hát Lớn Thành Phố",
      imageurl: "https://statics.vinpearl.com/Nha-hat-lon-TPHCM_1660295324.jpg",
      description: "Nha Trang không chỉ hấp dẫn với những bãi biển đẹp đến mê hồn người mà còn gây ấn tượng bởi những công trình kiến trúc độc đáo và đẹp mắt. Tháp bà Ponagar là một trong những quần thể kiến trúc văn hóa Chăm Pa lớn nhất ở miền Trung Việt Nam.",
      food: [
        {
          name: "Bánh Mì Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091709/blog/erykuinxdtlo280gxm2d.webp",
        },
        {
          name: "Xôi Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091731/blog/y8udm7xbqa6j76jrieq5.webp",
        },
        {
          name: "Hải Sản - Ốc Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091748/blog/p63pe9h0ch1hjaxbbkp8.webp",
        },
        {
          name: "Bánh Canh Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091766/blog/gulkyim0opnfqmavzztn.webp",
        },
        {
          name: "Bún Mắm Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091784/blog/jcuwl0pxdu2ru743aiip.webp",
        },
        {
          name: "Lẩu Thái Sài Gòn",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1617091803/blog/le1xmyyshfhkwk81dnmw.webp",
        },
      ]
    }

  ]
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Data.map((item, index) => (
            // console.log(item),
          <TouchableOpacity
            style={style.Touch}
            onPress={() => {
              navigation.navigate('DetailsEx',{
                item
              });
            }}>
            <Image
              source={{uri: item.imageurl}}
              style={style.TouchImage}
            />
          </TouchableOpacity>
        ))

        }

      </ScrollView>
    </View>
  );
};
export default Switch1;

const style = StyleSheet.create({
  Touch: {
    width: 120,
    height: 150,
    marginTop: 5,
    marginLeft: 20,
  },

  TouchImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
});
