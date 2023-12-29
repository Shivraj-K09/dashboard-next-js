import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const invoices = [
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
];

export function Favourite() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Graph Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.date}</TableCell>

            <TableCell className="text-right">
              <Link href="/create">{invoice.check}</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>
        View in{" "}
        <Link href="/list" className="underline">
          detail here
        </Link>
      </TableCaption>
    </Table>
  );
}
