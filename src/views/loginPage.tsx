import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { actionLogin } from '../store/auth/authSlice';
import { useAppDispatch } from '../store/hooks';

const loginSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Password is required'),
});

const initialValues = {
   email: 'demo@gmail.com',
   password: 'demo',
};

export const LoginPage = () => {
   const [loading, setLoading] = useState(false);
   const dispatch = useAppDispatch();

   const formik = useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, { setStatus, setSubmitting }) => {
         setLoading(true);
         try {
            /*
            const result = await AuthService.login({
               usuario: values.usuario,
               password: values.password,
               token: '',
            })*/
            //console.log(values);
            const result = {
               user: {
                  nombres: 'Demo',
                  apellidos: 'Demo',
                  email: values.email,
               },
               token: '6hrFDATxrG9w14QY9wwnmVhLE0Wg6LIvwOwUaxz761m1JfRp4rs8Mzozk5xhSkw0_MQz6bpcJnrFUDwp5lPPFC157dHxbkKlDiQ9XY3ZIP8zAGCsS8ruN2uKjIaIargX',
            };

            if (!result.token) {
               throw new Error();
            }

            setTimeout(() => {
               setLoading(false);
               dispatch(actionLogin(result));
            }, 1000);
         } catch (error) {
            setLoading(false);
            setSubmitting(false);
            setStatus('User credentials are not valid');
         }
      },
   });

   return (
      <div className="login-container">
         <div className="login-container__title">
            <Typography component="h1" variant="h5">
               Sign in
            </Typography>
         </div>
         <form onSubmit={formik.handleSubmit} noValidate className="login-container__form">
            <div className="form-control">
               <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  disabled={loading}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
               />
               <div className="form-control__error">{formik.touched.email && formik.errors.email}</div>
            </div>
            <div className="form-control">
               <TextField
                  variant="filled"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  disabled={loading}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
               />
               <div className="form-control__error">{formik.touched.password && formik.errors.password}</div>
            </div>
            <LoadingButton type="submit" fullWidth loading={loading} variant="contained" sx={{ mt: 1 }}>
               Sign in
            </LoadingButton>
         </form>
      </div>
   );
};
