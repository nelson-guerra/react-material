import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCategories } from '../hooks/useCategories';
import { Product, Category } from '../types';

type ProductDialogProps = {
   onAdd: (product: Product) => void;
   onClose: () => void;
   onUpdate: (product: Product) => void;
   open: boolean;
   processing: boolean;
   product?: Product;
};

export const ProductDialog = ({ onAdd, onClose, onUpdate, open, processing, product }: ProductDialogProps) => {
   const { data, isSuccess } = useCategories<Category>();

   const editMode = Boolean(product && product.id);

   const handleSubmit = (values: Product) => {
      if (product && product.id) {
         onUpdate({
            title: values.title,
            price: values.price,
            description: values.description,
            id: product.id,
         } as Product);
      } else {
         onAdd({
            title: values.title,
            price: values.price,
            description: values.description,
            categoryId: values.categoryId,
            images: ['https://placeimg.com/640/480/any'],
         } as Product);
      }
   };

   const formik = useFormik({
      initialValues: {
         id: product ? product.id : '',
         title: product ? product.title : '',
         price: product ? product.price : '',
         description: product ? product.description : '',
         categoryId: product ? product.category.id : '',
         category: product ? product.category : ({} as Category),
      },
      validationSchema: Yup.object({
         title: Yup.string().required('Title is required'),
         price: Yup.string()
            .matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/, 'Invalid number')
            .required('Price is required'),
         description: Yup.string().required('Description is required'),
         categoryId: Yup.string().required('Category is required'),
      }),
      onSubmit: handleSubmit,
   });

   return (
      <Dialog open={open} onClose={onClose} aria-labelledby="product-dialog-title">
         <form onSubmit={formik.handleSubmit} noValidate className="product-form">
            <DialogTitle id="product-dialog-title" sx={{ px: 1, py: 2 }}>
               {editMode ? 'Edit' : 'Add'} Product
            </DialogTitle>
            <IconButton
               aria-label="close"
               onClick={onClose}
               sx={{
                  position: 'absolute',
                  right: 15,
                  top: 10,
                  py: 1,
                  color: theme => theme.palette.grey[500],
               }}>
               <CloseIcon />
            </IconButton>
            <DialogContent sx={{ p: 0 }}>
               <div className="form-control">
                  <TextField
                     required
                     fullWidth
                     id="title"
                     label={'Title'}
                     name="title"
                     autoComplete="off"
                     size="small"
                     disabled={processing}
                     value={formik.values.title}
                     onChange={formik.handleChange}
                     error={formik.touched.title && Boolean(formik.errors.title)}
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
                  <div className="form-control__error">{formik.touched.title && formik.errors.title}</div>
               </div>
               <div className="form-control">
                  <TextField
                     required
                     fullWidth
                     id="price"
                     label={'Price'}
                     name="price"
                     autoComplete="price"
                     size="small"
                     disabled={processing}
                     value={formik.values.price}
                     onChange={formik.handleChange}
                     error={formik.touched.price && Boolean(formik.errors.price)}
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
                  <div className="form-control__error">{formik.touched.price && formik.errors.price}</div>
               </div>
               <div className="form-control">
                  <TextField
                     multiline
                     rows={5}
                     required
                     fullWidth
                     id="description"
                     label={'Description'}
                     name="description"
                     autoComplete="description"
                     size="small"
                     disabled={processing}
                     value={formik.values.description}
                     onChange={formik.handleChange}
                     error={formik.touched.description && Boolean(formik.errors.description)}
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
                  <div className="form-control__error">{formik.touched.description && formik.errors.description}</div>
               </div>
               <div className="form-control">
                  <TextField
                     required
                     id="categoryId"
                     disabled={editMode}
                     fullWidth
                     select
                     label={'Category'}
                     name="categoryId"
                     size="small"
                     defaultValue={formik.values.categoryId}
                     value={formik.values.categoryId}
                     onChange={formik.handleChange}
                     error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
                     InputLabelProps={{
                        shrink: true,
                     }}>
                     {isSuccess ? (
                        data?.map((category: Category) => (
                           <MenuItem key={category.id} value={category.id}>
                              {category.name}
                           </MenuItem>
                        ))
                     ) : (
                        <MenuItem key={0} value={''}>
                           {'None'}
                        </MenuItem>
                     )}
                  </TextField>
                  <div className="form-control__error">{formik.touched.categoryId && formik.errors.categoryId}</div>
               </div>
            </DialogContent>
            <DialogActions sx={{ py: 1, px: 0 }}>
               <Button onClick={onClose}>{'Cancel'}</Button>
               <LoadingButton loading={processing} type="submit" variant="contained">
                  {editMode ? 'Save' : 'Add'}
               </LoadingButton>
            </DialogActions>
         </form>
      </Dialog>
   );
};
