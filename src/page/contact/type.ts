import { UserObj } from '@/components/util/usertype';

export interface ListProps {
  userObj: UserObj | null;
  opponent?: Array<UserObj>;
  isLoading?: boolean;
}
