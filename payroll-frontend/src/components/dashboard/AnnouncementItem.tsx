'use client';

export default function AnnouncementItem({
  title,
  startDate,
  endDate,
  description,
}: {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors animate-fade-in-up">
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900">{title}</h4>
          <div className="text-xs text-gray-500 text-right">
            <div>{startDate}</div>
            <div>{endDate}</div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
