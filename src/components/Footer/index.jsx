import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com/afuq" },
    { icon: FaLinkedin, href: "https://instagram.com/afuq" },
    { icon: FaGithub, href: "https://twitter.com/afuq" },
  ];

  return (
    <footer className="relative z-10 bg-gray-50 dark:bg-bg-color-dark text-body-color dark:text-body-color-dark">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo & Description */}
          <Link href="/" className="inline-block">
            <Image
              src="/logo/logo.png"
              alt="أفق"
              width={45}
              height={45}
            />
          </Link>

          <p className="text-sm max-w-md text-gray-600 dark:text-gray-400">
            رحلتك نحو تعلم اللغة العربية من خلال روائع الأدب والشعر
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
            >
              عن التطبيق
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} أفق. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
