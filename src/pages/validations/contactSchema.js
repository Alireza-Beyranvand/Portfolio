import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string().email("ادرس ایمیل صحیح نیست").required("ادرس ایمیل الزامی میباشد"),
    subject: Yup.string().required("نوشتن عنوان پیام الزامی است"),
    message: Yup.string().required("ایمیل بدون متن میخوان چیکار؟ 😂")
});