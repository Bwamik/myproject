import Section from './Section'
import {socials} from '../constantss'

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10'>
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <p className="caption text-n-4 lg:block">&copy; {new Date().getFullYear()}All rights reserved .  Bwamiki's Version</p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a key={item.id} href={item.Url} target='_blank' className="flex items-center justify-center rounded-full w-10 h-10 transition-colors bg-n-7 hover:bg-n-6">
              <img src={item.iconUrl} width={16} height={16} alt={item.title}/>
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer