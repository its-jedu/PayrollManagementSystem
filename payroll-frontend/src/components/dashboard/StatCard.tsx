import React from "react";
import { Users, Briefcase, Clock, CheckCircle2 } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  paid: number | string;
  unpaid: number | string;
}

const iconMap: Record<string, JSX.Element> = {
  "Total Leave Allowance": <Briefcase size={24} className="text-info-main" />,
  "Total Leave Taken": <CheckCircle2 size={24} className="text-success-main" />,
  "Total Leave Available": <Users size={24} className="text-primary-main" />,
  "Leave Request Pending": <Clock size={24} className="text-danger-main" />,
};

export default function StatCard({ title, value, paid, unpaid }: StatCardProps) {
  return (
    <div className="bg-neutral-10 rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-neutral-80 font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-neutral-100">{value}</h3>
        </div>
        <div className="p-3 bg-neutral-20 rounded-lg">
          {iconMap[title]}
        </div>
      </div>
      <div className="flex justify-between text-sm text-neutral-60">
        <span>Paid: {paid}</span>
        <span>Unpaid: {unpaid}</span>
      </div>
    </div>
  );
}
