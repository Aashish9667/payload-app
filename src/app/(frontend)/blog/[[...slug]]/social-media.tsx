
import * as React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa6';
const social = [
    {
        href: 'https://www.facebook.com/DoctorMedhaviTomar',
        icon: <FaFacebook/>,
        label: 'Facebook',
    },
    {
        href: 'https://www.instagram.com/drmedhavitomar/',
        icon: <FaInstagram/>,
        label: 'Instagram',
    },
    {
        href: 'https://www.youtube.com/@DrMedhaviTomar',
        icon: <FaYoutube/>,
        label: 'Youtube',
    },
    {
        href: 'https://www.linkedin.com/in/drmedhavitomar/',
        icon: <FaLinkedin/>,
        label: 'LinkedIn',
    },
];
export default function SocialMedia() {
    return (
        <div className="bg-[#1e40af] px-4 py-2 rounded-md">
            <h1 className="pb-3 text-white">Social Media</h1>

            <ul className="flex flex-row justify-center gap-1 text-white text-[20px]">
                {social.map((s) => (
                    <li key={s.label}>
                        <button  >
                            <a href={s.href} rel="noopener noreferrer" target="_blank">
                                {s.icon}
                                <span className="sr-only">{s.label}</span>
                            </a>
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}