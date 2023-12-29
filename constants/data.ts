import { NavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  desc: string;
  date: string;
  verified: boolean;
  check?: string | boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Sales Performance",
    desc: "Graph depicting monthly sales performance",
    date: "2023-01-01",
    check: "Check Graph",
    verified: true,
    status: "Active",
  },
  {
    id: 2,
    name: "Customer Engagement",
    desc: "Graph illustrating customer engagement trends",
    date: "2023-01-02",
    check: "Check Graph",
    verified: false,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Financial Metrics",
    desc: "Graph displaying key financial metrics over time",
    date: "2023-01-03",
    check: "Check Graph",
    verified: true,
    status: "Pending",
  },
  {
    id: 4,
    name: "Website Traffic",
    desc: "Graph showing website traffic and page views",
    date: "2023-01-04",
    check: "Check Graph",
    verified: true,
    status: "Active",
  },
  {
    id: 5,
    name: "Productivity Trends",
    desc: "Graph indicating changes in team productivity",
    date: "2023-01-05",
    check: "Check Graph",
    verified: false,
    status: "Inactive",
  },
  {
    id: 6,
    name: "Inventory Levels",
    desc: "Graph tracking inventory levels and stock movements",
    date: "2023-01-06",
    check: "Check Graph",
    verified: true,
    status: "Active",
  },
  {
    id: 7,
    name: "Social Media Reach",
    desc: "Graph measuring social media reach and engagement",
    date: "2023-01-07",
    check: "Check Graph",
    verified: false,
    status: "Pending",
  },
  {
    id: 8,
    name: "Project Milestones",
    desc: "Graph depicting progress on project milestones",
    date: "2023-01-08",
    check: "Check Graph",
    verified: true,
    status: "Active",
  },
  {
    id: 9,
    name: "Employee Satisfaction",
    desc: "Graph reflecting employee satisfaction survey results",
    date: "2023-01-09",
    check: "Check Graph",
    verified: false,
    status: "Inactive",
  },
  {
    id: 10,
    name: "Market Trends",
    desc: "Graph illustrating current market trends and insights",
    date: "2023-01-10",
    check: "Check Graph",
    verified: true,
    status: "Pending",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Create Graph",
    href: "/create",
    icon: "lineChart",
    label: "graph",
  },
  {
    title: "Graph List",
    href: "/list",
    icon: "listOrdered",
    label: "Graph List",
  },
  {
    title: "Profile",
    href: "/profile",
    icon: "profile",
    label: "profile",
  },
];
