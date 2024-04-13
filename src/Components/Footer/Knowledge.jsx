
import React from 'react';
import { Link } from 'react-router-dom';
import { SiEsbuild } from 'react-icons/si';
import { GiCottonFlower } from 'react-icons/gi';
import { FaEgg } from 'react-icons/fa';
import { useState } from 'preact/hooks';
import knowledgeimg from '../../assets/knowledge.jpg'
const AccordionSection = ({ icon, title, items }) => (
  <div className='w-full'>
    <span className='flex items-center gap-1 font-semibold mt-10 ml-4'>
      {icon} {title}
    </span>
    <div className='flex flex-col w-full mt-2'>
      {items.map((item) => (
        <AccordionItem key={item.value} trigger={item.trigger} content={item.content} />
      ))}
    </div>
  </div>
);

const AccordionItem = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='px-4 py-2'>
      <div className='flex items-center justify-between cursor-pointer' onClick={toggleAccordion}>
        <div>{trigger}</div>
        <div>{isOpen ? <span>-</span> : <span>+</span>}</div>
      </div>
      {isOpen && <div className='mt-2 ml-4'>{content}</div>}
      <hr className='w-full mt-2' />
    </div>
  );
};

const Knowledge = () => {
  const knowledgeSections = [
    {
      icon: <FaEgg />,
      title: 'Menstrual Phase (Period)',
      items: [
        {
          value: 'item-11',
          trigger: 'What’s happening hormonally?',
          content:
            'When you’re on your period, both the hormones of your cycle are low, so your hormones aren’t actually doing very much. “What is having an effect, however, are chemicals called prostaglandins, which can cause cramping, pain, inflammation and unpleasant gastro symptoms like diarrhoea and nausea.',
        },
        {
          value: 'item-12',
          trigger: 'How does this make you feel?',
          content:
            'Some women sail through their periods and feel relieved and energised when they’re on their bleed, but 84% of us experience abdominal cramps and pain – most likely because of those prostaglandins. Other frequently reported symptoms are headaches, heavy legs and fatigue which can be as a result of dehydration or low iron levels.',
        },
        {
          value: 'item-13',
          trigger: 'If you only do one thing',
          content:
            'Whether it’s a light yoga session, LISS, walk or run, we know that moving during your period can help to lift your mood, even if you feel pain or you are tired. When you exercise your body increases levels of endorphins (pronounced: en-dor-fins) – the feel-good hormone. These lift your mood, help you feel more positive, reduce anxiety and make you feel more in control. These are also known as nature’s pain killer.',
        },
      ],
    },
    {
      icon: <SiEsbuild />,
      title: 'Follicular Phase',
      items: [
        {
          value: 'item-21',
          trigger: 'What’s happening hormonally?',
          content:
            'During this phase, your oestrogen levels go from zero to hero, rising significantly as you prepare for ovulation,” says Emma, “Around the time of ovulation, you also get a teeny spike of testosterone. It’s very small, but because women don’t have much testosterone, you can often notice its presence.”',
        },
        {
          value: 'item-22',
          trigger: 'How does this make you feel?',
          content:
            '“High oestrogen levels make you feel more motivated, social, outgoing and confident, and you may feel more able to tackle challenging problems. When it comes to your fitness , you might feel more motivated to train, with some women more likely to push their fitness, go for a PB and tag on extra sets and reps.” The combination of emotions should give you a real spring in your step – and that’s scientifically proven, too. According to various studies, the way we walk actually changes and we get a definite swagger on during our Follicular phase too.',
        },
        {
          value: 'item-23',
          trigger: 'If you only do one thing',
          content:
            'Tap into your extra energy and push your fitness – especially as you approach the end of this phase. Whether that’s pushing for a PB on your next run, adding in some extra sets or reps or lifting heavier, this is the time to push for gains and feel the benefits.',
        },
      ],
    },
    {
      icon: <GiCottonFlower />,
      title: 'Luteal Phase',
      items: [
        {
          value: 'item-31',
          trigger: 'What’s happening hormonally?',
          content:
            'The big hormone player at this point in your cycle is the ever-lovely progesterone, which is known for its calming, anti anxiety effect. As progesterone rises to its peak across this phase, oestrogen is also making an appearance, albeit at lower levels than in the first half of the cycle.',
        },
        {
          value: 'item-32',
          trigger: 'How does this make you feel?',
          content:
            'One of the most widely reported effects of progesterone is that it has a calming effect, reducing anxiety and helping some women feel more chilled and more relaxed – and for many women, this phase is characterised by a change of intensity. When it comes to your fitness, you may find that your drive to go hard may have waned (along with your motivation for HIIT), but your ability to go for longer runs, rides, swims or LISS sessions can tak In terms of digestion, progesterone might have a couple of ‘interesting side effects, changing pace and slowing your digestion down. This can mean you experience constipation or bloating during this phase . To help combat these symptoms, stay well hydrated; eat little and often and chew your food well (10 to 20 chews per mouthful). When it comes to what to eat, don’t overload on fruit or fruit smoothies and reduce salty or processed foods.” Another effect of progesterone is that it can make the body more sensitive to changes in blood sugar, which can lead to food cravings or mood swings. To help keep blood sugar stable, eat regularly (at least every 3 hours) and opt for brown, starchy carbs, lean meats and starchy veg – such as sweet potatoes and squashes – for your meals.',
        },
        {
          value: 'item-33',
          trigger: 'If you only do one thing',
          content:
            'Pay attention to what you are eating and drinking, reduce salty and processed foods and snack frequently on the right style of starches.',
        },
      ],
    },
  ];

  return (
    <div className='flex flex-col items-center'>
      <div className="flex justify-between w-full">
        <Link to="/home" className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</Link>
        
      </div>
      <p className='text-2xl font-semibold text-center text-[#EA5D7A] mt-10'>
        Understand your body
      </p>
      <img src={knowledgeimg} width={250} height={250} alt="Knowledge" />
      {knowledgeSections.map((section) => (
        <AccordionSection key={section.title} {...section} />
      ))}
    </div>
  );
};

export default Knowledge;
