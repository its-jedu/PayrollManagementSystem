'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StatCard({
  title,
  value,
  subtitle,
  extra,
}: {
  title: string;
  value: string;
  subtitle: string;
  extra: string;
}) {
  return (
    <Card className="bg-white shadow-lg rounded-lg p-4 animate-fade-in-up">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <span>{subtitle}</span>
          <span>{extra}</span>
        </div>
      </CardContent>
    </Card>
  );
}
