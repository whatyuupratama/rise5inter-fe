import React from 'react';
import InputAuth from '../components/ui/InputAuth';
import AuthLayout from '../components/ui/AuthLayout';
import ContentAuth from '../components/ui/ContentAuth';
const Login = () => {
  return (
    <AuthLayout logo={<img src='/logo.png' alt='Logo' className='h-12' />}>
      <h2 className='text-2xl font-bold text-center'>Masuk</h2>
      <p className='text-center text-gray-300 mb-6'>Selamat datang kembali!</p>
      <div className='space-y-4'>
        <InputAuth label='Username' placeholder='Masukkan username' />
        <InputAuth
          label='Kata Sandi'
          type='password'
          placeholder='Masukkan kata sandi'
          showeye={true}
        />
        <ContentAuth mode='login' />
      </div>
    </AuthLayout>
  );
};

export default Login;
