// "use client";
import { Carousel } from '@/components/common/Carousel'
import Image from 'next/image'

export const About = () => {
  return (
    <div className="flex w-full flex-col items-center pt-16 lg:pt-10 justify-center bg-offwhite dark:bg-darkModeBg-no dark:bg-[#212121]">
      <div className="flex flex-col sm:w-[560px] md:w-[696px] lg:w-[960px] px-10 sm:px-3 justify-center">
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className='flex flex-col justify-center items-center lg:block'>
            <div className='flex lg:float-left lg:mr-14 mb-4 lg:mt-10'>
              <div className="flex justify-center items-center border-10 border-accentColor md:h-[380px] object-cover overflow-y-hidden object-top lg:w-[420px] lg:object-cover lg:overflow-visible lg:h-[420px]">
                <img 
                  className="relative drop-shadow-[0_0_0.3rem_#ffffff70] dark:drop-shadow-none object-cover object-top lg:-mt-10 lg:ml-10 float-left h-[400px]"
                  src="/kd-mountain.png"
                  alt="A photo of me."
                />
              </div>
            </div>

            <div className=" flex lg:block justify-center w-full flex-col items-center text-grey text-left ">

              <div className="text-2xl text-left text-accentColor w-full mt-6 mb-3 dark:text-offwhite">
                About Me
              </div>
              <div className='w-full'>
              <div className='flex h-1 mb-3 dark:bg-accentColor2 bg-accentColor w-28'/>
              </div>
                Hey there! 👋 
                <br />
                <br />
                I'm Karl, a full-stack software engineer with a passion for crafting code and creating meaningful digital experiences. Over the past 3+ years, I've immersed myself in the dynamic world of software engineering, honing my skills and pushing boundaries.
                <br />
                <br />

                In my most recent adventure at Covey.IO, I had the incredible opportunity to contribute to the financial technology industry. Starting as a front-end engineer, I quickly moved up the ranks to become the Lead Software Engineer for Covey.IO's flagship product, 'Training Club' – a web-based mock portfolio builder. Not to brag (well, maybe just a little), but I turbocharged users' financial performance data charts by a whopping 500%. Beyond that, I played a pivotal role in building client-facing systems for Ethereum blockchain transactions, automated monthly crypto payouts, and executed a site-wide facelift based on Figma mock-ups. Talk about a tech makeover!
                <br />
                <br />
                My journey into the tech realm kicked off with a Software Engineering Internship at Ascend Software LLC, where I delved into AI-driven accounts payable automation for medium to large enterprises. Before that, I dedicated time to Epicodus as a Software Engineering Tutor, helping aspiring developers troubleshoot and optimize web applications.
                <br />
                <br />
                Now, let's rewind a bit. Back at Clark College, I earned my AA degree in Graphic Design, where I not only immersed myself in the arts but also led photography special projects courses. However, my heart truly found its rhythm during my time at Epicodus' coding boot camp. There, I earned a Certificate in Full Stack Web and Mobile Development, engaging in 2,000+ hours of learning, problem-solving, and collaborative programming. The cherry on top? Winning the Best Interface Design award for my capstone project.
                {/* Yeah, I'm still beaming about that one. */}
                <br />
                <br />
                When I'm not pushing code, you'll likely find me scaling rock walls, jamming out as a musician, or capturing moments through the lens as a photographer and artist. These passions fuel my creativity and bring a unique flavor to my work.
                <br />
                <br />
                So, if you're looking for a tech enthusiast with a knack for turning challenges into triumphs, you're in the right place. Let's build something amazing together!
            </div>
          </div>
        </div>
        <div className='flex w-full justify-center items-center py-8'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}
