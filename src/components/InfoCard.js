import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const selesai = status === 'selesai';
  const warna = selesai ? '#16A34A' : '#F97316';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.badge, { backgroundColor: warna }]}>
        <Text style={styles.badgeText}>{selesai ? 'Selesai' : 'Proses'}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 8 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: '600' },
});
