import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Favourite } from "@/components/favourite";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-plans";
import { TwitterX } from "@/components/twitterx";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Eye,
  Facebook,
  Heart,
  Instagram,
  LineChart,
  PlusIcon,
  ScrollText,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 my-[30px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 mb-2">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Hello, JK Welcome to Dashboard 👋
            </h2>
            <p className="text-muted-foreground">
              Your Current subscription plan is:{" "}
              <span className="underline">Pro Plan</span>
            </p>
            <CalendarDateRangePicker />
          </div>
          <div className="hidden gap-y-2 md:gap-0 flex-col md:flex-row md:flex md:items-center space-x-2">
            {/* <CalendarDateRangePicker /> */}
            <Button
              asChild
              className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400"
            >
              <Link href="/create" className="flex items-center gap-x-2">
                <PlusIcon className="w-4 h-4" /> Create Graph
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400"
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share Graph
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TwitterX className="w-4 h-4 mr-2" />
                  TwitterX
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Input
              type="file"
              className="md:w-52 w-full text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400"
            />
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Graphs Created
                  </CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+220</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Graphs Shared
                  </CardTitle>
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+100</div>
                  <p className="text-xs text-muted-foreground">
                    +90% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Papers Collected
                  </CardTitle>
                  <ScrollText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+124</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Graphs Viewed
                  </CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+100</div>
                  <p className="text-xs text-muted-foreground">
                    +20 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Information</CardTitle>
                  <CardDescription>
                    Below are the recent information for the graphs created,
                    viewed, etc.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center ">
                    <Heart className="h-5 w-5 mr-2" />
                    Favourite Collections
                  </CardTitle>
                  <CardDescription>
                    Below are your favourite collections.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Favourite />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <Card className="col-span-12">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview barFillColor="#adfa1d" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
