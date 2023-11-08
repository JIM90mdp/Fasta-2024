import Image from "next/image";
import logo from "../../assets/images/logoCv1.png"

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image src={logo}
      width={500}
      height={500}
      className="w-12 h-10"
      alt="Logo CV"
       />
  </span>
);

export default Logo;
