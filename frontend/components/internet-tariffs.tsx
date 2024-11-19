import {
  Card,
  CardContent,
} from "./ui/card";
import Link from "next/link";

type TypeInternetTariff = {
  value: string;
  title: string;
  description: string;
};

const internetTariffs: TypeInternetTariff[] = [
  {
    value: "500",
    title: "500 р/мес",
    description: "до 100 мбит/с",
  },
  {
    value: "550",
    title: "550 р/мес",
    description: "до 100 мбит/с + TV",
  },
  {
    value: "890",
    title: "890 р/мес",
    description: "в частный дом до 100 мбит/с",
  },
  {
    value: "990",
    title: "990 р/мес",
    description: "в частный дом до 100 мбит/с + TV",
  },
];

export function InternetTariffs() {
  return (
    <div className="flex flex-col w-full px-5 gap-5">
      <h2 className="text-2xl font-bold">Интернет</h2>
      {internetTariffs.map((tariff) => (
        <Link key={tariff.description} href="/order">
          <Card className="flex items-center gap-4 p-4 bg-gradient-to-br from-[#FFFFFF] from-0% to-[#EEF6FF]  border-none shadow-[0px_5px_36px_0px_rgba(0,0,0,0.08)] w-full h-[80px]">
            <p className="flex justify-center items-center bg-[#EC008C] rounded-full w-10 h-10 font-semibold text-xs text-white">
              {tariff.value}
            </p>
            <CardContent className="max-w-[70%] p-0">
              <p className="font-semibold">{tariff.title}</p>
              <p className="text-xs">{tariff.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
