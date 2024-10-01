import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { CardMainService, TypeCardMainService } from "./card-main-service";

const mainServices: TypeCardMainService[] = [
  {
    id: "internet",
    title: "Интернет",
    description: "от 500 р/мес",
    icon: {
      alt: "Интернет",
      src: "/images/icons/internet.svg",
    },
    url: "/",
  },
  {
    id: "television",
    title: "Телевидение",
    description: "от 600 р/мес",
    icon: {
      alt: "Телевидение",
      src: "/images/icons/television.svg",
    },
    url: "/",
  },
  {
    id: "devices",
    title: "Устройства",
    description: "от 700 р/мес",
    icon: {
      alt: "Устройства",
      src: "/images/icons/devices.svg",
    },
    url: "/",
  },
];

export function MainServices() {
  return (
    // <Tabs defaultValue="internet">
    <div className="flex min-h-[263px] sm:min-h-[194px] lg:min-h-[134px] bg-[#EEF6FF] lg:mt-3 lg:mb-3 -mx-5 lg:-mx-9 pt-0 col-start-1 col-end-13 z-0">
      <ScrollArea className="w-auto whitespace-nowrap">
        <ul className="w-fit flex gap-4 py-6 lg:py-2">
          {mainServices.map((card) => (
            <li
              className="first-of-type:ml-4 last-of-type:mr-4 lg:first-of-type:ml-9 lg:last-of-type:mr-9"
              key={card.id}
            >
              <CardMainService card={card} />
            </li>
          ))}
        </ul>

        {/* This part if tabs will be needed */}
        {/* <TabsList className="flex justify-start h-fit rounded-lg bg-transparent pb-8 pt-6">
          {tariffsData.map((card) => (
            <TabsTrigger
              key={card.id}
              value={card.id}
              className="first-of-type:ml-4 mr-4 w-fit h-fit data-[state=active]:shadow-[0px_5px_36px_0px_rgba(0,0,0,0.001)] shadow-[0px_5px_36px_0px_rgba(0,0,0,0.1)] transition-all rounded-lg"
            >
              <Card className="flex flex-col m-0 p-4 bg-gradient-to-br from-[#FFFFFF] from-0% to-[#EEF6FF] border-none  min-w-[180px] h-[186px]">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-sm font-bold text-[#1B2124]">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    key={card.icon.src}
                    className="p-0 mb-4"
                    alt={card.icon.alt}
                    width={65}
                    height={65}
                    src={card.icon.src}
                  />
                </CardContent>
                <CardFooter className="p-0">
                  <p className="cursor-default text-lg font-light text-[#9D9D9D]">
                    {card.description}
                  </p>
                </CardFooter>
              </Card>
            </TabsTrigger>
          ))}
        </TabsList> */}
        <ScrollBar className="hidden" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
  {
    /* This part if tabs will be needed */
  }
  {
    /* <TabsContent value="internet">
        <InternetTariffs />
      </TabsContent>
      <TabsContent value="television">
        <TelevisionTariffs />
      </TabsContent>
      <TabsContent value="devices">
        <Devices />
      </TabsContent> */
  }
  {
    /* </Tabs> */
  }
}
