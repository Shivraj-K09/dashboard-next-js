import { Github } from "lucide-react";
import { Discord } from "../discord";
import { Google } from "../google";
import { Microsoft } from "../microsoft";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";

const ThirdPartyAccounts = () => {
  return (
    <>
      <Separator className="md:hidden block mt-5" />
      <div className="md:mb-4 my-5 md:my-0">
        <h2 className="mb-1">You can also connect your third-party accounts</h2>
        <p className="text-muted-foreground text-sm">
          Connecting your third-party accounts will allow you to sign in to
          genoshi.io using those accounts.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <RadioGroup>
          <div className="md:w-32">
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Google className="mb-3 h-6 w-6" /> Google
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup>
          <div className="md:w-32">
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Github className="mb-3 h-6 w-6" /> GitHub
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup>
          <div className="md:w-32">
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Microsoft className="mb-3 h-6 w-6" /> Microsoft
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup>
          <div className="md:w-32">
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Discord className="mb-3 h-6 w-6" /> Discord
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* <div className="flex gap-4 mt-4">
        <RadioGroup>
          <div className="w-32">
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Facebook className="mb-3 h-6 w-6" /> Facebook
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup>
          <div className="w-32">
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <TwitterX className="mb-3 h-6 w-6" /> Twitter
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup>
          <div className="w-40">
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <p className="my-2.5 text-center ">More Coming soon.</p>
            </Label>
          </div>
        </RadioGroup>
      </div> */}
    </>
  );
};

export default ThirdPartyAccounts;
