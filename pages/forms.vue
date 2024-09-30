<script setup>
import {Form,Field,ErrorMessage} from "vee-validate"
import { onMounted, ref } from "vue";
 import *as yup from 'yup';
 const schema=yup.object({
    username:yup.string().required("user name is required"),
    email:yup.string().email("email must be valid format").required("email is required"),
    password:yup.string().required("password is required").min(8,"the password length must be 8 and most"),
    age:yup.number().required("age is required").min(20,"the age must be greater or equal to 20")
 })
 const username=ref("")
 const password=ref("")
 const email=ref("")
 const age=ref("")
const onSubmit = (values,{resetForm}) => {
  console.log(values);
  resetForm()

  
};
   onMounted(()=>{
    console.log("the onmounted is started succesfully.")
  })
</script>
         <template>
         <div class="flex flex-col w-full px-8 py-8 justify-center items-center">
           <Form @submit="onSubmit" class="w-full max-w-md flex flex-col shadow-md p-6 space-y-4 bg-white " :validation-schema="schema">
            <h1 class="text-2xl font-bold text-center text-gray-600">Register</h1>
             <div class="flex flex-col">
             <label for="username" class="text-sm text-gray-600 mb-1">Username</label>
           <Field name="username" type="text" class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your username" />
           <ErrorMessage name="username" class="text-sm text-red-500" />
           </div>
          <div class="flex flex-col"> 
        <label for="email" class="text-gray-500 mb-1">email</label>
        <Field name="email" type="email" v-model="email" placeholder="Enter your email" class="border border-gray-300  w-full text-sm p-2 rounded-lg"/>
         <ErrorMessage class="text-sm text-red-500" name="email"/>
         </div>
         <div class="flex flex-col">
         <label for="password" class="text-gray-500 mb-1">password</label>
         <Field name="password" type="password" v-model="password" placeholder="Enter your password" class="border border-gray-300  w-full text-sm p-2 rounded-lg"/>
         <ErrorMessage name="password" class="text-sm text-red-500"/>
          </div>
         <div class="flex flex-col">
        <label for="age" class="text-gray-500 mb-1">age</label>
        <Field name="age" type="number" placeholder="Enter your age" class="border border-gray-300  w-full text-sm p-2 rounded-lg"/>
        <ErrorMessage name="age" class="text text-sm text-red-500"/>

         </div>
         <button type="submit" class="w-full text-white bg-cyan-700 font-semibold py-2 rounded-lg">submit</button>
      </Form>

    </div>
</template>