
export const CardTelefone = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://firebasestorage.googleapis.com/v0/b/mauriciodallonder-64688.appspot.com/o/telefone.jpeg?alt=media&token=73e2384f-063a-49e3-85f3-71405d5dee53"
        alt=""
      />
      <div className="flex flex-col justify-center items-center p-6">
        <div className="flex flex-col items-center ">
          <p className="mb-4 text-center text-neutral-600 dark:text-neutral-200">
            Telefone:
          </p>
          <p className="mb-4 text-center text-neutral-600 dark:text-neutral-200">
            +55(54)99254333
          </p>
        </div>
      </div>
    </div>
  );
};

export const CardEmail = () => {
    return (
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://firebasestorage.googleapis.com/v0/b/mauriciodallonder-64688.appspot.com/o/email.jpeg?alt=media&token=7ce11eef-59a2-4602-81ba-2e9dcc9c170f"
          alt=""
        />
        <div className="flex flex-col justify-center items-center p-6">
          <div className="flex flex-col items-center ">
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              E-mail:
            </p>
            <p className="mb-4 text-center text-neutral-600 dark:text-neutral-200">
              londer11@icloud.com
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const CardEndereço = () => {
    return (
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://firebasestorage.googleapis.com/v0/b/mauriciodallonder-64688.appspot.com/o/google.png?alt=media&token=c312632d-8c7c-434e-94d1-cb165459538d"
          alt=""
        />
        <div className="flex flex-col justify-center items-center p-6">
          <div className="flex flex-col items-center ">
            <p className="mb-4 text-center text-neutral-600 dark:text-neutral-200">
              Endereço:
            </p>
            <p className=" text-center text-neutral-600 dark:text-neutral-200">
            Av.cabo Machado Severo,810 
            </p>
            <p className=" text-center text-neutral-600 dark:text-neutral-200">
           Caxias do Sul - Brasil
            </p>
          </div>
        </div>
      </div>
    );
  };
