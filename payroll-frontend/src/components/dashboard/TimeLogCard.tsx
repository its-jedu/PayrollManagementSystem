import React from "react";
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Progress } from "@/components/ui";

interface TodayLogProps {
  scheduled: string;
  balance: string;
  worked: string;
}

interface MonthLogProps {
  total: number;
  worked: number;
  shortage: number;
  overtime: number;
}

export function TodayLogCard({ scheduled, balance, worked }: TodayLogProps) {
  return (
    <Card className="shadow-md rounded-xl hover:shadow-lg transition">
      <CardHeader className="flex items-center gap-2">
        <Clock size={20} className="text-info-main" />
        <CardTitle>Today</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-neutral-100">
        <div className="flex justify-between"><span>Scheduled</span><span>{scheduled}</span></div>
        <div className="flex justify-between"><span>Balance</span><span>{balance}</span></div>
        <div className="flex justify-between"><span>Worked</span><span>{worked}</span></div>
      </CardContent>
    </Card>
  );
}

export function MonthLogCard({ total, worked, shortage, overtime }: MonthLogProps) {
  return (
    <Card className="shadow-md rounded-xl hover:shadow-lg transition">
      <CardHeader className="flex items-center gap-2">
        <Calendar size={20} className="text-success-main" />
        <CardTitle>This Month</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-neutral-100">
        <div>
          <div className="flex justify-between mb-1"><span>Total</span><span>{total}h</span></div>
          <Progress value={(worked / total) * 100} className="h-2 rounded bg-neutral-40" />
        </div>
        <div>
          <div className="flex justify-between mb-1"><span>Worked Time</span><span>{worked}h</span></div>
          <Progress value={(worked / total) * 100} className="h-2 rounded bg-info-main" />
        </div>
        <div>
          <div className="flex justify-between mb-1"><span>Shortage Time</span><span>{shortage}h</span></div>
          <Progress value={(shortage / total) * 100} className="h-2 rounded bg-danger-surface" />
        </div>
        <div>
          <div className="flex justify-between mb-1"><span>Overtime</span><span>{overtime}h</span></div>
          <Progress value={(overtime / total) * 100} className="h-2 rounded bg-success-surface" />
        </div>
      </CardContent>
    </Card>
  );
}
