"use client";
import { useState } from 'react';
import { format } from 'date-fns';

export function Calendar({
  selected,
  onSelect,
  className = ''
}: {
  selected?: Date;
  onSelect: (date: Date) => void;
  className?: string;
}) {
  const [currentDate, setCurrentDate] = useState(selected || new Date());

  const getDaysInMonth = (date: Date): Date[] => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return Array.from({ length: end.getDate() }, (_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1));
  };

  const days = getDaysInMonth(currentDate);
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handleDayClick = (day: Date): void => {
    onSelect(day);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className={`p-4 rounded-md ${className}`}>
      <div className="flex justify-between items-center mb-4 text-white">
        <button type="button" onClick={handlePrevMonth}>&lt;</button>
        <span className="font-semibold">{format(currentDate, 'MMMM yyyy')}</span>
        <button type="button" onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm text-gray-400 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array(firstDayIndex).fill(null).map((_, i) => (
          <div key={i}></div>
        ))}
        {days.map((day) => (
          <button
            type="button"
            key={day.toDateString()}
            onClick={() => handleDayClick(day)}
            className={`w-8 h-8 text-sm rounded-full flex items-center justify-center
              ${selected?.toDateString() === day.toDateString() ? 'bg-white text-black' : 'hover:bg-gray-700'}`}
          >
            {day.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}

