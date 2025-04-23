import { Stack, useLocalSearchParams, router } from 'expo-router';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { Container } from '~/components/Container';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen 
        options={{ 
          title: 'Profile Details',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => router.back()}
              style={styles.backButton}
              accessibilityLabel="Go back"
            >
              <Ionicons name="arrow-back" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }} 
      />
      <Container style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: 'https://i.pravatar.cc/150' }} 
                style={styles.avatar}
                accessibilityLabel="User profile picture"
              />
            </View>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.subtitle}>Driver Account</Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>85</Text>
                <Text style={styles.statLabel}>Rides</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>4.8</Text>
                <Text style={styles.statLabel}>Rating</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2</Text>
                <Text style={styles.statLabel}>Years</Text>
              </View>
            </View>
          </View>

          {/* Information Cards */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="car" size={20} color="#3D84F7" />
              <Text style={styles.cardTitle}>Vehicle Information</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Model:</Text>
                <Text style={styles.infoValue}>Tesla Model Y</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Year:</Text>
                <Text style={styles.infoValue}>2023</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>License:</Text>
                <Text style={styles.infoValue}>ABC-1234</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="stats-chart" size={20} color="#E9C46A" />
              <Text style={styles.cardTitle}>Recent Activity</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.activityItem}>
                <View style={styles.activityDot} />
                <Text style={styles.activityText}>Completed ride to Downtown</Text>
                <Text style={styles.activityTime}>2h ago</Text>
              </View>
              <View style={styles.activityItem}>
                <View style={styles.activityDot} />
                <Text style={styles.activityText}>Received 5-star rating</Text>
                <Text style={styles.activityTime}>5h ago</Text>
              </View>
              <View style={styles.activityItem}>
                <View style={styles.activityDot} />
                <Text style={styles.activityText}>Completed ride to Airport</Text>
                <Text style={styles.activityTime}>Yesterday</Text>
              </View>
            </View>
          </View>
          
          {/* Action Button */}
          <TouchableOpacity 
            style={styles.actionButton}
            accessibilityLabel="Contact driver"
            accessibilityHint="Opens the messaging screen to contact this driver"
          >
            <Ionicons name="chatbubble-ellipses" size={18} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Contact Driver</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 0,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  backButton: {
    marginLeft: 10,
    padding: 5,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  avatarContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#3D84F7',
    overflow: 'hidden',
    marginBottom: 15,
  },
  avatar: {
    height: '100%',
    width: '100%',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#AAAAAA',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#2a2a2a',
    height: '100%',
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 10,
  },
  cardContent: {
    paddingLeft: 5,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    width: '30%',
    fontSize: 15,
    color: '#AAAAAA',
  },
  infoValue: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3D84F7',
    marginRight: 10,
  },
  activityText: {
    flex: 1,
    fontSize: 15,
    color: '#FFFFFF',
  },
  activityTime: {
    fontSize: 13,
    color: '#AAAAAA',
  },
  actionButton: {
    backgroundColor: '#3D84F7',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});