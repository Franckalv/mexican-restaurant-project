import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Button } from "react-native";
import { OrderContext } from '../context/OrderContext';

const HomeScreen = () => {
  const { addToOrder } = useContext(OrderContext);

  const menuItems = {
    comida: [
      { name: "Tacos", price: "$10", description: "Tacos de carne asada con guacamole y salsa.", image: "https://www.goya.com/media/7912/birria-tacos.jpg?quality=80" },
      { name: "Burritos", price: "$12", description: "Burrito mixto de res y pollo.", image: "https://www.hogarmania.com/archivos/202308/burrito-mexicano-848x477x80xX.jpg" },
      { name: "Tortas", price: "$10", description: "Torta al pastor con diferentes salsas", image: "https://i.pinimg.com/736x/dc/2a/02/dc2a02295ee75b82d46e1df0bc4d5606.jpg" },
      { name: "Mole", price: "$14", description: "Arroz con mole de la casa.", image: "https://www.gob.mx/cms/uploads/article/main_image/5225/mole.jpg" },
    ],
    bebidas: [
      { name: "Margarita", price: "$8", description: "Margarita clásica con limón y sal.", image: "https://cdn.colombia.com/gastronomia/2011/08/19/margarita-3005.webp" },
      { name: "Horchata", price: "$5", description: "Bebida tradicional de arroz con canela.", image: "https://ca-times.brightspotcdn.com/dims4/default/14386de/2147483647/strip/true/crop/700x368+0+13/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F75%2F3d%2F47c225e1fef84305a0491b79b42a%2Fhoyla-lat-la-horchata-una-bebida-mucho-mas-mis-003" },
      { name: "Limonada", price: "$3", description: "Refrescante limonada natural", image: "https://www.cocinatis.com/archivos/202207/CTIS0042-receta-limonada_large_16x9.jpg" },
    ],
    entradas: [
      { name: "Guacamole", price: "$7", description: "Guacamole fresco con totopos.", image: "https://www.centrallecheraasturiana.es/wp-content/uploads/2017/03/Guacamole-min.jpg" },
      { name: "Queso Fundido", price: "$9", description: "Queso fundido con chorizo y tortillas.", image: "https://www.mexicoenmicocina.com/wp-content/uploads/2017/07/Queso-Fundido-con-Chorizo-%E2%80%8B%E2%80%8B1.jpg" },
      { name: "Sopa de tortilla", price: "$8", description: "Sopa de tortilla con aguacate, queso y crema.", image: "https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/In-Development/FULL-SOPA-TORTILLA.png" },
    ],
  };

  const handleAddToOrder = (item) => {
    addToOrder(item);
    console.log(`${item.name} agregado a la orden`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menú Mexicano</Text>
      
      <Text style={styles.sectionTitle}>Comida</Text>
      {menuItems.comida.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{item.price}</Text>
          <Button title="Agregar a la orden" onPress={() => handleAddToOrder(item)} />
        </View>
      ))}

      <Text style={styles.sectionTitle}>Bebidas</Text>
      {menuItems.bebidas.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{item.price}</Text>
          <Button title="Agregar a la orden" onPress={() => handleAddToOrder(item)} />
        </View>
      ))}

      <Text style={styles.sectionTitle}>Entradas</Text>
      {menuItems.entradas.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{item.price}</Text>
          <Button title="Agregar a la orden" onPress={() => handleAddToOrder(item)} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  menuItem: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;