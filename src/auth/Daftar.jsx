import React from 'react';
import AuthLayout from '../components/ui/AuthLayout';
import InputAuth from '../components/ui/InputAuth';
import ContentAuth from '../components/ui/ContentAuth';

const Daftar = () => {
  return (
    <AuthLayout logo={<img src='/logo.png' alt='Logo' className='h-12' />}>
      <h2 className='text-2xl font-bold text-center'>Daftar</h2>
      <p className='text-center text-gray-300 mb-6'>Selamat datang kembali!</p>
      <div className='space-y-4'>
        <InputAuth label='Username' placeholder='Masukkan username' />
        <InputAuth
          label='Email'
          type='password'
          placeholder='Masukkan kata sandi'
          showeye={true}
        />
        <InputAuth
          label={'Konfirmasi Kata Sandi'}
          type='password'
          placeholder='Masukkan Ulang Kata sandi'
          showeye={true}
        />
        <ContentAuth mode='daftar' />
      </div>
    </AuthLayout>
  );
};

export default Daftar;
