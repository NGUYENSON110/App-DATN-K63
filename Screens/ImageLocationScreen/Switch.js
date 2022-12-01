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
import DetailsEx from '../HomeScreen/DetailsEx';
import { useNavigation } from '@react-navigation/native';

const Switch = ({ DetailsEx }) => {
  const navigation = useNavigation();

  const Data = [
    {
      name: "Vinpearl Nha Trang",
      imageurl: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/04/vinpearl-nha-trang-768x432.jpg",
      description: "Ngoài các khu vui chơi dành cho gia đình và trẻ em, Vinpearl Land còn có Công viên nước Vinpearl. Với các đường trượt có độ dốc lớn nhất là 21.5m, khu vực giải trí này thường phục vụ những du khách ưa thích cảm giác mạnh. Trong đó, một đoạn Hang Rùng Rợn dài 56m cũng sẽ làm thoả mãn niềm đam mê thám hiểm của nhiều du khách trẻ tuổi. Hơn nữa, nơi này còn thu hút du khách bởi rạp chiếu phim 4D hoành tráng.",
      food: [
        {
          name: "Bánh Canh Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028987/blog/ur0i8vriscyrzgatlizh.webp",
        },
        {
          name: "Bún cá Nha trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/snrzrcgpfvsfdipltdyt.webp",
        },
        {
          name: "Bánh xèo Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/l8yd6cutremk9ky6tcsx.webp",
        },
        {
          name: "Nem Nướng Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/ob0drc9ikr9hb6bchyrk.webp",
        },
        {
          name: "Tôm Hùm Nướng",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/s5qurlxwamcp2s6biwsv.webp",
        },
        {
          name: "Bún bò Huế",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/wyopyuuuw9cikqim6wkt.webp",
        },
        
      ]
    },
    {
      name: "Viện hải dương học",
      imageurl: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/vien-hai-duong-hoc-1-e1505371345312.jpg",
      description: "Địa điểm du lịch này có trên 20.000 mẫu vật của 4.000 loại sinh vật biển được lưu giữ, sưu tầm và nuôi dưỡng trong nhiều năm. Đặc biệt, đây còn là nơi trưng bày một bộ xương cá voi khổng lồ có chiều dài gần 26m, cao 3m với 48 đốt sống đã được phục chế rất đầy đủ. Du khách đến đây sẽ được tham quan khu thí nghiệm, ngắm các sinh vật lạ và biết thêm nhiều điều về cuộc sống của các loài sinh vật ở biển.",
      food: [
        {
          name: "Bánh Canh Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028987/blog/ur0i8vriscyrzgatlizh.webp",
        },
        {
          name: "Bún cá Nha trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/snrzrcgpfvsfdipltdyt.webp",
        },
        {
          name: "Bánh xèo Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/l8yd6cutremk9ky6tcsx.webp",
        },
        {
          name: "Nem Nướng Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/ob0drc9ikr9hb6bchyrk.webp",
        },
        {
          name: "Tôm Hùm Nướng",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/s5qurlxwamcp2s6biwsv.webp",
        },
        {
          name: "Bún bò Huế",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/wyopyuuuw9cikqim6wkt.webp",
        },
      ]
    },
    {
      name: "Đảo Hòn Mun",
      imageurl: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/04/dao-hon-mun-1-768x575.jpg",
      description: "Đến với đảo Hòn Mun là đến với làn nước xanh trong, bát ngát, đến với những bãi san hô phong phú và đầy màu sắc. Với sự phong phú trong hệ sinh thái như vậy, đảo Hòn Mun đã được Quỹ Động vật hoang dã thế giới đánh giá là khu vực đa dạng sinh vật biển bậc nhất Việt Nam.",
      food: [
        {
          name: "Bánh Canh Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028987/blog/ur0i8vriscyrzgatlizh.webp",
        },
        {
          name: "Bún cá Nha trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/snrzrcgpfvsfdipltdyt.webp",
        },
        {
          name: "Bánh xèo Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/l8yd6cutremk9ky6tcsx.webp",
        },
        {
          name: "Nem Nướng Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/ob0drc9ikr9hb6bchyrk.webp",
        },
        {
          name: "Tôm Hùm Nướng",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/s5qurlxwamcp2s6biwsv.webp",
        },
        {
          name: "Bún bò Huế",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/wyopyuuuw9cikqim6wkt.webp",
        },
      ]
    }
    ,{
      name: "Đảo Hòn Tằm",
      imageurl: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/04/%C4%91%E1%BA%A3o-h%C3%B2n-t%E1%BA%B1m-nha-trang-6-768x542.jpg",
      description: "Đảo Hòn Tằm nằm cách thành phố Nha Trang 7 km, là một điểm du lịch Nha Trang, trải nghiệm nhất định bạn phải ghé qua khi tới với thành phố. Đảo Hòn Tằm đẹp mộng mơ với những hàng dừa chạy dọc trên bãi biển xanh ngát. ",
      food: [
        {
          name: "Bánh Canh Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028987/blog/ur0i8vriscyrzgatlizh.webp",
        },
        {
          name: "Bún cá Nha trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/snrzrcgpfvsfdipltdyt.webp",
        },
        {
          name: "Bánh xèo Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/l8yd6cutremk9ky6tcsx.webp",
        },
        {
          name: "Nem Nướng Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/ob0drc9ikr9hb6bchyrk.webp",
        },
        {
          name: "Tôm Hùm Nướng",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/s5qurlxwamcp2s6biwsv.webp",
        },
        {
          name: "Bún bò Huế",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/wyopyuuuw9cikqim6wkt.webp",
        },
      ]
    }
    ,{
      name: "Tháp Bà Ponagar",
      imageurl: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/04/thap-ba-ponagar-1-768x768.jpg",
      description: "Nha Trang không chỉ hấp dẫn với những bãi biển đẹp đến mê hồn người mà còn gây ấn tượng bởi những công trình kiến trúc độc đáo và đẹp mắt. Tháp bà Ponagar là một trong những quần thể kiến trúc văn hóa Chăm Pa lớn nhất ở miền Trung Việt Nam.",
      food: [
        {
          name: "Bánh Canh Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028987/blog/ur0i8vriscyrzgatlizh.webp",
        },
        {
          name: "Bún cá Nha trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/snrzrcgpfvsfdipltdyt.webp",
        },
        {
          name: "Bánh xèo Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028986/blog/l8yd6cutremk9ky6tcsx.webp",
        },
        {
          name: "Nem Nướng Nha Trang",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/ob0drc9ikr9hb6bchyrk.webp",
        },
        {
          name: "Tôm Hùm Nướng",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/s5qurlxwamcp2s6biwsv.webp",
        },
        {
          name: "Bún bò Huế",
          imageurl: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596028977/blog/wyopyuuuw9cikqim6wkt.webp",
        },
      ]
    }

  ]

  // console.log("dataa", Data[0].imageurl)
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
  )

}
export default Switch;

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
})