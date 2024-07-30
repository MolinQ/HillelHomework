import {Formik,Field, Form} from "formik";
import Input from "./Input.jsx";
import ButtonSubmit from "./ButtonSubmit.jsx";
import * as Yup from 'yup';

function SearchForm(props) {
    const {onSubmit} = props;

    const validationSchema = Yup.object().shape({
        postText: Yup.string()
            .min(5, 'Post text must be at least 5 symbols')
    });

    return(
        <Formik
            initialValues={{ postText: '' }}
            validationSchema={validationSchema}
            onSubmit={(values,{ resetForm }) => {
                onSubmit(values);
                resetForm()
            }}
        >
            {() => (
                <Form className='d-flex flex-md-column'>
                    <Field name="postText" component={Input} />
                    <ButtonSubmit type="submit" />
                </Form>
            )}
        </Formik>
    );
}

export default SearchForm