import { UserClient } from "@/components/table/client";

import { users } from "@/constants/data";

const List = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <UserClient data={users} />
      </div>
    </>
  );
};

export default List;
