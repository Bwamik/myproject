import Section from './Section'
import Heading from './Heading'
import {roadmap} from '../constantss'
import {check2, grid, loading1} from '../assets'
import TagLine from './Tagline'
import Button from './Button'

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading 
          tag="Ready to get started"
          title="What we're working on"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === 'done' ? 'Done' : 'In progress';
            return(
              <div key={item.id} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}>
                <div>
                  <div>
                    <img src={grid} className="absolute"/>
                    <div className="relative p-8 bg-n-7 rounded-[2.5rem]">
                      <div className="flex items-center justify-between">
                        <TagLine>{item.date}</TagLine>  
                        <div className="flex bg-n-1 p-1.5 rounded-md">
                          <img src={item.status === 'done' ? check2 : loading1} className="mr-2.5" width={16} height={16} alt="status"/>
                          <div className="tagline text-n-5">{status}</div>
                        </div>
                      </div>
                      <div className="mb-10">
                        <img src={item.imageUrl} width={630} height={420} alt={item.title}/>
                        <h4 className="h4 mb-4">{item.title}</h4>
                        <p className="body-2 text-n-4">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="bg-n-8">
        <Button className="mt-[5rem] left-1/2 -translate-x-1/2">our roadmap</Button>
        </div>
      </div>
    </Section>
  )
}

export default Roadmap