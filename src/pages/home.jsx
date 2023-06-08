import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, StepCard } from "@/widgets/cards";
import { featuresData, stepsData, partnershipData } from "@/data";
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";

export function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
      alert("Sua mensagem foi enviada!");
      console.log(data)
  }

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-home2.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                PLANTE+
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Encontrando caminhos para uma produção eficiente de alimentos saudáveis.
              </Typography>
              
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <video className="rounded-lg mt-4" height={100} controls>
                  <source src="/video/plante_mais_intro.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ title, icon, description }) => (
              <FeatureCard
                key={title}
                color="light-green"
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Nosso compromisso é com a fome!
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Fazendas localizadas em regiões menos privilegiadas, para que possamos gerar empregos e incentivar a economia local.
                <br />
                <br />
                Desta forma, nosso objetivo é contribuir com a ODS 2.
              </Typography>
              <Button variant="outlined" color="light-green"><Link to="https://brasil.un.org/pt-br/sdgs/2" target="_blank">saiba mais</Link></Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Plante+ veio para ajudar!
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Temos processos abertos! 
                    <br />
                    Entregamos treinamento e seleções para efetivação de vagas em regiões de baixo acesso à educação.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Nossa Proposta">
            Nosso framework de fazendas inteligentes que utilizam as melhores práticas de plantio. Utilizando tecnologias como IoT, Ciência de Dados e modelos de linguagem gerativas conseguimos entregar qualidade e eficiência para sua mesa.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {stepsData.map(({ img, name, description }) => (
              <StepCard
                key={name}
                img={img}
                name={name}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Seja um Franqueado da Plante+">
          Inovação, sucesso e oportunidades na agricultura estão ao seu alcance! Como franqueado, você terá acesso a um modelo de negócios comprovado, respaldado por nossa experiência e expertise na vanguarda das soluções agrícolas. Com produtos e serviços inovadores, práticas sustentáveis e suporte abrangente, junte-se à Plante+ para fazer parte de uma marca reconhecida e respeitada, impulsionando o crescimento sustentável da agricultura e colhendo os frutos do sucesso na agricultura do futuro!
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {partnershipData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Gostaria de saber mais sobre nossa solução?">
            Entre em contato conosco
          </PageTitle>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Nome" 
              {...register('name', {
                  required: 'Este campo é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'Nome deve conter 3 caracteres ou mais',
                  },
                })} 
                {...(errors.name ? {error: true} : {error: false})}
              />
            </div>
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Email" 
              {...register('email', {
                  required: 'Este campo é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Endereço de email inválido',
                  },
              })}
              {...(errors.email ? {error: true} : {error: false})}
              />
            </div>
            <Textarea variant="standard" size="lg" label="Mensagem" rows={8} 
            {...register('message', {
                required: 'Este campo é obrigatório',
                minLength: {
                  value: 3,
                  message: 'Nome deve conter 3 caracteres ou mais',
                },
            })}
            {...(errors.message ? {error: true} : {error: false})}
            />
            <Button variant="gradient" size="lg" className="mt-8" color="light-green" onClick={handleSubmit(onSubmit)}>Enviar</Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
