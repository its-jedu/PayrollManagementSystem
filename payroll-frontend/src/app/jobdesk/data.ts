// app/jobdesk/data.ts
export const mockUser = {
  name: "Admin & HRM",
  department: "Human Resources",
  salary: 40000,
  workShift: "Regular",
  joiningDate: "12 February 2023",
  contact: {
    email: "useremail@gmail.com",
    phone: "+234 800 000 0000",
    website: "https://userwebsite.example",
  },
};

export type AllowanceRow = {
  id: string;
  type: string;
  paid: "Paid" | "Unpaid";
  allowanceHours: string; // e.g. "07.00"
  earned: number;
  taken: number;
  availability: number;
};

export const mockAllowances: AllowanceRow[] = [
  {
    id: "a1",
    type: "Paid Casual",
    paid: "Paid",
    allowanceHours: "07.00",
    earned: 21000,
    taken: 3,
    availability: 5,
  },
  {
    id: "a2",
    type: "Paid Sick",
    paid: "Paid",
    allowanceHours: "05.00",
    earned: 15000,
    taken: 1,
    availability: 4,
  },
  {
    id: "a3",
    type: "Unpaid Casual",
    paid: "Unpaid",
    allowanceHours: "00.00",
    earned: 0,
    taken: 0,
    availability: 10,
  },
  {
    id: "a4",
    type: "Unpaid Sick",
    paid: "Unpaid",
    allowanceHours: "00.00",
    earned: 0,
    taken: 0,
    availability: 8,
  },
];
