import React from 'react';
import { IconType } from 'react-icons';

interface ActionCardProps {
  icon: IconType;
  title: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col hover:shadow-xl items-center gap-2 border border-zinc-400 rounded-lg px-8 py-4 w-[150px] h-[160px]">
      <button className="text-3xl rounded-full hover:bg-red-200 p-5">
        <Icon className='text-[#872A41]' />
      </button>
      <h3 className="font-bold text-center">{title}</h3>
    </div>
  );
};

export default ActionCard;
