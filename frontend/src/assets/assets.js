import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    
        {
    _id: 'doc1',
    name: 'Dr. Ramesh Adhikari',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Ramesh Adhikari specializes in diagnosing and treating common illnesses, offering preventive care and health education to promote overall wellness.',
    fees: 400,
    address: {
        line1: 'Satdobato, Lalitpur',
        line2: 'Near Swimming Pool, Kathmandu'
    }
},
{
    _id: 'doc2',
    name: 'Dr. Sita Sharma',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Sita Sharma provides compassionate care in women’s health including pregnancy, fertility, menstruation, and hormonal concerns.',
    fees: 350,
    address: {
        line1: 'Pulchowk, Lalitpur',
        line2: 'Next to Patan Hospital, Kathmandu'
    }
},
{
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Sarah Patel helps patients manage acne, pigmentation, allergies, and other skin concerns with personalized dermatological care.',
    fees: 200,
    address: {
        line1: 'New Road, Pokhara',
        line2: 'Near Mahendrapul, Kaski'
    }
},
{
    _id: 'doc4',
    name: 'Dr. Anil Bista',
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Anil Bista provides dedicated medical care for infants, children, and adolescents, focusing on growth, development, and disease prevention.',
    fees: 250,
    address: {
        line1: 'Sundhara, Kathmandu',
        line2: 'Opposite Civil Mall, Nepal'
    }
},
{
    _id: 'doc5',
    name: 'Dr. Karishma Thapa',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Karishma Thapa treats disorders related to the brain, spinal cord, and nerves, with a focus on improving neurological health and quality of life.',
    fees: 450,
    address: {
        line1: 'Dillibazar, Kathmandu',
        line2: 'Near Nepal Electricity Authority'
    }
},
    {
  _id: 'doc6',
  name: 'Dr. Arun Sharma', // male
  image: doc6,
  speciality: 'Neurologist',
  degree: 'MBBS',
  experience: '4 Years',
  about: 'Dr. Arun Sharma is a specialist in treating brain and nervous system disorders. He focuses on accurate diagnosis and compassionate care for neurological conditions.',
  fees: 500,
  address: {
    line1: 'Kalanki, Kathmandu',
    line2: 'Ring Road, Nepal'
  }
},
{
  _id: 'doc7',
  name: 'Dr. Ritik Adhikari', 
  image: doc7,
  speciality: 'General physician',
  degree: 'MBBS',
  experience: '4 Years',
  about: 'Dr. Ritik Adhikari provides general health care services focusing on early diagnosis, preventive medicine, and patient education.',
  fees: 450,
  address: {
    line1: 'Lakeside, Pokhara',
    line2: 'Kaski, Gandaki Province'
  }
},
{
  _id: 'doc8',
  name: 'Dr. Suman Shrestha', // male
  image: doc8,
  speciality: 'Gynecologist',
  degree: 'MBBS',
  experience: '3 Years',
  about: 'Dr. Suman Shrestha is experienced in women’s reproductive health, offering expert care in pregnancy, menstrual issues, and hormonal disorders.',
  fees: 500,
  address: {
    line1: 'Pulchowk, Lalitpur',
    line2: 'Bagmati Province, Nepal'
  }
},
{
  _id: 'doc9',
  name: 'Dr. Anusha Karki', // female
  image: doc9,
  speciality: 'Dermatologist',
  degree: 'MBBS',
  experience: '1 Years',
  about: 'Dr. Anusha Karki offers specialized treatment for skin, hair, and nail conditions with a focus on both medical and cosmetic dermatology.',
  fees: 300,
  address: {
    line1: 'Bharatpur Height',
    line2: 'Chitwan, Nepal'
  }
},
{
  _id: 'doc10',
  name: 'Dr. Nishant Bhandari', // male
  image: doc10,
  speciality: 'Pediatricians',
  degree: 'MBBS',
  experience: '2 Years',
  about: 'Dr. Nishant Bhandari specializes in child health, providing care for infants, children, and adolescents with a gentle and friendly approach.',
  fees: 450,
  address: {
    line1: 'Dharan Buspark',
    line2: 'Sunsari, Koshi Province'
  }
},
{
  _id: 'doc11',
  name: 'Dr. Sneha Joshi', // female
  image: doc11,
  speciality: 'Neurologist',
  degree: 'MBBS',
  experience: '4 Years',
  about: 'Dr. Sneha Joshi is dedicated to treating patients with neurological conditions including epilepsy, migraines, and nerve disorders.',
  fees: 500,
  address: {
    line1: 'Ghorahi-10',
    line2: 'Dang, Lumbini Province'
  }
},
{
  _id: 'doc12',
  name: 'Dr. Prakash Thapa', // male
  image: doc12,
  speciality: 'Neurologist',
  degree: 'MBBS',
  experience: '4 Years',
  about: 'Dr. Prakash Thapa has deep expertise in neurodiagnostics and focuses on long-term management of chronic neurological diseases.',
  fees: 450,
  address: {
    line1: 'Itahari Chowk',
    line2: 'Sunsari, Nepal'
  }
},
{
  _id: 'doc13',
  name: 'Dr. Rojina Dhakal', // female
  image: doc13,
  speciality: 'General physician',
  degree: 'MBBS',
  experience: '4 Years',
  about: 'Dr. Rojina Dhakal provides primary health care services and is committed to treating common illnesses and managing chronic conditions.',
  fees: 450,
  address: {
    line1: 'Boudha Stupa',
    line2: 'Kathmandu, Nepal'
  }
},
{
  _id: 'doc14',
  name: 'Dr. Bibhusan Rai', // male
  image: doc14,
  speciality: 'Gynecologist',
  degree: 'MBBS',
  experience: '3 Years',
  about: 'Dr. Bibhusan Rai is passionate about women’s wellness and offers advanced care in gynecological surgery, pregnancy, and hormonal therapy.',
  fees: 350,
  address: {
    line1: 'Biratnagar Main Road',
    line2: 'Morang, Nepal'
  }
},
{
  _id: 'doc15',
  name: 'Dr. Aayusha Khadka', // female
  image: doc15,
  speciality: 'Gastroenterologist',
  degree: 'MBBS',
  experience: '1 Years',
  about: 'Dr. Aayusha Khadka provides expert care for digestive system issues including acid reflux, ulcers, liver disorders, and chronic abdominal discomfort, focusing on accurate diagnosis and patient-centered treatment.',
  fees: 300,
  address: {
    line1: 'New Road',
    line2: 'Pokhara, Nepal'
  }
}



    //     _id: 'doc1',
    //     name: 'Dr. Richard James',
    //     image: doc1,
    //     speciality: 'General physician',
    //     degree: 'MBBS',
    //     experience: '4 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 50,
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc2',
    //     name: 'Dr. Emily Larson',
    //     image: doc2,
    //     speciality: 'Gynecologist',
    //     degree: 'MBBS',
    //     experience: '3 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 60,
    //     address: {
    //         line1: '27th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc3',
    //     name: 'Dr. Sarah Patel',
    //     image: doc3,
    //     speciality: 'Dermatologist',
    //     degree: 'MBBS',
    //     experience: '1 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 30,
    //     address: {
    //         line1: '37th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc4',
    //     name: 'Dr. Christopher Lee',
    //     image: doc4,
    //     speciality: 'Pediatricians',
    //     degree: 'MBBS',
    //     experience: '2 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 40,
    //     address: {
    //         line1: '47th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc5',
    //     name: 'Dr. Jennifer Garcia',
    //     image: doc5,
    //     speciality: 'Neurologist',
    //     degree: 'MBBS',
    //     experience: '4 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 50,
    //     address: {
    //         line1: '57th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },




    // {
    //     _id: 'doc6',
    //     name: 'Dr. Andrew Williams',
    //     image: doc6,
    //     speciality: 'Neurologist',
    //     degree: 'MBBS',
    //     experience: '4 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 50,
    //     address: {
    //         line1: '57th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc7',
    //     name: 'Dr. Christopher Davis',
    //     image: doc7,
    //     speciality: 'General physician',
    //     degree: 'MBBS',
    //     experience: '4 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 50,
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc8',
    //     name: 'Dr. Timothy White',
    //     image: doc8,
    //     speciality: 'Gynecologist',
    //     degree: 'MBBS',
    //     experience: '3 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 60,
    //     address: {
    //         line1: '27th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc9',
    //     name: 'Dr. Ava Mitchell',
    //     image: doc9,
    //     speciality: 'Dermatologist',
    //     degree: 'MBBS',
    //     experience: '1 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 30,
    //     address: {
    //         line1: '37th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc10',
    //     name: 'Dr. Jeffrey King',
    //     image: doc10,
    //     speciality: 'Pediatricians',
    //     degree: 'MBBS',
    //     experience: '2 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 40,
    //     address: {
    //         line1: '47th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc11',
    //     name: 'Dr. Zoe Kelly',
    //     image: doc11,
    //     speciality: 'Neurologist',
    //     degree: 'MBBS',
    //     experience: '4 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 50,
    //     address: {
    //         line1: '57th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc12',
    //     name: 'Dr. Patrick Harris',
    //     image: doc12,
    //     speciality: 'Neurologist',
    //     degree: 'MBBS',
    //     experience: '4 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 50,
    //     address: {
    //         line1: '57th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc13',
    //     name: 'Dr. Chloe Evans',
    //     image: doc13,
    //     speciality: 'General physician',
    //     degree: 'MBBS',
    //     experience: '4 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 50,
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc14',
    //     name: 'Dr. Ryan Martinez',
    //     image: doc14,
    //     speciality: 'Gynecologist',
    //     degree: 'MBBS',
    //     experience: '3 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 60,
    //     address: {
    //         line1: '27th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
    // {
    //     _id: 'doc15',
    //     name: 'Dr. Amelia Hill',
    //     image: doc15,
    //     speciality: 'Dermatologist',
    //     degree: 'MBBS',
    //     experience: '1 Years',
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 30,
    //     address: {
    //         line1: '37th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     }
    // },
]