import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useAddContactMutation } from "../store/index.service";

const Contact = (props: any) => {
  const { data } = props;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [addContact, addContactResult] = useAddContactMutation();
  const onSubmit = async (data) => {
    await addContact(data);
    console.log("addContactResult", addContactResult);
    reset({
      fistName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    notify();
  };
  const notify = () => {
    toast.success("Bạn đã gửi contact thành công");
  };

  return (
    <>
      <div
        id="contacts"
        className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full"
      >
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img
              className="w-[550px] h-full"
              src="src/assets/images/contact-img.svg"
              alt=""
            />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Contact</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
              <div className="flex gap-4 py-2  ">
                <input
                  className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 "
                  type="text"
                  placeholder="Fist Name"
                  {...register("fistName")}
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                />
              </div>
              <div className="flex gap-4  py-4  ">
                <input
                  className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="phone"
                  placeholder="Phone"
                  {...register("phone")}
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
                {...register("message")}
              ></textarea>
              <button
                type="submit"
                className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
