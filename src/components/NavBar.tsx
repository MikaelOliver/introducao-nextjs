import Image from 'next/image';

interface NavBarProps {
    links : {
        label: string;
        href: string;
        }[];

}

export default function NavBar({links}: NavBarProps) {
  return (


<div className="">
      {/* navbar */}
      <nav className="bg-amber-50 shadow-sm">
        <div className="px-4">
          <div className="flex justify-between h-16 items-center">
                {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className='ml-2'>NextApp</span>
            </div>
            {/* Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, indice) => (
                  <a
                    key={indice}
                    href={link.href}
                    className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>


          </div>
        </div>

       </nav>
    </div>
    );
}