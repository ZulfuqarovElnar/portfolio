import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delayStart: number;
}

const textData = {
  name: 'Elnar Zulfugarov',
  job: 'Frontend Developer',
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delayStart }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="character opened"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delayStart + index * 0.1 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[rgba(0,0,0,0.2)] bg-cover bg-no-repeat bg-center home-background">
      <div className="w-full max-w-[1200px] h-screen flex justify-center mx-auto">
        <div className="details w-full h-auto text-white flex flex-col my-auto">
          <div className="flex flex-col">
            {/* Name Animation */}
            <motion.h3
              className="fn_animation name ready font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] py-3 px-6 md:px-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <AnimatedText text={textData.name} delayStart={0.1} />
            </motion.h3>

            {/* Job Animation */}
            <motion.span
              className="fn_animation job ready text-[18px] font-medium sm:text-[24px] px-6 md:px-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <AnimatedText text={textData.job} delayStart={0.1} />
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
