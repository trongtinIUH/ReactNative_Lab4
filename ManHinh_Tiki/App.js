import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ProductCheckout = () => {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const productPrice = 141800;

  const handleApplyDiscount = () => {
    Alert.alert('Mã giảm giá đã được áp dụng!');
  };

  const handleCheckout = () => {
    Alert.alert('Tiến hành đặt hàng');
  };

  return (
    <View style={styles.container}>
      {/* Product Image and Title */}
      <View style={styles.productSection}>
        <Image
          source={{ uri: 'https://lavenderstudio.com.vn/wp-content/uploads/2021/06/chup-hinh-gioi-thieu-san-pham-1-1024x683.jpg' }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.productSubtitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.oldPrice}>141.800 đ</Text>
          <Text style={styles.productPrice}>{productPrice.toLocaleString('vi-VN')} đ</Text>
        </View>
      </View>

      {/* Quantity Section */}
      <View style={styles.quantitySection}>
        <TouchableOpacity
          onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.buyLater}>Mua sau</Text>
      </View>
      {/*mã giảm giá đã lưu*/}
      <View style={styles.quantity1}>
      <Text style={styles.maGiamGiaDaLuu}>Mã giảm giá đã lưu</Text>
      <Text style={styles.xemTaiDay}>Xem tại đây</Text>
       </View>


      {/* Discount Code Section */}
      <View style={styles.discountSection}>
        <TextInput
          style={styles.input}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <TouchableOpacity style={styles.applyButton} onPress={handleApplyDiscount}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.couponText}>
        Bạn có phiếu quà tặng Tiki/Got it/ Urbox? <Text style={styles.linkText}>Nhập tại đây</Text>
      </Text>

      {/* Total Section */}
      <View style={styles.totalSection}>
        <Text style={styles.totalLabel}>Tạm tính</Text>
        <Text style={styles.totalPrice}>{(productPrice * quantity).toLocaleString('vi-VN')} đ</Text>
      </View>

      <View style={styles.finalTotalSection}>

         </View>

         <View style={styles.finalTotal2}>
         <Text style={styles.finalTotalLabel}>Thành tiền</Text>
        <Text style={styles.finalTotalPrice}>{(productPrice * quantity).toLocaleString('vi-VN')} đ</Text>
          </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  productSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 140,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  quantitySection: {
    position: 'relative',
    bottom: 50,
    left: 110,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountSection: {
    position: 'relative',
    bottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  totalLabel: {
    margin : 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  totalPrice: {
    margin : 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  checkoutButton: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyLater: {
    position: 'relative',
    left: 160,
    marginLeft: 10,
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  maGiamGiaDaLuu: {
    position: 'relative',
    bottom: 50,
    flexDirection: 'row',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  xemTaiDay: {
    position: 'relative',
    bottom: 50,
    left: 100,
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity1: {
    position: 'relative',
    bottom: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
    couponText: {
    color: '#000',
    marginBottom: 10,
  },
  linkText: {
    color: '#007bff',
  },
  finalTotalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    height: 150,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
  },
  finalTotal2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    height: 70,
    marginBottom: 20,
  },
  finalTotalLabel: {
    //chữ màu xám
    color: '#808080',
    margin : 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  finalTotalPrice: {
    margin : 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default ProductCheckout;
