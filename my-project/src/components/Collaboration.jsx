import Section from './Section'
import { collabContent, collabText, collabApps } from '../constantss'
import { brainwaveSymbol, check } from '../assets'
import Button from './Button'
import {LeftCurve, RightCurve} from './design/Collaboration'

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless collaboration</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24}/>
                  <h6 className="body-2 mx-5">{item.title}</h6>
                </div>
                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-5">
          <p className="body-2 mb-6 txt-n-4 md:mb-10 lg:mb-20 lg:w-[22rem] lg:mx-auto">{collabText}</p>
          <div className="relative left-1/2 -translate-x-1/2 flex w-[25rem] aspect-square border border-n-6 rounded-full scale-75 md:scale-100">
            <div className="flex w-60 aspect-square border border-n-6 m-auto rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                  <img src={brainwaveSymbol} height={48} width={48} alt="brainwave"/>
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                  <div className={`relative -mt-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                    <img className="m-auto" width={app.width} height={app.height} src={app.icon} alt={app.title}/>
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve/>
            <RightCurve/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration