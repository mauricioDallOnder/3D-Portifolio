import React, { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { CardEmail, CardEndereço, CardTelefone} from "./Cards";
import emailjs from 'emailjs-com';
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
      setLoading(true);

  

    if (form.current) {
      emailjs
        .sendForm(
          'service_yhc15p5',
          'template_fphlyey',
          form.current,
          '-Mi9drqX2pjrPAuEa'
        )
        .then(
          (result) => {
            alert('mesagem enviada com sucesso!obrigado')
          },
          (error) => {
            alert('erro')
          }
        );
    }
  };





  return (
    <>
   <div className={`xl:mt-12 flex xl:flex-row items-center flex-col-reverse gap-10 overflow-hidden justify-center`}>
    <div 
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <h3 className={styles.sectionHeadText}>Contato:</h3>
        <p className={styles.sectionSubText}>Seguem abaixo as informações de contato.</p>
    </div>
</div>
    <br/>
    <div className="xl:mt-12 flex flex-col xl:flex-row gap-10 overflow-hidden w-full mx-auto max-w-[900px]">
      <div
        
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <div>
          <p className="font-poppins  font-bold text-[24px] leading-[34px] text-white">
            Entre em Contato
          </p>
          <br />
          <p className="font-poppins font-bold text-[17px] leading-[24px] text-white">
            Siga-me nas redes sociais ou preencha o formulário ao lado para
            entrar em contato.
          </p>

          <br />

          <div className="flex flex-col justify-around gap-5">
          <CardTelefone/>
          <CardEndereço/>
           <CardEmail/>
           
           
          </div>
        </div>
      </div>

      <motion.div
        className="flex-1"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <form className="bg-black-100 p-8 rounded-2xl flex flex-col gap-8" ref={form} onSubmit={sendEmail}>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nome</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Digite o seu nome"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">E-mail</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Digite seu e-mail"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sua Mensagem</span>
            <textarea
              rows={7}
              name="message"
              required
              placeholder="Digite sua mensagem"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="flex flex-row justify-center items-center p-2 gap-2 w-40 h-10 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-700 shadow-lg rounded-md"
          >
             {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
