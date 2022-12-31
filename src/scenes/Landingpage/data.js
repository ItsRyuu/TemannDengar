// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../../assets/img/about.png';
import Feature1Img from '../../assets/img/features/feature1.png';
import Feature2Img from '../../assets/img/features/feature2.png';
import Feature3Img from '../../assets/img/features/feature3.png';
import Feature4Img from '../../assets/img/features/feature4.png';
import Avatar1Img from '../../assets/img/testimonials/avatar1.png';
import Avatar2Img from '../../assets/img/testimonials/avatar2.png';
import Avatar3Img from '../../assets/img/testimonials/avatar3.png';
import LogoV2 from '../../assets/img/logo-v2.png';
import HeroImage from '../../assets/img/Abi.png';
import Feature1BgImg from '../../assets/img/features/feature1_bg.png';
import Feature2BgImg from '../../assets/img/features/feature2_bg.png';
import Feature3BgImg from '../../assets/img/features/feature3_bg.png';
import Feature4BgImg from '../../assets/img/features/feature4_bg.png';

export const navigationData = [
  
  
];

export const heroData = {
  title: ` Yuk Gabung Jadi Teman Abi!!!`,
  subtitle:
    'Belajar bahasa isyarat dengan standar SIBI sudah hadir disini! Klik di bawah ini dan bergabung menjadi teman dengar bersama Abi!',
  btnText: 'Yuk Mulai!',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Bergabunglah Bersama Kami Menjadi Mentor SIBI Di TemanDengar',
  subtitle:
    'We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.',
  btnText: 'Yuk Gabung!',  
  };

export const featuresData = {
  title: 'Mengapa kamu akan senang belajar di TemanDengar',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Mudah Dijangkau',
      description:
        'TemanDengar tersedia dalam platform situs web, sehingga mudah untuk belajar dimanapun dan kapanpun',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: '0 Rupiah',
      description:
        'TemanDengar dapat diakses secara gratis tanpa ada batas tertentu, sehingga kamu lebih leluasa untuk belajar',
      delay: '400',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Konsultasi Secara Langsung',
      description:
        'Di TemanDengar kamu dapat berkonsultasi dengan mentor yang sudah tersertifikasi, sehingga bisa membantu kamu dalam belajar bahasa SIBI.',
      delay: '400',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Lisa',
    web: 'Mahasiswi',
    message:
      '“Setelah mengikuti pembelajaran di TemanDengar selama dua bulan ini, saya dapat menggunakan bahasa isyarat dengan teman tuli saya dengan lancar”',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Denial',
    web: 'Enterpreneur',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Aizen',
    web: 'Beliau',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];



export const footerData = {
  logo: LogoV2,
  address: 'Product Texas, 234 Bokki Avenue Street BMW 99388',
  email: 'info@producttexas.project',
  phone: '1-232-7788 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© 2022 All rights reserved',
  icon: <BsChatDotsFill />,
};
