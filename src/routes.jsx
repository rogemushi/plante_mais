import { Home, About, GlobalData } from "@/pages";
import {
  ChartPieIcon,
  GlobeEuropeAfricaIcon,
  StarIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: StarIcon,
    name: "Nossa solução",
    path: "/",
    element: <Home />,
  },
  {
    icon: GlobeEuropeAfricaIcon,
    name: "A Fome",
    path: "/about",
    element: <About />,
  },
  {
    icon: ChartPieIcon,
    name: "Dados globais",
    path: "/data",
    element: <GlobalData />,
  }
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
