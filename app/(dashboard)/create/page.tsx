"use client";
import { Overview } from "@/components/overview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Create = () => {
  const [showGraphPreview, setShowGraphPreview] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#adfa1d"); // default color

  const handlePreviewClick = () => {
    // Toggle the state to show/hide the graph preview
    setShowGraphPreview(!showGraphPreview);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 ">
      <div className="flex flex-col gap-y-2 ">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">
            Create the Graph
          </h2>
          <p className="text-muted-foreground">
            Please fill out the below form to create a new graph.
          </p>
        </div>
        <Separator className="my-6" />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <CardTitle>Graph Information</CardTitle>
            <CardDescription>
              Below are the information for the graph you are creating.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="graph-title" className="mb-2">
                  Graph Title
                </Label>
                <Input id="graph-title" type="text" placeholder="Graph title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="graph-desc">Graph Description</Label>
                <Textarea
                  id="graph-desc"
                  rows={1}
                  placeholder="Graph Description"
                  className="resize-none overflow-hidden"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="graph-desc" className="mb-2">
                Upload Files
              </Label>
              <Input id="graph-desc" type="file" />
            </div>

            <p className="text-sm text-muted-foreground">Graph Settings</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="graph-title" className="mb-2">
                  Graph Layout
                </Label>
                <Select defaultValue="bar_chart">
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bar_chart">Bar Chart</SelectItem>
                    <SelectItem value="line_graph">Line graph</SelectItem>
                    <SelectItem value="pie_chart">Pie chart</SelectItem>
                    <SelectItem value="scatter_plot">Scatter plot</SelectItem>
                    <SelectItem value="flow_chart">Flow chart</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="graph-color" className="mb-2">
                  Graph Colors
                </Label>
                <Select
                  defaultValue="#adfa1d"
                  onValueChange={(value: string) => handleColorChange(value)}
                >
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#adfa1d" className="flex items-center">
                      <span className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2 bg-[#adfa1d]" />
                        Green
                      </span>
                    </SelectItem>

                    <SelectItem value="purple">
                      <span className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2 bg-purple-500" />
                        Purple
                      </span>
                    </SelectItem>

                    <SelectItem value="red">
                      <span className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2 bg-red-500" />
                        Red
                      </span>
                    </SelectItem>

                    <SelectItem value="#0ea5e9 ">
                      <span className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2 bg-sky-500" />
                        Sky Blue
                      </span>
                    </SelectItem>

                    <SelectItem value="orange">
                      <span className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2 bg-orange-500" />
                        Orange
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400"
              onClick={handlePreviewClick}
            >
              Preview the Graph
            </Button>
          </CardFooter>
        </Card>

        {!showGraphPreview && (
          <Card className="col-span-4 h-full flex items-center justify-center">
            <CardContent className="pl-2">
              <div className="flex items-center justify-center">
                <p className="text-muted-foreground lg:mt-0 md:mt-5 mt-5">
                  Graph Preview
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview Card */}
        {showGraphPreview && (
          <Card className="col-span-4 ">
            <CardHeader>
              <CardTitle className="mb-10">Preview Graph</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview barFillColor={selectedColor} />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Create;
