import React from 'react';
import { useFormik } from 'formik';

export const Career = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      cv: null,
    },
    validate: (values: {
        name: string;
        email: string;
        phone: string;
        cv: File | null;
      }) => {
        const errors: {
          name?: string;
          email?: string;
          phone?: string;
          cv?: string;
        } = {};
  
        if (!values.name) {
          errors.name = 'Name is required';
        }
  
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
          errors.email = 'Invalid email address';
        }
  
        if (!values.phone) {
          errors.phone = 'Phone Number is required';
        }
  
        if (!values.cv) {
          errors.cv = 'CV is required';
        }
  
        return errors;
      },
    
    onSubmit: (values) => {
      
      console.log(values);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      formik.setFieldValue('cv', event.currentTarget.files[0]);
    }
  };

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'We are looking for an experienced Software Engineer',
    },
    {
      id: 2,
      title: 'Product Manager',
      description: 'We are looking for an experienced Product Manager',
    },
    {
      id: 3,
      title: 'Accounts Manager',
      description: 'We are looking for an experienced Accounts Manager',
    },
    {
      id: 4,
      title: 'React Developer',
      description: 'We are looking for an experienced React Developer',
    },
    {
      id: 5,
      title: '.Net Developer',
      description: 'We are looking for an experienced .Net Developer',
    },
     
  ];

  return (
    <>

      <div className="bg-gray-200 h-40 w-full">
        <h1 className="font-bold text-5xl pt-6 text-center">Careers</h1>
        <p className="text-lg font-semibold mt-6 text-center">Home / Career</p>
      </div>


      <div className="container mx-auto mt-8 mb-8 p-[50px]">
      <h1 className="text-3xl font-semibold mb-4 text-center">Job Notifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-10 shadow-md border-green-700 flex justify-between h-[200px]">
            <h2 className="text-xl font-semibold relative">{job.title}</h2>
            <p className="text-gray-600 absolute mt-[50px]">{job.description}</p>
            <div >
            <button className=" text-black px-6 py-1 rounded bg-transparent border-2 border-green-700 hover:border-red-600 text-lg font-mono font-semibold ">
              Apply
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>


      <div className="flex flex-wrap bg-white h-screen w-full">
        <div className="bg-gray-200 w-full m-20 p-6 rounded-lg">
          <p className="text-xl font-bold mb-4">
            We offer a wide range of career opportunities and are keen to employ a workforce of innovative people who can work together and add value to our vision.
          </p>
          <p className="text-xl font-bold ml-1 mb-4">
            We achieve our shared goals and organizational objectives by strategically focusing on attracting, retaining, and developing the correct talent mix with diversity in relation to gender, age, expertise, and geographical heterogeneity.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex justify-between'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...formik.getFieldProps('name')}
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-4 block w-[500px] shadow-sm sm:text-sm border-gray-300 rounded-md ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.name}</p>
              )}
            </div>

            <div className="mb-4 absolute ml-[550px] w-[480px]">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-4 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>
            </div>

            <div className='flex justify-between mt-4'>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                {...formik.getFieldProps('phone')}
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[500px] shadow-sm p-4 sm:text-sm border-gray-300 rounded-md ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : ''}`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.phone}</p>
              )}
            </div>

            <div className="mb-4 absolute ml-[550px]">
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                Upload CV
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-500px p-4 shadow-sm sm:text-sm border-gray-300 rounded-md ${formik.touched.cv && formik.errors.cv ? 'border-red-500' : ''}`}
              />
              {formik.touched.cv && formik.errors.cv && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.cv}</p>
              )}
            </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 active:bg-indigo-800 mt-10"
            >
              Send message
            </button>
          </form>
          
        </div>
        
      </div>
      <div className='m-8'>
      <div className='bg-gray-300 h-40 w-full mb-10'>
            <p className="text-3xl p-6 font-bold text-blue-950 text-center mx-[200px]">For more job related queries or information contact:
Phone No:  +91 99778-61151</p>

          </div>
          </div>
    </>
  );
};
