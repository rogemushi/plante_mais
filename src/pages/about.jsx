import { 
  Avatar, 
  Typography, 
  Button, 
  Accordion,
  AccordionHeader,
  AccordionBody, Card, CardHeader } from "@material-tailwind/react";
import { useState } from 'react';
import { hungryProblemsData, possibleSolutionsData } from "@/data";
import { Footer } from "@/widgets/layout";

export function About() {

  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const handleAlwaysOpen = () => {
    setOpen((cur) => !cur);
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/world_hunger.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/world_food.png"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  A fome e suas consequências
                </Typography>
              </div>

              <div className="mb-10 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Accordion open={alwaysOpen}>
                      <AccordionHeader onClick={handleAlwaysOpen}>
                        O problema
                      </AccordionHeader>
                      <AccordionBody>
                        <Typography>
                          A fome global é um dos problemas mais urgentes e complexos enfrentados pela humanidade atualmente. Caracterizada pela escassez generalizada de alimentos que afeta uma grande proporção da população mundial, a fome representa uma ameaça à vida e ao bem-estar de milhões de indivíduos em diversas regiões do planeta. Este texto visa fornecer uma descrição abrangente deste desafiador problema, destacando suas causas, impactos e possíveis soluções.
                        </Typography>
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 1}>
                      <AccordionHeader onClick={() => handleOpen(1)}>
                        Causas da fome global
                      </AccordionHeader>
                      <AccordionBody>
                      <Typography>A fome global resulta de uma combinação complexa de fatores interligados. Entre as principais causas, destacam-se:</Typography>

                      <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {hungryProblemsData.map(({ title, description }) => (
                          <Card color="transparent" shadow={false} className="text-center">
                          <CardHeader className="relative" shadow={false}>
                            <Typography variant="h5" color="blue-gray" className="mb-1">
                              {title}
                            </Typography>
                          </CardHeader>
                          <Typography variant="justify">
                            {description}
                          </Typography>
                        </Card>
                        ))}
                      </div>

                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                      <AccordionHeader onClick={() => handleOpen(2)}>
                        Impactos da fome global
                      </AccordionHeader>
                      <AccordionBody>
                        <Typography>A fome global tem consequências devastadoras em múltiplos aspectos, afetando tanto indivíduos quanto sociedades como um todo. Alguns impactos significativos incluem:</Typography>

                        <Typography><b>Desnutrição</b>: A fome prolongada resulta em desnutrição, afetando o desenvolvimento físico e cognitivo, especialmente em crianças, comprometendo seu potencial futuro.</Typography>
                        <Typography><b>Instabilidade social e política</b>: A escassez de alimentos pode desencadear conflitos sociais, deslocamentos em massa e instabilidade política, gerando um ciclo vicioso de pobreza e fome.</Typography>
                        <Typography><b>Saúde debilitada</b>: A fome enfraquece o sistema imunológico, aumentando a suscetibilidade a doenças infecciosas e contribuindo para altas taxas de morbidade e mortalidade.</Typography>
                        <Typography><b>Desenvolvimento econômico prejudicado</b>: A fome limita o desenvolvimento econômico, pois indivíduos subnutridos enfrentam dificuldades para trabalhar e contribuir para a sociedade, perpetuando a pobreza.</Typography>
                      </AccordionBody>
                    </Accordion>
                  </div>
                </div>
              </div>

              <div className="my-8 mt-4 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Possíveis soluções
                </Typography>
                <Typography>
                  Enfrentar a fome global requer um esforço concertado de governos, organizações internacionais, sociedade civil e setor privado. Algumas soluções possíveis incluem:
                </Typography>

                <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                  {possibleSolutionsData.map(({ title, description }) => (
                    <Card color="transparent" shadow={false} className="text-center">
                    <CardHeader className="relative" shadow={false}>
                      <Typography variant="h5" color="blue-gray" className="mb-1">
                        {title}
                      </Typography>
                    </CardHeader>
                    <Typography variant="justify">
                      {description}
                    </Typography>
                  </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default About;
