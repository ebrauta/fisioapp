import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const Icon: React.FC<{name: any, color: string, size:number}> = ({name, color, size}) => {
  return <Ionicons name={name} size={size} color={color} />;
}

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon size={28} name="home-outline" color="#3F888F" />,
          tabBarLabelStyle: { fontSize: 12, color: '#3F888F' },
        }}
      />
      <Tabs.Screen
        name="patients"
        options={{
          title: 'Pacientes',
          tabBarIcon: () => <Icon size={28} name="people-circle-outline" color="#3F888F" />,
          tabBarLabelStyle: { fontSize: 12, color: '#3F888F' },
        }}
      />
    </Tabs>
  );
}
