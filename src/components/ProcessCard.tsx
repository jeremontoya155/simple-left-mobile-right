
import React, { useRef, useEffect, useState } from "react";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  expanded: boolean;
  onToggle: () => void;
}

const ProcessCard = ({ icon, title, description, expanded, onToggle }: ProcessCardProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(expanded ? contentRef.current.scrollHeight + "px" : "0px");
    }
  }, [expanded, description]);

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md p-6 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
      onClick={onToggle}
      tabIndex={0}
      role="button"
      onKeyPress={e => e.key === 'Enter' && onToggle()}
      style={{ transition: "box-shadow 0.2s, transform 0.2s" }}
    >
      <div className="text-emerald-700 mb-4">{icon}</div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out`}
        style={{
          maxHeight,
          opacity: expanded ? 1 : 0,
        }}
      >
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
