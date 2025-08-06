import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function DeviceCard({ device, onToggle }) {
  const getStatusColor = () => {
    return device.status ? '#4CAF50' : '#666';
  };

  const getBackgroundColor = () => {
    return device.status ? '#1a1a2e' : '#16162a';
  };

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: getBackgroundColor() }]}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: getStatusColor() }]}>
          <Ionicons 
            name={device.icon} 
            size={20} 
            color="#FFF" 
          />
        </View>
        <View style={styles.statusIndicator}>
          <View 
            style={[
              styles.statusDot, 
              { backgroundColor: getStatusColor() }
            ]} 
          />
        </View>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.deviceName} numberOfLines={2}>
          {device.name}
        </Text>
        <Text style={styles.deviceRoom}>
          {device.room}
        </Text>
        
        {device.type === 'ac' && device.temperature && (
          <Text style={styles.temperature}>
            {device.temperature}°C
          </Text>
        )}
        
        <Text style={[styles.status, { color: getStatusColor() }]}>
          {device.status ? 'ON' : 'OFF'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.42,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIndicator: {
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  cardContent: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  deviceRoom: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});