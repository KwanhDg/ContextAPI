import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';

const SIGNINScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AppContext);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <Text style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot password?
      </Text>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or sign in with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={20} color="#000" style={styles.icon} />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Ionicons name="logo-facebook" size={20} color="#fff" style={styles.icon} />
          <Text style={[styles.socialButtonText, { color: '#fff' }]}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signUp}>
        Not yet a member?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#F5A623',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#F5A623',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#3B5998',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  icon: {
    marginRight: 8,
  },
  signUp: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  link: {
    color: '#F5A623',
    fontWeight: 'bold',
  },
});

export default SIGNINScreen;