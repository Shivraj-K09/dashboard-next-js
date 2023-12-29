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
];

export function RecentSales() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Graph Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell className="truncate max-w-[150px]">
              {invoice.desc}
            </TableCell>
            <TableCell className="text-right">{invoice.status}</TableCell>
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
