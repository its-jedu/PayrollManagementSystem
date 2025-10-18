interface AnnouncementItemProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function AnnouncementItem({ title, startDate, endDate, description }: AnnouncementItemProps) {
  return (
    <tr>
      <td className="border-b px-4 py-2">{title}</td>
      <td className="border-b px-4 py-2">{startDate}</td>
      <td className="border-b px-4 py-2">{endDate}</td>
      <td className="border-b px-4 py-2">{description}</td>
    </tr>
  );
}
