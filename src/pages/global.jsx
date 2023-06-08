import { Avatar, Typography} from "@material-tailwind/react";
import { Card, Title, LineChart } from "@tremor/react";
import { Footer } from "@/widgets/layout";

export function GlobalData() {

  const chartdata = [
    {
      year: 2001,
      "População": 3.10,
      "Alteração Anual": 0.20
    },
    {
      year: 2002,
      "População": 3.30,
      "Alteração Anual": 0.20
    },
    {
      year: 2003,
      "População": 3.00,
      "Alteração Anual": -0.30
  },
  {
    year: 2004,
    "População": 2.90,
    "Alteração Anual": -0.10
},
{
  year: 2005,
  "População": 2.30,
  "Alteração Anual": -0.60
},
{
  year: 2006,
  "População": 1.50,
  "Alteração Anual": -0.80
},
{
  year: 2007,
  "População": 0.50,
  "Alteração Anual": -1.00
},
{
  year: 2008,
  "População": 0.00,
  "Alteração Anual": -0.50
},
{
  year: 2009,
  "População": 9.80,
  "Alteração Anual": -0.20
},
{
  year: 2010,
  "População": 8.60,
  "Alteração Anual": -1.20
},
{
  year: 2011,
  "População": 8.30,
  "Alteração Anual": -0.30
},
{
  year: 2012,
  "População": 8.20,
  "Alteração Anual": -0.10
},
{
  year: 2013,
  "População": 7.90,
  "Alteração Anual": -0.30
},
{
  year: 2014,
  "População": 7.80,
  "Alteração Anual": -0.10
},
{
  year: 2015,
  "População": 8.00,
  "Alteração Anual": 0.20
},
{
  year: 2016,
  "População": 7.80,
  "Alteração Anual": -0.20
},
{
  year: 2017,
  "População": 7.60,
  "Alteração Anual": -0.20
},
{
  year: 2018,
  "População": 7.70,
  "Alteração Anual": 0.10
},
{
  year: 2019,
  "População": 8.00,
  "Alteração Anual": 0.30
},
{
  year: 2020,
  "População": 9.30,
  "Alteração Anual": 1.30
},
  ];

  const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString() + "%";
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background_about.png')] bg-cover bg-center" />
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
                        src="/img/earth-data.png"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <iframe src='https://www.theworldcounts.com/embeds/counters/101?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14' height={100} width={300}></iframe>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <iframe src='https://www.theworldcounts.com/embeds/counters/2?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14' height={100} width={300}></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Dados Globais
                </Typography>
              </div>

              <div className="mb-10 py-6 text-center">

                <Typography>
                A população abaixo do nível mínimo de consumo de energia dietética (também conhecida como prevalência de desnutrição) mostra a porcentagem da população cuja ingestão de alimentos é insuficiente para atender continuamente às necessidades de energia dietética. Dados exibidos como 5 podem significar uma prevalência de desnutrição abaixo de 5%.
                <br />
                As estatísticas de fome no mundo para 2020 foram de 9,30%, um aumento de 1,3% em relação a 2019.
                <br />
                As estatísticas de fome no mundo para 2019 foram de 8,00%, um aumento de 0,3% em relação a 2018.
                <br />
                As estatísticas de fome no mundo para 2018 foram de 7,70%, um aumento de 0,1% em relação a 2017.
                <br />
                As estatísticas de fome no mundo em 2017 foram de 7,60%, uma queda de 0,2% em relação a 2016.
                </Typography>

                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4">
                  <Card>
                    <Title>População abaixo do nível mínimo de consumo de energia alimentar</Title>
                    <LineChart
                      className="mt-6"
                      data={chartdata}
                      index="year"
                      categories={["População", "Alteração Anual"]}
                      colors={["emerald", "gray"]}
                      yAxisWidth={40}
                      valueFormatter={dataFormatter}
                      height="h-80"
                    />
                  </Card>
                  </div>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4">
                  Mapa da Fome
                </Typography>
                <iframe src="https://hungermap.wfp.org/" className="w-full" height={600}></iframe>
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

export default GlobalData;
