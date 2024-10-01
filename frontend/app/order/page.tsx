import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import Image from "next/image";
import { OrderForm } from "./order-form";

export default function Order() {
  return (
    <main className="flex flex-col">
      <section className="w-full mx-auto bg-gradient-to-b from-[#FF1F70] from-0% via-[#FF3D9A] via-51% to-[#FFC6AD] to-83%">
        <Card className="relative bg-transparent border-none border-r-0 h-[414px] w-full overflow-hidden rounded-none">
          <Image
            className="absolute"
            alt="ОПИСАНИЕ"
            fill={true}
            style={{
              objectFit: "cover",
            }}
            src="images/hero-bg-clouds.svg"
          />
          <Image
            className="absolute"
            alt="ОПИСАНИЕ"
            fill={true}
            style={{
              objectFit: "cover",
            }}
            src="images/hero-bg-1.svg"
          />
          <CardHeader className="mx-8 p-0 mt-8 mb-9 space-y-0">
            <CardTitle className="text-2xl font-extrabold text-white leading-7 uppercase">
              Оставьте заявку
            </CardTitle>
            <CardDescription className="text-xl font-normal text-white">
              и мы с вами свяжемся
            </CardDescription>
          </CardHeader>
          <CardFooter className="absolute bottom-20 left-0 p-0 mx-8">
            <Logo className="" />
          </CardFooter>
        </Card>
      </section>
      <section className="w-full min-h-44 bg-[#EEF6FF] rounded-t-3xl -mt-16 px-0 py-7 z-0 ">
        <OrderForm />
      </section>
    </main>
  );
}
