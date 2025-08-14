"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import InputField from "@/common/components/elements/InputField";

interface FormEmail {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormEmail>();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Envoyer l'email");
  const [isSuccess, setIsSuccess] = useState(false);

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    setButtonText(isLoading ? "Envoi en cours..." : "Envoyer l'email");
    if (!isLoading && isSuccess) setButtonText("Email envoyé avec succès");
    const timeout = setTimeout(() => {
      setButtonText("Envoyer l'email");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isLoading, isSuccess]);

  const handleFormSubmit = async (payload: FormEmail) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/email", payload);
      if (response.status === 200) setIsSuccess(true);
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2>Formulaire de Contact</h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-4 transition-all duration-300"
      >
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <InputField
            name="name"
            rule={{ required: true }}
            register={register}
            error={errors}
          />
          <InputField
            name="email"
            rule={{
              required: true,
              pattern: {
                value: regexEmail,
                message: "Veuillez entrer un email valide",
              },
            }}
            register={register}
            error={errors}
          />
        </div>
        <InputField
          name="message"
          rule={{ required: true }}
          register={register}
          error={errors}
          isTextArea
        />
        <button
          disabled={isLoading}
          type="submit"
          className="w-full rounded-lg bg-neutral-600 px-4 py-2 text-neutral-50 shadow-md transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg dark:bg-neutral-800 hover:dark:bg-neutral-700"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
