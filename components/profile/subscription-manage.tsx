import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export const SubscriptionManage = () => {
  return (
    <>
      <div className="mb-4">
        <h2 className="mb-1">Manage your Subscriptions</h2>
        <p className="text-muted-foreground text-sm">
          You can manage your subscriptions here. You can cancel your
          subscription at any time.
        </p>
      </div>

      <Card>
        <CardContent className="flex md:flex-row flex-col md:items-center justify-between mt-5">
          <CardTitle className="text-xl">Current Subscription</CardTitle>
          <div>
            <CardDescription className="text-lg md:text-xl">
              Pro Plan (8$ / month)
            </CardDescription>
            <CardDescription>
              Your currently subscribed to the Pro Plan.
            </CardDescription>
          </div>
        </CardContent>
      </Card>
      <div className="flex md:flex-row flex-col  justify-between mt-5">
        <p className="text-sm text-muted-foreground">
          You can {""}
          <Link href="#" className="underline text-sm text-muted-foreground">
            cancel
          </Link>{" "}
          {""}
          your subscription at any time.
        </p>
        <p className="text-sm text-muted-foreground">
          You can also {""}
          <Link
            href="/plans"
            className="underline text-sm text-muted-foreground"
          >
            Upgrade Plan
          </Link>
          (Click Here)
        </p>
      </div>
    </>
  );
};
