import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const selesai = status === 'selesai';
  const warna = selesai ? '#16A34A' : '#F97316';
  const warnaLatar = selesai ? '#DCFCE7' : '#FFEDD5';
  const warnaTeks = selesai ? '#15803D' : '#C2410C';

  return (
    <View style={[styles.card, { borderLeftColor: warna }]}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: warnaLatar }]}>
        <View style={[styles.dot, { backgroundColor: warna }]} />
        <Text style={[styles.badgeText, { color: warnaTeks }]}>{status}</Text>
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
    borderRadius: 16,
    borderLeftWidth: 6,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#0F172A',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  title: { fontSize: 16, fontWeight: '700', color: '#0F172A', marginBottom: 10 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 14,
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  badgeText: { fontSize: 13, fontWeight: '700', textTransform: 'capitalize' },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 11,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },
});