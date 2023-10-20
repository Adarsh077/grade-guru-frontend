import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CardItem = () => {
  return (
    <Card className="hover:bg-gray-50 cursor-pointer">
      <CardHeader></CardHeader>
      <CardContent>
        <Avatar className="h-28 w-28 mx-auto">
          <AvatarFallback className="text-4xl">CE</AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter>
        <p className="text-center font-medium text-xl w-full">
          Computer Engineering
        </p>
      </CardFooter>
    </Card>
  );
};
export default CardItem;
