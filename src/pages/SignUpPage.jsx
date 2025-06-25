import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      role_id: '3', 
    },
  });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectedRole = watch('role_id');
  const password = watch('password');
  const history = useHistory();

  useEffect(() => {
    axiosInstance.get('/roles')
      .then(res => {
        setRoles(res.data);
        const customer = res.data.find(role => role.code === 'customer');
        if (customer) {
          setValue('role_id', customer.id.toString());
        }
      })
      .catch(() => setRoles([]));
  }, [setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
  
    // confirmPassword alanını kaldır
    const { confirmPassword, ...formData } = data;
  
    if (Number(formData.role_id) !== 2) {
      delete formData.store;
    }
  
    try {
      await axiosInstance.post('/signup', formData);
      alert('You need to click link in email to activate your account!');
      history.push('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed!');
    } finally {
      setLoading(false);
    }
  };
  

  // Validation helpers
  const validatePassword = value =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/.test(value) ||
    'Password must include upper, lower, number, special char and be 8+ characters';

  const validatePhone = value =>
    /^((\+90)?[ -]?)?(\(?\d{3}\)?[ -]?)?[\d -]{7,10}$/.test(value) || 'Invalid Turkish phone';

  const validateTaxNo = value =>
    /^T\d{4}V\d{6}$/.test(value) || 'Tax ID must match pattern TXXXXVXXXXXX';

  const validateIBAN = value =>
    /^TR\d{2}\d{5}\d{16}$/.test(value) || 'Invalid IBAN format';

  const selectedRoleObj = roles.find(r => r.id.toString() === selectedRole);

  return (
    <div className="w-full md:w-1/3 mx-auto p-6 my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
        <label htmlFor="name" className='font-bold'>Name</label>
          <input
            {...register('name', { required: true, minLength: 3 })}
            id='name'
            className="w-full px-4 py-2 mt-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">En az 3 karakter giriniz.</p>
          )}
        </div>

        {/* Email */}
        <div>
        <label htmlFor="email" className='font-bold'>Email</label>
          <input
            {...register('email', {
              required: 'Email zorunludur.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Geçerli bir email giriniz.',
              },
            })}
            id="email"
            className="w-full px-4 py-2 mt-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
        <label htmlFor="password" className='font-bold'>Password</label>
          <input
            type="password"
            {...register('password', { required: true, validate: validatePassword })}
            id="password"
            className="w-full px-4 py-2 mt-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
        <label htmlFor="confirmPassword" className='font-bold'>Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: true,
              validate: value => value === password || 'Şifreler eşleşmeli.',
            })}
            id="confirmPassword"
            className="w-full px-4 py-2 mt-2 border rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Role Seçimi */}
        <div>
        <label htmlFor="role" className='font-bold'>Role</label>
          <select
            {...register('role_id', { required: true })}
            className="w-full px-4 py-2 mt-2 border rounded"
            id='role'
          >
            {roles.map(role => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Mağaza Alanları */}
        {selectedRoleObj?.code === 'store' && (
          <>
            <div>
            <label htmlFor="storeName" className='font-bold'>Store Name</label>
              <input
                {...register('store.name', { required: true, minLength: 3 })}
                id="storeName"
                className="w-full px-4 py-2  mt-2 border rounded"
              />
              {errors.store?.name && (
                <p className="text-red-500 text-sm">En az 3 karakter giriniz.</p>
              )}
            </div>

            <div>
            <label htmlFor="storePhone" className='font-bold'>Store Phone</label>
              <input
                {...register('store.phone', { required: true, validate: validatePhone })}
                id="storePhone"
                className="w-full px-4 py-2 mt-2 border rounded"
              />
              {errors.store?.phone && (
                <p className="text-red-500 text-sm">{errors.store.phone.message}</p>
              )}
            </div>

            <div>
            <label htmlFor="storeTax" className='font-bold'>Store Tax No</label>
              <input
                {...register('store.tax_no', { required: true, validate: validateTaxNo })}
                id="storeTax"
                className="w-full px-4 py-2 mt-2 border rounded"
              />
              {errors.store?.tax_no && (
                <p className="text-red-500 text-sm">{errors.store.tax_no.message}</p>
              )}
            </div>

            <div>
            <label htmlFor="storeAccount" className='font-bold'>Store Bank Account</label>
              <input
                {...register('store.bank_account', { required: true, validate: validateIBAN })}
                id="storeAccount"
                className="w-full px-4 py-2 mt-2 border rounded"
              />
              {errors.store?.bank_account && (
                <p className="text-red-500 text-sm">{errors.store.bank_account.message}</p>
              )}
            </div>
          </>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
