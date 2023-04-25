import { SkillItem } from './SkillItem';

import { SkillsConfig } from '@/config';
const Skills = () => {
  const skills = SkillsConfig.map((skill, id) => {
    return (
      <>
        <SkillItem key={id} image={skill.image} title={skill.title} />
      </>
    );
  });
  return (
    <div
      id='skills'
      className=' bg-[#9fb3d8] bg-fixed min-h-screen flex flex-col gap-16 items-center py-40 text-white '
    >
      <div className=' text-3xl flex flex-col items-center gap-2'>
        <h1>Skills</h1>
        <hr className=' w-72' />
      </div>

      <div className='flex flex-wrap max-w-[1300px] px-32  min-h-[500px] justify-around items-center gap-10'>
        {skills}
      </div>
    </div>
  );
};

export default Skills;
