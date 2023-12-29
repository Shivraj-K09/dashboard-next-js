"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { User } from "@/constants/data";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface ProductsClientProps {
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex md:flex-row sm:flex-col items-start justify-between">
        <Heading
          title="Graph List"
          description="Manage your graphs here update delete and more."
        />
        <Button
          className="text-xs md:text-sm text-white md:mt-0 sm:mt-[20px] bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400"
          onClick={() => router.push(`/create`)}
        >
          <Plus className="mr-2 h-4 w-4 " /> Create New Graph
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
