import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBoxModel,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconSunHigh,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconBrandWhatsapp,
  IconSunset2,
  IconHeadset,
  IconFriends,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconSend,
  IconActivityHeartbeat,
  IconAlarm,
  IconMoodKid
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import test1 from '~/assets/images/testimonial1.jpg';
import test2 from '~/assets/images/testimonial2.jpg';
import test3 from '~/assets/images/testimonial3.jpg';
import ricardo from '~/assets/images/Ricardo.png';
import evelyn from '~/assets/images/Evelyn.png';
import profe from '~/assets/images/profe.png';
import pablo from '~/assets/images/pablo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import gasImg from '~/assets/images/gas.jpg';
import rondaImg from '~/assets/images/ronda.webp';
// import nextJsLogo from '~/assets/images/nextjs-logo.png';
import fastaLogo from '~/assets/images/fasta.svg';
import complejoLogo from '~/assets/images/complejo1.1svg.png';
// import reactLogo from '~/assets/images/react-logo.png';
import dmaLogo from '~/assets/images/dma.svg';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 13 using the new App Router »',
    href: 'https://nextjs.org/docs/app',
  },
  callToAction2: {
    text: 'And developed with ❤️ by JIM-DEV',
    href: 'https://github.com/JIM90mdp',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Menú',
      icon: IconChevronDown,
      links: [
        {
          label: 'Nosotros',
          href: '/nosotros',
        },
        {
          label: 'Precios',
          href: '/precios',
        },
        {
          label: 'Contactanos',
          href: '/contacto',
        },
        {
          label: 'Preguntas frecuentes',
          href: '/preguntas',
        },
      ],
    },
  ],
  actions: [
    {
      text: 'Inscripciones',
      href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
      targetBlank: true,
      btnType: 'secondary',
    },
  ],
  socials: [
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/coloniafastamda/' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/coloniadevacacionesFastaMda/' },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      <div>
        <span>Colonia de verano</span>
      </div>
      <div>
        <span className="sm:inline-block">FASTA - MDA</span>
      </div>
      <div>
        <span className="inline-block"> Mar del Plata</span>
      </div>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold ">
          Colonia de verano
        </span>
        <em className="md:block"> ¡11 años de experiencia brindando diversión garantizada!</em>
      </span>
      <em className="block">
        !Sé parte de nuestra familia!
      </em>
      <span>
        Realiza la inscripción y asegura la vacante con el pago de la matrícula.
      </span>
    </>
  ),
  // callToAction: {
  //   text: 'Información',
  //   href: '/data.jpg',
  //   icon: IconDownload,
  //   targetBlank: true,
  //   btnType: 'primary',
  // },
  // callToAction2: {
  //   text: 'Inscripciones - Matrícula',
  //   href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
  // },
  image: {
    src: cameraBackImg,
    alt: 'Hero TailNext',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Grandes momentos Grandes personas',
  subtitle:
    <>
      <span className="block">
        En nuestro proyecto de colonia de verano, nos enfocamos en brindar apoyo emocional, motivación y contribuir al desarrollo físico, cognitivo y social de nuestros colonos durante las vacaciones escolares.
      </span>
      <span className="block">
        Desde 2015, hemos crecido y evolucionado gracias al respaldo de las familias que confían en nosotros.
      </span>
      <span className="block">
        Operamos en un predio de siete hectáreas que proporciona un ambiente seguro y divertido para que los niños crezcan y aprendan.
      </span>
      <span className="block">
        Reconocemos la diversidad de edades y necesidades de nuestros colonos, por lo que nuestros grupos están diseñados para adaptarse a diferentes rangos de edad, desde jardín de infantes hasta 3er año de secundaria.
      </span>
      <span className="block">
        El Director de la Colonia, el Profesor Pablo Mascarenhas, y el Coordinador, Ricardo Pérez, lideran nuestro equipo con pasión y compromiso.
      </span>

    </>,
  // callToAction: {
  //   text: 'Inscripciones',
  //   href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
  //   targetBlank: true,
  //   btnType: 'primary',
  // },
  // callToAction2: {
  //   text: 'Contactanos',
  //   href: '/contacto',
  // },
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://sanvicentemdp.redfasta.edu.ar/',
      src: fastaLogo,
      alt: 'Fasta Logo',
    },
    {
      link: 'https://maps.app.goo.gl/iPXNe692Q5u8sQpe8',
      src: complejoLogo,
      alt: 'Fasta Logo',
    },
    {
      link: 'https://sanvicentemdp.redfasta.edu.ar/',
      src: dmaLogo,
      alt: 'MDA Logo',
    }
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Preguntas frecuentes',
    subtitle:
      '',
    highlight: 'FAQS',
  },
  items: [
    {
      title: '¿Pueden los alumnos asistir con sus compañeros de grado?',
      description: '¡Claro que sí! Fomentamos la diversión en grupo, así que tus compañeros de grado son bienvenidos.',
    },
    {
      title: '¿Hermanos de edades diferentes pueden estar en un mismo grupo dentro de la colonia?',
      description: 'Si uno de los hermanos tiene 4 años y el otro tiene 8 años, lamentablemente no será posible. Sin embargo, si uno tiene 6 años y el otro tiene 8, podríamos considerarlo. Contactanos para más detalles.',
    },
    {
      title: '¿Es necesario ser alumno del Colegio FASTA para asistir?',
      description: '¡No es necesario! Nuestra colonia de verano está abierta a toda la comunidad. ¡Todos son bienvenidos!',
    },
    {
      title: '¿Cuáles son los cuidados en la pileta?',
      description: 'La seguridad en la pileta es nuestra máxima prioridad. Contamos con un alto número de profesionales supervisando en la pileta para garantizar la seguridad de los participantes.',
    },
    {
      title: '¿Qué sucede en caso de lluvia?',
      description: 'Las actividades continúan según lo planeado, incluso en días de lluvia. Las actividades se mantienen sin alteraciones debido al clima.',
    },
    {
      title: '¿Hay algún requisito?',
      description: 'Si, el único requisito de la coloña es que los colonos no utilicen pañales mientras se encuentran en el establecimiento.',
    },
    {
      title: '¿Cuándo es la inscripción y cómo funciona?',
      description: 'La inscripción comienza el miércoles 2 de octubre y se hace efectiva luego de completar el formulario de inscripción y realizar el pago de la matricula de inscripción de $14000 a la mutual MDA. El director se pondrá en contacto con todas las familias una vez que completen el formulario de inscripción.',
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Preguntas Frecuentes',
    subtitle:
      '',
    highlight: 'FAQS',
  },
  items: [
    {
      title: '¿Pueden los alumnos asistir con sus compañeros de grado?',
      description: '¡Claro que sí! Fomentamos la diversión en grupo, así que tus compañeros de grado son bienvenidos.',
    },
    {
      title: '¿Hermanos de edades diferentes pueden estar en un mismo grupo dentro de la colonia?',
      description: 'Si uno de los hermanos tiene 4 años y el otro tiene 8 años, lamentablemente no será posible. Sin embargo, si uno tiene 6 años y el otro tiene 8, podríamos considerarlo. Contactanos para más detalles.',
    },
    {
      title: '¿Es necesario ser alumno del Colegio FASTA para asistir?',
      description: '¡No es necesario! Nuestra colonia de verano está abierta a toda la comunidad. ¡Todos son bienvenidos!',
    },
    {
      title: '¿Cuáles son los cuidados en la pileta?',
      description: 'La seguridad en la pileta es nuestra máxima prioridad. Contamos con un alto número de profesionales supervisando en la pileta para garantizar la seguridad de los participantes.',
    },
    {
      title: '¿Qué sucede en caso de lluvia?',
      description: 'Las actividades continúan según lo planeado, incluso en días de lluvia. Las actividades se mantienen sin alteraciones debido al clima.',
    },
    {
      title: '¿Hay algún requisito?',
      description: 'Si, el único requisito de la coloña es que los colonos no utilicen pañales mientras se encuentran en el establecimiento.',
    },
    {
      title: '¿Cuándo es la inscripción y cómo funciona?',
      description: 'La inscripción comienza el miércoles 2 de octubre y se hace efectiva luego de completar el formulario de inscripción y realizar el pago de la matricula de inscripción de $14000 a la mutual MDA. El director se pondrá en contacto con todas las familias una vez que completen el formulario de inscripción.',
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Preguntas Frecuentes',
    // subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: '¿Pueden los alumnos asistir con sus compañeros de grado?',
      description: '¡Claro que sí! Fomentamos la diversión en grupo, así que tus compañeros de grado son bienvenidos.',
    },
    {
      title: '¿Hermanos de edades diferentes pueden estar en un mismo grupo dentro de la colonia?',
      description: 'Si uno de los hermanos tiene 4 años y el otro tiene 8 años, lamentablemente no será posible. Sin embargo, si uno tiene 6 años y el otro tiene 8, podríamos considerarlo. Contactanos para más detalles.',
    },
    {
      title: '¿Es necesario ser alumno del Colegio FASTA para asistir?',
      description: '¡No es necesario! Nuestra colonia de verano está abierta a toda la comunidad. ¡Todos son bienvenidos!',
    },
    {
      title: '¿Cuáles son los cuidados en la pileta?',
      description: 'La seguridad en la pileta es nuestra máxima prioridad. Contamos con un alto número de profesionales supervisando en la pileta para garantizar la seguridad de los participantes.',
    },
    {
      title: '¿Qué sucede en caso de lluvia?',
      description: 'Las actividades continúan según lo planeado, incluso en días de lluvia. Las actividades se mantienen sin alteraciones debido al clima.',
    },
    {
      title: '¿Hay algún requisito?',
      description: 'Si, el único requisito de la coloña es que los colonos no utilicen pañales mientras se encuentran en el establecimiento.',
    },
    {
      title: '¿Cuándo es la inscripción y cómo funciona?',
      description: 'La inscripción comienza el miércoles 2 de octubre y se hace efectiva luego de completar el formulario de inscripción y realizar el pago de la matricula de inscripción de $14000 a la mutual MDA. El director se pondrá en contacto con todas las familias una vez que completen el formulario de inscripción.',
    },
  ],
  callToAction: {
    text: 'Contactanos',
    href: '/contacto',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Preguntas Frecuentes',
    subtitle:
      'Resolvé tus dudas y obtené información importante sobre nuestra colonia de verano.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: '¿Pueden los alumnos asistir con sus compañeros de grado?',
          description: '¡Claro que sí! Fomentamos la diversión en grupo, así que tus compañeros de grado son bienvenidos.',
        },
        {
          title: '¿Hermanos de edades diferentes pueden estar en un mismo grupo dentro de la colonia?',
          description: 'Si uno de los hermanos tiene 4 años y el otro tiene 8 años, lamentablemente no será posible. Sin embargo, si uno tiene 6 años y el otro tiene 8, podríamos considerarlo. Contactanos para más detalles.',
        },
        {
          title: '¿Es necesario ser alumno del Colegio FASTA para asistir?',
          description: '¡No es necesario! Nuestra colonia de verano está abierta a toda la comunidad. ¡Todos son bienvenidos!',
        },
        {
          title: '¿Cuáles son los cuidados en la pileta?',
          description: 'La seguridad en la pileta es nuestra máxima prioridad. Contamos con un alto número de profesionales supervisando en la pileta para garantizar la seguridad de los participantes.',
        },
        {
          title: '¿Qué sucede en caso de lluvia?',
          description: 'Las actividades continúan según lo planeado, incluso en días de lluvia. Las actividades se mantienen sin alteraciones debido al clima.',
        },
        {
            title: '¿Hay algún requisito?',
            description: 'Si, el único requisito de la coloña es que los colonos no utilicen pañales mientras se encuentran en el establecimiento.',
          },
        {
          title: '¿Cuándo es la inscripción y cómo funciona?',
          description: 'La inscripción comienza el miércoles 2 de octubre y se hace efectiva luego de completar el formulario de inscripción y realizar el pago de la matricula de inscripción de $14000 a la mutual MDA. El director se pondrá en contacto con todas las familias una vez que completen el formulario de inscripción.',
        },
      ],
    },
    {
      link: {
        label: 'Horarios y Comida',
        href: '/tab2',
      },
      items: [
        {
          title: ' ¿Cuáles son los horarios disponibles para la colonia de verano?',
          description: `Ofrecemos dos horarios: de 7.30 a 13.30 y de 7.30 a 15.30. El primero no incluye comida, mientras que el segundo ofrece la opción de contratar el comedor o llevar vianda fría desde el hogar.`,
        },
      ],
    },
    {
      link: {
        label: 'Inscripción y Grupos',
        href: '/tab3',
      },
      items: [
        {
          title: ' ¿Cómo funciona la inscripción a la colonia?',
          description: `La inscripción comienza el miércoles 2 de octubre y se hace efectiva luego de completar el formulario de inscripción y realizar el pago de la matricula de inscripción de $14000 a la mutual MDA. El director se pondrá en contacto con todas las familias una vez que hayan completado esos dos pasos`,
        },
        {
          title: ' ¿Cómo se dividen los grupos de niños?',
          description: `Los grupos se dividen en función del año al que pasarán en 2024: Jardín - 1° y 2° - 3° y 4° - 5° y 6° - Secundaria. Los grupos son conformados entre 12 a 15 chicos y un profesor a cargo. Hay flexibilidad para integrar alumnos en grupos de otras edades si una familia lo solicita.`,
        },
      ],
    },
    {
      link: {
        label: 'Actividades en la Colonia',
        href: '/tab4',
      },
      items: [
        {
          title: '¿Qué tipo de actividades se ofrecen en la colonia?',
          description: `Ofrecemos una variedad de actividades, incluyendo juegos lúdicos, deportes tradicionales y no tradicionales, actividades para fomentar la autonomía y actividades acuáticas con medidas de seguridad. También tenemos campamentos con pernoctada para niños de tercer grado en adelante.`,
        },
      ],
    },
    {
      link: {
        label: 'Equipo de Trabajo',
        href: '/tab5',
      },
      items: [
        {
          title: '¿Quiénes son los responsables de la colonia?',
          description: `El director de la colonia es el Profesor Pablo Mascarenhas, y el coordinador es Ricardo Pérez. Contamos con un equipo profesional y experimentado en todas las áreas.`,
        },
      ],
    },
    {
      link: {
        label: 'Inscripciones y Contacto',
        href: '/tab6',
      },
      items: [
        {
          title: ' ¿Cómo puedo inscribirme u obtener más información?',
          description: `Las inscripciones ya están abiertas y puedes encontrar el link de inscripción en nuestras redes sociales. También puedes contactar al director y al coordinador a través de WhatsApp para obtener más detalles.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Colonia de Verano FASTA - MDA',
  subtitle:
    '',
  callToAction: {
    text: 'Mas información',
    href: '/',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Inscripciones',
      description: 'Si leíste la página, y ya has evacuado todas tus dudas, realizá la inscripción y pagá tu matrícula',
      href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
    },
    // {
    //   title: 'Mas información',
    //   description: 'Si todavía tienes alguna duda, ponte en contacto con nosotros',
    //   href: '/contacto',
    // },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: '¿Aún tienes preguntas?',
  subtitle:
    'Ponete en contacto con nosotros para resolver cualquier duda que tengas.',
  callToAction: {
    text: 'Contactanos',
    href: '/contacto',
    btnType: 'primary',
  },
};

// Feature data 
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        11º Temporada <span className="sm:whitespace-nowrap">Colonia FASTA - MDA</span>
      </>
    ),
    subtitle:
      '¡Estamos emocionados por la llegada de la Onceava temporada de nuestra Colonia de Verano!',
    highlight: 'Pronto',
  },
  items: [
    {
      title: 'Horarios',
      description:
        'Pensados para los papás que comienzan a trabajar muy temprano. Tenemos una guardia de 7.30hs a 8.30hs. Y podés elegir quedarte hasta las 13.30hs o hasta las 15.30hs, con una tolerancia de 30 minutos para retirarlo en ambos turnos.',
      icon: IconAlarm,
      // link: {
      //   label: 'Mas información',
      //   href: '/',
      // },
    },
    {
      title: 'Punto de encuentro',
      description:
        'Nos reunimos de lunes a viernes en el colegio Fasta (Gascón 3145). Dejás a tu hijo en zona centro, eso te garantizar la mínima pérdida de tiempo para empezar tus actividades laborales.',
      icon: IconComponents,
      link: {
        label: 'GoogleMap - Colegio Fasta',
        href: 'https://maps.app.goo.gl/i9WTR5VUBy9YnFebA',
      },
    },
    {
      title: 'Predio SuteryH',
      description:
        'Tiene una dimensión de 7 hectáreas, cuenta con 4 piletas, espacios cubiertos, canchas de fútbol, espacios verdes con una hermosa arboleda para cuidar a los chicos del sol. El nombre de esta maravilla es el predio del sindicato de SUTERYH',
      icon: IconActivityHeartbeat,
      link: {
        label: 'GoogleMap - Villa Recreativa SuteryH',
        href: 'https://maps.app.goo.gl/iPXNe692Q5u8sQpe8',
      },
    },
    {
      title: 'Grupos por edades',
      description:
        'Los grupos son seleccionados según la maduración y edad cronológica, de tal forma que se garantice la formación, la diversión y seguridad de los colonos. Único requisito: No usar pañales.', 
      icon: IconMoodKid,
      link: {
        label: 'Mas información',
        href: '/preguntas',
      },
    },
    {
      title: 'Diversión y Aprendizaje',
      description:
        'Ofrecemos juegos lúdicos, deportes, actividades acuáticas y emocionantes campamentos, con un solo objetivo: Generar diversión y aprendizaje.',
      icon: IconRocket,
      // link: {
      //   label: 'Mas información',
      //   href: '/',
      // },
    },
    {
      title: 'Equipo Profesional',
      description:
        "Staff constituido por un grupo de profesionales con la seguridad y el profesionalismo para desempeñarse en cada una de las instancias que se llevan a cabo en nuestra colonia de verano. Presidido por el profesor Pablo Mascarenhas y con la coordinación del profesor Ricardo Perez.",
      icon: IconFriends,
      // link: {
      //   label: 'Mas información',
      //   href: '/',
      // },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Otros Contactos',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Email',
      description: 'p.mascarenhas@svpmdp.redfasta.edu.ar',
      icon: IconSend,
      // link: {
      //   href: '/faqs',
      // },
    },
    {
      title: 'Whatsapp',
      description: 'Director: +54 9 2235 37-4739',
      icon: IconMessages,
      // link: {
      //   href: '/',
      // },
    },
    {
      title: 'Teléfonos',
      description: 'Director: +54 9 2235 37-4739',
      icon: IconHeadset,
      // link: {
      //   href: '/',
      // },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Servicios',
  },
  items: [
    {
      title: 'Horarios',
      description:
        'Pensados para los papás que comienzan a trabajar muy temprano. Tenemos una guarda de 7.30hs a 8.30hs. Y podés elegir quedarte hasta las 13.30hs o hasta las 15.30hs, con una tolerancia de 30 minutos para retirarlo en ambos turnos.',
      icon: IconAlarm,
    },
    {
      title: 'Punto de encuentro',
      description:
        'Nos reunimos de lunes a viernes en el colegio Fasta (Gascón 3145). Dejás a tu hijo en zona centro, eso te garantizar la mínima pérdida de tiempo para empezar tus actividades laborales.',
      icon: IconBoxModel,
    },
    {
      title: 'Predio SuteryH',
      description:
        'Tiene una dimensión de 7 hectáreas, cuenta con 4 piletas, espacios cubiertos, canchas de fútbol, espacios verdes con una hermosa arboleda para cuidar a los chicos del sol. El nombre de esta maravilla es el predio del sindicato de SUTERYH',
      icon: IconSunset2,
    },

    {
      title: 'Grupos por edades',
      description:
        'Los grupos son seleccionados según la maduración y edad cronológica, de tal forma que se garantice la formación, la diversión y seguridad de los colonos. Único requisito: No usar pañales.', 
      icon: IconListCheck,
    },
    {
      title: 'Diversión y Aprendizaje',
      description:
        'Ofrecemos juegos lúdicos, deportes, actividades acuáticas y emocionantes campamentos, con un solo objetivo: Generar diversión y aprendizaje.',
      icon: IconRocket,
    },
    {
      title: 'Equipo Profesional',
      description:
        "Staff constituido por un grupo de profesionales con la seguridad y el profesionalismo para desempeñarse en cada una de las instancias que se llevan a cabo en nuestra colonia de verano. Presidido por el profesor Pablo Mascarenhas y con la coordinación del profesor Ricardo Perez.",
      icon: IconFriends,
    },
  ],
};

// export const contentData: ContentProps = {
//   header: {
//     title: '¡Bienvenida a nuestro Complejo de Verano!',
//     subtitle: 'Enterate de como es un día típico en nuestra colonia',
//     highlight: 'RUTINA DIARIA',
//   },
//   content:
//     'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
//   items: [
//     {
//       title: 'Per ei quaeque sensibus',
//       description:
//         'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
//     },
//     {
//       title: 'Cu imperdiet posidonium sed',
//       description:
//         'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
//     },
//     {
//       title: 'Nulla omittam sadipscing mel ne',
//       description:
//         'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
//     },
//   ],
//   image: {
//     src: cameraFrontImg,
//     alt: 'Colorful Image',
//   },
//   isReversed: false,
//   isAfterContent: false,
// };

export const contentData: ContentProps = {
  header: {
    title: '¡Bienvenida a nuestro Complejo de Verano!',
    subtitle: 'Enterate de como es un día típico en nuestra colonia',
    highlight: 'RUTINA DIARIA',
  },
  items: [
    {
      title: 'Esperamos la llegada de los chicos',
      description:
        'La mañana comienza con la llegada de los colonos entre las 7:30 y las 8:30. La recepción de los chicos es por calle Catamarca',
    },
    {
      title: 'Salida en colectivos al predio',
      description:
        'Una vez que todos están listos, nos dirigimos al predio de la colonia en nuestros colectivos que empiezan a salir del colegio a partir de las 8.15hs y el último sale 8.30hs.',
    },
    {
      title: 'División en grupos',
      description:
        'Los colonos se dividen en seis grupos, cada uno con su espacio designado para guardar sus pertenencias.',
    },
    {
      title: 'Compartir en el desayuno',
      description:
        'Promovemos la colaboración y las buenas costumbres, así los niños compartan este momento de manera amigable.',
    },
    {
      title: 'Turnos en la piscina',
      description:
        'Los chicos van al vestuario, donde se les brinda asistencia en caso de necesitarla, promoviendo la autonomía.',
    },

  ],
  image: {
    src: cameraFrontImg,
    alt: 'Imagen Colorida',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data ??????????
export const content2Data: ContentProps = {
  content:
    '',
  items: [
    {
      title: 'Actividades en el agua',
      description:
        'Cuentan con la supervisión de guardavidas, coordinadores y profesores, garantizando la máxima seguridad.',
    },
    {
      title: 'Bloques de juego',
      description:
        'Los grupos disfrutan de tres bloques de juego en tierra y uno en el agua.',
    },
    {
      title: 'Regreso al colegio',
      description:
        'El regreso al colegio es entre las 13.15hs y 13.30hs. La desconcentración es por calle Gascón!',
    },
    {
      title: 'Jornada extendida',
      description:
        'Los colonos que realizan la jornada extendida hasta las 15:30 pueden llevar su propia comida o contratar el comedor de la colonia.',
    },
    {
      title: 'Bloques adicionales de juego',
      description:
        'Después del almuerzo, se realizan dos bloques pequeños de juegos adicionales.',
    },
    {
      title: 'Despedida del día',
      description:
        'A las 15:30 comenzamos el proceso de despedida, mantenemos una tolerancia de 30 minutos para la recogida.',
    },
  ],
  image: {
    src: heroImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Descubre una Experiencia Integral en Nuestra Colonia de Verano',
  items: [
    {
      title: 'El Juego',
      description:
        'En la colonia, el juego es el eje principal de cada jornada que, por otra parte, es la actividad natural del niño. En este sentido, ponemos el acento en el valor educativo que tiene el juego. Este uso del tiempo libre favorece la relación con sus pares, fortalece la autoestima, le da un sentido de pertenencia a un grupo, le brinda aprendizajes para lograr desenvolverse en un ambiente distinto a la escuela y le genera vivencias que lo acompañarán toda la vida.',
      icon: IconArrowDown,
    },
    {
      title: 'Nuestros valores',
      description:
        'Estimulamos la solidaridad, el compañerismo, el respeto y el esfuerzo individual y del grupo para alcanzar las metas. También la disciplina, porque hay que tener en cuenta que el juego es un excelente campo de aprendizaje y su valor educativo también se construye a partir de las reglas que son necesarias para poder llevarlas a cabo. De esta manera, los niños incorporan la dinámica de las reglas las cuales pueden aplicar a su vida cotidiana.',
      icon: IconArrowDown,
    },
    {
      title: 'Diversión y actividades acuática',
      description:
        'Nuestras actividades acuáticas te brindarán la oportunidad de disfrutar del agua de maneras diferente, ya que hacemos juegos acuáticos donde los colonos disfrutan de este ámbito desconocido de manera gratificante y divertida, otorgando y facilitando todas las medidas de seguridad. ',
      icon: IconArrowDown,
    },
    {
      title: '¡Listo para una Experiencia Integral e Inolvidable!',
      icon: IconCheck,
    },
  ],
  image: {
    src: rondaImg,
    alt: 'Steps image',
  },
};


// Team data FALTA DATA EQUIPO DE PROFES
export const teamData: TeamProps = {
  header: {
    title: 'Miembros del equipo',
    subtitle:
      "Staff constituido por un grupo de profesionales con la seguridad y el profesionalismo para desempeñarse en cada una de las instancias que se llevan a cabo en nuestra colonia de verano. Presidido por el profesor Pablo Mascarenhas y con la coordinación del profesor Ricardo Perez.",
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Pablo Mascarenhas',
      cel: "+54 9 2235374739",
      occupation: 'Director',
      image: {
        src: pablo,
        alt: 'Pablo Mascarenhas',
      },

      // items: [
      //   {
      //     title: 'Know more on Twitter',
      //     icon: IconBrandWhatsapp,
      //     href: '#',
      //   },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandInstagram,
      //     href: '#',
      //   },
      //   {
      //     title: 'email',
      //     icon: IconMail,
      //     href: 'p.mascarenhas@svpmdp.redfasta.edu.ar',
      //   },
      // ],
    },
    {
      name: 'Ricardo Perez',
      cel: "+54 9 2235942908",
      occupation: 'Coordinador',
      image: {
        src: ricardo,
        alt: 'Ricardo Perez',
      },
      // items: [
      //   // {
      //   //   title: 'Know more on Twitter',
      //   //   icon: IconBrandWhatsapp,
      //   //   href: '#',
      //   // },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandInstagram,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },
    {
      name: 'Pablo Facundo Meléndez',
      cel: "",
      occupation: 'Profesor',
      image: {
        src: profe,
        alt: 'Pablo Facundo Meléndez',
      },
      // items: [
      //   // {
      //   //   title: 'Know more on Twitter',
      //   //   icon: IconBrandWhatsapp,
      //   //   href: '#',
      //   // },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandInstagram,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },
    {
      name: 'Evelyn Racedo',
      cel: "",
      occupation: 'Profesora',
      image: {
        src: evelyn,
        alt: 'Evelyn Racedo',
      },
      // items: [
      //   // {
      //   //   title: 'Know more on Twitter',
      //   //   icon: IconBrandWhatsapp,
      //   //   href: '#',
      //   // },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandInstagram,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },
  ],
};

// Testimonial data FALTA DATA REFERENCIAS
export const testimonialData: TestimonialProps = {
  header: {
    title: 'Lo que las familias dicen',
    subtitle:
      'Escuchamos todas las opiniones para garantizar un crecimientos constante y asegurado!',
    // highlight: 'Testimonial',
  },
  testimonials: [

    {
      name: 'Ana Plaza Palacio',
      occupation: 'Madre de Vicky',
      comment:
        'Muchas gracias por ésta, que para nosotros, fue la primer temporada, pero no será la última. Mi hijo terminó más que feliz! Ahí estaremos el próximo año ❤️',
      image: {
        src: test1,
        alt: '',
      },
      icon: IconBrandInstagram,
      href: 'https://www.instagram.com/p/CpNdovjrPeK/',
    },
    {
      name: 'Gabriela Rodriguez',
      occupation: 'Madre de Martina',
      comment:
        'Es nuestro primer año con ustedes y quiero destacar el compromiso y dedicación, tanto en la organización como en el acompañamiento con nuestros hijos. Muchas gracias y me despido con palabras de mi hijo mayor: "Mama, ¿el año que viene puedo volver a esta colonia?" ❤️',
      image: {
        src: test3,
        alt: '',
      },
      icon: IconBrandInstagram,
      href: 'https://www.instagram.com/p/CpNdovjrPeK/',
    },
    {
      name: 'Romi Ranocchia',
      occupation: 'Madre de Lupe y Charo',
      comment:
        'Genios chicos! No es novedad que la colonia es lo más para nosotros, pero este año tuvieron la difícil tarea de recibir a nuestra pequeña Charo que ofreció resistencia 😂. Gracias por tanta dedicación, paciencia y amor para Lupe y Charo!',
      image: {
        src: test2,
        alt: '',
      },
      icon: IconBrandInstagram,
      href: 'https://www.instagram.com/p/CpNdovjrPeK/',
    },
  ],
};

// Pricing data FALTA DATA PRECIOS
export const pricingData: PricingProps = {
  header: {
    title: 'Precios e inscripciones',
    subtitle:
      'Completá el formulario haciendo click en el botón "Inscripciones", pagá la matrícula a la mutual y elegí la modalidad que mejor se adapte a tus necesidades. ¡Consultá descuentos para hermanos!',
    highlight: 'Precios',
  },
  prices: [
    {
      title: 'Matricula',
      value: 14000,
      period: 'Pago unico',
      texts: [
        'Obligatorio para inscribirse',
        'Transferencia a la Mutual',
        'Descuento para hermanos',
      ],
      // callToAction: {
      //   text: 'Free 7-day trial',
      //   href: '/',
      // },
      hasRibbon: true,
    },
    {
      title: 'Transporte',
      value: 0,
      period: 'Incluído en la tarifa',
      texts: [
        'Transporte ida y vuelta',
        'Salida: Catamarca 2427',
        'Llegada: Gascón 3145',
      ],
      callToAction: {
        text: 'Fasta - Ubicación',
        href: 'https://maps.app.goo.gl/i9WTR5VUBy9YnFebA',
      },
      hasRibbon: true,
    },
    {
      title: 'Comedor',
      value: 5500,
      period: 'Precio por día',
      texts: [
        'Menu variado y saludable',
        'Incluye bebida y postre',
      ],
      // callToAction: {
      //   text: 'Free 7-day trial',
      //   href: '/',
      // },
      hasRibbon: true,
    },
    {
      title: '02/01 al 27/02',
      // value: 58500,
      value: 215000,
      period: 'Por Mes',
      texts: ['De lunes a viernes', 'De 7:30 hs a 15:30 hs', 'Transporte incluído', '3 Cuotas (Nov - Dic - Ene)'],
      callToAction: {
        text: 'Inscripciones',
        href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
      },
      hasRibbon: true,
    //   ribbonTitle: 'Popular',
    },
    {
      title: '02/01 al 27/02',
      // value: 49500,
      value: 190000,
      period: 'Por Mes',
      texts: ['De lunes a viernes', 'De 7:30 hs a 13:30 hs', 'Transporte incluído', '3 Cuotas (Nov - Dic - Ene)'],
      callToAction: {
        text: 'Inscripciones',
        href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
      },
      hasRibbon: true,
    //   ribbonTitle: 'Popular',
    },
    {
      title: '02/01 al 27/02',
      value: 195000,
      // value: 49500,
      period: 'Por Mes',
      texts: ['3 veces por semana', 'De 7:30 hs a 15:30 hs', 'Transporte incluído', '3 Cuotas (Nov - Dic - Ene)'],
      callToAction: {
        text: 'Inscripciones',
        href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
      },
      hasRibbon: true,
    },
    {
      title: '02/01 al 27/02',
      value: 170000,
      // value: 49500,
      period: 'Por Mes',
      texts: ['3 veces por semana', 'De 7:30 hs a 13:30 hs', 'Transporte incluído', '3 Cuotas (Nov - Dic - Ene)'],
      callToAction: {
        text: 'Inscripciones',
        href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
      },
      hasRibbon: true,
    },
    // {
    //   title: 'Por Mes',
    //   // value: 43000,
    //   value: "Consultar",
    //   period: 'por mes',
    //   texts: ['3 veces por semana', 'De 7:30 hs a 13:30 hs', 'Transporte incluído'],
    //   callToAction: {
    //     text: 'Inscripciones',
    //     href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
    //   },
    //   hasRibbon: true,
    // },


    // {
    //   title: 'Febrero',
    //   // value: 56500,
    //   value: "Consultar",
    //   period: 'por mes',
    //   texts: ['De lunes a viernes', 'De 7:30 hs a 15:30 hs', 'Transporte incluído'],
    //   callToAction: {
    //     text: 'Inscripciones',
    //     href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
    //   },
    //   hasRibbon: true,
    //   ribbonTitle: 'Popular',
    // },
    // {
    //   title: 'Febrero',
    //   // value: 47500,
    //   value: "Consultar",
    //   period: 'por mes',
    //   texts: ['De lunes a viernes', 'De 7:30 hs a 13:30 hs', 'Transporte incluído'],
    //   callToAction: {
    //     text: 'Inscripciones',
    //     href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
    //   },
    //   hasRibbon: true,
    //   ribbonTitle: 'Popular',
    // },
    // {
    //   title: 'Febrero',
    //   // value: 47500,
    //   value: "Consultar",
    //   period: 'por mes',
    //   texts: ['3 veces por semana', 'De 7:30 hs a 15:30 hs', 'Transporte incluído'],
    //   callToAction: {
    //     text: 'Inscripciones',
    //     href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
    //   },
    //   hasRibbon: true,
    // },
    // {
    //   title: 'Febrero',
    //   // value: 41000,
    //   value: "Consultar",
    //   period: 'por mes',
    //   texts: ['3 veces por semana', 'De 7:30 hs a 13:30 hs', 'Transporte incluído'],
    //   callToAction: {
    //     text: 'Inscripciones',
    //     href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
    //   },
    //   hasRibbon: true,
    // },

  ],
};

// Comparison data  FALTA DATA PRECIOS
export const comparisonData: ComparisonProps = {
  header: {
    title: "Compará los planes",
    subtitle:
      'Elegí el plan que mejor se adapte a tu situación familiar',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'Planes',
      items: [
        {
          title: 'Matrícula',
        },
        {
          title: 'Transporte',
        },
        {
          title: 'Lun-Vie/7:30-15:30',
        },
        {
          title: 'Lun-Vie/7:30-13:30',
        },
        {
          title: '3 días/7:30-15:30',
        },
        {
          title: '3 días/7:30-13:30',
        },

        {
          title: 'Comedor por día ',
        },
        {
          title: 'Vianda fría',
        },

      ],
    },
    {
      title: 'Enero',
      items: [
        {
          title: "$14000",
        },
        {
          title: true,
        },
        {
          // title: '$58500',
          title: "$215000",
        },
        {
          // title: "$49500",
          title: "$19000",
        },
        {
          // title: "$49500",
          title: "$195000",
        },
        {
          title: "$170000",
        },


        {
          title: "$5500",
        },
        {
          title: true,
        },



      ],
      callToAction: {
        text: 'Inscripciones',
        href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
        btnType: 'primary',
      },
    },
    {
      title: 'Febrero',
      items: [
        {
            title: "$14000",
          },
          {
            title: true,
          },
          {
            // title: '$58500',
            title: "$215000",
          },
          {
            // title: "$49500",
            title: "$19000",
          },
          {
            // title: "$49500",
            title: "$195000",
          },
          {
            title: "$170000",
          },

        {
          title: "$5500",
        },
        {
          title: true,
        },


      ],
      callToAction: {
        text: 'Inscripciones',
        href: 'https://forms.gle/54HCNzaCZ7XHcWKe7',
        btnType: 'primary',
      },
    },
    // {
    //   title: 'premium',
    //   items: [
    //     {
    //       title: 'Free 30-day trial',
    //     },
    //     {
    //       title: 'Unlimited',
    //     },
    //     {
    //       title: '$199',
    //     },
    //     {
    //       title: true,
    //     },
    //     {
    //       title: true,
    //     },
    //     {
    //       title: true,
    //     },
    //   ],
    //   callToAction: {
    //     text: 'Get started',
    //     href: '/',
    //     btnType: 'primary',
    //   },
    // },
  ],
};

// Stats CHEQUEAR CON PABLO
export const statsData: StatsProps = {
  items: [
    {
      title: 10,
      description: 'Temporadas',
    },
    {
      title: 4000,
      description: 'Niños y niñas',
    },
    {
      title: 30,
      description: 'Profes',
    },
    {
      title: 1000,
      description: 'Familias',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Ponete en contacto',
    subtitle: '',
    // highlight: 'Contacto',
  },
  content:
    '',
  items: [
    {
      title: 'Nuestra dirección',
      description: ['Falucho 3122, Mar del Plata', 'Mar del Plata, Buenos Aires'],
      icon: IconMapPin,
    },
    {
      title: 'Contactanos',
      description: ['Celular-Director: +54 9 2235 37-4739', 'Celular-Coordinador: +54 9 2235 94-2908'],
      icon: IconPhoneCall,
    },
    {
      title: 'Horarios de Atención',
      description: ['Lunes a Viernes: 07:00 - 18:00', 'Sabados: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Listos y listas para empezar?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Escribe tu mensaje...',
    },
    btn: {
      title: 'Enviar mensaje',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Ponete en contacto',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Nuestra dirección',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contactanos',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Listos y listas para empezar?',
    description:
      'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
    inputs: [
      {
        type: 'text',
        label: 'Nombre',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Nombre',
      },
      {
        type: 'text',
        label: 'Apellido',
        name: 'lastName',
        placeholder: 'Apellido',
      },
      {
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'Email',
      },
    ],
    radioBtns: {
      label: 'Cual es la razón de tu consulta?',
      radios: [
        {
          label: 'Inquietudes generales',
        },
        {
          label: 'Transporte',
        },
        {
          label: 'Precios',
        },
        {
          label: 'Otros',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Como podemos ayudarte?',
      name: 'textarea',
      placeholder: 'Escribe tu mensaje...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Envíar mensaje',
      type: 'submit',
    },
  },
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Say Hello',
      href: 'https://www.linkedin.com/in/mascarenhas-developer/',
      icon: IconBrandLinkedin,
    },
    // {
    //   label: 'Privacy Policy',
    //   href: '/privacy',
    // },
  ],
  columns: [
    {
      title: 'Dirección',
      texts: ['Fasta: Falucho 3122, Mar del Plata', ''],
    },
    {
      title: 'Teléfonos',
      // texts: ['Fasta: +54 9 223 499 0400', 'Mutual MDA: +107 235 7890'],
      texts: ['Director: +54 9 2235 37-4739', 'Coordinador: +54 9 2235 94-2908'],
    },
    {
      title: 'Email',
      texts: ['p.mascarenhas@svpmdp.redfasta.edu.ar', ''],
    },
  ],
  socials: [
    // { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/coloniafastamda/' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/coloniadevacacionesFastaMda/' },
    // { label: 'RSS', icon: IconRss, href: '#' },
    // { label: 'Github', icon: IconBrandGithub, href: '/' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className=" h-5 w-5 rounded-sm md:-mt-0.5 md:h-6 md:w-6"></span>
      Web site made with ❤️ by{' '}
      <a target="_blank" className="text-blue-600 hover:underline dark:text-gray-200" href="https://jim-dev-portfolio.vercel.app/">
        {' '}
        JIM-DEV
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};
