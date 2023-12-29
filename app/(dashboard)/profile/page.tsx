import { ProfileForm } from "@/components/profile/profile-form";
import { SubscriptionManage } from "@/components/profile/subscription-manage";
import ThirdPartyAccounts from "@/components/profile/third-party-accounts";
import { UsageStat } from "@/components/profile/usage-state";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";
import React from "react";

const UserProfile = () => {
  return (
    <div className="flex-1 px-4 md:p-8 md:pt-6 z-1 relative">
      {/* <Separator /> */}
      <div className="pt-5 md:pt-10">
        <div className="space-y-0.5">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-x-2">
            <Settings className="w-5 h-5" /> Settings & Privacy
          </h2>
          <p className="text-muted-foreground">
            Manage your account settings and privacy options.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col  lg:gap-x-10 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="lg:max-w-2xl ">
            <div className="space-y-6 ">
              <ProfileForm />
            </div>
          </div>
          <div className="border-r" />
          <div>
            <ThirdPartyAccounts />
            <Separator className="my-6" />
            <SubscriptionManage />
            <Separator className="mt-5" />
          </div>
        </div>
      </div>
      <Separator className="mt-10" />
      <UsageStat />
    </div>
  );
};

export default UserProfile;
