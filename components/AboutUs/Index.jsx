import Image from "next/image";
import WTM from "../../images/logos/WTMAlgiers.png";
import SectionTitle from "../shared/SectionTitle";
import GDG from "../../images/logos/GDGAlgiers.png";
import Quiz from "../../images/logos/quiz.png";
import Coding from "../../images/logos/coding.png";
import Scavenger from "../../images/logos/hunt.png";
import Auction from "../../images/logos/auction.png";
import Presentation from "../../images/logos/presenatation.png";
import ParagSection from "../shared/ParagSection";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
const AboutUs = () => {
  return (
    <section id="about-us">
      <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div>

      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About Events"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"Tech Quiz "}
              paragraph1={`Time to test your knowledge in the field of technology and general aptitude. It is your chance to become the one and only`}
              keyword2={" Quiz Master "}
              paragraph2={`in the field of technology at KKWIEER.`}
              img={Quiz}
              reverse={false}
              redirect={"https://www.instagram.com/mibcs_kkw/"}
            ></ParagSection>
            <ParagSection
              keyword1={"Blind Coding "}
              paragraph1={`Don't worry we won't be blindfolding you, but we will be giving you a set of problems to solve in a limited time frame. `}
              keyword2={" With your monitors turned off "}
              paragraph2={`showcase your coding skills and win exciting prizes.`}
              img={Coding}
              reverse={true}
              redirect={"https://www.instagram.com/mibcs_kkw/"}
            ></ParagSection>
            <ParagSection
              keyword1={"Think Tank: Data Presentation "}
              paragraph1={`Not into coding? No worries, we have something for you too. Test your analytical skills and your ability to interpret data in this event.`}
              keyword2={" Visualize and Analyze"}
              paragraph2={` and showcase your presentation skills and win exciting prizes.`}
              img={Presentation}
              reverse={false}
              redirect={"https://www.instagram.com/mibcs_kkw/"}
            ></ParagSection>
            <ParagSection
              keyword1={"Scavenger Hunt "}
              paragraph1={`your friendly neighborhood scavenger hunt is here. Try to solve a series of puzzles and riddles to find the hidden treasure. `}
              keyword2={" Get ready to hunt!"}
              paragraph2={` put on your thinking caps and get ready to win exciting prizes.`}
              img={Scavenger}
              reverse={true}
              redirect={"https://www.instagram.com/mibcs_kkw/"}
            ></ParagSection>
            <ParagSection
              keyword1={"Bid 4 Code "}
              paragraph1={` is a unique event where you can bid on a code and win it. Put your brains at work and bid wisely and solve as much as you can.`}
              keyword2={" Bid and Win!"}
              paragraph2={` It's a win-win situation for everyone.`}
              img={Auction}
              reverse={false}
              redirect={"https://www.instagram.com/mibcs_kkw/"}
            ></ParagSection>
          </div>
        </div>
      </div>
      <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div>
    </section>
  );
};

export default AboutUs;
